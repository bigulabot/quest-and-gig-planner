const ids = [
  'title', 'format', 'contactRole', 'job', 'pay', 'whyNow',
  'benefits', 'pissed', 'escalates', 'newHook', 'gmNotes'
];

function byId(id) { return document.getElementById(id); }

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeRichText(html) {
  const template = document.createElement('template');
  template.innerHTML = html || '';
  const allowedTags = new Set(['P', 'BR', 'B', 'STRONG', 'I', 'EM', 'U', 'UL', 'LI', 'FONT']);

  [...template.content.querySelectorAll('*')].forEach(node => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      return;
    }

    [...node.attributes].forEach(attr => {
      const isFontSize = node.tagName === 'FONT' && attr.name.toLowerCase() === 'size';
      if (!isFontSize) node.removeAttribute(attr.name);
    });
  });

  return template.innerHTML.trim();
}

function richTextOrFallback(html, fallback = 'No setup yet.') {
  const sanitized = sanitizeRichText(html);
  const plain = sanitized.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return plain ? sanitized : `<span class="empty">${escapeHtml(fallback)}</span>`;
}

function textOrDash(value, fallback = '—') {
  return value && String(value).trim() ? escapeHtml(value) : `<span class="empty">${fallback}</span>`;
}

function addLocation(data = {}) {
  const tpl = byId('locationTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      input.value = data[key] || '';
      input.addEventListener('input', renderPreview);
    }
  });
  tpl.querySelector('.remove-btn').addEventListener('click', () => {
    tpl.remove();
    renderPreview();
  });
  tpl.querySelectorAll('.type-menu').forEach(menuWrap => {
    const toggleButton = menuWrap.querySelector('.type-menu-toggle');
    const menu = menuWrap.querySelector('.type-menu-popup');
    toggleButton.addEventListener('click', event => {
      event.stopPropagation();
      document.querySelectorAll('.type-menu-popup').forEach(otherMenu => {
        if (otherMenu !== menu) otherMenu.hidden = true;
      });
      menu.hidden = !menu.hidden;
    });
  });
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      setComplicationTag(tpl, 'sceneStyle', '.location-style-toggle', option.dataset.type, 'Scene style');
      option.closest('.type-menu-popup').hidden = true;
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'sceneStyle', '.location-style-toggle', data.sceneStyle || '', 'Scene style');
  byId('locations').appendChild(tpl);
  renderPreview();
}

function getSceneStyleMeta(style) {
  const map = {
    'battle-map': {
      symbol: '▦',
      label: 'Battle Map',
    },
    totm: {
      symbol: '☁',
      label: 'TOTM',
    },
    hybrid: {
      symbol: '◫',
      label: 'Hybrid',
    },
  };
  return map[style] || null;
}

function updateComplicationNumbers() {
  return document.querySelectorAll('.complication-card').length;
}

function getComplicationTypeMeta(type) {
  const map = {
    apparent: {
      symbol: '➤',
      label: 'Immediately or eventually apparent',
    },
    hidden: {
      symbol: '🔎',
      label: 'Hidden and discoverable',
    },
    conditional: {
      symbol: '?',
      label: 'Conditional or optional truth',
    },
  };
  return map[type] || null;
}

function getDangerLevelMeta(level) {
  const map = {
    routine: {
      symbol: '○',
      label: 'Routine',
    },
    risky: {
      symbol: '△',
      label: 'Risky',
    },
    dangerous: {
      symbol: '▲',
      label: 'Dangerous',
    },
    deadly: {
      symbol: '☠',
      label: 'Deadly',
    },
  };
  return map[level] || null;
}

function getNpcTypeMeta(type) {
  const map = {
    friendly: {
      symbol: '+',
      label: 'Friendly',
    },
    neutral: {
      symbol: '○',
      label: 'Neutral',
    },
    enemy: {
      symbol: '!',
      label: 'Enemy',
    },
    boss: {
      symbol: '★',
      label: 'Boss',
    },
  };
  return map[type] || null;
}

function setComplicationTag(card, fieldName, buttonSelector, type, placeholder) {
  const hidden = card.querySelector(`[data-field="${fieldName}"]`);
  const button = card.querySelector(buttonSelector);
  const meta = fieldName === 'dangerLevel'
    ? getDangerLevelMeta(type)
    : fieldName === 'sceneStyle'
      ? getSceneStyleMeta(type)
    : fieldName === 'npcType'
      ? getNpcTypeMeta(type)
      : getComplicationTypeMeta(type);

  hidden.value = meta ? type : '';
  button.classList.toggle('is-placeholder', !meta);
  button.textContent = meta ? meta.symbol : placeholder;
  button.title = meta ? meta.label : placeholder;
}

function addComplication(data = {}) {
  const tpl = byId('complicationTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    input.value = data[key] || '';
    input.addEventListener('input', renderPreview);
  });
  tpl.querySelector('.remove-btn').addEventListener('click', () => {
    tpl.remove();
    updateComplicationNumbers();
    renderPreview();
  });
  tpl.querySelectorAll('.type-menu').forEach(menuWrap => {
    const toggle = menuWrap.querySelector('.type-menu-toggle');
    const menu = menuWrap.querySelector('.type-menu-popup');
    toggle.addEventListener('click', event => {
      event.stopPropagation();
      document.querySelectorAll('.type-menu-popup').forEach(otherMenu => {
        if (otherMenu !== menu) otherMenu.hidden = true;
      });
      menu.hidden = !menu.hidden;
    });
  });
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      const fieldName = option.dataset.fieldName;
      if (fieldName === 'dangerLevel') {
        setComplicationTag(tpl, 'dangerLevel', '.complication-danger-toggle', option.dataset.type, 'Choose danger level');
      } else {
        setComplicationTag(tpl, 'revealType', '.complication-type-toggle', option.dataset.type, 'Choose complication type');
      }
      option.closest('.type-menu-popup').hidden = true;
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'revealType', '.complication-type-toggle', data.revealType || '', 'Choose complication type');
  setComplicationTag(tpl, 'dangerLevel', '.complication-danger-toggle', data.dangerLevel || '', 'Choose danger level');
  byId('complicationsList').appendChild(tpl);
  updateComplicationNumbers();
  renderPreview();
}

function addNpc(data = {}) {
  const tpl = byId('npcTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      input.value = data[key] || '';
      input.addEventListener('input', renderPreview);
    }
  });

  const toggle = tpl.querySelector('[data-toggle="advanced"]');
  const advanced = tpl.querySelector('.npc-advanced');
  const hasAdvanced = Boolean((data.secret && data.secret.trim()) || (data.incongruency && data.incongruency.trim()));
  toggle.checked = hasAdvanced;
  advanced.style.display = hasAdvanced ? 'block' : 'none';
  toggle.addEventListener('change', () => {
    advanced.style.display = toggle.checked ? 'block' : 'none';
    renderPreview();
  });

  tpl.querySelector('.remove-btn').addEventListener('click', () => {
    tpl.remove();
    renderPreview();
  });
  tpl.querySelectorAll('.type-menu').forEach(menuWrap => {
    const toggleButton = menuWrap.querySelector('.type-menu-toggle');
    const menu = menuWrap.querySelector('.type-menu-popup');
    toggleButton.addEventListener('click', event => {
      event.stopPropagation();
      document.querySelectorAll('.type-menu-popup').forEach(otherMenu => {
        if (otherMenu !== menu) otherMenu.hidden = true;
      });
      menu.hidden = !menu.hidden;
    });
  });
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      setComplicationTag(tpl, 'npcType', '.npc-type-toggle', option.dataset.type, 'NPC type');
      option.closest('.type-menu-popup').hidden = true;
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'npcType', '.npc-type-toggle', data.npcType || '', 'NPC type');
  byId('npcs').appendChild(tpl);
  renderPreview();
}

function collectRepeating(selector) {
  return [...document.querySelectorAll(selector)].map(card => {
    const obj = {};
    card.querySelectorAll('[data-field]').forEach(field => {
      const advancedWrap = field.closest('.npc-advanced');
      if (advancedWrap) {
        const toggle = card.querySelector('[data-toggle="advanced"]');
        obj[field.dataset.field] = toggle && toggle.checked ? field.value.trim() : '';
      } else {
        obj[field.dataset.field] = field.value.trim();
      }
    });
    return obj;
  }).filter(obj => Object.values(obj).some(Boolean));
}

function gatherData() {
  const data = {};
  ids.forEach(id => {
    const el = byId(id);
    data[id] = el ? el.value.trim() : '';
  });
  data.corePitch = sanitizeRichText(byId('corePitch').innerHTML);
  data.locations = collectRepeating('.location-card');
  data.complications = collectRepeating('.complication-card').filter(item => item.text);
  data.npcs = collectRepeating('.npc-card');
  return data;
}

function renderPreview() {
  return gatherData();
}

function buildPrintList(items, renderItem, emptyText, listId = '') {
  if (!items.length) {
    return `<div class="sheet-list"${listId ? ` id="${listId}"` : ''}><div class="empty">${emptyText}</div></div>`;
  }
  return `<div class="sheet-list"${listId ? ` id="${listId}"` : ''}>${items.map(renderItem).join('')}</div>`;
}

function formatPrintSymbols(symbols) {
  const filtered = symbols.filter(Boolean);
  if (!filtered.length) return '';
  return filtered
    .map(symbol => `<span class="print-tag-symbol">${escapeHtml(symbol)}</span>`)
    .join('<span class="print-tag-separator">|</span>');
}

function buildPrintMarkup(data) {
  const title = escapeHtml(data.title || 'Untitled Side Quest');
  const pitch = richTextOrFallback(data.corePitch);
  const complications = data.complications.length
    ? buildPrintList(
      data.complications,
      item => {
        const typeMeta = getComplicationTypeMeta(item.revealType);
        const dangerMeta = getDangerLevelMeta(item.dangerLevel);
        const tags = formatPrintSymbols([typeMeta?.symbol, dangerMeta?.symbol]);
        return `
          <div class="sheet-item">
            ${tags ? `<div class="sheet-field complication-symbols">${tags}</div>` : ''}
            <div class="sheet-field"${tags ? ' style="margin-top:6px;"' : ''}>${textOrDash(item.text)}</div>
          </div>
        `;
      },
      'No complications yet.',
      'printComplications'
    )
    : '<span class="empty">-</span>';

  const locations = buildPrintList(
    data.locations,
    (loc, index) => {
      const sceneMeta = getSceneStyleMeta(loc.sceneStyle);
      const sceneSymbols = formatPrintSymbols([sceneMeta?.symbol]);
      return `
      <div class="sheet-item">
        <div class="sheet-item-title">${escapeHtml(loc.name || `Location ${index + 1}`)}${sceneSymbols ? ` <span class="inline-print-symbols">${sceneSymbols}</span>` : ''}</div>
        <div class="sheet-field"><strong>What it is</strong>${textOrDash(loc.what)}</div>
        <div class="sheet-field" style="margin-top:6px;"><strong>Why it matters</strong>${textOrDash(loc.why)}</div>
        <div class="sheet-field" style="margin-top:6px;"><strong>Obstacle</strong>${textOrDash(loc.obstacle)}</div>
      </div>
    `;
    },
    'No locations yet.',
    'previewLocations'
  );

  const npcs = buildPrintList(
    data.npcs,
    (npc, index) => {
      const npcTypeMeta = getNpcTypeMeta(npc.npcType);
      const npcSymbol = npcTypeMeta ? `<span class="inline-print-symbols"><span class="print-tag-symbol npc-name-symbol">${escapeHtml(npcTypeMeta.symbol)}</span></span>` : '';
      return `
      <div class="sheet-item">
        <div class="sheet-item-title">${escapeHtml(npc.name || `NPC ${index + 1}`)}${npc.role ? ` <span style="font-weight:400;color:#666;">- ${escapeHtml(npc.role)}</span>${npcSymbol ? ` ${npcSymbol}` : ''}` : npcSymbol ? ` ${npcSymbol}` : ''}</div>
        <div class="sheet-field"><strong>Quirk / Vibe</strong>${textOrDash(npc.vibe)}</div>
        <div class="sheet-field" style="margin-top:6px;"><strong>Wants</strong>${textOrDash(npc.plus)}</div>
        <div class="sheet-field" style="margin-top:6px;"><strong>Doesn't Want</strong>${textOrDash(npc.minus)}</div>
        ${npc.secret ? `<div class="sheet-field" style="margin-top:6px;"><strong>Secret</strong>${textOrDash(npc.secret)}</div>` : ''}
        ${npc.incongruency ? `<div class="sheet-field" style="margin-top:6px;"><strong>Incongruency / contradiction</strong>${textOrDash(npc.incongruency)}</div>` : ''}
      </div>
    `;
    },
    'No NPCs yet.',
    'previewNpcs'
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="${new URL('styles.css', window.location.href).href}" />
</head>
<body class="print-preview-window">
  <article class="print-sheet">
    <div class="print-credit">Created with CPR Gig Planner</div>
    <h1 class="sheet-title">${title}</h1>
    <div class="sheet-subtitle">${pitch}</div>

    <section class="sheet-section">
      <h4>Hook</h4>
      <div class="sheet-grid">
        <div class="sheet-field"><strong>Who contacts them</strong><div>${textOrDash(data.contactRole)}</div></div>
        <div class="sheet-field"><strong>Gig Type</strong><div>${textOrDash(data.format)}</div></div>
        <div class="sheet-field"><strong>What's the job</strong><div>${textOrDash(data.job)}</div></div>
        <div class="sheet-field"><strong>What's the pay</strong><div>${textOrDash(data.pay)}</div></div>
        <div class="sheet-field"><strong>Why now</strong><div>${textOrDash(data.whyNow)}</div></div>
      </div>
    </section>

    <div class="print-columns">
      <div>
        <section class="sheet-section">
          <h4>Locations</h4>
          ${locations}
        </section>

        <section class="sheet-section">
          <h4>Encounters / Complications</h4>
          ${complications}
        </section>
      </div>

      <div>
        <section class="sheet-section">
          <h4>Non-playable Characters</h4>
          ${npcs}
        </section>

        <section class="sheet-section">
          <h4>Developments</h4>
          <div class="sheet-grid">
            <div class="sheet-field"><strong>Who benefits</strong><div>${textOrDash(data.benefits)}</div></div>
            <div class="sheet-field"><strong>Who's pissed</strong><div>${textOrDash(data.pissed)}</div></div>
            <div class="sheet-field"><strong>What escalates</strong><div>${textOrDash(data.escalates)}</div></div>
            <div class="sheet-field"><strong>New hook unlocked</strong><div>${textOrDash(data.newHook)}</div></div>
          </div>
        </section>

        <section class="sheet-section">
          <h4>GM Notes</h4>
          <div>${textOrDash(data.gmNotes)}</div>
        </section>
      </div>
    </div>
  </article>
</body>
</html>`;
}

function printSheet() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.alert('Pop-up blocked. Please allow pop-ups for printing.');
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildPrintMarkup(gatherData()));
  printWindow.document.close();

  printWindow.addEventListener('load', () => {
    printWindow.focus();
    printWindow.print();
  }, { once: true });
}

function clearForm() {
  ids.forEach(id => {
    const el = byId(id);
    if (el) el.value = '';
  });
  byId('corePitch').innerHTML = '';
  byId('locations').innerHTML = '';
  byId('complicationsList').innerHTML = '';
  byId('npcs').innerHTML = '';
  addLocation();
  addComplication();
  addNpc();
  renderPreview();
}

function populateForm(data = {}) {
  ids.forEach(id => {
    const el = byId(id);
    if (el) el.value = typeof data[id] === 'string' ? data[id] : '';
  });

  byId('corePitch').innerHTML = sanitizeRichText(data.corePitch || '');
  byId('locations').innerHTML = '';
  byId('complicationsList').innerHTML = '';
  byId('npcs').innerHTML = '';

  const locations = Array.isArray(data.locations) && data.locations.length ? data.locations : [{}];
  const complications = Array.isArray(data.complications) && data.complications.length ? data.complications : [{}];
  const npcs = Array.isArray(data.npcs) && data.npcs.length ? data.npcs : [{}];

  locations.forEach(item => addLocation(item || {}));
  complications.forEach(item => {
    const normalized = typeof item === 'string' ? { text: item } : (item || {});
    addComplication(normalized);
  });
  npcs.forEach(item => addNpc(item || {}));

  renderPreview();
}

function loadDemo() {
  populateForm({
    title: 'Ashes at the Night Market',
    format: 'Mystery',
    corePitch: '<p>A burned stall, a missing courier, and a memory shard that should not exist.</p>',
    contactRole: 'Neighbourhood organiser',
    job: 'Find the courier and the shard',
    pay: '1,200 eb plus future protection',
    whyNow: 'A corp retrieval team arrives at sunrise',
    benefits: 'Mira and the market vendors',
    pissed: 'PetroChem subcontractors and a local booster crew',
    escalates: 'Block-wide tensions and surveillance',
    newHook: 'One data fragment points to a clinic in Sector 12',
    gmNotes: 'Keep the actual culprit sympathetic. Let the crew choose between exposure and quiet leverage.',
    locations: [
      { name: 'Burned Night Market Stall', what: 'Charred kiosk at the edge of the market.', why: 'Start point with physical clues and nervous witnesses.', obstacle: 'Crowd pressure and hidden camera blind spots.' },
      { name: 'Canal Service Tunnel', what: 'Smuggler route beneath the district.', why: 'Courier passed through here after the fire.', obstacle: 'Flooding and scavenger squatters.' }
    ],
    complications: [
      { text: 'The shard is damaged but still active.', revealType: 'hidden', dangerLevel: 'risky' },
      { text: 'A local gang is protecting the wrong suspect.', revealType: 'conditional', dangerLevel: 'dangerous' }
    ],
    npcs: [
      { name: 'Mira Kovač', role: 'Organiser', vibe: 'Tired but composed', plus: 'Knows who still talks.', minus: 'Hiding how much she already knows.', secret: 'She asked the courier to move the shard in the first place.', incongruency: 'Acts like a bystander but is already deeply involved.' },
      { name: 'Talon', role: 'Booster lieutenant', vibe: 'Aggressive, performative', plus: 'Saw the getaway vehicle.', minus: 'Will lie if challenged in public.', incongruency: 'Was paid to chase the wrong person.', npcType: 'enemy' }
    ]
  });
}

function exportJson() {
  const data = gatherData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${(data.title || 'cpr_gig').replace(/[^a-z0-9]+/gi, '_').toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importJsonFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = event => {
    try {
      const parsed = JSON.parse(String(event.target?.result || '{}'));
      populateForm(parsed);
    } catch (error) {
      window.alert('That file could not be read as a CPR Gig Planner JSON export.');
    }
  };
  reader.readAsText(file);
}

function applyRichCommand(command, value = null) {
  byId('corePitch').focus();
  document.execCommand(command, false, value);
}

function normalizeCorePitch() {
  const editor = byId('corePitch');
  if (!editor.textContent.trim()) {
    editor.innerHTML = '';
  }
}

document.addEventListener('click', event => {
  if (!event.target.closest('.type-menu')) {
    document.querySelectorAll('.type-menu-popup').forEach(menu => {
      menu.hidden = true;
    });
  }
});

ids.forEach(id => {
  const el = byId(id);
  if (el) el.addEventListener('input', renderPreview);
});
byId('corePitch').addEventListener('input', () => {
  normalizeCorePitch();
  renderPreview();
});
byId('corePitchToolbarToggle').addEventListener('click', () => {
  const toolbar = byId('corePitchToolbar');
  const shouldOpen = toolbar.hasAttribute('hidden');
  if (shouldOpen) {
    toolbar.removeAttribute('hidden');
  } else {
    toolbar.setAttribute('hidden', '');
  }
  byId('corePitchToolbarToggle').setAttribute('aria-expanded', String(shouldOpen));
});
document.querySelectorAll('.toolbar-btn').forEach(button => {
  button.addEventListener('click', () => {
    applyRichCommand(button.dataset.command, button.dataset.value || null);
    renderPreview();
  });
});
byId('corePitchSize').addEventListener('change', event => {
  if (event.target.value) {
    applyRichCommand('fontSize', event.target.value);
    event.target.value = '';
    renderPreview();
  }
});
byId('addLocationBtn').addEventListener('click', () => addLocation());
byId('addComplicationBtn').addEventListener('click', () => addComplication());
byId('addNpcBtn').addEventListener('click', () => addNpc());
byId('newQuestBtn').addEventListener('click', clearForm);
byId('loadDemoBtn').addEventListener('click', loadDemo);
byId('importJsonBtn').addEventListener('click', () => byId('importJsonInput').click());
byId('exportJsonBtn').addEventListener('click', exportJson);
byId('printBtn').addEventListener('click', printSheet);
byId('printBtnBottom').addEventListener('click', printSheet);
byId('importJsonInput').addEventListener('change', event => {
  importJsonFile(event.target.files?.[0]);
  event.target.value = '';
});

clearForm();

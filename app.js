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

function hasMeaningfulValue(value) {
  return Boolean(value && String(value).trim());
}

function printField(label, value) {
  if (!hasMeaningfulValue(value)) return '';
  return `<div class="sheet-field"><strong>${escapeHtml(label)}</strong><div>${escapeHtml(value)}</div></div>`;
}

function autosizeTextarea(textarea) {
  if (!textarea) return;
  const minHeight = parseFloat(window.getComputedStyle(textarea).minHeight) || 0;
  textarea.style.height = 'auto';
  textarea.style.height = `${Math.max(textarea.scrollHeight, minHeight)}px`;
}

function bindAutoGrowField(field) {
  if (!field || field.dataset.autogrow !== 'true') return;
  autosizeTextarea(field);
  field.addEventListener('input', () => autosizeTextarea(field));
}

function closeAllNpcStatBlocks(exceptCard = null) {
  document.querySelectorAll('.npc-card').forEach(card => {
    if (exceptCard && card === exceptCard) return;
    const details = card.querySelector('.npc-statblock-details');
    const button = card.querySelector('.statblock-toggle');
    if (!details || !button) return;
    details.style.display = 'none';
    button.classList.remove('is-open');
    button.textContent = 'Stat block';
  });
}

function addLocation(data = {}, options = {}) {
  const { prepend = true } = options;
  const tpl = byId('locationTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      input.value = data[key] || '';
      bindAutoGrowField(input);
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
  hydrateTypeOptionIcons(tpl);
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      setComplicationTag(tpl, 'sceneStyle', '.location-style-toggle', option.dataset.type, 'Scene style');
      option.closest('.type-menu-popup').hidden = true;
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'sceneStyle', '.location-style-toggle', data.sceneStyle || '', 'Scene style');
  if (prepend) {
    byId('locations').prepend(tpl);
  } else {
    byId('locations').appendChild(tpl);
  }
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
      symbol: '🔺',
      label: 'Open Info',
    },
    hidden: {
      symbol: '🔒',
      label: 'Hidden Info',
    },
    conditional: {
      symbol: '❓',
      label: 'Flexible Info',
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

function getSceneStyleMeta(style) {
  const map = {
    'battle-map': { icon: 'assets/icons/battlemap.webp', label: 'Battlemap' },
    totm: { icon: 'assets/icons/TOTM.webp', label: 'TOTM' },
  };
  return map[style] || null;
}

function getComplicationTypeMeta(type) {
  const map = {
    apparent: { icon: 'assets/icons/open-info.webp', label: 'Open Info' },
    hidden: { icon: 'assets/icons/hidden-info.webp', label: 'Hidden Info' },
    conditional: { icon: 'assets/icons/flexible.webp', label: 'Flexible Info' },
  };
  return map[type] || null;
}

function getDangerLevelMeta(level) {
  const map = {
    routine: { icon: 'assets/icons/routine.webp', label: 'Routine' },
    risky: { icon: 'assets/icons/risky.webp', label: 'Risky' },
    dangerous: { icon: 'assets/icons/dangerous.webp', label: 'Dangerous' },
    deadly: { icon: 'assets/icons/deadly.webp', label: 'Deadly' },
  };
  return map[level] || null;
}

function getNpcTypeMeta(type) {
  const map = {
    friendly: { icon: 'assets/icons/friendly.webp', label: 'Friendly' },
    neutral: { icon: 'assets/icons/neutral.webp', label: 'Neutral' },
    enemy: { icon: 'assets/icons/enemy.webp', label: 'Enemy' },
    boss: { icon: 'assets/icons/boss.webp', label: 'Boss' },
  };
  return map[type] || null;
}

function getTagMeta(fieldName, type) {
  return fieldName === 'dangerLevel'
    ? getDangerLevelMeta(type)
    : fieldName === 'sceneStyle'
      ? getSceneStyleMeta(type)
    : fieldName === 'npcType'
      ? getNpcTypeMeta(type)
      : getComplicationTypeMeta(type);
}

function renderIconImage(src, alt, className = 'tag-icon') {
  return `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`;
}

function absoluteAssetUrl(path) {
  return new URL(path, window.location.href).href;
}

function hydrateTypeOptionIcons(scope) {
  scope.querySelectorAll('.type-option').forEach(option => {
    const symbolWrap = option.querySelector('.type-option-symbol');
    if (!symbolWrap || option.classList.contains('type-option-reset')) return;
    const meta = getTagMeta(option.dataset.fieldName, option.dataset.type);
    if (!meta?.icon) return;
    symbolWrap.innerHTML = renderIconImage(meta.icon, meta.label, 'type-option-icon');
  });
}

function npcHasStatBlockData(npc) {
  const keys = [
    'statInt', 'statRef', 'statDex', 'statTech', 'statCool',
    'statWill', 'statLuck', 'statMove', 'statBody', 'statEmp',
    'statHp', 'statSeriouslyWounded', 'statDeathSave',
    'statArmorHead', 'statArmorBody',
    'statWeapon1', 'statWeapon1Damage',
    'statWeapon2', 'statWeapon2Damage',
    'statWeapon3', 'statWeapon3Damage',
    'statSkills', 'statGear'
  ];
  return keys.some(key => hasMeaningfulValue(npc[key]));
}

function setComplicationTag(card, fieldName, buttonSelector, type, placeholder) {
  const hidden = card.querySelector(`[data-field="${fieldName}"]`);
  const button = card.querySelector(buttonSelector);
  const meta = getTagMeta(fieldName, type);

  hidden.value = meta ? type : '';
  button.classList.toggle('is-placeholder', !meta);
  button.innerHTML = meta?.icon ? renderIconImage(meta.icon, meta.label) : escapeHtml(placeholder);
  button.title = meta ? meta.label : placeholder;
}

function addComplication(data = {}, options = {}) {
  const { prepend = true } = options;
  const tpl = byId('complicationTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    input.value = data[key] || '';
    bindAutoGrowField(input);
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
  hydrateTypeOptionIcons(tpl);
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
  if (prepend) {
    byId('complicationsList').prepend(tpl);
  } else {
    byId('complicationsList').appendChild(tpl);
  }
  updateComplicationNumbers();
  renderPreview();
}

function addNpc(data = {}, options = {}) {
  const { prepend = true } = options;
  const tpl = byId('npcTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      input.value = data[key] || '';
      bindAutoGrowField(input);
      input.addEventListener('input', renderPreview);
    }
  });

  const toggle = tpl.querySelector('[data-toggle="advanced"]');
  const advanced = tpl.querySelector('.npc-advanced');
  const statDetails = tpl.querySelector('.npc-statblock-details');
  const statToggleButton = tpl.querySelector('.statblock-toggle');
  const hasStatBlock = npcHasStatBlockData(data);
  const hasAdvanced = Boolean(
    (data.secret && data.secret.trim()) ||
    (data.incongruency && data.incongruency.trim()) ||
    hasStatBlock
  );
  toggle.checked = hasAdvanced;
  advanced.style.display = hasAdvanced ? 'block' : 'none';
  if (hasAdvanced) {
    advanced.querySelectorAll('textarea[data-autogrow="true"]').forEach(autosizeTextarea);
  }
  toggle.addEventListener('change', () => {
    advanced.style.display = toggle.checked ? 'block' : 'none';
    if (toggle.checked) {
      advanced.querySelectorAll('textarea[data-autogrow="true"]').forEach(autosizeTextarea);
    }
    if (!toggle.checked) {
      statDetails.style.display = 'none';
      statToggleButton.classList.remove('is-open');
      statToggleButton.textContent = 'Stat block';
    }
    renderPreview();
  });
  statDetails.style.display = 'none';
  statToggleButton.addEventListener('click', () => {
    if (!toggle.checked) {
      toggle.checked = true;
      advanced.style.display = 'block';
    }
    const isOpen = statDetails.style.display !== 'none';
    if (isOpen) {
      statDetails.style.display = 'none';
      statToggleButton.classList.remove('is-open');
      statToggleButton.textContent = 'Stat block';
    } else {
      closeAllNpcStatBlocks(tpl);
      statDetails.style.display = 'block';
      statToggleButton.classList.add('is-open');
      statToggleButton.textContent = 'Hide stat block';
    }
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
  hydrateTypeOptionIcons(tpl);
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      setComplicationTag(tpl, 'npcType', '.npc-type-toggle', option.dataset.type, 'NPC type');
      option.closest('.type-menu-popup').hidden = true;
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'npcType', '.npc-type-toggle', data.npcType || '', 'NPC type');
  if (prepend) {
    byId('npcs').prepend(tpl);
  } else {
    byId('npcs').appendChild(tpl);
  }
  renderPreview();
}

function collectRepeating(selector) {
  return [...document.querySelectorAll(selector)].map(card => {
    const obj = {};
    card.querySelectorAll('[data-field]').forEach(field => {
      const advancedWrap = field.closest('.npc-advanced');
      const statWrap = field.closest('.npc-statblock-details');
      if (statWrap) {
        obj[field.dataset.field] = field.value.trim();
      } else if (advancedWrap) {
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
    .map(meta => `<span class="print-tag-symbol">${renderIconImage(absoluteAssetUrl(meta.icon), meta.label, 'print-tag-icon')}</span>`)
    .join('<span class="print-tag-separator">|</span>');
}

function buildStatBox(label, value) {
  return `
    <div class="stat-box">
      <div class="stat-box-label">${escapeHtml(label)}</div>
      <div class="stat-box-value">${escapeHtml(value || '-')}</div>
    </div>
  `;
}

function buildStatWeapons(npc) {
  const rows = [
    [npc.statWeapon1, npc.statWeapon1Damage],
    [npc.statWeapon2, npc.statWeapon2Damage],
    [npc.statWeapon3, npc.statWeapon3Damage],
  ];

  return `
    <div class="stat-panel">
      <div class="stat-panel-head">Weapons</div>
      <div class="stat-panel-body">
        <table class="stat-table">
          ${rows.map(([name, dmg]) => `<tr><td>${escapeHtml(name || '-')}</td><td>${escapeHtml(dmg || '-')}</td></tr>`).join('')}
        </table>
      </div>
    </div>
  `;
}

function buildStatArmor(npc) {
  return `
    <div class="stat-panel">
      <div class="stat-panel-head">Armor</div>
      <div class="stat-panel-body">
        <table class="stat-table">
          <tr><td>Head</td><td>${escapeHtml(npc.statArmorHead || '-')}</td></tr>
          <tr><td>Body</td><td>${escapeHtml(npc.statArmorBody || '-')}</td></tr>
        </table>
      </div>
    </div>
  `;
}

function buildStatStrip(label, value) {
  return `
    <div class="stat-strip stat-strip-writing">
      <div class="stat-strip-label">${escapeHtml(label)}</div>
      <div class="stat-panel-body stat-text">${hasMeaningfulValue(value) ? escapeHtml(value) : '&nbsp;'}</div>
    </div>
  `;
}

function buildNpcStatPages(npcs) {
  const statNpcs = npcs.filter(npc => npcHasStatBlockData(npc));
  if (!statNpcs.length) return '';

  const pages = [];
  for (let index = 0; index < statNpcs.length; index += 2) {
    pages.push(statNpcs.slice(index, index + 2));
  }

  return pages.map(pageNpcs => `
    <article class="print-sheet stat-card-page">
      <div class="stat-card-stack">
        ${pageNpcs.map(npc => {
          const title = npc.name || 'NPC';
          const roleTag = npc.role || '';
          const weaponsPanel = buildStatWeapons(npc);
          const armorPanel = buildStatArmor(npc);
          const skillsStrip = buildStatStrip('Skill Bases', npc.statSkills);
          const gearStrip = buildStatStrip('Cyberware & Special Equipment', npc.statGear);
          return `
            <div class="stat-card">
              <div class="stat-card-side">${escapeHtml(title)}</div>
              <div class="stat-card-main">
                ${roleTag ? `<div class="stat-strip"><div class="stat-strip-label">Role</div><div class="stat-panel-body stat-text">${escapeHtml(roleTag)}</div></div>` : ''}
                <div class="stat-row-5">
                  ${buildStatBox('INT', npc.statInt)}
                  ${buildStatBox('REF', npc.statRef)}
                  ${buildStatBox('DEX', npc.statDex)}
                  ${buildStatBox('TECH', npc.statTech)}
                  ${buildStatBox('COOL', npc.statCool)}
                </div>
                <div class="stat-row-5">
                  ${buildStatBox('WILL', npc.statWill)}
                  ${buildStatBox('LUCK', npc.statLuck)}
                  ${buildStatBox('MOVE', npc.statMove)}
                  ${buildStatBox('BODY', npc.statBody)}
                  ${buildStatBox('EMP', npc.statEmp)}
                </div>
                <div class="stat-row-3">
                  ${buildStatBox('Hit Points', npc.statHp)}
                  ${buildStatBox('Seriously Wounded', npc.statSeriouslyWounded)}
                  ${buildStatBox('Death Save', npc.statDeathSave)}
                </div>
                <div class="stat-row-2">
                  ${weaponsPanel}
                  ${armorPanel}
                </div>
                ${skillsStrip}
                ${gearStrip}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </article>
  `).join('');
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
        const tags = formatPrintSymbols([typeMeta, dangerMeta]);
        return `
          <div class="sheet-item">
            ${tags ? `<div class="sheet-field complication-symbols">${tags}</div>` : ''}
            <div class="sheet-field"${tags ? ' style="margin-top:6px;"' : ''}>${escapeHtml(item.text)}</div>
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
      const sceneSymbols = formatPrintSymbols([sceneMeta]);
      const locationFields = [
        printField('What it is', loc.what),
        printField('Why it matters', loc.why),
        printField('Obstacle', loc.obstacle),
      ].filter(Boolean).join('');
      return `
      <div class="sheet-item">
        <div class="sheet-item-title sheet-item-title-row"><span class="sheet-item-name">${escapeHtml(loc.name || `Location ${index + 1}`)}</span>${sceneSymbols ? `<span class="inline-print-symbols location-title-icon">${sceneSymbols}</span>` : ''}</div>
        ${locationFields}
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
      const npcSymbol = npcTypeMeta ? `<span class="inline-print-symbols npc-title-icon"><span class="print-tag-symbol npc-name-symbol">${renderIconImage(absoluteAssetUrl(npcTypeMeta.icon), npcTypeMeta.label, 'print-tag-icon')}</span></span>` : '';
      const npcRole = npc.role ? `<span class="sheet-item-role">- ${escapeHtml(npc.role)}</span>` : '';
      const npcFields = [
        printField('Quirk / Vibe', npc.vibe),
        printField('Wants', npc.plus),
        printField("Doesn't Want", npc.minus),
        printField('Secret', npc.secret),
        printField('Incongruency / contradiction', npc.incongruency),
      ].filter(Boolean).join('');
      return `
      <div class="sheet-item">
        <div class="sheet-item-title sheet-item-title-row"><span class="sheet-item-name">${escapeHtml(npc.name || `NPC ${index + 1}`)}</span>${npcRole}${npcSymbol}</div>
        ${npcFields}
      </div>
    `;
    },
    'No NPCs yet.',
    'previewNpcs'
  );

  const hookFields = [
    printField('Who contacts them', data.contactRole),
    printField('Gig Type', data.format),
    printField("What's the job", data.job),
    printField("What's the pay", data.pay),
    printField('Why now', data.whyNow),
  ].filter(Boolean).join('');

  const developmentFields = [
    printField('Who benefits', data.benefits),
    printField("Who's pissed", data.pissed),
    printField('What escalates', data.escalates),
    printField('New hook unlocked', data.newHook),
  ].filter(Boolean).join('');

  const statPages = buildNpcStatPages(data.npcs);

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

    ${hookFields ? `<section class="sheet-section">
      <h4>Hook</h4>
      <div class="sheet-grid">${hookFields}</div>
    </section>` : ''}

    <div class="print-columns">
      <div>
        ${data.locations.length ? `<section class="sheet-section flowing-section">
          <h4>Locations</h4>
          ${locations}
        </section>` : ''}

        ${data.complications.length ? `<section class="sheet-section flowing-section">
          <h4>Encounters / Complications</h4>
          ${complications}
        </section>` : ''}
      </div>

      <div>
        ${data.npcs.length ? `<section class="sheet-section flowing-section">
          <h4>Non-playable Characters</h4>
          ${npcs}
        </section>` : ''}

        ${developmentFields ? `<section class="sheet-section">
          <h4>Developments</h4>
          <div class="sheet-grid">${developmentFields}</div>
        </section>` : ''}

        ${hasMeaningfulValue(data.gmNotes) ? `<section class="sheet-section gm-notes-section">
          <h4>GM Notes</h4>
          <div>${escapeHtml(data.gmNotes)}</div>
        </section>` : ''}
      </div>
    </div>
  </article>
  ${statPages}
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

  locations.forEach(item => addLocation(item || {}, { prepend: false }));
  complications.forEach(item => {
    const normalized = typeof item === 'string' ? { text: item } : (item || {});
    addComplication(normalized, { prepend: false });
  });
  npcs.forEach(item => addNpc(item || {}, { prepend: false }));

  renderPreview();
}

function loadDemo() {
  populateForm({
    title: 'Ashes at the Night Market',
    format: 'Mystery',
    corePitch: '<p>A burned stall, a missing courier, and a memory shard that should not exist. The crew is pulled into the aftermath before the market can decide whether this was random violence or a deliberate hit.</p><p>Every witness has only part of the truth, and sunrise will bring outside interests who would rather bury the whole thing than let anyone learn what the courier was carrying.</p>',
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
      { name: 'Burned Night Market Stall', what: 'A blackened kiosk sits at the edge of the market beneath a tangle of melted signage and scorched tarps, with nearby vendors already treating it like cursed ground. The smell of burned plastic still hangs in the air, and the stall is littered with warped cookware, soot-stained crates, and a few pieces of debris that suggest the fire was far too focused to be accidental.', sceneStyle: 'battle-map' },
      { name: 'Canal Service Tunnel', what: 'Smuggler route beneath the district.', why: 'Courier passed through here after the fire.', obstacle: 'Flooding and scavenger squatters.' }
    ],
    complications: [
      { text: 'The shard is damaged but still active.', revealType: 'hidden' },
      { text: 'A local gang is protecting the wrong suspect. They are convinced the courier sold them out, and they are already roughing up bystanders, locking down exits, and warning everyone in the market not to talk. If the crew pushes too hard or asks the wrong questions in public, the gang may escalate from intimidation to outright violence before anyone realises they are hunting the wrong person.', revealType: 'conditional', dangerLevel: 'dangerous' },
      { text: 'The courier left the shard with a child vendor for safekeeping.', revealType: 'apparent' }
    ],
    npcs: [
      { name: 'Mira Kovač', role: 'Organiser', vibe: 'Tired but composed', plus: 'Knows who still talks.', minus: 'Hiding how much she already knows.', secret: 'She asked the courier to move the shard in the first place.', incongruency: 'Acts like a bystander but is already deeply involved.', statInt: '7', statRef: '6', statDex: '6', statTech: '4', statCool: '8', statWill: '7', statLuck: '5', statMove: '5', statBody: '4', statEmp: '6', statHp: '35', statSeriouslyWounded: '18', statDeathSave: '6', statArmorHead: '4 SP', statArmorBody: '7 SP', statWeapon1: 'Very Heavy Pistol', statWeapon1Damage: '4d6', statSkills: 'Conversation 10, Human Perception 9, Persuasion 10, Local Expert 8, Handgun 8, Wardrobe & Style 9', statGear: 'Agent, encrypted shard, budget bribes, very heavy pistol ammo x24' },
      { name: 'Talon', role: 'Booster lieutenant', vibe: 'Aggressive, performative', plus: 'Saw the getaway vehicle.', minus: 'Will lie if challenged in public.', incongruency: 'Was paid to chase the wrong person.', npcType: 'enemy' }
    ]
  });
}

function loadDemo() {
  populateForm({
    title: 'Ashes at the Night Market',
    format: 'Mystery',
    corePitch: '<p>A burned stall, a missing courier, and a memory shard that should not exist. The crew is pulled into the aftermath before the market can decide whether this was random violence or a deliberate hit.</p><p>Every witness has only part of the truth, and sunrise will bring outside interests who would rather bury the whole thing than let anyone learn what the courier was carrying.</p>',
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
      { name: 'Burned Night Market Stall', what: 'A blackened kiosk sits at the edge of the market beneath a tangle of melted signage and scorched tarps, with nearby vendors already treating it like cursed ground. The smell of burned plastic still hangs in the air, and the stall is littered with warped cookware, soot-stained crates, and a few pieces of debris that suggest the fire was far too focused to be accidental.', sceneStyle: 'battle-map' },
      { name: 'Canal Service Tunnel', what: 'Smuggler route beneath the district.', why: 'Courier passed through here after the fire.', obstacle: 'Flooding and scavenger squatters.' }
    ],
    complications: [
      { text: 'The shard is damaged but still active.', revealType: 'hidden' },
      { text: 'A local gang is protecting the wrong suspect. They are convinced the courier sold them out, and they are already roughing up bystanders, locking down exits, and warning everyone in the market not to talk. If the crew pushes too hard or asks the wrong questions in public, the gang may escalate from intimidation to outright violence before anyone realises they are hunting the wrong person.', revealType: 'conditional', dangerLevel: 'dangerous' }
    ],
    npcs: [
      { name: 'Mira Kovac', role: 'Organiser', vibe: 'Tired but composed', plus: 'Keep the market calm and steer the crew toward useful witnesses.', minus: 'Corp attention, public violence, or anyone digging too closely into her involvement.', secret: 'She keeps a private ranking of every noodle stall in the market.', incongruency: 'Despite her fixer instincts, she speaks like a community mediator and always pushes de-escalation first.', statInt: '7', statRef: '6', statDex: '6', statTech: '4', statCool: '8', statWill: '7', statLuck: '5', statMove: '5', statBody: '4', statEmp: '6', statHp: '35', statSeriouslyWounded: '18', statDeathSave: '6', statArmorHead: '4 SP', statArmorBody: '7 SP', statWeapon1: 'Very Heavy Pistol', statWeapon1Damage: '4d6', statSkills: 'Conversation 10, Human Perception 9, Persuasion 10, Local Expert 8, Handgun 8, Wardrobe & Style 9', statGear: 'Agent, encrypted shard, budget bribes, very heavy pistol ammo x24' },
      { name: 'Talon', role: 'Booster lieutenant', vibe: 'Aggressive, performative', plus: 'Find the supposed traitor fast and look strong in front of the gang.', minus: 'Being embarrassed in public or admitting his crew grabbed the wrong target.', incongruency: 'Despite the swagger, he is obsessive about keeping his jacket spotless.', npcType: 'enemy' },
      { name: 'Brick', role: 'Hired muscle', vibe: 'Silent, watchful', plus: 'Keep the client alive and end trouble quickly.', minus: 'Drawn-out arguments, surprises, or getting pinned in a tight space.', npcType: 'friendly', statRef: '6', statDex: '5', statCool: '5', statWill: '6', statMove: '5', statBody: '8', statHp: '40', statSeriouslyWounded: '20', statDeathSave: '8' }
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

function positionSectionJumpNav() {
  const nav = document.querySelector('.section-jump-nav');
  const toggle = byId('sectionJumpToggle');
  const hookSection = byId('hook-section');
  const panel = document.querySelector('.panel');
  if (!nav || !toggle || !hookSection || !panel) return;

  const hookRect = hookSection.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const topAtPageStart = hookRect.bottom + window.scrollY - toggle.offsetHeight - 8;
  const maxTop = Math.max(24, window.innerHeight - toggle.offsetHeight - 24);
  const computedTop = Math.min(Math.max(24, topAtPageStart), maxTop);
  const computedLeft = Math.max(0, panelRect.left - nav.offsetWidth + 4);
  nav.style.top = `${Math.round(computedTop)}px`;
  nav.style.left = `${Math.round(computedLeft)}px`;
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
window.addEventListener('resize', positionSectionJumpNav);

clearForm();
positionSectionJumpNav();

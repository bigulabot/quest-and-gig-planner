const ids = [
  'title', 'format', 'contactRole', 'job', 'pay', 'whyNow',
  'benefits', 'pissed', 'escalates', 'newHook', 'gmNotes', 'fantasyNpcSystem'
];

const plannerModes = {
  cyberpunk: {
    id: 'cyberpunk',
    label: 'Cyberpunk RED',
    browserTitle: 'Cyberpunk RED Gig Planner',
    themeClass: 'theme-cyberpunk',
    plannerTitle: 'Cyberpunk RED <span class="title-lockup">GIG PLANNER</span>',
    subtitle: 'A modular Cyberpunk RED gig planner with expandable sections, structured NPC and encounter tools, optional printable stat blocks, save/load support, and clean export formatting, built to turn rough ideas into table-ready jobs fast.',
    buttons: {
      newGig: 'New',
      saveGig: 'Save',
      demoGig: 'Demo',
      loadGig: 'Load',
      printGig: 'Print / Export PDF*',
    },
    labels: {
      home: 'Home',
      hook: 'Hook',
      navLocations: 'Locations',
      navEncounters: 'Complications',
      navNpcs: 'NPCs',
      locations: 'Locations & SCENES',
      encounters: 'Complications & Encounters',
      npcs: 'Non-playable Characters',
      developments: 'Developments',
      gmNotes: 'GM Notes',
      gigType: 'Gig Type',
      whoContacts: 'Who contacts them',
      whatJob: "What's the job",
      whatPay: "What's the pay",
      whyNow: 'Why now',
      whoBenefits: 'Who benefits',
      whosPissed: "Who's pissed",
      whatEscalates: 'What escalates',
      newHook: 'New hook unlocked',
      whatItIs: 'What it is',
      whyItMatters: 'Why it matters',
      obstacle: 'Obstacle',
      quirkVibe: 'Quirk / Vibe',
      wants: 'Wants',
      doesntWant: "Doesn't Want",
      secret: 'Secret',
      incongruency: 'Incongruency / contradiction',
    },
    placeholders: {
      title: 'Neon Saints of Block 9',
      corePitch: 'Brief setup of the gig',
      contactRole: 'Fixer, friend, corp rep, neighbour...',
      job: 'Retrieve a stolen shard',
      pay: '1,500 eb + favour',
      whyNow: 'Window closes at dawn',
      gmNotes: 'Improvised details, names, spare clues, stat notes...',
      locationName: 'Afterlife-adjacent noodle market',
      locationObstacle: 'Gang checkpoint, ICE, timer...',
      complicationText: 'A twist, escalation, obstacle, deadline, betrayal...',
      npcName: 'Boaty McBoatface',
      npcRole: 'Fixer / witness / target',
      npcVibe: 'How do they stand out?',
      npcPlus: 'What are the NPC\'s immediate motivations. What are they likely to help with?',
      npcMinus: 'What are the NPC\'s immediate disincentives. What are they likely to hinder?',
      npcSecret: 'Something that is revealed as players interact with the NPC over a prolonged period of time. Should also affect the \'Wants\' and \'Don\'t Wants\'.',
      npcIncongruency: 'Details that don\'t fit in with stereotypical tropes, e.g. bandits that are deeply religious, or a ruthless mercenary who refuses to kill animals.',
    },
    emptyStates: {
      untitledPrint: 'Untitled Side Quest',
      untitledLocation: 'Untitled location',
      untitledNpc: 'Untitled NPC',
      emptyComplication: 'Empty complication',
      noComplications: 'No complications yet.',
      noLocations: 'No locations yet.',
      noNpcs: 'No NPCs yet.',
      fallbackNpcTitle: 'NPC',
    },
    statBlock: {
      layout: 'cyberpunk',
      toggle: 'Show stat block',
      hide: 'Hide stat block',
      role: 'Role',
      weapons: 'Weapons',
      armor: 'Armor',
      armorHead: 'Head',
      armorBody: 'Body',
      skills: 'Skill Bases',
      gear: 'Cyberware & Special Equipment',
      editorRows: [
        ['statInt', 'statRef', 'statDex', 'statTech', 'statCool', 'statWill', 'statLuck', 'statMove', 'statBody', 'statEmp'],
        ['statHp', 'statSeriouslyWounded', 'statDeathSave'],
        ['statArmorHead', 'statArmorBody'],
      ],
      printRows: [
        ['statInt', 'statRef', 'statDex', 'statTech', 'statCool'],
        ['statWill', 'statLuck', 'statMove', 'statBody', 'statEmp'],
        ['statHp', 'statSeriouslyWounded', 'statDeathSave'],
      ],
      fields: [
        { key: 'statInt', label: 'INT' },
        { key: 'statRef', label: 'REF' },
        { key: 'statDex', label: 'DEX' },
        { key: 'statTech', label: 'TECH' },
        { key: 'statCool', label: 'COOL' },
        { key: 'statWill', label: 'WILL' },
        { key: 'statLuck', label: 'LUCK' },
        { key: 'statMove', label: 'MOVE' },
        { key: 'statBody', label: 'BODY' },
        { key: 'statEmp', label: 'EMP' },
        { key: 'statHp', label: 'HP' },
        { key: 'statSeriouslyWounded', label: 'Seriously Wounded' },
        { key: 'statDeathSave', label: 'Death Save' },
        { key: 'statArmorHead', label: 'Armor Head', placeholder: '7 SP' },
        { key: 'statArmorBody', label: 'Armor Body', placeholder: '7 SP' },
        { key: 'statWeapon1', label: 'Weapon 1', placeholder: 'Very Heavy Pistol' },
        { key: 'statWeapon1Damage', label: 'Weapon 1 Damage', placeholder: '4d6' },
        { key: 'statWeapon2', label: 'Weapon 2', placeholder: 'Poor Quality Shotgun' },
        { key: 'statWeapon2Damage', label: 'Weapon 2 Damage', placeholder: '5d6' },
        { key: 'statWeapon3', label: 'Weapon 3', placeholder: 'Baton' },
        { key: 'statWeapon3Damage', label: 'Weapon 3 Damage', placeholder: '2d6' },
        { key: 'statSkills', label: 'Skill Bases', placeholder: 'Athletics 9, Brawling 11, Evasion 7...' },
        { key: 'statGear', label: 'Cyberware & Equipment', placeholder: 'Radio communicator, kevlar, shotgun shells...' },
      ],
    },
    formatOptions: [
      'Assassination', 'Escort', 'Heist', 'Investigation', 'Moral Quandary',
      'Mystery', 'Rescue', 'Sabotage', 'Sanctuary', 'Trade', 'Travel',
      'Data Theft', 'Smuggling', 'Other',
    ],
  },
  fantasy: {
    id: 'fantasy',
    label: 'Fantasy RPG',
    browserTitle: 'Fantasy RPG Side Quest Planner',
    themeClass: 'theme-fantasy',
    plannerTitle: 'Fantasy RPG SIDE QUEST<br /><span class="title-lockup">PLANNER</span>',
    subtitle: 'A modular, system agnostic, fantasy RPG adventure planner with expandable sections, structured NPC and encounter tools, optional printable stat blocks, save/load support, and clean export formatting, built to turn rough ideas into table-ready jobs fast.',
    buttons: {
      newGig: 'New',
      saveGig: 'Save',
      demoGig: 'Demo',
      loadGig: 'Load',
      printGig: 'Print / Export PDF*',
    },
    labels: {
      home: 'Home',
      hook: 'Hook',
      navLocations: 'Locations',
      navEncounters: 'Complications',
      navNpcs: 'NPCs',
      locations: 'Locations & SCENES',
      encounters: 'Complications & Encounters',
      npcs: 'Non-playable Characters',
      developments: 'Developments',
      gmNotes: 'GM Notes',
      gigType: 'Quest Type',
      whoContacts: 'Who contacts them',
      whatJob: 'What is the quest',
      whatPay: 'What is the reward',
      whyNow: 'Why now',
      whoBenefits: 'Who benefits',
      whosPissed: "Who's angered",
      whatEscalates: 'What escalates',
      newHook: 'New hook unlocked',
      whatItIs: 'What it is',
      whyItMatters: 'Why it matters',
      obstacle: 'Obstacle',
      quirkVibe: 'Quirk / Vibe',
      wants: 'Wants',
      doesntWant: "Doesn't Want",
      secret: 'Secret',
      incongruency: 'Incongruency / contradiction',
    },
    placeholders: {
      title: 'Ashes at the Moonfair',
      corePitch: 'Brief setup of the sidequest',
      contactRole: 'Reeve, guild steward, priest, innkeeper...',
      job: 'Recover a stolen relic',
      pay: '120 gold + the baron\'s favour',
      whyNow: 'The trail goes cold at dawn',
      gmNotes: 'Rumours, names, clues, creature notes...',
      locationName: 'Lantern market square',
      locationObstacle: 'Locked gate, hostile sentries, failing ritual...',
      complicationText: 'A twist, omen, betrayal, curse, deadline...',
      npcName: 'Sir Boaty of Boatface',
      npcRole: 'Warden / witness / patron',
      npcVibe: 'Visual appearance, mannerisms - how do they stand out?',
      npcPlus: 'What are the NPC\'s immediate motivations? What are they likely to help with?',
      npcMinus: 'What are the NPC\'s immediate disincentives? What are they likely to hinder?',
      npcSecret: 'Something revealed only after time spent with the NPC. It should also affect their Wants and Doesn\'t Want.',
      npcIncongruency: 'A detail that breaks the expected trope, e.g. a feared knight who apologises before every duel.',
    },
    emptyStates: {
      untitledPrint: 'Untitled Side Quest',
      untitledLocation: 'Untitled location',
      untitledNpc: 'Untitled NPC',
      emptyComplication: 'Empty complication',
      noComplications: 'No complications yet.',
      noLocations: 'No locations yet.',
      noNpcs: 'No NPCs yet.',
      fallbackNpcTitle: 'NPC',
    },
    statBlock: {
      layout: 'fantasy',
      toggle: 'Show stat block',
      hide: 'Hide stat block',
      role: 'Role',
      creatureType: 'Creature Type / Alignment',
      traits: 'Traits',
      actions: 'Actions',
      reactions: 'Reactions',
      editorRows: [
        ['statArmorClass', 'statHitPoints', 'statSpeed'],
        ['statStr', 'statDex', 'statCon', 'statInt', 'statWis', 'statCha'],
        ['statSavingThrows', 'statSenses'],
        ['statLanguages', 'statChallenge'],
      ],
      printRows: [
        ['statArmorClass', 'statHitPoints', 'statSpeed'],
        ['statStr', 'statDex', 'statCon', 'statInt', 'statWis', 'statCha'],
      ],
      fields: [
        { key: 'statCreatureType', label: 'Creature Type / Alignment', placeholder: 'Medium humanoid, lawful neutral' },
        { key: 'statArmorClass', label: 'Armor Class', placeholder: '18 (chain mail, shield)' },
        { key: 'statHitPoints', label: 'Hit Points', placeholder: '32 (5d8 + 10)' },
        { key: 'statSpeed', label: 'Speed', placeholder: '30 ft.' },
        { key: 'statStr', label: 'STR', placeholder: '16 (+3)' },
        { key: 'statDex', label: 'DEX', placeholder: '10 (+0)' },
        { key: 'statCon', label: 'CON', placeholder: '14 (+2)' },
        { key: 'statInt', label: 'INT', placeholder: '10 (+0)' },
        { key: 'statWis', label: 'WIS', placeholder: '11 (+0)' },
        { key: 'statCha', label: 'CHA', placeholder: '16 (+3)' },
        { key: 'statSavingThrows', label: 'Saving Throws', placeholder: 'Con +4, Wis +2' },
        { key: 'statSenses', label: 'Senses', placeholder: 'passive Perception 10' },
        { key: 'statLanguages', label: 'Languages', placeholder: 'Common, Elvish' },
        { key: 'statChallenge', label: 'Challenge', placeholder: '1 (200 XP)' },
        { key: 'statTraits', label: 'Traits', placeholder: 'Brave. The knight has advantage on saving throws against being frightened.' },
        { key: 'statActions', label: 'Actions', placeholder: 'Longsword. Melee Weapon Attack: +5 to hit, reach 5 ft., one target.' },
        { key: 'statReactions', label: 'Reactions', placeholder: 'Parry. The knight adds 2 to its AC against one melee attack that would hit it.' },
      ],
    },
    formatOptions: [
      'Assassination', 'Escort', 'Heist', 'Investigation', 'Moral Quandary',
      'Mystery', 'Rescue', 'Sabotage', 'Sanctuary', 'Trade', 'Travel',
      'Monster Hunt', 'Relic Recovery', 'Other',
    ],
  },
};

const DEFAULT_MODE = 'cyberpunk';
const DEFAULT_FANTASY_NPC_SYSTEM = 'generic';
const fantasyStatBlockVariants = {
  generic: {
    layout: 'fantasy-generic',
    toggle: 'Show stat block',
    hide: 'Hide stat block',
    role: 'Role',
    creatureType: 'Type',
    attacks: 'Attacks',
    traits: 'Traits',
    behaviour: 'Behaviour',
    loot: 'Loot',
    editorRows: [
      ['statHitPoints', 'statDefense', 'statSpeed'],
      ['statStr', 'statDex', 'statWill'],
    ],
    printRows: [
      ['statHitPoints', 'statDefense', 'statSpeed'],
      ['statStr', 'statDex', 'statWill'],
    ],
    fields: [
      { key: 'statCreatureType', label: 'Type', placeholder: 'Medium humanoid, Disciplined' },
      { key: 'statHitPoints', label: 'HP', placeholder: '11' },
      { key: 'statDefense', label: 'DEF', placeholder: '16 (armour, shield)' },
      { key: 'statSpeed', label: 'SPD', placeholder: 'normal' },
      { key: 'statStr', label: 'STR', placeholder: '+1' },
      { key: 'statDex', label: 'DEX', placeholder: '+1' },
      { key: 'statWill', label: 'WIL', placeholder: '+0' },
      { key: 'statAttacks', label: 'Attacks', placeholder: 'Spear +3 -> 1d6+1 (piercing, thrown 20/60)' },
      { key: 'statTraits', label: 'Traits', placeholder: 'Alert: Advantage on initiative or cannot be surprised.' },
      { key: 'statBehaviour', label: 'Behaviour', placeholder: 'Holds position unless outnumbered.\nRetreats if half HP or leader falls.' },
      { key: 'statLoot', label: 'Loot', placeholder: 'Spear, 1d6 coins' },
    ],
  },
  dnd5e: plannerModes.fantasy.statBlock,
  nimble: {
    layout: 'fantasy-nimble',
    toggle: 'Show stat block',
    hide: 'Hide stat block',
    role: 'Role',
    creatureType: 'Type / Tags',
    traits: 'Abilities',
    actions: 'Actions',
    bloodied: 'Bloodied',
    lastStand: 'Last Stand',
    notes: 'Extra Effects',
    editorRows: [
      ['statLevel', 'statSize', 'statArmorClass', 'statHitPoints', 'statSpeed'],
      ['statDamagePerRound', 'statAttackDice', 'statSaveDc', 'statChallenge'],
    ],
    printRows: [
      ['statLevel', 'statSize', 'statArmorClass', 'statHitPoints', 'statSpeed'],
      ['statDamagePerRound', 'statAttackDice', 'statSaveDc', 'statChallenge'],
    ],
    fields: [
      { key: 'statCreatureType', label: 'Type / Tags', placeholder: 'Beast, burrower, solo' },
      { key: 'statLevel', label: 'Level', placeholder: '2' },
      { key: 'statSize', label: 'Size', placeholder: 'Medium' },
      { key: 'statArmorClass', label: 'Armor', placeholder: '- / M / H' },
      { key: 'statHitPoints', label: 'HP', placeholder: '34' },
      { key: 'statSpeed', label: 'Speed', placeholder: '6' },
      { key: 'statDamagePerRound', label: 'Damage / Round', placeholder: '13' },
      { key: 'statAttackDice', label: 'Attack Dice', placeholder: '2d8+4' },
      { key: 'statSaveDc', label: 'Save DC', placeholder: '11' },
      { key: 'statChallenge', label: 'CR Equiv.', placeholder: '1' },
      { key: 'statTraits', label: 'Abilities', placeholder: 'Tremor Sight. Advantage against creatures that moved since the worm\'s last turn.' },
      { key: 'statActions', label: 'Actions', placeholder: 'Crush. Creatures in a 2x6 area take 50 damage on a failed DC 18 DEX save.' },
      { key: 'statBloodied', label: 'Bloodied', placeholder: 'At 37 HP, its damage increases to 1d12+2.' },
      { key: 'statLastStand', label: 'Last Stand', placeholder: 'When dying, it gets one final burst before collapsing.' },
      { key: 'statNotes', label: 'Extra Effects', placeholder: 'Swallowed. You take 20 damage at the start of your turn.' },
    ],
  },
};
const tagMeta = {
  sceneStyle: {
    'battle-map': { icon: 'assets/icons/battlemap.webp', label: 'Battlemap' },
    totm: { icon: 'assets/icons/TOTM.webp', label: 'ToTM' },
  },
  complicationType: {
    apparent: { icon: 'assets/icons/open-info.webp', label: 'Open Info' },
    hidden: { icon: 'assets/icons/hidden-info.webp', label: 'Hidden Info' },
    conditional: { icon: 'assets/icons/flexible.webp', label: 'Flexible Info' },
  },
  dangerLevel: {
    routine: { icon: 'assets/icons/routine.webp', label: 'Routine' },
    dangerous: { icon: 'assets/icons/dangerous.webp', label: 'Dangerous' },
    deadly: { icon: 'assets/icons/deadly.webp', label: 'Deadly' },
  },
  npcType: {
    friendly: { icon: 'assets/icons/friendly.webp', label: 'Friendly' },
    neutral: { icon: 'assets/icons/neutral.webp', label: 'Neutral' },
    enemy: { icon: 'assets/icons/enemy.webp', label: 'Enemy' },
    monster: { icon: 'assets/icons/monster.webp', label: 'Monster' },
    boss: { icon: 'assets/icons/boss.webp', label: 'Boss' },
  },
  fantasyNpcSystem: {
    generic: { label: 'Generic Fantasy' },
    dnd5e: { label: 'D&D 5e' },
    nimble: { label: 'Nimble' },
  },
};

const demoDataByMode = {
  cyberpunk: {
    mode: 'cyberpunk',
    title: 'Ashes at the Night Market',
    format: 'Mystery',
    corePitch: '<p>A burned stall, a missing courier, and a memory shard that should not exist. The crew is pulled into the aftermath before the market can decide whether this was random violence or a deliberate hit.</p><p>Every witness has only part of the truth, and sunrise will bring outside interests who would rather bury the whole thing than let anyone learn what the courier was carrying. The air is thick with smoke, nerves, and the sense that one wrong question could set the whole block off.</p>',
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
      {
        name: 'Burned Night Market Stall',
        what: 'A blackened kiosk sits at the edge of the market beneath a tangle of melted signage and scorched tarps, with nearby vendors already treating it like cursed ground. The smell of burned plastic still hangs in the air, and the stall is littered with warped cookware, soot-stained crates, and a few pieces of debris that suggest the fire was far too focused to be accidental.',
        sceneStyle: 'battle-map',
      },
      {
        name: 'Canal Service Tunnel',
        what: 'A narrow maintenance tunnel beneath the market, slick with runoff and lit by dying utility strips. Old service hatches, tagged concrete, and stacked scavenger junk make it easy to hide, ambush, or lose someone in the dark.',
        why: 'It offers a hidden route, a dumping point for evidence, and a place to corner the wrong suspect out of sight.',
        obstacle: 'Flooding and scavenger squatters.',
        sceneStyle: 'totm',
      },
    ],
    complications: [
      { text: 'The shard is damaged but still active.', revealType: 'hidden' },
      { text: 'A local gang is protecting the wrong suspect. They are convinced the courier sold them out, and they are already roughing up bystanders, locking down exits, and warning everyone in the market not to talk. If the crew pushes too hard or misidentifies the gang’s protector in public, the gang may escalate from intimidation to outright violence before anyone realizes they are hunting the wrong person.', revealType: 'conditional', dangerLevel: 'dangerous' },
    ],
    npcs: [
      {
        name: 'Mira Velez',
        role: 'Local Fixer',
        vibe: 'Tired but composed',
        plus: 'Keep the market calm and steer the crew toward useful witnesses.',
        minus: 'Corp attention, public violence, or anyone digging too closely into her involvement.',
        secret: 'She keeps a private ranking of every noodle stall in the market.',
        incongruency: 'Despite her fixer instincts, she speaks like a community mediator and always pushes de-escalation first.',
        npcType: 'neutral',
        statInt: '7',
        statRef: '6',
        statDex: '6',
        statTech: '4',
        statCool: '8',
        statWill: '7',
        statLuck: '5',
        statMove: '5',
        statBody: '4',
        statEmp: '6',
        statHp: '35',
        statSeriouslyWounded: '18',
        statDeathSave: '6',
        statArmorHead: '4 SP',
        statArmorBody: '7 SP',
        statWeapon1: 'Very Heavy Pistol',
        statWeapon1Damage: '4d6',
        statSkills: 'Human Perception 9, Persuasion 10, Local Expert 8, Handgun 8, Wardrobe & Style 6',
        statGear: 'Agent, encrypted shard, budget pistol, very heavy pistol ammo x24',
      },
      {
        name: 'Talon',
        role: 'Booster lieutenant',
        vibe: 'Aggressive, performative',
        plus: 'Find the supposed traitor fast and look strong in front of the gang.',
        minus: 'Being embarrassed in public or admitting his crew grabbed the wrong target.',
        incongruency: 'Despite the swagger, he is obsessive about keeping his jacket spotless.',
        npcType: 'enemy',
      },
      {
        name: 'Brick',
        role: 'Hired muscle',
        vibe: 'Silent, watchful',
        plus: 'Keep the client alive and end trouble quickly.',
        minus: 'Drawn-out arguments, surprises, or getting pinned in a tight space.',
        npcType: 'friendly',
        statRef: '5',
        statDex: '5',
        statTech: '1',
        statCool: '5',
        statWill: '6',
        statLuck: '6',
        statMove: '5',
        statBody: '8',
        statHp: '40',
        statSeriouslyWounded: '20',
        statDeathSave: '8',
      },
    ],
  },
  fantasy: {
    mode: 'fantasy',
    fantasyNpcSystem: 'dnd5e',
    title: 'Ashes at the Moonfair',
    format: 'Mystery',
    corePitch: '<p>A burned stall, a missing courier, and a memory crystal that should not exist. The party is pulled into the aftermath before the fair elders can decide whether this was random violence or a deliberate strike.</p><p>Every witness holds only part of the truth, and dawn will bring outside interests who would rather bury the whole affair than let anyone learn what the courier was carrying. Smoke, ash, and hushed suspicion hang over the fair, and every whispered rumour feels one heartbeat away from panic.</p>',
    contactRole: 'Guild steward',
    job: 'Find the courier and crystal',
    pay: 'Silver and the reeve’s favour',
    whyNow: 'A royal retrieval party arrives at dawn',
    benefits: 'Mara and the fair merchants',
    pissed: 'House retainers and a local bandit crew',
    escalates: 'Fairground panic and watchful patrols',
    newHook: 'A fragment of the crystal points toward a forgotten shrine beneath the old abbey',
    gmNotes: 'Keep the true culprit sympathetic. Let the party choose between exposure, leverage, or quiet mercy once they understand why the courier was targeted.',
    locations: [
      {
        name: 'Burned Moonfair Stall',
        what: 'A blackened market stall sits at the edge of the fair beneath scorched bunting and warped lantern frames, with nearby traders already treating it like cursed ground. The smell of pitch and burned cloth still hangs in the air, and the wreckage is littered with cracked cookware, ash-soaked crates, and a few suspicious fragments that suggest the fire burned far hotter and narrower than an ordinary accident.',
        sceneStyle: 'battle-map',
      },
      {
        name: 'Bell Tower Stairs',
        what: 'A narrow stone stair above the fair, slick with soot and half-hidden footprints.',
        sceneStyle: 'totm',
      },
    ],
    complications: [
      { text: 'The crystal is damaged but still active.', revealType: 'hidden' },
      { text: 'A local company of sellswords is protecting the wrong suspect, convinced the courier betrayed them. They have already locked down half the fair road, threatened stallholders into silence, and are treating every delay as proof someone is helping the real culprit escape.', revealType: 'conditional', dangerLevel: 'dangerous' },
    ],
    npcs: [
      {
        name: 'Mara Voss',
        role: 'Guild steward',
        vibe: 'Tired but composed',
        plus: 'Keep travellers alive and preserve the road’s peace.',
        minus: 'Lordly interference, public violence, or anyone digging too closely into her involvement.',
        secret: 'She keeps a private ranking of every pie stall at the fair.',
        incongruency: 'Despite her trader instincts, she is willing to sacrifice profit in order to de-escalate.',
        npcType: 'friendly',
        statCreatureType: 'Medium humanoid (human), lawful good',
        statArmorClass: '18 (chain mail, shield)',
        statHitPoints: '32 (5d8 + 10)',
        statSpeed: '30 ft.',
        statStr: '16 (+3)',
        statDex: '10 (+0)',
        statCon: '14 (+2)',
        statInt: '10 (+0)',
        statWis: '11 (+0)',
        statCha: '16 (+3)',
        statSavingThrows: 'Con +4, Wis +2',
        statSenses: 'passive Perception 10',
        statLanguages: 'Common',
        statChallenge: '1 (200 XP)',
        statTraits: 'Brave. Mara has advantage on saving throws against being frightened.',
        statActions: 'Multiattack. Mara makes two melee attacks.\nLongsword. Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.',
        statReactions: 'Protective Interpose. When a creature Mara can see within 5 feet is hit, she imposes disadvantage on the attack by stepping into the blow.',
      },
      {
        name: 'Talon Reed',
        role: 'Mercenary lieutenant',
        vibe: 'Aggressive, performative',
        plus: 'Find the supposed traitor quickly and look strong in front of his crew.',
        minus: 'Being embarrassed in public or admitting his company seized the wrong suspect.',
        incongruency: 'Despite the swagger, he is obsessive about keeping his tabard spotless.',
        npcType: 'enemy',
      },
      {
        name: 'Sister Elira',
        role: 'Shrine keeper',
        vibe: 'Gentle, watchful',
        plus: 'Keep the frightened fairgoers calm and stop bloodshed before it spreads.',
        minus: 'Drunken bravado, desecration, or anyone using the chaos as cover for cruelty.',
        npcType: 'neutral',
        statCreatureType: 'Medium humanoid (elf), neutral good',
        statArmorClass: '11',
        statHitPoints: '9 (2d8)',
        statSpeed: '30 ft.',
        statStr: '8 (-1)',
        statDex: '12 (+1)',
        statCon: '10 (+0)',
        statInt: '11 (+0)',
        statWis: '14 (+2)',
        statCha: '13 (+1)',
        statSenses: 'passive Perception 12',
        statLanguages: 'Common, Elvish',
        statChallenge: '1/8 (25 XP)',
        statTraits: 'Calming Presence. Elira has advantage on checks made to soothe frightened or panicked commoners.',
        statActions: 'Staff. Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage.',
      },
    ],
  },
};

const AUTOSAVE_KEY = 'cprGigPlanner.autosave.v1';
let autosaveTimer = null;
let suppressAutosave = false;
let pendingDrag = null;
let activeDrag = null;
let currentMode = DEFAULT_MODE;
let confirmModalResolver = null;
const PROJECT_CONTACT_EMAIL = 'bigulabot@gmail.com';
const PROJECT_ISSUES_URL = 'https://github.com/bigulabot/quest-and-gig-planner/issues';

function byId(id) { return document.getElementById(id); }

async function sharePlannerPage() {
  const shareData = {
    title: document.title,
    text: 'Cyberpunk RED GIG PLANNER',
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
  } catch (error) {
    if (error?.name === 'AbortError') return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(window.location.href);
      window.alert('Page link copied to clipboard.');
      return;
    }
  } catch (error) {
    // Fall through to the manual copy message below.
  }

  window.prompt('Copy this page link:', window.location.href);
}

function openContactEmail() {
  const topic = byId('contactTopic')?.value || 'Comments';
  if (!PROJECT_CONTACT_EMAIL) {
    window.alert('Email contact is not configured yet. Please use the issue tracker for now.');
    window.open(PROJECT_ISSUES_URL, '_blank', 'noopener');
    return;
  }

  const subject = encodeURIComponent(`[Gig Planner] ${topic}`);
  const body = encodeURIComponent(`Hi,\n\nTopic: ${topic}\n\n`);
  window.location.href = `mailto:${PROJECT_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function closeConfirmModal(result = false) {
  const modal = byId('confirmModal');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  const resolver = confirmModalResolver;
  confirmModalResolver = null;
  resolver?.(result);
}

function openConfirmModal({ title, message, confirmLabel = 'Continue', cancelLabel = 'Cancel' }) {
  const modal = byId('confirmModal');
  const titleNode = byId('confirmModalTitle');
  const messageNode = byId('confirmModalMessage');
  const confirmButton = byId('confirmModalConfirm');
  const cancelButton = byId('confirmModalCancel');
  if (!modal || !titleNode || !messageNode || !confirmButton || !cancelButton) {
    return Promise.resolve(window.confirm(message));
  }

  titleNode.textContent = title;
  messageNode.textContent = message;
  confirmButton.textContent = confirmLabel;
  cancelButton.textContent = cancelLabel;
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  return new Promise(resolve => {
    confirmModalResolver = resolve;
    cancelButton.focus();
  });
}

function getModeConfig(modeId) {
  return plannerModes[modeId] || plannerModes[DEFAULT_MODE];
}

function getActiveFantasyNpcSystem(systemId = null) {
  return systemId || byId('fantasyNpcSystem')?.value || DEFAULT_FANTASY_NPC_SYSTEM;
}

function getStatBlockConfig(modeId = currentMode, fantasySystemId = null) {
  const mode = getModeConfig(modeId);
  if (mode.id !== 'fantasy') return mode.statBlock;
  const resolvedSystem = getActiveFantasyNpcSystem(fantasySystemId);
  return fantasyStatBlockVariants[resolvedSystem] || fantasyStatBlockVariants[DEFAULT_FANTASY_NPC_SYSTEM] || mode.statBlock;
}

function getStatFieldDefs(modeId = currentMode, fantasySystemId = null) {
  return getStatBlockConfig(modeId, fantasySystemId).fields || [];
}

function applyModePlaceholders(modeId = currentMode, scope = document) {
  const placeholders = getModeConfig(modeId).placeholders || {};
  const topLevelMap = {
    title: placeholders.title,
    contactRole: placeholders.contactRole,
    job: placeholders.job,
    pay: placeholders.pay,
    whyNow: placeholders.whyNow,
    gmNotes: placeholders.gmNotes,
  };

  Object.entries(topLevelMap).forEach(([id, value]) => {
    if (!value) return;
    const element = scope.getElementById ? scope.getElementById(id) : scope.querySelector?.(`#${id}`);
    if (element) element.setAttribute('placeholder', value);
  });

  const corePitch = scope.getElementById ? scope.getElementById('corePitch') : scope.querySelector?.('#corePitch');
  if (corePitch && placeholders.corePitch) {
    corePitch.setAttribute('data-placeholder', placeholders.corePitch);
  }

  const scopedFields = [
    { selector: '.location-card [data-field="name"]', placeholder: placeholders.locationName },
    { selector: '.location-card [data-field="obstacle"]', placeholder: placeholders.locationObstacle },
    { selector: '.complication-card [data-field="text"]', placeholder: placeholders.complicationText },
    { selector: '.npc-card [data-field="name"]', placeholder: placeholders.npcName },
    { selector: '.npc-card [data-field="role"]', placeholder: placeholders.npcRole },
    { selector: '.npc-card [data-field="vibe"]', placeholder: placeholders.npcVibe },
    { selector: '.npc-card [data-field="plus"]', placeholder: placeholders.npcPlus },
    { selector: '.npc-card [data-field="minus"]', placeholder: placeholders.npcMinus },
    { selector: '.npc-card [data-field="secret"]', placeholder: placeholders.npcSecret },
    { selector: '.npc-card [data-field="incongruency"]', placeholder: placeholders.npcIncongruency },
  ];

  scopedFields.forEach(({ selector, placeholder }) => {
    if (!placeholder) return;
    scope.querySelectorAll?.(selector).forEach(element => {
      element.setAttribute('placeholder', placeholder);
    });
  });

  const templateFields = [
    { root: byId('locationTemplate')?.content, selector: '[data-field="name"]', placeholder: placeholders.locationName },
    { root: byId('locationTemplate')?.content, selector: '[data-field="obstacle"]', placeholder: placeholders.locationObstacle },
    { root: byId('complicationTemplate')?.content, selector: '[data-field="text"]', placeholder: placeholders.complicationText },
    { root: byId('npcTemplate')?.content, selector: '[data-field="name"]', placeholder: placeholders.npcName },
    { root: byId('npcTemplate')?.content, selector: '[data-field="role"]', placeholder: placeholders.npcRole },
    { root: byId('npcTemplate')?.content, selector: '[data-field="vibe"]', placeholder: placeholders.npcVibe },
    { root: byId('npcTemplate')?.content, selector: '[data-field="plus"]', placeholder: placeholders.npcPlus },
    { root: byId('npcTemplate')?.content, selector: '[data-field="minus"]', placeholder: placeholders.npcMinus },
    { root: byId('npcTemplate')?.content, selector: '[data-field="secret"]', placeholder: placeholders.npcSecret },
    { root: byId('npcTemplate')?.content, selector: '[data-field="incongruency"]', placeholder: placeholders.npcIncongruency },
  ];

  templateFields.forEach(({ root, selector, placeholder }) => {
    if (!root || !placeholder) return;
    root.querySelectorAll(selector).forEach(element => {
      element.setAttribute('placeholder', placeholder);
    });
  });
}

function applyStatBlockUi(modeId = currentMode, scope = document) {
  const statBlock = getStatBlockConfig(modeId);
  const fieldMap = Object.fromEntries(getStatFieldDefs(modeId).map(field => [field.key, field]));

  scope.querySelectorAll('[data-stat-label]').forEach(node => {
    const field = fieldMap[node.dataset.statLabel];
    if (field) node.textContent = field.label;
  });

  scope.querySelectorAll('[data-stat-placeholder]').forEach(node => {
    const field = fieldMap[node.dataset.statPlaceholder];
    if (field?.placeholder) {
      node.setAttribute('placeholder', field.placeholder);
    } else {
      node.removeAttribute('placeholder');
    }
  });

  scope.querySelectorAll('.statblock-toggle').forEach(button => {
    button.textContent = button.classList.contains('is-open') ? statBlock.hide : statBlock.toggle;
  });
}

function applyFantasyNpcSystemUi(modeId = currentMode) {
  const menu = byId('fantasyNpcSystemMenu');
  const section = byId('npcs-section');
  const field = byId('fantasyNpcSystem');
  if (!menu || !section || !field) return;

  const isFantasy = modeId === 'fantasy';
  menu.hidden = !isFantasy;
  if (!isFantasy) return;

  setComplicationTag(section, 'fantasyNpcSystem', '.fantasy-npc-system-toggle', field.value || DEFAULT_FANTASY_NPC_SYSTEM, 'System');
}

function getStatFieldMetaMap(modeId = currentMode, fantasySystemId = null) {
  return Object.fromEntries(getStatFieldDefs(modeId, fantasySystemId).map(field => [field.key, field]));
}

function getEditorRowClass(fields) {
  if (fields.length === 10) return 'compact-stat-grid';
  if (fields.length === 6) return 'compact-stat-grid compact-stat-grid-6';
  if (fields.length === 4) return 'compact-stat-grid compact-stat-grid-4';
  if (fields.length === 3) return 'compact-stat-grid compact-stat-grid-wide';
  if (fields.length === 2) return 'compact-stat-grid compact-stat-grid-armor';
  return 'compact-stat-grid';
}

function buildFantasyStatEditorMarkup(modeId = currentMode) {
  const statBlock = getStatBlockConfig(modeId);
  const fieldMap = getStatFieldMetaMap(modeId);
  const statRows = statBlock.editorRows.map((fields, index) => `
    <div class="${getEditorRowClass(fields)}" style="margin-top:${index === 0 ? '14px' : '14px'};">
      ${fields.map(key => {
        const field = fieldMap[key];
        return `<label class="compact-stat-field"><span>${escapeHtml(field.label)}</span><input data-field="${escapeHtml(key)}"${field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : ''} /></label>`;
      }).join('')}
    </div>
  `).join('');

  return `
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statCreatureType.label)}</label>
      <input data-field="statCreatureType"${fieldMap.statCreatureType.placeholder ? ` placeholder="${escapeHtml(fieldMap.statCreatureType.placeholder)}"` : ''} />
    </div>
    ${statRows}
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statTraits.label)}</label>
      <textarea data-field="statTraits" data-autogrow="true"${fieldMap.statTraits.placeholder ? ` placeholder="${escapeHtml(fieldMap.statTraits.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statActions.label)}</label>
      <textarea data-field="statActions" data-autogrow="true"${fieldMap.statActions.placeholder ? ` placeholder="${escapeHtml(fieldMap.statActions.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statReactions.label)}</label>
      <textarea data-field="statReactions" data-autogrow="true"${fieldMap.statReactions.placeholder ? ` placeholder="${escapeHtml(fieldMap.statReactions.placeholder)}"` : ''}></textarea>
    </div>
  `;
}

function buildGenericFantasyStatEditorMarkup(modeId = currentMode) {
  const statBlock = getStatBlockConfig(modeId, 'generic');
  const fieldMap = getStatFieldMetaMap(modeId, 'generic');
  const statRows = statBlock.editorRows.map((fields, index) => `
    <div class="${getEditorRowClass(fields)}" style="margin-top:${index === 0 ? '14px' : '14px'};">
      ${fields.map(key => {
        const field = fieldMap[key];
        return `<label class="compact-stat-field"><span>${escapeHtml(field.label)}</span><input data-field="${escapeHtml(key)}"${field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : ''} /></label>`;
      }).join('')}
    </div>
  `).join('');

  return `
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statCreatureType.label)}</label>
      <input data-field="statCreatureType"${fieldMap.statCreatureType.placeholder ? ` placeholder="${escapeHtml(fieldMap.statCreatureType.placeholder)}"` : ''} />
    </div>
    ${statRows}
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statAttacks.label)}</label>
      <textarea data-field="statAttacks" data-autogrow="true"${fieldMap.statAttacks.placeholder ? ` placeholder="${escapeHtml(fieldMap.statAttacks.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statTraits.label)}</label>
      <textarea data-field="statTraits" data-autogrow="true"${fieldMap.statTraits.placeholder ? ` placeholder="${escapeHtml(fieldMap.statTraits.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statBehaviour.label)}</label>
      <textarea data-field="statBehaviour" data-autogrow="true"${fieldMap.statBehaviour.placeholder ? ` placeholder="${escapeHtml(fieldMap.statBehaviour.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statLoot.label)}</label>
      <textarea data-field="statLoot" data-autogrow="true"${fieldMap.statLoot.placeholder ? ` placeholder="${escapeHtml(fieldMap.statLoot.placeholder)}"` : ''}></textarea>
    </div>
  `;
}

function buildNimbleStatEditorMarkup(modeId = currentMode) {
  const statBlock = getStatBlockConfig(modeId, 'nimble');
  const fieldMap = getStatFieldMetaMap(modeId, 'nimble');
  const statRows = statBlock.editorRows.map((fields, index) => `
    <div class="${getEditorRowClass(fields)}" style="margin-top:${index === 0 ? '14px' : '14px'};">
      ${fields.map(key => {
        const field = fieldMap[key];
        return `<label class="compact-stat-field"><span>${escapeHtml(field.label)}</span><input data-field="${escapeHtml(key)}"${field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : ''} /></label>`;
      }).join('')}
    </div>
  `).join('');

  return `
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statCreatureType.label)}</label>
      <input data-field="statCreatureType"${fieldMap.statCreatureType.placeholder ? ` placeholder="${escapeHtml(fieldMap.statCreatureType.placeholder)}"` : ''} />
    </div>
    ${statRows}
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statTraits.label)}</label>
      <textarea data-field="statTraits" data-autogrow="true"${fieldMap.statTraits.placeholder ? ` placeholder="${escapeHtml(fieldMap.statTraits.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statActions.label)}</label>
      <textarea data-field="statActions" data-autogrow="true"${fieldMap.statActions.placeholder ? ` placeholder="${escapeHtml(fieldMap.statActions.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statBloodied.label)}</label>
      <textarea data-field="statBloodied" data-autogrow="true"${fieldMap.statBloodied.placeholder ? ` placeholder="${escapeHtml(fieldMap.statBloodied.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statLastStand.label)}</label>
      <textarea data-field="statLastStand" data-autogrow="true"${fieldMap.statLastStand.placeholder ? ` placeholder="${escapeHtml(fieldMap.statLastStand.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statNotes.label)}</label>
      <textarea data-field="statNotes" data-autogrow="true"${fieldMap.statNotes.placeholder ? ` placeholder="${escapeHtml(fieldMap.statNotes.placeholder)}"` : ''}></textarea>
    </div>
  `;
}

function buildStatEditorMarkup(modeId = currentMode) {
  const statBlock = getStatBlockConfig(modeId);
  if (statBlock.layout === 'fantasy-generic') return buildGenericFantasyStatEditorMarkup(modeId);
  if (statBlock.layout === 'fantasy') return buildFantasyStatEditorMarkup(modeId);
  if (statBlock.layout === 'fantasy-nimble') return buildNimbleStatEditorMarkup(modeId);
  const fieldMap = getStatFieldMetaMap(modeId);
  const statRows = statBlock.editorRows.map((fields, index) => `
    <div class="${getEditorRowClass(fields)}" style="margin-top:${index === 0 ? '14px' : '14px'};">
      ${fields.map(key => {
        const field = fieldMap[key];
        return `<label class="compact-stat-field"><span>${escapeHtml(field.label)}</span><input data-field="${escapeHtml(key)}"${field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : ''} /></label>`;
      }).join('')}
    </div>
  `).join('');

  const weaponFields = ['statWeapon1', 'statWeapon2', 'statWeapon3'].map(key => {
    const field = fieldMap[key];
    const damageField = fieldMap[`${key}Damage`];
    return `
      <div style="margin-top:14px;">
        <label>${escapeHtml(field.label)}</label>
        <div class="grid grid-2">
          <input data-field="${escapeHtml(key)}"${field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : ''} />
          <input data-field="${escapeHtml(`${key}Damage`)}"${damageField?.placeholder ? ` placeholder="${escapeHtml(damageField.placeholder)}"` : ''} />
        </div>
      </div>
    `;
  }).join('');

  return `
    ${statRows}
    ${weaponFields}
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statSkills.label)}</label>
      <textarea data-field="statSkills"${fieldMap.statSkills.placeholder ? ` placeholder="${escapeHtml(fieldMap.statSkills.placeholder)}"` : ''}></textarea>
    </div>
    <div style="margin-top:14px;">
      <label>${escapeHtml(fieldMap.statGear.label)}</label>
      <textarea data-field="statGear"${fieldMap.statGear.placeholder ? ` placeholder="${escapeHtml(fieldMap.statGear.placeholder)}"` : ''}></textarea>
    </div>
  `;
}

function bindNpcStatBlockFields(card, data = {}) {
  const details = card.querySelector('.npc-statblock-details');
  if (!details) return;

  details.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    input.value = data[key] || '';
    bindAutoGrowField(input);
    input.addEventListener('input', () => {
      refreshCardSummary(card);
      renderPreview();
    });
  });
}

function renderNpcStatBlockEditor(card, data = {}) {
  const details = card.querySelector('.npc-statblock-details');
  if (!details) return;
  details.innerHTML = buildStatEditorMarkup(currentMode);
  bindNpcStatBlockFields(card, data);
}

function rerenderNpcStatBlockEditors() {
  document.querySelectorAll('.npc-card').forEach(card => {
    const details = card.querySelector('.npc-statblock-details');
    const button = card.querySelector('.statblock-toggle');
    if (!details || !button) return;

    const currentData = {};
    details.querySelectorAll('[data-field]').forEach(input => {
      currentData[input.dataset.field] = input.value;
    });
    const isOpen = details.style.display !== 'none';

    renderNpcStatBlockEditor(card, currentData);
    details.style.display = isOpen ? 'block' : 'none';
    button.classList.toggle('is-open', isOpen);
  });
  applyStatBlockUi(currentMode);
  applyNpcTypeOptionVisibility(document, currentMode);
}

function applyMode(modeId, options = {}) {
  const { persist = true } = options;
  const mode = getModeConfig(modeId);
  currentMode = mode.id;

  document.body.classList.remove(...Object.values(plannerModes).map(item => item.themeClass));
  document.body.classList.add(mode.themeClass);

  const plannerTitle = byId('plannerTitle');
  const plannerSubtitle = byId('plannerSubtitle');
  if (plannerTitle) plannerTitle.innerHTML = mode.plannerTitle;
  if (plannerSubtitle) plannerSubtitle.textContent = mode.subtitle;
  const formatSelect = byId('format');
  const previousFormat = formatSelect?.value || '';
  document.title = mode.browserTitle || `${mode.label} Planner`;

  if (formatSelect) {
    formatSelect.innerHTML = ['<option value=""></option>', ...mode.formatOptions.map(option => `<option>${escapeHtml(option)}</option>`)].join('');
    if (mode.formatOptions.includes(previousFormat)) {
      formatSelect.value = previousFormat;
    }
  }

  const labelMap = {
    navHomeLink: mode.labels.home,
    navHookLink: mode.labels.hook,
    navLocationsLink: mode.labels.navLocations,
    navEncountersLink: mode.labels.navEncounters,
    navNpcsLink: mode.labels.navNpcs,
    navDevelopmentsLink: mode.labels.developments,
    navGmNotesLink: mode.labels.gmNotes,
    hookSectionTitle: mode.labels.hook,
    locationsSectionTitle: mode.labels.locations,
    encountersSectionTitle: mode.labels.encounters,
    npcsSectionTitle: mode.labels.npcs,
    developmentsSectionTitle: mode.labels.developments,
    gmNotesSectionTitle: mode.labels.gmNotes,
    formatLabel: mode.labels.gigType,
    newQuestBtn: mode.buttons.newGig,
    exportJsonBtn: mode.buttons.saveGig,
    loadDemoBtn: mode.buttons.demoGig,
    importJsonBtn: mode.buttons.loadGig,
    printBtn: mode.buttons.printGig,
    printBtnBottom: mode.buttons.printGig,
  };

  Object.entries(labelMap).forEach(([id, value]) => {
    const element = byId(id);
    if (!element) return;
    if (id === 'printBtn' || id === 'printBtnBottom') {
      const safeLabel = escapeHtml(value || '').replace(/\*$/, '<span class="button-note-mark" aria-hidden="true">*</span>');
      element.innerHTML = `<span class="button-label">${safeLabel}</span>`;
      return;
    }
    element.textContent = value;
  });

  applyModePlaceholders(mode.id);
  rerenderNpcStatBlockEditors();
  applyStatBlockUi(mode.id);
  applyFantasyNpcSystemUi(mode.id);
  applyNpcTypeOptionVisibility(document, mode.id);

  document.querySelectorAll('.mode-tab').forEach(button => {
    const isActive = button.dataset.mode === mode.id;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  if (persist) renderPreview();
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function getDemoData(modeId = currentMode) {
  return cloneData(demoDataByMode[modeId] || demoDataByMode[DEFAULT_MODE]);
}

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

function getAutosaveStorage() {
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

function persistAutosaveNow() {
  if (suppressAutosave) return;
  const storage = getAutosaveStorage();
  if (!storage) return;

  try {
    storage.setItem(AUTOSAVE_KEY, JSON.stringify({
      savedAt: new Date().toISOString(),
      data: gatherData(),
    }));
  } catch (error) {
    // Ignore storage failures silently so local editing still works.
  }
}

function scheduleAutosave() {
  if (suppressAutosave) return;
  window.clearTimeout(autosaveTimer);
  autosaveTimer = window.setTimeout(() => {
    persistAutosaveNow();
  }, 250);
}

function loadAutosaveData() {
  const storage = getAutosaveStorage();
  if (!storage) return null;

  try {
    const raw = storage.getItem(AUTOSAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && parsed.data && typeof parsed.data === 'object'
      ? parsed.data
      : null;
  } catch (error) {
    return null;
  }
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

function autosizeCardFields(scope) {
  if (!scope) return;
  scope.querySelectorAll('textarea[data-autogrow="true"]').forEach(autosizeTextarea);
}

function getDragAfterElement(container, pointerY) {
  const cards = [...container.querySelectorAll('.item-card:not(.is-drag-source)')];

  return cards.reduce((closest, card) => {
    const rect = card.getBoundingClientRect();
    const offset = pointerY - rect.top - rect.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, element: card };
    }

    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}

function moveDragGhost(clientX, clientY) {
  if (!activeDrag) return;
  const { ghost, offsetX, offsetY } = activeDrag;
  ghost.style.left = `${Math.round(clientX - offsetX)}px`;
  ghost.style.top = `${Math.round(clientY - offsetY)}px`;
}

function updateDragPlaceholder(clientY) {
  if (!activeDrag) return;
  const { container, placeholder } = activeDrag;
  const afterElement = getDragAfterElement(container, clientY);
  if (!afterElement) {
    container.appendChild(placeholder);
  } else if (afterElement !== placeholder) {
    container.insertBefore(placeholder, afterElement);
  }
}

function finishCustomDrag(commitMove) {
  if (!activeDrag) return;

  const { card, placeholder, ghost } = activeDrag;
  if (commitMove && placeholder.parentNode) {
    placeholder.parentNode.insertBefore(card, placeholder);
  }

  card.classList.remove('is-drag-source');
  card.style.display = '';
  placeholder.remove();
  ghost.remove();
  activeDrag = null;
  pendingDrag = null;
  renderPreview();
}

function onGlobalPointerMove(event) {
  if (activeDrag) {
    event.preventDefault();
    moveDragGhost(event.clientX, event.clientY);
    updateDragPlaceholder(event.clientY);
    return;
  }

  if (!pendingDrag) return;

  const deltaX = event.clientX - pendingDrag.startX;
  const deltaY = event.clientY - pendingDrag.startY;
  if (Math.hypot(deltaX, deltaY) < 6) return;

  const { card, container, startX, startY } = pendingDrag;
  const rect = card.getBoundingClientRect();
  const ghost = card.cloneNode(true);
  ghost.classList.add('drag-ghost');
  ghost.style.width = `${Math.round(rect.width)}px`;
  ghost.style.height = `${Math.round(rect.height)}px`;
  ghost.style.left = `${Math.round(rect.left)}px`;
  ghost.style.top = `${Math.round(rect.top)}px`;
  document.body.appendChild(ghost);

  const placeholder = document.createElement('div');
  placeholder.className = 'drag-placeholder';
  placeholder.style.height = `${Math.round(rect.height)}px`;
  container.insertBefore(placeholder, card.nextSibling);

  card.classList.add('is-drag-source');
  card.style.display = 'none';

  activeDrag = {
    card,
    container,
    ghost,
    placeholder,
    offsetX: startX - rect.left,
    offsetY: startY - rect.top,
  };

  moveDragGhost(event.clientX, event.clientY);
  updateDragPlaceholder(event.clientY);
}

function onGlobalPointerUp() {
  if (activeDrag) {
    finishCustomDrag(true);
    return;
  }

  pendingDrag = null;
}

function setupSortableContainer(container) {
  if (!container || container.dataset.sortableBound === 'true') return;
  container.dataset.sortableBound = 'true';
}

function setupSortableCard(card, container) {
  if (!container) return;

  card.classList.add('drag-handle');

  card.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    if (document.body.classList.contains('type-menu-open')) return;
    if (event.target.closest('button, input, textarea, select, a, label, .type-menu-popup, .rich-editor')) return;
    event.preventDefault();
    window.getSelection?.().removeAllRanges();

    pendingDrag = {
      card,
      container,
      startX: event.clientX,
      startY: event.clientY,
    };
  });
}

function animateCardEntry(card) {
  if (!card) return;
  card.classList.remove('card-enter');
  window.requestAnimationFrame(() => {
    card.classList.add('card-enter');
    window.setTimeout(() => {
      card.classList.remove('card-enter');
    }, 260);
  });
}

function summarizeCard(card) {
  const emptyStates = getModeConfig(currentMode).emptyStates;
  if (card.classList.contains('location-card')) {
    const name = card.querySelector('[data-field="name"]')?.value.trim();
    const obstacle = card.querySelector('[data-field="obstacle"]')?.value.trim();
    const what = card.querySelector('[data-field="what"]')?.value.trim();
    return [name || emptyStates.untitledLocation, obstacle, what].filter(Boolean).join(' | ');
  }

  if (card.classList.contains('complication-card')) {
    const text = card.querySelector('[data-field="text"]')?.value.trim();
    return text || emptyStates.emptyComplication;
  }

  if (card.classList.contains('npc-card')) {
    const name = card.querySelector('[data-field="name"]')?.value.trim();
    const role = card.querySelector('[data-field="role"]')?.value.trim();
    const vibe = card.querySelector('[data-field="vibe"]')?.value.trim();
    return [name || emptyStates.untitledNpc, role, vibe].filter(Boolean).join(' | ');
  }

  return '';
}

function refreshCardSummary(card) {
  const summary = card.querySelector('.item-card-summary');
  if (!summary) return;
  summary.textContent = summarizeCard(card);
}

function setCardCollapsed(card, isCollapsed) {
  const body = card.querySelector('.item-card-body');
  const summary = card.querySelector('.item-card-summary');
  if (!body || !summary) return;

  card.classList.toggle('is-collapsed', isCollapsed);
  body.hidden = isCollapsed;
  refreshCardSummary(card);
  summary.hidden = !isCollapsed;
}

function toggleSectionCards(sectionId, cardSelector) {
  const section = byId(sectionId);
  if (!section) return;

  const cards = [...section.querySelectorAll(cardSelector)];
  if (!cards.length) return;

  const shouldCollapse = cards.some(card => !card.classList.contains('is-collapsed'));
  cards.forEach(card => setCardCollapsed(card, shouldCollapse));
}

function setupCollapsibleCard(card) {
  card.addEventListener('dblclick', event => {
    if (event.target.closest('input, textarea, select, button, a, label, .type-menu-popup')) return;
    event.preventDefault();
    const isCollapsed = card.classList.contains('is-collapsed');
    setCardCollapsed(card, !isCollapsed);
    window.getSelection?.().removeAllRanges();
    card.classList.remove('card-toggle-flash');
    window.requestAnimationFrame(() => {
      card.classList.add('card-toggle-flash');
      window.setTimeout(() => {
        card.classList.remove('card-toggle-flash');
      }, 180);
    });
  });

  setCardCollapsed(card, false);
}

function setupSectionCollapseShortcut(sectionId, cardSelector) {
  const section = byId(sectionId);
  const title = section?.querySelector('.section-title');
  if (!section || !title || title.dataset.bulkCollapseBound === 'true') return;

  title.addEventListener('dblclick', event => {
    if (event.target.closest('button, a, input, textarea, select, label')) return;
    event.preventDefault();
    toggleSectionCards(sectionId, cardSelector);
    window.getSelection?.().removeAllRanges();
  });

  title.dataset.bulkCollapseBound = 'true';
}

function closeAllNpcStatBlocks(exceptCard = null) {
  const statBlock = getStatBlockConfig();
  document.querySelectorAll('.npc-card').forEach(card => {
    if (exceptCard && card === exceptCard) return;
    const details = card.querySelector('.npc-statblock-details');
    const button = card.querySelector('.statblock-toggle');
    if (!details || !button) return;
    details.style.display = 'none';
    button.classList.remove('is-open');
    button.textContent = statBlock.toggle;
  });
}

function addLocation(data = {}, options = {}) {
  const { prepend = true } = options;
  const container = byId('locations');
  const tpl = byId('locationTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      input.value = data[key] || '';
      bindAutoGrowField(input);
      input.addEventListener('input', () => {
        refreshCardSummary(tpl);
        renderPreview();
      });
    }
  });
  tpl.querySelector('.remove-btn').addEventListener('click', () => {
    tpl.remove();
    renderPreview();
  });
  setupCollapsibleCard(tpl);
  setupSortableContainer(container);
  setupSortableCard(tpl, container);
  tpl.querySelectorAll('.type-menu').forEach(menuWrap => {
    const toggleButton = menuWrap.querySelector('.type-menu-toggle');
    const menu = menuWrap.querySelector('.type-menu-popup');
    toggleButton.addEventListener('click', event => {
      event.stopPropagation();
      document.querySelectorAll('.type-menu-popup').forEach(otherMenu => {
        if (otherMenu !== menu) otherMenu.hidden = true;
      });
      menu.hidden = !menu.hidden;
      updateTypeMenuState();
    });
  });
  hydrateTypeOptionIcons(tpl);
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      setComplicationTag(tpl, 'sceneStyle', '.location-style-toggle', option.dataset.type, 'Scene style');
      option.closest('.type-menu-popup').hidden = true;
      updateTypeMenuState();
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'sceneStyle', '.location-style-toggle', data.sceneStyle || '', 'Scene style');
  if (prepend) {
    container.prepend(tpl);
  } else {
    container.appendChild(tpl);
  }
  autosizeCardFields(tpl);
  animateCardEntry(tpl);
  refreshCardSummary(tpl);
  renderPreview();
}

function updateComplicationNumbers() {
  return document.querySelectorAll('.complication-card').length;
}

function getSceneStyleMeta(style) {
  return tagMeta.sceneStyle[style] || null;
}

function getComplicationTypeMeta(type) {
  return tagMeta.complicationType[type] || null;
}

function getDangerLevelMeta(level) {
  return tagMeta.dangerLevel[level] || null;
}

function getNpcTypeMeta(type) {
  return tagMeta.npcType[type] || null;
}

function getFantasyNpcSystemMeta(system, modeId = currentMode) {
  if (modeId !== 'fantasy') return null;
  const resolvedSystem = system || DEFAULT_FANTASY_NPC_SYSTEM;
  return tagMeta.fantasyNpcSystem[resolvedSystem] || tagMeta.fantasyNpcSystem[DEFAULT_FANTASY_NPC_SYSTEM] || null;
}

function getTagMeta(fieldName, type) {
  return fieldName === 'dangerLevel'
    ? getDangerLevelMeta(type)
    : fieldName === 'sceneStyle'
      ? getSceneStyleMeta(type)
    : fieldName === 'npcType'
      ? getNpcTypeMeta(type)
      : fieldName === 'fantasyNpcSystem'
        ? getFantasyNpcSystemMeta(type)
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

function applyNpcTypeOptionVisibility(scope, modeId = currentMode) {
  scope.querySelectorAll('.npc-type-fantasy-only').forEach(option => {
    option.hidden = modeId !== 'fantasy';
  });
}

function npcHasStatBlockData(npc, modeId = currentMode) {
  return getStatFieldDefs(modeId).some(field => hasMeaningfulValue(npc[field.key]));
}

function getCardData(card, options = {}) {
  const { respectAdvancedToggle = true } = options;
  const obj = {};
  card.querySelectorAll('[data-field]').forEach(field => {
    const advancedWrap = field.closest('.npc-advanced');
    const statWrap = field.closest('.npc-statblock-details');
    if (statWrap) {
      obj[field.dataset.field] = field.value.trim();
    } else if (advancedWrap) {
      const toggle = card.querySelector('[data-toggle="advanced"]');
      obj[field.dataset.field] = respectAdvancedToggle && toggle && !toggle.checked ? '' : field.value.trim();
    } else {
      obj[field.dataset.field] = field.value.trim();
    }
  });
  return obj;
}

function setComplicationTag(card, fieldName, buttonSelector, type, placeholder) {
  const hidden = card.querySelector(`[data-field="${fieldName}"]`);
  const button = card.querySelector(buttonSelector);
  const meta = getTagMeta(fieldName, type);
  const label = meta?.label || placeholder;

  hidden.value = meta ? type : '';
  button.classList.toggle('is-placeholder', !meta);
  button.innerHTML = meta?.icon ? renderIconImage(meta.icon, meta.label) : escapeHtml(label);
  button.title = label;
}

function updateTypeMenuState() {
  const openMenus = [...document.querySelectorAll('.type-menu-popup:not([hidden])')];
  const openCards = new Set(openMenus.map(menu => menu.closest('.item-card')).filter(Boolean));

  document.querySelectorAll('.item-card.has-open-type-menu').forEach(card => {
    if (!openCards.has(card)) card.classList.remove('has-open-type-menu');
  });
  openCards.forEach(card => card.classList.add('has-open-type-menu'));

  document.body.classList.toggle('type-menu-open', openMenus.length > 0);
}

function addComplication(data = {}, options = {}) {
  const { prepend = true } = options;
  const container = byId('complicationsList');
  const tpl = byId('complicationTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    input.value = data[key] || '';
    bindAutoGrowField(input);
    input.addEventListener('input', () => {
      refreshCardSummary(tpl);
      renderPreview();
    });
  });
  tpl.querySelector('.remove-btn').addEventListener('click', () => {
    tpl.remove();
    updateComplicationNumbers();
    renderPreview();
  });
  setupCollapsibleCard(tpl);
  setupSortableContainer(container);
  setupSortableCard(tpl, container);
  tpl.querySelectorAll('.type-menu').forEach(menuWrap => {
    const toggle = menuWrap.querySelector('.type-menu-toggle');
    const menu = menuWrap.querySelector('.type-menu-popup');
    toggle.addEventListener('click', event => {
      event.stopPropagation();
      document.querySelectorAll('.type-menu-popup').forEach(otherMenu => {
        if (otherMenu !== menu) otherMenu.hidden = true;
      });
      menu.hidden = !menu.hidden;
      updateTypeMenuState();
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
      updateTypeMenuState();
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'revealType', '.complication-type-toggle', data.revealType || '', 'Choose complication type');
  setComplicationTag(tpl, 'dangerLevel', '.complication-danger-toggle', data.dangerLevel || '', 'Choose danger level');
  if (prepend) {
    container.prepend(tpl);
  } else {
    container.appendChild(tpl);
  }
  autosizeCardFields(tpl);
  animateCardEntry(tpl);
  refreshCardSummary(tpl);
  updateComplicationNumbers();
  renderPreview();
}

function addNpc(data = {}, options = {}) {
  const { prepend = true, afterCard = null, openAdvanced = null, openStatBlock = null } = options;
  const container = byId('npcs');
  const tpl = byId('npcTemplate').content.firstElementChild.cloneNode(true);
  tpl.querySelectorAll('[data-field]').forEach(input => {
    const key = input.dataset.field;
    if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
      input.value = data[key] || '';
      bindAutoGrowField(input);
      input.addEventListener('input', () => {
        refreshCardSummary(tpl);
        renderPreview();
      });
    }
  });
  setupCollapsibleCard(tpl);
  setupSortableContainer(container);
  setupSortableCard(tpl, container);

  const toggle = tpl.querySelector('[data-toggle="advanced"]');
  const advanced = tpl.querySelector('.npc-advanced');
  const statDetails = tpl.querySelector('.npc-statblock-details');
  const statToggleButton = tpl.querySelector('.statblock-toggle');
  const statBlock = getStatBlockConfig();
  renderNpcStatBlockEditor(tpl, data);
  const hasStatBlock = npcHasStatBlockData(data);
  const hasAdvanced = Boolean(
    (data.secret && data.secret.trim()) ||
    (data.incongruency && data.incongruency.trim()) ||
    hasStatBlock
  );
  const advancedOpen = openAdvanced ?? hasAdvanced;
  toggle.checked = advancedOpen;
  advanced.style.display = advancedOpen ? 'block' : 'none';
  if (advancedOpen) {
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
      statToggleButton.textContent = statBlock.toggle;
    }
    refreshCardSummary(tpl);
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
      statToggleButton.textContent = statBlock.toggle;
    } else {
      closeAllNpcStatBlocks(tpl);
      statDetails.style.display = 'block';
      statToggleButton.classList.add('is-open');
      statToggleButton.textContent = statBlock.hide;
    }
    renderPreview();
  });
  tpl.querySelector('.duplicate-npc-btn')?.addEventListener('click', () => {
    const duplicateData = getCardData(tpl, { respectAdvancedToggle: false });
    addNpc(duplicateData, {
      prepend: false,
      afterCard: tpl,
      openAdvanced: toggle.checked,
      openStatBlock: statDetails.style.display !== 'none',
    });
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
      updateTypeMenuState();
    });
  });
  hydrateTypeOptionIcons(tpl);
  applyNpcTypeOptionVisibility(tpl, currentMode);
  tpl.querySelectorAll('.type-option').forEach(option => {
    option.addEventListener('click', () => {
      setComplicationTag(tpl, 'npcType', '.npc-type-toggle', option.dataset.type, 'NPC type');
      option.closest('.type-menu-popup').hidden = true;
      updateTypeMenuState();
      renderPreview();
    });
  });
  setComplicationTag(tpl, 'npcType', '.npc-type-toggle', data.npcType || '', 'NPC type');
  if (afterCard && afterCard.parentNode === container) {
    afterCard.insertAdjacentElement('afterend', tpl);
  } else if (prepend) {
    container.prepend(tpl);
  } else {
    container.appendChild(tpl);
  }
  applyStatBlockUi(currentMode, tpl);
  if (openStatBlock) {
    statDetails.style.display = 'block';
    statToggleButton.classList.add('is-open');
    statToggleButton.textContent = statBlock.hide;
  }
  autosizeCardFields(tpl);
  animateCardEntry(tpl);
  refreshCardSummary(tpl);
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
  data.mode = currentMode;
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

function hasCurrentModeStatBlockData() {
  return gatherData().npcs.some(npc => npcHasStatBlockData(npc, currentMode));
}

function hasFantasyNpcStatBlockData() {
  if (currentMode !== 'fantasy') return false;
  return gatherData().npcs.some(npc => npcHasStatBlockData(npc, 'fantasy'));
}

function clearCurrentModeStatBlockData() {
  const statKeys = new Set(getStatFieldDefs(currentMode).map(field => field.key));
  const statBlock = getStatBlockConfig(currentMode);

  document.querySelectorAll('.npc-card').forEach(card => {
    card.querySelectorAll('.npc-statblock-details [data-field]').forEach(field => {
      if (!statKeys.has(field.dataset.field)) return;
      field.value = '';
      if (field.tagName === 'TEXTAREA') autosizeTextarea(field);
    });

    const details = card.querySelector('.npc-statblock-details');
    const button = card.querySelector('.statblock-toggle');
    if (details && button) {
      details.style.display = 'none';
      button.classList.remove('is-open');
      button.textContent = statBlock.toggle;
    }

    refreshCardSummary(card);
  });
}

function clearFantasyNpcStatBlockData() {
  const previousMode = currentMode;
  currentMode = 'fantasy';
  try {
    clearCurrentModeStatBlockData();
  } finally {
    currentMode = previousMode;
  }
}

async function requestModeSwitch(modeId) {
  if (modeId === currentMode) return;
  if (hasCurrentModeStatBlockData()) {
    const confirmed = await openConfirmModal({
      title: 'Switch planner mode?',
      message: 'Switching modes will delete all existing NPC stat block data in this planner.',
      confirmLabel: 'Switch mode',
    });
    if (!confirmed) return;
    clearCurrentModeStatBlockData();
  }
  applyMode(modeId);
}

function renderPreview() {
  const data = gatherData();
  scheduleAutosave();
  return data;
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

function buildStatWeapons(npc, statLabels) {
  const rows = [
    [npc.statWeapon1, npc.statWeapon1Damage],
    [npc.statWeapon2, npc.statWeapon2Damage],
    [npc.statWeapon3, npc.statWeapon3Damage],
  ];

  return `
    <div class="stat-panel">
      <div class="stat-panel-head">${escapeHtml(statLabels.weapons)}</div>
      <div class="stat-panel-body">
        <table class="stat-table">
          ${rows.map(([name, dmg]) => `<tr><td>${escapeHtml(name || '-')}</td><td>${escapeHtml(dmg || '-')}</td></tr>`).join('')}
        </table>
      </div>
    </div>
  `;
}

function buildStatArmor(npc, statLabels) {
  return `
    <div class="stat-panel">
      <div class="stat-panel-head">${escapeHtml(statLabels.armor)}</div>
      <div class="stat-panel-body">
        <table class="stat-table">
          <tr><td>${escapeHtml(statLabels.armorHead)}</td><td>${escapeHtml(npc.statArmorHead || '-')}</td></tr>
          <tr><td>${escapeHtml(statLabels.armorBody)}</td><td>${escapeHtml(npc.statArmorBody || '-')}</td></tr>
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

function getStatPrintRowClass(fields) {
  return `stat-row-${fields.length}`;
}

function buildStatPrintRow(fields, npc, fieldMap) {
  return `
    <div class="${getStatPrintRowClass(fields)}">
      ${fields.map(key => buildStatBox(fieldMap[key]?.label || key, npc[key])).join('')}
    </div>
  `;
}

function buildFantasyStatLine(label, value) {
  return `
    <div class="fantasy-stat-line">
      <strong>${escapeHtml(label)}</strong>
      <span>${hasMeaningfulValue(value) ? escapeHtml(value) : '&nbsp;'}</span>
    </div>
  `;
}

function buildFantasyAbilityRow(fields, npc, fieldMap) {
  return `
    <div class="fantasy-stat-abilities">
      ${fields.map(key => `
        <div class="fantasy-stat-ability">
          <strong>${escapeHtml(fieldMap[key]?.label || key)}</strong>
          <span>${hasMeaningfulValue(npc[key]) ? escapeHtml(npc[key]) : '&nbsp;'}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function buildFantasyStatSection(label, value) {
  return `
    <section class="fantasy-stat-section">
      <h5>${escapeHtml(label)}</h5>
      <div class="fantasy-stat-section-body">${hasMeaningfulValue(value) ? escapeHtml(value).replace(/\n/g, '<br />') : '&nbsp;'}</div>
    </section>
  `;
}

function splitFirstParagraph(value) {
  if (!hasMeaningfulValue(value)) return { first: '', rest: '' };
  const normalized = String(value).trim();
  const parts = normalized.split(/\n+/).map(part => part.trim()).filter(Boolean);
  return {
    first: parts[0] || '',
    rest: parts.slice(1).join('\n'),
  };
}

function formatInlineSection(value) {
  if (!hasMeaningfulValue(value)) return '';
  return escapeHtml(value).replace(/\n/g, '<br />');
}

function buildNimbleNpcStatPages(npcs, mode, fantasyNpcSystem = DEFAULT_FANTASY_NPC_SYSTEM) {
  const statNpcs = npcs.filter(npc => npcHasStatBlockData(npc, mode.id));
  if (!statNpcs.length) return '';
  const fieldMap = getStatFieldMetaMap(mode.id, fantasyNpcSystem);
  const pages = [];
  for (let index = 0; index < statNpcs.length; index += 6) {
    pages.push(statNpcs.slice(index, index + 6));
  }

  return pages.map(pageNpcs => `
    <article class="print-sheet stat-card-page fantasy-stat-page">
      <div class="stat-card-stack fantasy-stat-stack fantasy-stat-stack-nimble">
        ${pageNpcs.map(npc => {
          const feature = splitFirstParagraph(npc.statTraits);
          return `
          <div class="fantasy-stat-card fantasy-stat-card-nimble nimble-stat-card">
            <div class="fantasy-stat-header">
              <div class="nimble-stat-topline">
              <div class="nimble-stat-meta-left">${[
                hasMeaningfulValue(npc.statLevel) ? `Level ${escapeHtml(npc.statLevel)}` : '',
                hasMeaningfulValue(npc.statCreatureType) ? escapeHtml(npc.statCreatureType) : '',
                hasMeaningfulValue(npc.statSize) ? escapeHtml(npc.statSize) : '',
              ].filter(Boolean).join(' ') || '&nbsp;'}</div>
              <div class="nimble-stat-meta-right">
                  ${hasMeaningfulValue(npc.statArmorClass) ? `<span>${escapeHtml(npc.statArmorClass)}</span>` : ''}
                  ${hasMeaningfulValue(npc.statHitPoints) ? `<span class="nimble-stat-meta-item nimble-stat-meta-item-heart"><span class="nimble-stat-meta-icon" aria-hidden="true"></span>${escapeHtml(npc.statHitPoints)}</span>` : ''}
                  ${hasMeaningfulValue(npc.statSpeed) ? `<span class="nimble-stat-meta-item nimble-stat-meta-item-speed"><span class="nimble-stat-meta-icon" aria-hidden="true"></span>${escapeHtml(npc.statSpeed)}</span>` : ''}
                </div>
              </div>
              <div class="fantasy-stat-title nimble-stat-title">${escapeHtml(npc.name || mode.emptyStates.fallbackNpcTitle)}</div>
              ${npc.role ? `<div class="fantasy-stat-role">${escapeHtml(npc.role)}</div>` : ''}
            </div>
            ${feature.first ? `<div class="nimble-stat-banner">${formatInlineSection(feature.first)}</div>` : ''}
            <div class="nimble-stat-rule"></div>
            <div class="nimble-stat-block">
              <div class="nimble-stat-actions">
                <strong>${escapeHtml(fieldMap.statActions.label)}:</strong> ${formatInlineSection(npc.statActions) || '&nbsp;'}
              </div>
            </div>
            <div class="nimble-stat-rule"></div>
            <div class="nimble-stat-footer">
              ${hasMeaningfulValue(npc.statBloodied) ? `<div class="nimble-stat-footer-line"><strong>${escapeHtml(fieldMap.statBloodied.label)}:</strong> ${formatInlineSection(npc.statBloodied)}</div>` : ''}
              ${hasMeaningfulValue(npc.statLastStand) ? `<div class="nimble-stat-footer-line"><strong>${escapeHtml(fieldMap.statLastStand.label)}:</strong> ${formatInlineSection(npc.statLastStand)}</div>` : ''}
              ${hasMeaningfulValue(npc.statNotes) ? `<div class="nimble-stat-footer-line"><strong>${escapeHtml(fieldMap.statNotes.label)}:</strong> ${formatInlineSection(npc.statNotes)}</div>` : ''}
              ${feature.rest ? `<div class="nimble-stat-footer-line"><strong>${escapeHtml(fieldMap.statTraits.label)}:</strong> ${formatInlineSection(feature.rest)}</div>` : ''}
              <div class="nimble-stat-builder">
                ${[
                  hasMeaningfulValue(npc.statDamagePerRound) ? `${escapeHtml(fieldMap.statDamagePerRound.label)} ${escapeHtml(npc.statDamagePerRound)}` : '',
                  hasMeaningfulValue(npc.statAttackDice) ? `${escapeHtml(fieldMap.statAttackDice.label)} ${escapeHtml(npc.statAttackDice)}` : '',
                  hasMeaningfulValue(npc.statSaveDc) ? `${escapeHtml(fieldMap.statSaveDc.label)} ${escapeHtml(npc.statSaveDc)}` : '',
                  hasMeaningfulValue(npc.statChallenge) ? `${escapeHtml(fieldMap.statChallenge.label)} ${escapeHtml(npc.statChallenge)}` : '',
                ].filter(Boolean).join(' • ')}
              </div>
            </div>
          </div>
        `;}).join('')}
      </div>
    </article>
  `).join('');
}

function buildGenericFantasyNpcStatPages(npcs, mode, fantasyNpcSystem = DEFAULT_FANTASY_NPC_SYSTEM) {
  const statNpcs = npcs.filter(npc => npcHasStatBlockData(npc, mode.id));
  if (!statNpcs.length) return '';
  const fieldMap = getStatFieldMetaMap(mode.id, fantasyNpcSystem);
  const pages = [];
  for (let index = 0; index < statNpcs.length; index += 4) {
    pages.push(statNpcs.slice(index, index + 4));
  }

  return pages.map(pageNpcs => `
    <article class="print-sheet stat-card-page fantasy-stat-page">
      <div class="stat-card-stack fantasy-stat-stack">
        ${pageNpcs.map(npc => `
          <div class="fantasy-stat-card generic-stat-card">
            <div class="fantasy-stat-header">
              <div class="fantasy-stat-title">${escapeHtml(npc.name || mode.emptyStates.fallbackNpcTitle)}</div>
              ${npc.role ? `<div class="fantasy-stat-role">${escapeHtml(npc.role)}</div>` : ''}
              <div class="fantasy-stat-type">${hasMeaningfulValue(npc.statCreatureType) ? escapeHtml(npc.statCreatureType) : '&nbsp;'}</div>
            </div>
            <div class="fantasy-stat-divider"></div>
            <div class="fantasy-stat-summary fantasy-stat-summary-generic">
              ${buildFantasyStatLine(fieldMap.statHitPoints.label, npc.statHitPoints)}
              ${buildFantasyStatLine(fieldMap.statDefense.label, npc.statDefense)}
              ${buildFantasyStatLine(fieldMap.statSpeed.label, npc.statSpeed)}
              ${buildFantasyStatLine(fieldMap.statStr.label, npc.statStr)}
              ${buildFantasyStatLine(fieldMap.statDex.label, npc.statDex)}
              ${buildFantasyStatLine(fieldMap.statWill.label, npc.statWill)}
            </div>
            ${buildFantasyStatSection(fieldMap.statAttacks.label, npc.statAttacks)}
            ${buildFantasyStatSection(fieldMap.statTraits.label, npc.statTraits)}
            ${buildFantasyStatSection(fieldMap.statBehaviour.label, npc.statBehaviour)}
            ${buildFantasyStatSection(fieldMap.statLoot.label, npc.statLoot)}
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function buildFantasyNpcStatPages(npcs, mode, fantasyNpcSystem = DEFAULT_FANTASY_NPC_SYSTEM) {
  const statNpcs = npcs.filter(npc => npcHasStatBlockData(npc, mode.id));
  if (!statNpcs.length) return '';
  const fieldMap = getStatFieldMetaMap(mode.id, fantasyNpcSystem);
  const systemLabel = getFantasyNpcSystemMeta(fantasyNpcSystem, mode.id)?.label || 'Generic Fantasy';
  const pages = [];
  for (let index = 0; index < statNpcs.length; index += 4) {
    pages.push(statNpcs.slice(index, index + 4));
  }

  return pages.map(pageNpcs => `
    <article class="print-sheet stat-card-page fantasy-stat-page">
      <div class="stat-card-stack fantasy-stat-stack">
        ${pageNpcs.map(npc => `
          <div class="fantasy-stat-card">
            <div class="fantasy-stat-header">
              <div class="fantasy-stat-title">${escapeHtml(npc.name || mode.emptyStates.fallbackNpcTitle)}</div>
              ${npc.role ? `<div class="fantasy-stat-role">${escapeHtml(npc.role)}</div>` : ''}
              <div class="fantasy-stat-system">${escapeHtml(systemLabel)}</div>
              <div class="fantasy-stat-type">${hasMeaningfulValue(npc.statCreatureType) ? escapeHtml(npc.statCreatureType) : '&nbsp;'}</div>
            </div>
            <div class="fantasy-stat-divider"></div>
            <div class="fantasy-stat-summary">
              ${buildFantasyStatLine(fieldMap.statArmorClass.label, npc.statArmorClass)}
              ${buildFantasyStatLine(fieldMap.statHitPoints.label, npc.statHitPoints)}
              ${buildFantasyStatLine(fieldMap.statSpeed.label, npc.statSpeed)}
            </div>
            <div class="fantasy-stat-divider"></div>
            ${buildFantasyAbilityRow(mode.statBlock.printRows[1], npc, fieldMap)}
            <div class="fantasy-stat-divider"></div>
            <div class="fantasy-stat-detail-grid">
              ${buildFantasyStatLine(fieldMap.statSavingThrows.label, npc.statSavingThrows)}
              ${buildFantasyStatLine(fieldMap.statSenses.label, npc.statSenses)}
              ${buildFantasyStatLine(fieldMap.statLanguages.label, npc.statLanguages)}
              ${buildFantasyStatLine(fieldMap.statChallenge.label, npc.statChallenge)}
            </div>
            ${buildFantasyStatSection(fieldMap.statTraits.label, npc.statTraits)}
            ${buildFantasyStatSection(fieldMap.statActions.label, npc.statActions)}
            ${buildFantasyStatSection(fieldMap.statReactions.label, npc.statReactions)}
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function buildNpcStatPages(npcs, mode, data = {}) {
  if (mode.id === 'fantasy') {
    if (data.fantasyNpcSystem === 'generic') {
      return buildGenericFantasyNpcStatPages(npcs, mode, data.fantasyNpcSystem);
    }
    if (data.fantasyNpcSystem === 'nimble') {
      return buildNimbleNpcStatPages(npcs, mode, data.fantasyNpcSystem);
    }
    return buildFantasyNpcStatPages(npcs, mode, data.fantasyNpcSystem);
  }
  const statNpcs = npcs.filter(npc => npcHasStatBlockData(npc));
  if (!statNpcs.length) return '';
  const { statBlock: statLabels, emptyStates } = mode;
  const fieldMap = getStatFieldMetaMap(mode.id);

  const pages = [];
  for (let index = 0; index < statNpcs.length; index += 2) {
    pages.push(statNpcs.slice(index, index + 2));
  }

  return pages.map(pageNpcs => `
    <article class="print-sheet stat-card-page">
      <div class="stat-card-stack">
        ${pageNpcs.map(npc => {
          const title = npc.name || emptyStates.fallbackNpcTitle;
          const roleTag = npc.role || '';
          const weaponsPanel = buildStatWeapons(npc, statLabels);
          const armorPanel = buildStatArmor(npc, statLabels);
          const skillsStrip = buildStatStrip(statLabels.skills, npc.statSkills);
          const gearStrip = buildStatStrip(statLabels.gear, npc.statGear);
          return `
            <div class="stat-card">
              <div class="stat-card-side">${escapeHtml(title)}</div>
              <div class="stat-card-main">
                ${roleTag ? `<div class="stat-strip"><div class="stat-strip-label">${escapeHtml(statLabels.role)}</div><div class="stat-panel-body stat-text">${escapeHtml(roleTag)}</div></div>` : ''}
                ${statLabels.printRows.map(fields => buildStatPrintRow(fields, npc, fieldMap)).join('')}
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
  const mode = getModeConfig(data.mode);
  const labels = mode.labels;
  const emptyStates = mode.emptyStates;
  const title = escapeHtml(data.title || emptyStates.untitledPrint);
  const sanitizedHook = sanitizeRichText(data.corePitch);
  const hasHookText = Boolean(sanitizedHook.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  const pitch = hasHookText ? sanitizedHook : '';
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
      emptyStates.noComplications,
      'printComplications'
    )
    : '<span class="empty">-</span>';

  const locations = buildPrintList(
    data.locations,
    (loc, index) => {
      const sceneMeta = getSceneStyleMeta(loc.sceneStyle);
      const sceneSymbols = formatPrintSymbols([sceneMeta]);
      const locationFields = [
        printField(labels.whatItIs, loc.what),
        printField(labels.whyItMatters, loc.why),
        printField(labels.obstacle, loc.obstacle),
      ].filter(Boolean).join('');
      return `
      <div class="sheet-item">
        <div class="sheet-item-title sheet-item-title-row"><span class="sheet-item-name">${escapeHtml(loc.name || `${emptyStates.untitledLocation} ${index + 1}`)}</span>${sceneSymbols ? `<span class="inline-print-symbols location-title-icon">${sceneSymbols}</span>` : ''}</div>
        ${locationFields}
      </div>
    `;
    },
    emptyStates.noLocations,
    'previewLocations'
  );

  const npcs = buildPrintList(
    data.npcs,
    (npc, index) => {
      const npcTypeMeta = getNpcTypeMeta(npc.npcType);
      const npcSymbol = npcTypeMeta ? `<span class="inline-print-symbols npc-title-icon"><span class="print-tag-symbol npc-name-symbol">${renderIconImage(absoluteAssetUrl(npcTypeMeta.icon), npcTypeMeta.label, 'print-tag-icon')}</span></span>` : '';
      const npcRole = npc.role ? `<span class="sheet-item-role">- ${escapeHtml(npc.role)}</span>` : '';
      const npcFields = [
        printField(labels.quirkVibe, npc.vibe),
        printField(labels.wants, npc.plus),
        printField(labels.doesntWant, npc.minus),
        printField(labels.secret, npc.secret),
        printField(labels.incongruency, npc.incongruency),
      ].filter(Boolean).join('');
      return `
      <div class="sheet-item">
        <div class="sheet-item-title sheet-item-title-row"><span class="sheet-item-name">${escapeHtml(npc.name || `${emptyStates.untitledNpc} ${index + 1}`)}</span>${npcRole}${npcSymbol}</div>
        ${npcFields}
      </div>
    `;
    },
    emptyStates.noNpcs,
    'previewNpcs'
  );

  const hookFields = [
    printField(labels.gigType, data.format),
    printField(labels.whoContacts, data.contactRole),
    printField(labels.whatJob, data.job),
    printField(labels.whatPay, data.pay),
    printField(labels.whyNow, data.whyNow),
  ].filter(Boolean).join('');

  const developmentFields = [
    printField(labels.whoBenefits, data.benefits),
    printField(labels.whosPissed, data.pissed),
    printField(labels.whatEscalates, data.escalates),
    printField(labels.newHook, data.newHook),
  ].filter(Boolean).join('');

  const statPages = buildNpcStatPages(data.npcs, mode, data);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="stylesheet" href="${new URL('styles.css', window.location.href).href}" />
</head>
<body class="print-preview-window ${escapeHtml(mode.themeClass)}">
  <article class="print-sheet">
    <h1 class="sheet-title">${title}</h1>
    ${(hasHookText || hookFields) ? `<section class="sheet-section print-hero-section${hasHookText ? '' : ' print-hero-section-no-hook'}">
      <div class="print-hero-layout">
        ${hasHookText ? `<div class="sheet-subtitle setup-intro">
          <h4>${escapeHtml(labels.hook)}</h4>
          ${pitch}
        </div>` : ''}
        ${hookFields ? `<div class="print-hero-sidebar">${hookFields}</div>` : ''}
      </div>
    </section>` : ''}

    <div class="print-columns">
      <div>
        ${data.locations.length ? `<section class="sheet-section flowing-section">
          <h4>${escapeHtml(labels.locations)}</h4>
          ${locations}
        </section>` : ''}

        ${data.complications.length ? `<section class="sheet-section flowing-section">
          <h4>${escapeHtml(labels.encounters)}</h4>
          ${complications}
        </section>` : ''}
      </div>

      <div>
        ${data.npcs.length ? `<section class="sheet-section flowing-section">
          <h4>${escapeHtml(labels.npcs)}</h4>
          ${npcs}
        </section>` : ''}

        ${developmentFields ? `<section class="sheet-section">
          <h4>${escapeHtml(labels.developments)}</h4>
          <div class="sheet-grid">${developmentFields}</div>
        </section>` : ''}

        ${hasMeaningfulValue(data.gmNotes) ? `<section class="sheet-section gm-notes-section">
          <h4>${escapeHtml(labels.gmNotes)}</h4>
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
  suppressAutosave = true;
  try {
    ids.forEach(id => {
      const el = byId(id);
      if (el) el.value = '';
    });
    byId('corePitch').innerHTML = '';
    byId('locations').innerHTML = '';
    byId('complicationsList').innerHTML = '';
    byId('npcs').innerHTML = '';
    applyMode(currentMode, { persist: false });
    addLocation();
    addComplication();
    addNpc();
  } finally {
    suppressAutosave = false;
  }
  renderPreview();
  persistAutosaveNow();
}

function populateForm(data = {}) {
  suppressAutosave = true;
  try {
    applyMode(data.mode || currentMode, { persist: false });
    ids.forEach(id => {
      const el = byId(id);
      if (el) el.value = typeof data[id] === 'string' ? data[id] : '';
    });
    applyFantasyNpcSystemUi(data.mode || currentMode);

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
  } finally {
    suppressAutosave = false;
  }

  renderPreview();
  persistAutosaveNow();
}

function loadDemo() {
  populateForm(getDemoData(currentMode));
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
    updateTypeMenuState();
  }
});

ids.forEach(id => {
  const el = byId(id);
  if (el) el.addEventListener('input', renderPreview);
});
document.querySelectorAll('.mode-tab').forEach(button => {
  button.addEventListener('click', async () => {
    await requestModeSwitch(button.dataset.mode);
  });
});
byId('corePitch').addEventListener('input', () => {
  normalizeCorePitch();
  renderPreview();
});
byId('corePitchToolbarToggle').addEventListener('click', event => {
  event.stopPropagation();
  const toolbar = byId('corePitchToolbar');
  const shouldOpen = toolbar.hasAttribute('hidden');
  if (shouldOpen) {
    toolbar.removeAttribute('hidden');
  } else {
    toolbar.setAttribute('hidden', '');
  }
  byId('corePitchToolbarToggle').setAttribute('aria-expanded', String(shouldOpen));
});
byId('corePitchToolbar').addEventListener('click', event => {
  event.stopPropagation();
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
byId('fantasyNpcSystemMenu')?.querySelector('.fantasy-npc-system-toggle')?.addEventListener('click', event => {
  event.stopPropagation();
  const menu = byId('fantasyNpcSystemMenu')?.querySelector('.type-menu-popup');
  if (!menu) return;
  document.querySelectorAll('.type-menu-popup').forEach(otherMenu => {
    if (otherMenu !== menu) otherMenu.hidden = true;
  });
  menu.hidden = !menu.hidden;
  updateTypeMenuState();
});
byId('fantasyNpcSystemMenu')?.querySelectorAll('.type-option')?.forEach(option => {
  option.addEventListener('click', async () => {
    const field = byId('fantasyNpcSystem');
    if (!field) return;
    const nextSystem = option.dataset.type || DEFAULT_FANTASY_NPC_SYSTEM;
    const currentSystem = field.value || DEFAULT_FANTASY_NPC_SYSTEM;
    if (nextSystem !== currentSystem && hasFantasyNpcStatBlockData()) {
      const confirmed = await openConfirmModal({
        title: 'Switch NPC system?',
        message: 'This planner does not convert NPC stat blocks between fantasy systems. Switching systems will erase all current fantasy NPC stat block data.',
        confirmLabel: 'Switch system',
      });
      if (!confirmed) {
        option.closest('.type-menu-popup').hidden = true;
        updateTypeMenuState();
        return;
      }
      clearFantasyNpcStatBlockData();
    }

    field.value = nextSystem;
    setComplicationTag(byId('npcs-section'), 'fantasyNpcSystem', '.fantasy-npc-system-toggle', field.value, 'System');
    rerenderNpcStatBlockEditors();
    option.closest('.type-menu-popup').hidden = true;
    updateTypeMenuState();
    renderPreview();
  });
});
byId('newQuestBtn').addEventListener('click', clearForm);
byId('loadDemoBtn').addEventListener('click', loadDemo);
byId('importJsonBtn').addEventListener('click', () => byId('importJsonInput').click());
byId('exportJsonBtn').addEventListener('click', exportJson);
byId('printBtn').addEventListener('click', printSheet);
byId('printBtnBottom').addEventListener('click', printSheet);
byId('sharePageBtn')?.addEventListener('click', () => {
  sharePlannerPage();
});
byId('contactEmailBtn')?.addEventListener('click', openContactEmail);
byId('importJsonInput').addEventListener('change', event => {
  importJsonFile(event.target.files?.[0]);
  event.target.value = '';
});
byId('confirmModalCancel')?.addEventListener('click', () => closeConfirmModal(false));
byId('confirmModalConfirm')?.addEventListener('click', () => closeConfirmModal(true));
byId('confirmModal')?.addEventListener('click', event => {
  if (event.target === byId('confirmModal')) closeConfirmModal(false);
});
setupSectionCollapseShortcut('locations-section', '.location-card');
setupSectionCollapseShortcut('complications-section', '.complication-card');
setupSectionCollapseShortcut('npcs-section', '.npc-card');
window.addEventListener('resize', positionSectionJumpNav);
window.addEventListener('pagehide', persistAutosaveNow);
window.addEventListener('pointermove', onGlobalPointerMove);
window.addEventListener('pointerup', onGlobalPointerUp);
window.addEventListener('pointercancel', onGlobalPointerUp);
window.addEventListener('blur', () => {
  if (activeDrag) finishCustomDrag(false);
  pendingDrag = null;
});
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && confirmModalResolver) {
    closeConfirmModal(false);
  }
});

const autosavedData = loadAutosaveData();
if (autosavedData) {
  populateForm(autosavedData);
} else {
  applyMode(DEFAULT_MODE, { persist: false });
  clearForm();
}
positionSectionJumpNav();


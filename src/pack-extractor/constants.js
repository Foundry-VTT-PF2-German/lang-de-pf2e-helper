export const PF2_DEFAULT_MAPPING = {
    actor: {
        name: {
            path: "name",
            converter: "translateDualLanguage",
            extractOptions: { extractOnAdventureActor: true },
        },
        acDetails: { path: "system.attributes.ac.details", extractOptions: { extractOnAdventureActor: true } },
        appearance: {
            path: "system.details.biography.appearance",
            converter: "translateActorDescription",
        },
        blurb: { path: "system.details.blurb", extractOptions: { extractOnAdventureActor: true } },
        compendiumSource: {
            path: "_stats.compendiumSource",
            extractOptions: { specialExtraction: "compendiumSource", extractOnAdventureActor: true },
        },
        crew: { path: "system.details.crew" },
        description: {
            path: "system.details.description",
            converter: "translateActorDescription",
        },
        disable: { path: "system.details.disable" },
        ethnicity: { path: "system.details.ethnicity.value" },
        familiarType: { path: "system.details.creature.value" },
        gender: { path: "system.details.gender.value" },
        hpDetails: { path: "system.attributes.hp.details" },
        languages: { path: "system.details.languages.details" },
        pilotingCheck: { path: "system.details.pilotingCheck" },
        portrait: {
            path: "img",
            converter: "updateActorImage",
            extractOptions: { extractValue: false },
        },
        publicNotes: {
            path: "system.details.publicNotes",
            converter: "translateActorDescription",
        },
        privateNotes: { path: "system.details.privateNotes" },
        reset: { path: "system.details.reset" },
        routine: { path: "system.details.routine" },
        saveDetails: { path: "system.attributes.allSaves.value" },
        senses: { path: "system.perception.details" },
        skillSpecialAcrobatics: {
            path: "system.skills.acrobatics.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialArcana: {
            path: "system.skills.arcana.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialAthletics: {
            path: "system.skills.athletics.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialCrafting: {
            path: "system.skills.crafting.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialDeception: {
            path: "system.skills.deception.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialDiplomacy: {
            path: "system.skills.diplomacy.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialIntimidation: {
            path: "system.skills.intimidation.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialMedicine: {
            path: "system.skills.medicine.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialNature: {
            path: "system.skills.nature.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialOccultism: {
            path: "system.skills.occultism.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialPerformance: {
            path: "system.skills.performance.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialReligion: {
            path: "system.skills.religion.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialSociety: {
            path: "system.skills.society.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialStealth: {
            path: "system.skills.stealth.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialSurvival: {
            path: "system.skills.survival.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        skillSpecialThievery: {
            path: "system.skills.thievery.special",
            converter: "translateSkillSpecial",
            extractOptions: { subMapping: "label" },
        },
        source: {
            path: "system.details.publication.title",
            converter: "translateSource",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        sourceId: {
            path: "flags.core.sourceId",
            extractOptions: { specialExtraction: "sourceId", extractOnAdventureActor: true },
        },
        speed: { path: "system.details.speed" },
        speed2: {
            path: "system.attributes.speed.details",
            extractOptions: { alternateMappingKey: "speed" },
        },
        stealth: { path: "system.attributes.stealth.details" },
        tokenImage: {
            path: "prototypeToken.texture.src",
            converter: "updateTokenImage",
            extractOptions: { alwaysAddMapping: true, extractValue: false },
        },
        tokenName: {
            path: "prototypeToken.name",
            converter: "translateTokenName",
            extractOptions: { alwaysAddMapping: true, extractOnAdventureActor: true },
        },
        items: {
            path: "items",
            converter: "translateActorItems",
            adventureConverter: "translateAdventureActorItems",
            extractOptions: { subMapping: "item", specialExtraction: "actorItems" },
        },
    },
    adventure: {
        name: { path: "name" },
        caption: { path: "caption" },
        description: { path: "description" },
        actors: {
            path: "actors",
            converter: "translateAdventureActors",
            extractOptions: { subMapping: "actor", specialExtraction: "adventureActors" },
        },
        items: {
            path: "items",
            converter: "translateAdventureItems",
            extractOptions: { subMapping: "item", specialExtraction: "nameAsKey" },
        },
        journal: {
            path: "journal",
            converter: "translateAdventureJournals",
            extractOptions: { subMapping: "adventureJournal", specialExtraction: "nameAsKey" },
        },
        tables: {
            path: "tables",
            converter: "translateAdventureTables",
            extractOptions: { subMapping: "rollableTable", specialExtraction: "nameAsKey" },
        },
        macros: {
            path: "macros",
            converter: "adventureMacros",
            extractOptions: {
                subMapping: { name: { path: "name" }, command: { path: "command" } },
                specialExtraction: "nameAsKey",
            },
        },
        playlists: {
            path: "playlists",
            converter: "adventurePlaylists",
            extractOptions: { subMapping: "playlist", specialExtraction: "nameAsKey" },
        },
        scenes: {
            path: "scenes",
            converter: "translateAdventureScenes",
            extractOptions: {
                subMapping: "adventureScene",
                specialExtraction: "adventureScenes",
            },
        },
        folders: {
            path: "folders",
            converter: "nameCollection",
            extractOptions: { subMapping: { name: { path: "name" } }, specialExtraction: "nameCollection" },
        },
    },
    adventureJournal: {
        name: { path: "name" },
        pages: {
            path: "pages",
            converter: "pages",
            extractOptions: {
                subMapping: "adventureJournalPages",
                specialExtraction: "adventureJournalPages",
            },
        },
    },
    adventureJournalPages: {
        name: { path: "name", extractOptions: { addToMapping: false } },
        id: { path: "_id", extractOptions: { addToMapping: false } },
        caption: { path: "image.caption", extractOptions: { addToMapping: false } },
    },
    adventureScene: {
        name: { path: "name" },
        background: { path: "background.src" },
        drawings: {
            path: "drawings",
            extractOptions: { subMapping: "text", specialExtraction: "textCollection" },
        },
        notes: {
            path: "notes",
            extractOptions: { subMapping: "text", specialExtraction: "textCollection" },
        },
        regions: {
            path: "regions",
            extractOptions: { subMapping: { name: { path: "name" } }, specialExtraction: "nameCollection" },
        },
        tiles: {
            path: "tiles",
            extractOptions: { subMapping: "tile" },
        },
        tokens: {
            path: "tokens",
            extractOptions: { subMapping: "token", specialExtraction: "tokens" },
        },
    },
    heightening: {
        duration: {
            path: "duration.value",
            converter: "translateDuration",
            extractOptions: { addToDictionary: true, addToMapping: false, extractValue: false },
        },
        range: {
            path: "range.value",
            converter: "translateRange",
            extractOptions: { addToDictionary: true, addToMapping: false, extractValue: false },
        },
        target: { path: "target.value", extractOptions: { addToMapping: false } },
        time: {
            path: "time.value",
            converter: "translateTime",
            extractOptions: { addToDictionary: true, addToMapping: false, extractValue: false },
        },
    },
    item: {
        name: {
            path: "name",
            converter: "translateDualLanguage",
        },
        badges: {
            path: "system.badge.labels",
            extractOptions: { extractOnActorItem: false, convertArray: false },
        },
        consumableSpellName: { path: "system.spell.name" },
        consumableSpellDescription: { path: "system.spell.system.description.value" },
        consumableSpellDuration: {
            path: "system.spell.system.duration.value",
            converter: "translateDuration",
            extractOptions: { extractValue: false },
        },
        consumableSpellRange: {
            path: "system.spell.system.range.value",
            converter: "translateRange",
            extractOptions: { extractValue: false },
        },
        consumableSpellRequirements: {
            path: "system.spell.system.requirements",
            extractOptions: { onlyValues: true },
        },
        consumableSpellTarget: { path: "system.spell.system.target.value" },
        consumableSpellTime: {
            path: "system.spell.system.time.value",
            converter: "translateTime",
            extractOptions: { extractValue: false },
        },
        cost: { path: "system.cost.value" },
        description: { path: "system.description.value" },
        duration: {
            path: "system.duration.value",
            converter: "translateDuration",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        gmNote: { path: "system.description.gm" },
        heightening: {
            path: "system.heightening.levels",
            converter: "translateHeightening",
            extractOptions: { extractOnActorItem: false, subMapping: "heightening" },
        },
        materials: { path: "system.materials.value" },
        prerequisites: {
            path: "system.prerequisites.value",
            converter: "translatePrerequisites",
            extractOptions: { extractOnActorItem: false, convertArray: false },
        },
        primarycheck: { path: "system.ritual.primary.check" },
        range: {
            path: "system.range.value",
            converter: "translateRange",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        requirements: { path: "system.requirements", extractOptions: { onlyValues: true } },
        rules: {
            path: "system.rules",
            converter: "translateRules",
            extractOptions: { subMapping: "rule" },
        },
        secondarycaster: { path: "system.ritual.secondary.casters" },
        secondarycheck: { path: "system.ritual.secondary.checks" },
        selfEffect: { path: "system.selfEffect.name" },
        source: {
            path: "system.publication.title",
            converter: "translateSource",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        spellVariants: {
            path: "system.overlays",
            converter: "translateSpellVariant",
            extractOptions: { extractOnActorItem: false, subMapping: "spellVariant" },
        },
        target: { path: "system.target.value" },
        time: {
            path: "system.time.value",
            converter: "translateTime",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        trainedLore: {
            path: "system.trainedSkills.lore",
            extractOptions: { extractOnActorItem: false, convertArray: false },
        },
        unidentifiedName: { path: "system.identification.unidentified.name" },
        unidentifiedDescription: { path: "system.identification.unidentified.data.description.value" },
    },
    journal: {
        name: { path: "name" },
        pages: {
            path: "pages",
            converter: "pages",
            extractOptions: {
                subMapping: "journalPages",
                specialExtraction: "nameAsKey",
            },
        },
    },
    journalPages: {
        name: { path: "name", extractOptions: { addToMapping: false } },
        text: { path: "text.content", extractOptions: { addToMapping: false } },
    },
    label: {
        label: { path: "label", extractOptions: { addToMapping: false } },
    },
    playlist: {
        name: { path: "name" },
        description: { path: "description" },
        sounds: {
            path: "sounds",
            converter: "playlistSounds",
            extractOptions: {
                subMapping: "sounds",
                specialExtraction: "nameAsKey",
            },
        },
    },
    rollableTable: {
        name: { path: "name" },
        description: { path: "description" },
        results: {
            path: "results",
            converter: "translateTableResults",
            extractOptions: {
                subMapping: "tableResults",
                specialExtraction: "tableResults",
            },
        },
    },
    rule: {
        choices: {
            path: "choices",
            extractOptions: { addToMapping: false, subMapping: "label" },
        },
        label: { path: "label", extractOptions: { addToMapping: false } },
        prompt: { path: "prompt", extractOptions: { addToMapping: false } },
        text: { path: "text", extractOptions: { addToMapping: false } },
        value: { path: "value", extractOptions: { addToMapping: false, subMapping: "text" } },
    },
    spellVariant: {
        name: {
            path: "name",
            converter: "translateDualLanguage",
        },
        cost: { path: "system.cost.value" },
        description: { path: "system.description.value" },
        duration: {
            path: "system.duration.value",
            converter: "translateDuration",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        heightening: {
            path: "system.heightening.levels",
            converter: "translateHeightening",
            extractOptions: { extractOnActorItem: false, subMapping: "heightening" },
        },
        materials: { path: "system.materials.value" },
        primarycheck: { path: "system.primarycheck.value" },
        range: {
            path: "system.range.value",
            converter: "translateRange",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
        requirements: { path: "system.requirements", extractOptions: { onlyValues: true } },
        secondarycaster: { path: "system.secondarycasters.value" },
        secondarycheck: { path: "system.secondarycheck.value" },
        target: { path: "system.target.value" },
        time: {
            path: "system.time.value",
            converter: "translateTime",
            extractOptions: { addToDictionary: true, extractValue: false },
        },
    },
    sounds: {
        name: { path: "name" },
        description: { path: "description", extractOptions: { addToMapping: false } },
    },
    tableResults: {
        text: { path: "text", extractOptions: { addToMapping: false } },
        name: { path: "name", extractOptions: { addToMapping: false } },
        description: { path: "description", extractOptions: { addToMapping: false } },
    },
    text: {
        text: { path: "text", extractOptions: { addToMapping: false } },
    },
    tile: {
        texture: { path: "texture.src", extractOptions: { addToMapping: false } },
    },
    token: {
        name: { path: "name" },
        items: {
            path: "delta.items",
            converter: "translateActorItems",
            extractOptions: { subMapping: "item", specialExtraction: "actorItems" },
        },
    },
};

export const ACTOR_REDIRECTS = [
    {
        name: "Sordesdaemon",
        linkOld: "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.MfW7O5Ba8r2GR9ZQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.4yd4WNkSclwnNvJL",
    },
    {
        name: "Izfiitar",
        linkOld: "Compendium.pf2e.agents-of-edgewatch-bestiary.Actor.QQkbvOCif8Bm1wws",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TbkQnciNLvcWCrxo",
    },
    {
        name: "Ghostly Mob",
        linkOld: "Compendium.pf2e.blood-lords-bestiary.Actor.4yAbOWwebJGWRmt2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.8ODfZdicnvx4iVjm",
    },
    {
        name: "Shoki",
        linkOld: "Compendium.pf2e.blood-lords-bestiary.Actor.7In0QgKUCCNcrTEA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.SQVXMMEaEu9wun3Q",
    },
    {
        name: "Eseneth",
        linkOld: "Compendium.pf2e.blood-lords-bestiary.Actor.7tmoC1LEp3taxaRp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TOysExbCm3LNzrDl",
    },
    {
        name: "Urglid",
        linkOld: "Compendium.pf2e.blood-lords-bestiary.Actor.TV3BSvxoG8p1fe0k",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ehDqHMxSAAqGONSc",
    },
    {
        name: "Sykever",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.40P14vZZXKLhBD6q",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.cWlkWTHhSUtF50ED",
    },
    {
        name: "Vanyver",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.7pk1DLc96LMcHBB5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.eLoVtQhKwPBUDSRr",
    },
    {
        name: "Nasurgeth",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.8jd6xVMgAeQEfect",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.sz52sgsgCjOROtST",
    },
    {
        name: "Unrisen",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.lhzNUX83TTYpJuma",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.n40ubwOuMGF7HHZ6",
    },
    {
        name: "Beetle Carapace",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.T9osQMcC96l4X9lk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.36A1ktSN13zcg76g",
    },
    {
        name: "Wolf Skeleton",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.ToGAEKKOplpXzaQQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.MTEuAbMboUe33rw1",
    },
    {
        name: "Urveth",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.vHEJOONP1ERjuxxl",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Loyg6crVl1LcdZ6c",
    },
    {
        name: "Hungry Ghost",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.xxFiRpQdvbKd0P12",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.KLMu7hWQWnc0Plt0",
    },
    {
        name: "Graveknight Warmaster",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.Yv9e7NSCzPuhlCnH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.EH61wr2iEKooAzgQ",
    },
    {
        name: "Skeletal Titan",
        linkOld: "Compendium.pf2e.book-of-the-dead-bestiary.Actor.z8WJtCyoVHlcSxYy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XvauwoJvFf4VdWiA",
    },
    {
        name: "Vermlek",
        linkOld: "Compendium.pf2e.extinction-curse-bestiary.Actor.YAKZUBOth75W2mWT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.i2fRfiIWOJeZedcx",
    },
    {
        name: "Berberoka",
        linkOld: "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.Twt8z6nTPgYQ0mTv",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.CNbPWUHtLgNIeft5",
    },
    {
        name: "Manananggal",
        linkOld: "Compendium.pf2e.fists-of-the-ruby-phoenix-bestiary.Actor.v85RucvwE8lGq7oY",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.GP61YtH3RvicMTkf",
    },
    {
        name: "Kithangian",
        linkOld: "Compendium.pf2e.gatewalkers-bestiary.Actor.ESgndiwI8BzwhDLi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.c21HwKyf4IKgMfcv",
    },
    {
        name: "Quantium Golem",
        linkOld: "Compendium.pf2e.lost-omens-bestiary.Actor.wjNbuzeqoVSR0Wwm",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.gZ2qX5vbWg7otMVT",
    },
    {
        name: "Benthic Reaver",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.1MxubcO4SB8PwmKT",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.1MxubcO4SB8PwmKT",
    },
    {
        name: "Stone Sister",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.1SIx3wcRvplbfwk3",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.1SIx3wcRvplbfwk3",
    },
    {
        name: "Cursed King",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.4DQotKcUZebLfeeL",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.4DQotKcUZebLfeeL",
    },
    {
        name: "Spell Pitchers",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.98wPo6efoFhxdVwl",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.98wPo6efoFhxdVwl",
    },
    {
        name: "Spellscar Fext",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.AIQMB0ysHNeodKG4",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.AIQMB0ysHNeodKG4",
    },
    {
        name: "Mana Whorl",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.FrLxEXUPE3mMLrYN",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.FrLxEXUPE3mMLrYN",
    },
    {
        name: "Ugvashi",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.JmGKKXdAxUkJtdTm",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.JmGKKXdAxUkJtdTm",
    },
    {
        name: "Fleshforged Conformer",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.K2AOcLMDOVNbgPXp",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.K2AOcLMDOVNbgPXp",
    },
    {
        name: "Fleshforged Dreadnought",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.KTabPRN489yjTvek",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.KTabPRN489yjTvek",
    },
    {
        name: "Skinskitter",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.LVY9JAhTnBC2SeqZ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.LVY9JAhTnBC2SeqZ",
    },
    {
        name: "Kasesh (Stone)",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.UgGyHJ39EHztCV5m",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.UgGyHJ39EHztCV5m",
    },
    {
        name: "Kashrishi Evaluator",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.fGZeQOarR6Im7Lnk",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.fGZeQOarR6Im7Lnk",
    },
    {
        name: "Quantium Golem",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.gZ2qX5vbWg7otMVT",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.gZ2qX5vbWg7otMVT",
    },
    {
        name: "Mutant Gnoll Hulk",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.lhr2fjewILo4nyUZ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.lhr2fjewILo4nyUZ",
    },
    {
        name: "Gunpowder Ooze",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.qbfMDAa3RXvwyG7k",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.qbfMDAa3RXvwyG7k",
    },
    {
        name: "Clockwork Cannoneer",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.qmw82W0WhPkn9UTW",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.qmw82W0WhPkn9UTW",
    },
    {
        name: "Cracked Earth",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.wj7dVmPstRWzcLzC",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.wj7dVmPstRWzcLzC",
    },
    {
        name: "Quantium Golem",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.wjNbuzeqoVSR0Wwm",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.gZ2qX5vbWg7otMVT",
    },
    {
        name: "Ratajin Mastermind",
        linkOld: "Compendium.pf2e.lost-omens-impossible-lands-bestiary.Actor.xl2UxOFVSDGqaVS5",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.xl2UxOFVSDGqaVS5",
    },
    {
        name: "Rompo",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.8K5v5q9Y01hcSNug",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.8K5v5q9Y01hcSNug",
    },
    {
        name: "Asanbosam",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.As0M3PvmrR2055pk",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.As0M3PvmrR2055pk",
    },
    {
        name: "Charau-ka Acolyte of Angazhan",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.BxChohV8FBiyAnEc",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.BxChohV8FBiyAnEc",
    },
    {
        name: "Pygmy Kaava",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.EyGpKm5MkHepWuNM",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.EyGpKm5MkHepWuNM",
    },
    {
        name: "Anadi Sage",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.IWk8dWUf4Q4D8iww",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.IWk8dWUf4Q4D8iww",
    },
    {
        name: "Aigamuxa",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.N5pG7rsbN1lL1ysb",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XJeAmfO0gB6JYALJ",
    },
    {
        name: "Grootslang",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.NvyAvzxxfb8XEQr2",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.NvyAvzxxfb8XEQr2",
    },
    {
        name: "Charau-ka Butcher",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.QUyqY6JiZNkEyTnd",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.QUyqY6JiZNkEyTnd",
    },
    {
        name: "Solar Ibis",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.RVVSRRYAhQ3dVK2h",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.RVVSRRYAhQ3dVK2h",
    },
    {
        name: "Charau-ka Warrior",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.TfEGDGqUk3LpokZZ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.TfEGDGqUk3LpokZZ",
    },
    {
        name: "K'nonna",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.XSWDwaLEyshEKSZE",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.XSWDwaLEyshEKSZE",
    },
    {
        name: "Anadi Hunter",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.aXXvrcggR8EQJOdm",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.aXXvrcggR8EQJOdm",
    },
    {
        name: "Anadi Elder",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.bo3BDHT7P1IK7oLp",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.bo3BDHT7P1IK7oLp",
    },
    {
        name: "Karina",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.hbvxQn0T0m4WoAmZ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.hbvxQn0T0m4WoAmZ",
    },
    {
        name: "Mamlambo",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.j0t62tXPYhBzCLUO",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.j0t62tXPYhBzCLUO",
    },
    {
        name: "Sié Goluo",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.ld3hMGWfeUT7enNf",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.ld3hMGWfeUT7enNf",
    },
    {
        name: "Zinba",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.rBlu1EsygXwCkOvd",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.rBlu1EsygXwCkOvd",
    },
    {
        name: "Kaava Stalker",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.rMby02NQRHNrDcTj",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.rMby02NQRHNrDcTj",
    },
    {
        name: "Eloko",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.rVnJUXPgAPCeW1tS",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.rVnJUXPgAPCeW1tS",
    },
    {
        name: "Biloko Warrior",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.rayMMWNm61ivtxuU",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.rayMMWNm61ivtxuU",
    },
    {
        name: "Biloko Veteran",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.rrJqsVeBKizuyqRY",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.rrJqsVeBKizuyqRY",
    },
    {
        name: "Maliadi",
        linkOld: "Compendium.pf2e.lost-omens-mwangi-expanse-bestiary.Actor.x2udXsqiLZachJHY",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.x2udXsqiLZachJHY",
    },
    {
        name: "Grand Defender",
        linkOld: "Compendium.pf2e.lost-omens-highhelm-bestiary.Actor.6X4zL4GSS9aUcP9f",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.6X4zL4GSS9aUcP9f",
    },
    {
        name: "Draft Lizard",
        linkOld: "Compendium.pf2e.lost-omens-highhelm-bestiary.Actor.AbaAJaz8p6sSsaqy",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.AbaAJaz8p6sSsaqy",
    },
    {
        name: "Graul",
        linkOld: "Compendium.pf2e.lost-omens-highhelm-bestiary.Actor.IGoJDxjMiADXa1bm",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.IGoJDxjMiADXa1bm",
    },
    {
        name: "The Bloodstorm",
        linkOld: "Compendium.pf2e.lost-omens-highhelm-bestiary.Actor.McZDmNR9sldfnsBw",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.McZDmNR9sldfnsBw",
    },
    {
        name: "Augdunar",
        linkOld: "Compendium.pf2e.lost-omens-highhelm-bestiary.Actor.cWHQmwUkLYBlFOGX",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.cWHQmwUkLYBlFOGX",
    },
    {
        name: "Pagulin",
        linkOld: "Compendium.pf2e.lost-omens-highhelm-bestiary.Actor.fQvTnIpC2Wq1U32z",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.fQvTnIpC2Wq1U32z",
    },
    {
        name: "Collapsing Structure",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.0ypo8Vt3B6p9DqAt",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.0ypo8Vt3B6p9DqAt",
    },
    {
        name: "Spectral Devil",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.10srqxC7QZy0dq2g",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.10srqxC7QZy0dq2g",
    },
    {
        name: "Grisantian Lion",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.5PwT7t6eTC0qcK7E",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.K8oGb2B4KCgXGN9W",
    },
    {
        name: "Temteki",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.7a57dwK5XrV78ajM",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.7a57dwK5XrV78ajM",
    },
    {
        name: "Desert's Howl",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.Bi6bi9Ko5x9OJfDT",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Bi6bi9Ko5x9OJfDT",
    },
    {
        name: "Tehialai-Thief-of-Ships",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.C87bRxKDTuJXGkPG",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.C87bRxKDTuJXGkPG",
    },
    {
        name: "Spawn Of Kothogaz",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.CgNC8uWPrJbGDklJ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.CgNC8uWPrJbGDklJ",
    },
    {
        name: "Spring-Heeled Jack",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.EXyfhhX9GLOnK1uZ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.EXyfhhX9GLOnK1uZ",
    },
    {
        name: "Crystal Pin",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.EmWSRL2aYBcHCgrW",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.EmWSRL2aYBcHCgrW",
    },
    {
        name: "Mosquito Witch (The Legion Leech)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.FhgZOBWNMa5t7pYV",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.FhgZOBWNMa5t7pYV",
    },
    {
        name: "Melfesh Monster",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.G1jYZOjA3E3BqrIM",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.G1jYZOjA3E3BqrIM",
    },
    {
        name: "Taljjae (The Hero)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.IO7sPevkM0zvnWbi",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.IO7sPevkM0zvnWbi",
    },
    {
        name: "Ulgrem-Lurann",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.JX7k6wFmZLqNjK0k",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.JX7k6wFmZLqNjK0k",
    },
    {
        name: "Krampus Celebrant",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.K7hgO9SEBai2jwYj",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.K7hgO9SEBai2jwYj",
    },
    {
        name: "Somnalu",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.KLxdUFCvZ7HkAP1E",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.KLxdUFCvZ7HkAP1E",
    },
    {
        name: "Mosquito Witch",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.KdOwmclPVpcTSPjF",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.KdOwmclPVpcTSPjF",
    },
    {
        name: "Storm Discharge",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.KeKlBbO3hfT5mzqO",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.KeKlBbO3hfT5mzqO",
    },
    {
        name: "Cuetzmonquali",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.LK3SgIKJqqo4Q4NQ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.LK3SgIKJqqo4Q4NQ",
    },
    {
        name: "Imperfect Automaton",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.N3OJ0wxik4wEgTg7",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.N3OJ0wxik4wEgTg7",
    },
    {
        name: "Grogrisant",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.O4gEaG5vzkLFl7J1",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.O4gEaG5vzkLFl7J1",
    },
    {
        name: "Kuworsys",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.OF0fZDjNapydddM1",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.OF0fZDjNapydddM1",
    },
    {
        name: "Young Linnorm",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.OLgKekTU0LOYwoxd",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.OLgKekTU0LOYwoxd",
    },
    {
        name: "Kothogaz, Dance Of Disharmony",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.RqdL0YzNF1dG163i",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.RqdL0YzNF1dG163i",
    },
    {
        name: "Ainamuuren",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.VCC4nw6EXvqwgmCp",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.VCC4nw6EXvqwgmCp",
    },
    {
        name: "Taljjae (The General)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.W0oF6Dl7G4UeTBSC",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.W0oF6Dl7G4UeTBSC",
    },
    {
        name: "Fafnheir",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.WdnuPiAoRFaymR8R",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.WdnuPiAoRFaymR8R",
    },
    {
        name: "Ulistul",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.XCW1WzJqwGUS1cGi",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.XCW1WzJqwGUS1cGi",
    },
    {
        name: "Taljjae (The Hermit)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.XLDh6o6vBRCDEKsl",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.XLDh6o6vBRCDEKsl",
    },
    {
        name: "Planar Tear",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.XwBFT7VO9M7M6AgQ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.XwBFT7VO9M7M6AgQ",
    },
    {
        name: "Taljjae (The Beast)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.a1vTm01GBVF4TI8f",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.a1vTm01GBVF4TI8f",
    },
    {
        name: "Taljjae",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.bhLbKN7MJofTabfK",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.bhLbKN7MJofTabfK",
    },
    {
        name: "Somnalu Oculus",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.hLyLnBn7lEFstUG2",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.hLyLnBn7lEFstUG2",
    },
    {
        name: "Taljjae (The Wanderer)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.hfi0qJePy2cf4Fqe",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.hfi0qJePy2cf4Fqe",
    },
    {
        name: "Taljjae (The Nobleman)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.j3NhCEMLVm4HSsgr",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.j3NhCEMLVm4HSsgr",
    },
    {
        name: "Ulgrem-Axaan",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.jInkcz2UYdaCzsBU",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.jInkcz2UYdaCzsBU",
    },
    {
        name: "Krampus (The Horned Miser)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.kdkmTLlqzOYVxb50",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.kdkmTLlqzOYVxb50",
    },
    {
        name: "Mosquito Witch (The Swarm Seer)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.mE9MQ0hnRmlR9m94",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.mE9MQ0hnRmlR9m94",
    },
    {
        name: "Mosquito Witch (The Hemoprophet)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.ns6fmJ8469hzBOtM",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.ns6fmJ8469hzBOtM",
    },
    {
        name: "Howling Spawn",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.qcdNzMiO3XxPHLPJ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.qcdNzMiO3XxPHLPJ",
    },
    {
        name: "Taljjae (The Grandmother)",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.sXZExyaijbRnKI2S",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.sXZExyaijbRnKI2S",
    },
    {
        name: "Quaking Slither",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.vI7wAKNDX05DShWy",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.vI7wAKNDX05DShWy",
    },
    {
        name: "Kallas Devil",
        linkOld: "Compendium.pf2e.lost-omens-monsters-of-myth-bestiary.Actor.zE2ykzHZKNS3Rnc3",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.zE2ykzHZKNS3Rnc3",
    },
    {
        name: "Animated Wine Vessel",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.0J8xJV4NXaphEWgM",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.0J8xJV4NXaphEWgM",
    },
    {
        name: "Peng",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.0yF82Lo495lKarLS",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.0yF82Lo495lKarLS",
    },
    {
        name: "Five-Color Orchid Mantis",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.2hQmiIASF1pvbWhX",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.2hQmiIASF1pvbWhX",
    },
    {
        name: "Bul-Gae",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.374PRwbW4i4Xw1Fe",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.374PRwbW4i4Xw1Fe",
    },
    {
        name: "The Great Flood",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.3utPtrLWLyNO1hxt",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.3utPtrLWLyNO1hxt",
    },
    {
        name: "Imugi",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.6bACPcPqi8syNcVg",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.6bACPcPqi8syNcVg",
    },
    {
        name: "Ijhyeojin",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.6v2HzHeT1mNLaqg9",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.6v2HzHeT1mNLaqg9",
    },
    {
        name: "Pixiu",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.7RTjMCDWQVc6MKNI",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.7RTjMCDWQVc6MKNI",
    },
    {
        name: "Joseung Saja",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.7ZSjqT2yiJB5OKgk",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.7ZSjqT2yiJB5OKgk",
    },
    {
        name: "Animated Bamboo Figurine",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.8AANjQtU703ghIsR",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.8AANjQtU703ghIsR",
    },
    {
        name: "Nue",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.9jvXTVcMNTx3kGfU",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.9jvXTVcMNTx3kGfU",
    },
    {
        name: "Caterpillar Carriage",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.AKYrUoUmunt46Vy8",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.AKYrUoUmunt46Vy8",
    },
    {
        name: "Inkdrop",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.B65InLN9TZjlascU",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.B65InLN9TZjlascU",
    },
    {
        name: "Kun",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.DkQWhW0CelytSWAV",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.DkQWhW0CelytSWAV",
    },
    {
        name: "Manananggal",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.GP61YtH3RvicMTkf",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.GP61YtH3RvicMTkf",
    },
    {
        name: "Gau Cho Rong",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.KcwFM5tI2R4jDalx",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.KcwFM5tI2R4jDalx",
    },
    {
        name: "Aoyin",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.Lhcwzt64Do7afrbF",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Lhcwzt64Do7afrbF",
    },
    {
        name: "Yeongno",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.Mu3obsMXZ0OYlQpo",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Mu3obsMXZ0OYlQpo",
    },
    {
        name: "Giant Orchid Mantis",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.XzCBhm6im8iS1UFd",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.XzCBhm6im8iS1UFd",
    },
    {
        name: "Animated Kite",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.fXlmbjtV3spZlmGS",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.fXlmbjtV3spZlmGS",
    },
    {
        name: "Shui Gui",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.k5f4vITTc7mclQzH",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.k5f4vITTc7mclQzH",
    },
    {
        name: "Hopping Head",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.mu36UlW90zHYuzww",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.mu36UlW90zHYuzww",
    },
    {
        name: "Jiidon",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.n9LLGRKgPI8fDRBk",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.n9LLGRKgPI8fDRBk",
    },
    {
        name: "Orchid Mantis Swarm",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.pcs9Shzxhu62xL4V",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.pcs9Shzxhu62xL4V",
    },
    {
        name: "Aso Berang",
        linkOld: "Compendium.pf2e.lost-omens-tian-xia-world-guide.Actor.zrx1qjf1WbSYllvz",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.zrx1qjf1WbSYllvz",
    },
    {
        name: "Sarkorian Wolf",
        linkOld: "Compendium.pf2e.lost-omens-travel-guide-bestiary.Actor.FMGyuNpkxMRR1Jrw",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.FMGyuNpkxMRR1Jrw",
    },
    {
        name: "Whalesteed",
        linkOld: "Compendium.pf2e.lost-omens-travel-guide-bestiary.Actor.MQBH5svYUyhd3RsK",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.MQBH5svYUyhd3RsK",
    },
    {
        name: "Irriseni Owlbear",
        linkOld: "Compendium.pf2e.lost-omens-travel-guide-bestiary.Actor.Oefb1ZCYp2DolpZr",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Oefb1ZCYp2DolpZr",
    },
    {
        name: "Baccali Alpaca",
        linkOld: "Compendium.pf2e.lost-omens-travel-guide-bestiary.Actor.mpT2AbFjoyDBDN5l",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.mpT2AbFjoyDBDN5l",
    },
    {
        name: "Vulture Rat",
        linkOld: "Compendium.pf2e.lost-omens-travel-guide-bestiary.Actor.yRhCsQsoz1Uqvkmk",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.yRhCsQsoz1Uqvkmk",
    },
    {
        name: "Orc Scrapper (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.0oWKApY5FR8IO7GG",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.YReM6QbqwUz3UTP7",
    },
    {
        name: "Zombie Shambler (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.0plBflWwrCWQO2RO",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Xo4IGzw28hivgMmM",
    },
    {
        name: "Ghost Commoner (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.2H2AEwQnfKJC0nrd",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.N98ug9jQHqeFoK1N",
    },
    {
        name: "Giant Ant (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.2vyM10zN0JYdzyxt",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.mEZUTqNIgu0ASApu",
    },
    {
        name: "Boar (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.4MwjCsa5O9aAjxSm",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.IyhbcdTVmkV4pSju",
    },
    {
        name: "Skeleton Guard (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.5H8ZX7y5IkUBhvhF",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.trchDxbDR2TiPMxT",
    },
    {
        name: "Skeletal Giant (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.5MVBU86ZRw2ANMQn",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.sEgjgitJmwYYa4mV",
    },
    {
        name: "Orc Commander (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.5xjmJoJvBhASkEKS",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.PLZk6zY5iwccPTPS",
    },
    {
        name: "Giant Spider (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.6NdqvKIlxo4cGhf8",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.A4VgQIHsqJKssQOM",
    },
    {
        name: "Caligni Skulker (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.7AzIsyvVOg19fSoa",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.9YPFqikAmURwcTEO",
    },
    {
        name: "Caligni Dancer (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.7EuWv6tGtOASvzbG",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.SZCf0IZkf36plwVd",
    },
    {
        name: "Brine Shark (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.9sa2KE4Fbh3OPH7M",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.H7z7VHzlHlEFev1r",
    },
    {
        name: "Giant Rat (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.AYwdybUfm4meGUTJ",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.iIJPJcDT8wlJ8z5M",
    },
    {
        name: "Harpy (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.AuCC04X2AO8oFN75",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.uBNm3R9wbLTPrM9i",
    },
    {
        name: "Giant Centipede (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.BKPRkJgq7ehsW7uX",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.NRBgcu0LkXXp8mtp",
    },
    {
        name: "Warg (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.CF82XJwObLx0TPnV",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.x7Aa4Tvr9eBaHryF",
    },
    {
        name: "Orc Veteran (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.EtRqBsWh1Hv1toqh",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.V90OYOMyyPLPJuod",
    },
    {
        name: "Sewer Ooze (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Hkq9ZS2J2iKnT7vT",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.9InGpxq5xbbHaL9f",
    },
    {
        name: "Giant Viper (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.KsWAIXTTh3mfNWOY",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.AJ5LuNMVPLCydryP",
    },
    {
        name: "Ghoul Stalker (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.LHHgGSs0ELCR4CYK",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.iLkQt8A99nQWUI8k",
    },
    {
        name: "Hobgoblin Soldier (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.M8oJOKJ4AgrLZcJQ",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.NW68bxCLC6oDHxL9",
    },
    {
        name: "Sod Hound (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.NVWaLagWOu5tCCZu",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.VQPzDz3xnCQGFOGL",
    },
    {
        name: "Wolf (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Oilfs8Atv2LjAsUS",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.BN5Lb6IsQ9Wyu3rL",
    },
    {
        name: "Xulgath Warrior (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.RTzFvmdSCf5yhguy",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.5vBG8a8dnJfmVd3Y",
    },
    {
        name: "Caligni Hunter (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Rr1wwJ1jIIhRZbXh",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.AcUb8s5fiktYw8Fx",
    },
    {
        name: "Bugbear Prowler (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.UjREHs2JQoO85Glt",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.9cBuzDV8seJqhNKJ",
    },
    {
        name: "Shadow (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.XrmHgbKgcHDi4OnK",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.VotlWUsFKdOrHWF6",
    },
    {
        name: "Xulgath Leader (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.YdBCG0vzOA5BgoIi",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.7w1w7VTnIWMBdFux",
    },
    {
        name: "Wight (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.ZPjQkKVMi3xoPcU0",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.DBTbqI9QQRtlJwWh",
    },
    {
        name: "Gargoyle (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.aeCoh4u6c5kt1iCs",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.cvfIkEF6xmWn2soN",
    },
    {
        name: "Zephyr Hawk (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.cBHpMcVaLRPZu9po",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.sAfjpjAS56jtrUbi",
    },
    {
        name: "Animated Armor (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.cZDiyluplFqRxmGy",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.CFlx1tkRxKC9qAC7",
    },
    {
        name: "Reefclaw (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.eq4tLYV3efCS2ouP",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Rr1u6WvZEdPw1s6v",
    },
    {
        name: "Ogre Warrior (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.gdXok08bITkhowDJ",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Twvzy1yRo6m6dM8D",
    },
    {
        name: "Forest Troll (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.gvCCATlH9mPGWbsp",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.htK4dElL6YvFCLkz",
    },
    {
        name: "Cinder Rat (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.hiGwRWdxAsoCII4f",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.xN5J9S485LxFZMkL",
    },
    {
        name: "Goblin Commando (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.jGzVwekcRX5aQpbT",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.sA2dFdRUwiapo69Z",
    },
    {
        name: "Goblin Warrior (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.jVZRROs0GzDjVrgi",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.fLLKuOXwPq1Iq0U4",
    },
    {
        name: "Hell Hound (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.jeAGl6OAVrrIPgu3",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.RTviEfjYnsXa0wkT",
    },
    {
        name: "Pugwampi (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.jnmUcTs4hn1c5bz9",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.aeOzCBpwnUVcpqxI",
    },
    {
        name: "Viper (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.lFlXmieuHTBIonhj",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.1uVwkGlqYzyWaDMy",
    },
    {
        name: "Basilisk (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.mX47c0W9rizbmMBM",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.mX47c0W9rizbmMBM",
    },
    {
        name: "Kobold Warrior (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.r9w1n85mp9Ip4QiS",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.BIZfjoz8DZt75EDn",
    },
    {
        name: "Kobold Scout (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.rPaHIh0ICnTLnRO6",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.PcHQDmPTztw32PhL",
    },
    {
        name: "Goblin Igniter (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.shT19KaQjWRVrHLI",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.Ky5eNRvN71O0tY9l",
    },
    {
        name: "Minotaur Hunter (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.wCmlY4TixUlPm5Qx",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.vN2alMciNlKpBpKN",
    },
    {
        name: "Leopard (BB)",
        linkOld: "Compendium.pf2e.menace-under-otari-bestiary.Actor.wqPYzMNgYvrO6oEP",
        linkNew: "Compendium.pf2e.menace-under-otari-bestiary.Actor.kB7FNn3vosp6cqQg",
    },
    {
        name: "Azarketi Crab Catcher",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.KvcFqH6H4TFCuBZA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ZXiFjrQbhvboEZTL",
    },
    {
        name: "Azarketi Tide Tamer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.sZ9RwN8zIzpztW3N",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.jTszZSs0K6vOqidM",
    },
    {
        name: "Demonologist",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.0Ex7rBuiJVu2NwCz",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.hR9n5d0tfyOkeZFb",
    },
    {
        name: "Assassin",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.0Kb4z4h8KVqfrIju",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.jOASgCgSyk3enLfP",
    },
    {
        name: "Servant",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.1iz7O6DLDJqStojd",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.mgEMfxh0VUbBepc2",
    },
    {
        name: "Bosun",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.1NZ1ZAgcUlWKmQSs",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.XrXTfNGxEWLE9Qqb",
    },
    {
        name: "Mage For Hire",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.1sWw5OgmpazLVqRQ",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.x7Mnb3F4r6JvXD9C",
    },
    {
        name: "Fence",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.1U1URD7IyddoD5zE",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.HBcKkBXyGaWXZxSs",
    },
    {
        name: "Sage",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.3lZhmvNLQkiYGAof",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.3R2J90R84AUgFJH2",
    },
    {
        name: "Astronomer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.51E3fdESgGjQxcMv",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.Y0MSOv0l5ePhP3Co",
    },
    {
        name: "Pirate",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.5LvpvIMhaYLcyAk6",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.55Hb1FTqRGtoGuJt",
    },
    {
        name: "Bodyguard",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.7eJJIIVEDB3EFFcZ",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.3jkmJgV4zwygUqLy",
    },
    {
        name: "Charlatan",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.7GGHuOlSzcaF2AdL",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.BcJ36KvuUysWW3BD",
    },
    {
        name: "Physician",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.7RF95b3WHkvHWLrv",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.GXmIABEvzmySOHRH",
    },
    {
        name: "Navigator",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.8coHofIpLa5ZnjAF",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.nnrvoNBUzKyKQLu4",
    },
    {
        name: "Apothecary",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.8WFGygPv7UHh7zdJ",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.h4gPulyY9uzkAbyo",
    },
    {
        name: "False Priest",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.9jDT7EhtlZtNpCz7",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.OAxxUyACpMlX3q1X",
    },
    {
        name: "Apprentice",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.aJR3f8YcAkmfx7im",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.STds4rxF5ESFLLML",
    },
    {
        name: "Cultist",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Ap87yR4WOs0wKHx7",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.GbPDSJeXjHc1VRN2",
    },
    {
        name: "Burglar",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.B09JfuBZHjcRXztU",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.sSa18Ra6zGc4Mp71",
    },
    {
        name: "Tomb Raider",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.B0pZAGooj735FGfw",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.Yl6pxCXAoFECt89L",
    },
    {
        name: "Palace Guard",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.B13dyXTo1xWVyj2R",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.94fOoBeUT8PgTywH",
    },
    {
        name: "Merchant",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.cAOWcPIjtZYXYZ3i",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.qCKNT6U8O0su578A",
    },
    {
        name: "Mastermind",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Cnm5zWmuTEYy6mPx",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.fBd8Cfe7fRtF8HoJ",
    },
    {
        name: "Archer Sentry",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.DD2JNeRxO79WFlOL",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.fpwpA2JmpbwREa5a",
    },
    {
        name: "Ruffian",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.DFurZlcpcNrUmmER",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.MNb1Hjd2gKimnfvV",
    },
    {
        name: "Miner",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.DSA03902sWGot0ev",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.GKDMvepxkEsUnN5d",
    },
    {
        name: "Chronicler",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.EslFhpdvQf7KN8W3",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.qtD7Xa8Mgl0Y63os",
    },
    {
        name: "Despot",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.EzD6YlNXL48rN8nq",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.u1Np0sUKfkTxrNT1",
    },
    {
        name: "Urchin",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.G2ftdkyJ5WDonL0C",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.a36bfgbqp1lt2bik",
    },
    {
        name: "Bounty Hunter",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.GoGNtiHuYycppLPk",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.dNATu2RQLFYY3hYn",
    },
    {
        name: "Warden",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.GRtEwNQgKQ9j9JPK",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.UcyRCjAUf7mijca0",
    },
    {
        name: "Jailer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.gzirsGA07yG6CaG8",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.4okKASZDvBWTSu1U",
    },
    {
        name: "Tax Collector",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.hK8Tpg3baKWzmPEv",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.Xxnho8AZopSuhgHP",
    },
    {
        name: "Hunter",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Hle05FibgOeZr7wF",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.XqIKuHK4R6yFOKbs",
    },
    {
        name: "Drunkard",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.IaSxoVNZFYatdfjI",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.xxH95k9qf6lLit4W",
    },
    {
        name: "Barrister",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.ImdKLPgazv4MSI0F",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.HbYwSi428oXESdNh",
    },
    {
        name: "Torchbearer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.IQJT1Bg9FhvHHEap",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.xjJV1G5FBeLV4KPQ",
    },
    {
        name: "Teacher",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Jg9OEmo68KC91PgC",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.EuDz8wgZY3nxyBTr",
    },
    {
        name: "Beggar",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.JsTI2SEZdg2j03gf",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.d47PtIdozWwSOtur",
    },
    {
        name: "Harrow Reader",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.K8mtLJ5jgxfqxTCv",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.taNAx8xPuOJ3EmxC",
    },
    {
        name: "Necromancer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.kmHYc2fvhd4QsUEV",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.BcSzGmSxCn0uWkxU",
    },
    {
        name: "Bandit",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.KPUDfkVpemug2gKj",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.FBq4bqtKUBpJUCMU",
    },
    {
        name: "Ship Captain",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.KUDsYCHduF0JE3yf",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.bMKM6SKTBN8M4I8K",
    },
    {
        name: "Plague Doctor",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.ldaY3QcPczuFoqBC",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.txVORfqTxVCMD75C",
    },
    {
        name: "Troubadour",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.lemVxzg2Pnx9Nu3d",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.55t4OPNXDx6fAeZd",
    },
    {
        name: "Dancer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.lfXQECIiN0zZdf95",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.r7nprCpuqhEulxjD",
    },
    {
        name: "Zealot of Asmodeus",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.lTcX8tk6JjQBFcq1",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.0iyGP5rLXE6NxdRr",
    },
    {
        name: "Reckless Scientist",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.mblLgQ9NMR2mMI99",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.zqesJ7AlPM39Qqcw",
    },
    {
        name: "Saboteur",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.ny37LcdsPLY9Osby",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.qQzry7keeMVUzfpt",
    },
    {
        name: "Smith",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.o9dAbSVn4Vi4ejjc",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.0So6avVuyVG7YOfs",
    },
    {
        name: "Prisoner",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.p94aKz7KsiAQJscm",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.oIHp4amcx8ecZRwM",
    },
    {
        name: "Innkeeper",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.PLOfWPKwB7pE4arv",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.BYpxg06tP5hI6CzQ",
    },
    {
        name: "Cult Leader",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.pMKrTXmrzDOc9avN",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.MKwLXGzr48qU0hZR",
    },
    {
        name: "Beast Tamer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.PoIuzIWFnlAQ8pdH",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.eF87AWFclYpu1cgD",
    },
    {
        name: "Guildmaster",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.pZOgcQRwXrX9g0s8",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.fadWrz7SnifBx4yz",
    },
    {
        name: "Librarian",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.QAodADCKmbkf53CE",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.GkatOjGPdFT9z0od",
    },
    {
        name: "Dockhand",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.QZmckb7O3PNgY7D6",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.Wv4jaiD6X8negvH2",
    },
    {
        name: "Noble",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.R5SWtNtQt8l7WLYk",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.lSRNLWRwi9Vhfy25",
    },
    {
        name: "Guard",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.rsATu823vatRe7QJ",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.Aktz95gNNzfAiTzk",
    },
    {
        name: "Harbormaster",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.saUg5rtaO9kI9Vir",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.vGcspyaP2VOwurMk",
    },
    {
        name: "Adept",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.sKSfQmJMEsj8QN12",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.PBb2WprHhEIQE9jN",
    },
    {
        name: "Spy",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.SwjcZsbkcq6PhiXc",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.PXukrrvpLA40chXN",
    },
    {
        name: "Captain Of The Guard",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.t7QwdZ2m7AbuRWqd",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.vEdg4AXGWfet1Cgy",
    },
    {
        name: "Judge",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.tbiThWX0gAVZAMor",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.vfFB2za4zaQnXYIa",
    },
    {
        name: "Tracker",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.TCzxsJQjUpy02CsJ",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.CFBDZzfWCANLJcpF",
    },
    {
        name: "Watch Officer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.TgeUj2IiyoTeZHIO",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.thDJ5N0wUvI1JOa6",
    },
    {
        name: "Acrobat",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Tj03FbN4SSr0o953",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.5KojtpJA0T5xoum4",
    },
    {
        name: "Farmer",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.u3tXaX3sOtCvuHW3",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.bZRZahVaMyzTbJ4u",
    },
    {
        name: "Gang Leader",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.vkLhqX5oR1t89puZ",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.AdZ4EklEmpHViycl",
    },
    {
        name: "Advisor",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.w4VJ6h4mysbpdoN4",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.14yAShROmGYdRS1Z",
    },
    {
        name: "Prophet",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.W9lhKuDeS670LzLx",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.mbuHsZrLEieLEES0",
    },
    {
        name: "Surgeon",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.wfsT2QDtQhsFXQfE",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.oaqt9bociCp9e3Yr",
    },
    {
        name: "Gravedigger",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.WTCFE1BYdZGWJHh7",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.0t2jNg5tpwWbCYx4",
    },
    {
        name: "Poacher",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.X1cSs1jhTtx1zTI4",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.6CRUvM2p9csP735v",
    },
    {
        name: "Guide",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.X7LmMMEOFUUicQ2O",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.ndCqM6yNTg2QPZwK",
    },
    {
        name: "Commoner",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.xY2WjwebqTNXAP0q",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.APn9B54hhRtr0oCQ",
    },
    {
        name: "Executioner",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Za701s0CV37YPOyo",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.pHaQew7IEmk198Wz",
    },
    {
        name: "Grave Robber",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.Zd0K8TOkthc4a4l7",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.sYcMzx8RcgaIxyLu",
    },
    {
        name: "Monster Hunter",
        linkOld: "Compendium.pf2e.npc-gallery.Actor.zQfufnnLCTzQ165S",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.3qDYEHtyAobpCg5r",
    },
    {
        name: "Irlgaunt",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.10JbkieWjqKA5Hzc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.FuvlS0DHfooobGiN",
    },
    {
        name: "Quetz Coatl",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.12vyw160K7p3M3Mt",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.zeK0ii5YaynhtQi0",
    },
    {
        name: "Hodag",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.1QWZDaBoefL5rWkz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.gUF7bigH5jyJM8AG",
    },
    {
        name: "Ozthoom Shadow Double",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.2JCCY55vijSJF6vu",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.wNa8UPQqSepdxscG",
    },
    {
        name: "Sarglagon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.340AwQpRXGblw1kF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.UMlGhyoHMvhVW6kv",
    },
    {
        name: "Akizendri",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.27R4ntwgch7eIQM6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XyEQrWOQU59qCwRo",
    },
    {
        name: "Blizzardborn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.2Kw49I6EZbKKlTtK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.USDlLyXSuwUwGIoo",
    },
    {
        name: "Suli Dune Dancer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.3dlupMwDA9qv1xWS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.nLlS3MBFCO3DKwBX",
    },
    {
        name: "Giant Fly",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.3DSqfobadad3pA6O",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.DEBxtP23o93Qq1n6",
    },
    {
        name: "Sportlebore Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.3VFHZyjSjNA1jbiO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Yn4dygrd5I6fQv6Q",
    },
    {
        name: "Revenant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.3YcsuATyahEMygNy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bsrQp0pLgvjJr6mC",
    },
    {
        name: "Draugr",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.48agy7vl9fQW1LLA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.lCDygpomjUnutb5b",
    },
    {
        name: "Magma Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.49y0g521xHESClzk",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.R0IEWkfzEuGAJXJ8",
    },
    {
        name: "Dig-Widget",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.57pzXwM9qFiRTwq9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AybkJlxPivzb1cJb",
    },
    {
        name: "Hippopotamus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.5CixyyBkCLj2VI8q",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.k6Qen3uOfNSh4FH9",
    },
    {
        name: "Shade (Abaddon)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.5l3surWoPHTgPoWY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.mJye6dqtmF7xquE3",
    },
    {
        name: "Crystal Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.5QmDXmgNGBmEhQd9",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Xf0zy0ni79Pnbojj",
    },
    {
        name: "Water Orm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.64sdDzjLWu2W2R2e",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ZdQfNuQQjytFzuyd",
    },
    {
        name: "Sea Snake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.6EX8nxH3zRotLRJG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.rVzdgqUn7slx2WSS",
    },
    {
        name: "Shade (Plane of Air)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.6FltuGxvUoNH9b17",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.MqEpezChWmV14FHa",
    },
    {
        name: "Ember Fox",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.6ic6oNCpWjkVAsIN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.xNn7kUg4GxyqCupT",
    },
    {
        name: "Slime Mold",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.6tKVMKDdvbp0VhZD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.PFB61dvUsakciV0N",
    },
    {
        name: "Shade (Elysium)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.6ZLs4H4gjVyb3yV7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.BnHYkRRddyGcgIl3",
    },
    {
        name: "Fire Jellyfish Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7lL7APeHQgkVxU1B",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.E9tiK9bF9de5pf5e",
    },
    {
        name: "Sacristan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7oiIDnLBDpC2r2AA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Tf1eWEQJmFEtcCps",
    },
    {
        name: "Bone Prophet",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.7SVhYtnBn967Hy8O",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.SMLMW81mKN5VlcVV",
    },
    {
        name: "Ostiarius",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.89isDKkB1UCbsSvU",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.coq1W1ZQul6DtH0b",
    },
    {
        name: "Army Ant Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.8a9N2iPA5HLpkWaF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.drcSWbCIWc7P4lKO",
    },
    {
        name: "Cockroach Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.8HJNH3aDTJyJi3pU",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.iICvyvPzfyJe4vzk",
    },
    {
        name: "Cloud Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.8MQXM56Rm0rmzaxY",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.9VOsTzaJmSzJEDnL",
    },
    {
        name: "Bottlenose Dolphin",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.8usfZlFqdD9cchPJ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YZ4G7eRQ49dTVtjb",
    },
    {
        name: "Cavern Troll",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.8WAc7n2M4Ks00yvj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.yHduMu4VBVUHnssz",
    },
    {
        name: "Caldera Oni",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.a8Ih1RIr4UUV4QCL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Wlupxz7dmKb6BYcr",
    },
    {
        name: "Magma Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.a6TY4fgTz5MbpkRR",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.aTXEJ6cMnh9LgnyE",
    },
    {
        name: "Yamaraj",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ABrzFoOqQohQqU6C",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.00uNOPsU5VognIcB",
    },
    {
        name: "D'ziriak",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.aFRGgQWWCDIiBlUl",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.oykGJJYyxMHGXcRN",
    },
    {
        name: "Mandragora",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.aMIb3Xm64NzRj8YP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.V96EY8vLy7alnun9",
    },
    {
        name: "Fetchling Scout",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.aVf2IojxU9ZZ64M5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.WQdWybW4owJWdEnQ",
    },
    {
        name: "Giant Dragonfly",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.b5b6J3TqbcXnmKyy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.8abNns0wcbPMYpRD",
    },
    {
        name: "Shade (Maelstrom)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.BE5GH4dwZ76qV7rH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.dwE8vdnqBGjRWU46",
    },
    {
        name: "Catoblepas",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.BJoM8LAVP8MA5o8v",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.RA2dkQJANNFjgdSt",
    },
    {
        name: "Shade (Plane of Fire)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.BNizhfieKEditLGb",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.LIeIU7FCSZr25ss7",
    },
    {
        name: "Umbral Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.BSlvgDdLkTXU9hRF",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.UHsHUlFmXMZ6XN9l",
    },
    {
        name: "Augur",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.BTQ2ARKulg5Egueg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.hfA1xQSk1dPVwt00",
    },
    {
        name: "Earthen Destrier",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.CrAsEzLl3F2vejd3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.WrczIpL6U4KotDD0",
    },
    {
        name: "Witchwyrd",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.CvO6MAoxDFO0J5qm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AEa3tvzinib5eaIo",
    },
    {
        name: "Woolly Rhinoceros",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.dBUiB3Hyh0hN8Exc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.loYbh3SealeYmxai",
    },
    {
        name: "Viper Vine",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.duaHanGHvRGhUtB5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.rEjKVZqLfEC5jdVV",
    },
    {
        name: "Brood Leech Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.dvZM7hGNDu8olV7A",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.S1OFq9Ywrr4MHMAg",
    },
    {
        name: "Crystal Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DWEk6i42qAhckgqF",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.zW7S98WUbpwBF6ih",
    },
    {
        name: "Giant Hippocampus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.dwyt7e1EZPjw9KBB",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.wvP8zBmI0PDO1Uq2",
    },
    {
        name: "Ozthoom",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.DxV2vH17H789bJ6y",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.EG8jLZfIfTwA0b5g",
    },
    {
        name: "Urdefhan Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.e5yE4RkwLQojRYHm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Pmgt9aAtUiLEagD6",
    },
    {
        name: "Shade (Creation's Forge)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.EKbnknpDZEMkZSF4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.aPyQVT1a4UdY4dDn",
    },
    {
        name: "Shade (Nirvana)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.elb0mL1cfknHxskr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.5bhKDPTVzQJoVGv7",
    },
    {
        name: "Scarecrow",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.EOiOqs1vHCxZAj3T",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.2p7MEk4SdXfLbzxO",
    },
    {
        name: "Veranallia",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ePUTKSr45H7S5dQs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.n2zUhVaFXuOJE8a1",
    },
    {
        name: "Interlocutor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Et2784TVZOXIbtM1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.2qAd4TmEu5wexX7U",
    },
    {
        name: "Giant Frog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.EWoJAp5LJeL1Qfye",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.jiLbjz3kic9Uv5b6",
    },
    {
        name: "Hellcat",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.FERUCyMwvy4Nejou",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.U0pKGj1yJemGAXyc",
    },
    {
        name: "Shade (Boneyard)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.fizcFuAe2WPauA2U",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.j6E7RLYuFNuFgLlS",
    },
    {
        name: "Urdefhan Tormentor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.FJr7Rc9MQEwxjAcz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Jxp6YG8S7st2MZ3p",
    },
    {
        name: "Magma Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.FnLuqlzLl4zCE9pJ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.wc3uAlMMFQhlmTT9",
    },
    {
        name: "Nuckelavee",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.fRLrlY25qXkOMBNG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.dY1wqHKN6PV4oJ07",
    },
    {
        name: "Aapoph Serpentfolk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.fv91xoQJlogVbruW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.X3QcYLr2rBcIsJrC",
    },
    {
        name: "Trollhound",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.fwjDIGzmuEJN81Qq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.gTkvu3RRiDHNONzf",
    },
    {
        name: "Ravener",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.g41X4b3q2iDMLRt3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.iOYLNPBikuBfVBDu",
    },
    {
        name: "Sand Sentry",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.gOjrie9YndQPomU8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.wpu3AsCPAKMSvDqN",
    },
    {
        name: "Hadrosaurid",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.GnKay44MFMZkqXRi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.3zqVFz4FfRYv5Sgy",
    },
    {
        name: "Vaspercham",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.gVNKimslRe1k2hdV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.PLHzkMMyajrodRUU",
    },
    {
        name: "Twigjack",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.H8KNSMb9uo2mJF3P",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9sGgANyNFCKnu06t",
    },
    {
        name: "Azuretzi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.HBkk9MYLomjKDKr4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.cRBVKMNukkRgELMs",
    },
    {
        name: "Trained Raven",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.hFbfXmjMkGEzMkQ1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.WzHEogHdIeOWUnfe",
    },
    {
        name: "Irnakurse",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.HhSoTr6mpwV09Y4k",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.DEZNEMDhWXvv7BrT",
    },
    {
        name: "Eremite",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.hmnNDCNV425MisdA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zYVxMOCM8Yqnjn6T",
    },
    {
        name: "Sylph Sneak",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Ho1Dx2dXlQZYLApP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XbQEXEBwPsBMzxqN",
    },
    {
        name: "Imentesh",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.hvKRgNiQtQJhHk9u",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.GiQhtWnKBE90D3Lr",
    },
    {
        name: "Umbral Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.HzeOxVy3VXxaJmC5",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.JB9SWlruqX9nKhIO",
    },
    {
        name: "Emperor Cobra",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.iLZpGlyBWxS4Idbi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.pzCgOvNPish9QlTC",
    },
    {
        name: "Thanadaemon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.iW6WKMVV3Ug8sa2q",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.YMiDUjk65e52z1mU",
    },
    {
        name: "Magma Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.iZ3B52CYBCfqAaOo",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.ypt7NUTKYTMyf21k",
    },
    {
        name: "Marrmora",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jCF9HjF42SPXTptP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.yaDZ0N6t8vOxbqLy",
    },
    {
        name: "Naari Pyrochemist",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jhr6WpTeY8GXXwK1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.M0R0oJXi5e01jxWe",
    },
    {
        name: "Chupacabra",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.JCoILqEvwovT7tkj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Hl1Nnnda8KSf0Obp",
    },
    {
        name: "Giant Leech",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.JJKxWVExhUEno9j0",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.jREewNN2JDyTawa7",
    },
    {
        name: "Magma Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.JKBO2qqNrRezSb7d",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.7QxDDSEmJaohqaXh",
    },
    {
        name: "Spark Moth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.jpjhbGvaduK4iqwq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vgM18Dm3ur29KJjA",
    },
    {
        name: "Cloud Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.JqnzS6RhUnOjnUdb",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.x201RIxHMApEZVlN",
    },
    {
        name: "Amoeba Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.kapPWNOxXOLcd4VF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.bKSs8SuSI4wrKPRj",
    },
    {
        name: "Jotund Troll",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.kKH3uMHbVZQmEtxj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.4Ay3tf49upoyaJrg",
    },
    {
        name: "Crystal Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Km07kb7vPbSXO7EL",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.jXZ4X62UPPM9AV37",
    },
    {
        name: "Ogre Spider",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Kr5LtF0bqZJAC2Wn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ou78GkBpPX59BeqL",
    },
    {
        name: "Giant Crab",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.l4UOJbphMT7jZ0xB",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Lb11NsmTJpd4YS1p",
    },
    {
        name: "Fen Mosquito Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.l3kFjH4n9Shet6bz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.JXM2kmdb1PhuEJls",
    },
    {
        name: "Sceaduinar",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.LcdQZ2NTG2eJswXA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.NE7DrsBhrbZfRz1Z",
    },
    {
        name: "Skaveling",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.LQL8HU6tISXZwlOw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.C0ZmzdUNtEdXdGcL",
    },
    {
        name: "Two-Headed Troll",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.lUYlClIPITmhzepe",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.1LBt5H8GekcuzDHw",
    },
    {
        name: "Shade (Axis)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.lvvLNyZpbb4Ydz3U",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.UfYZs75zqPmkUXjy",
    },
    {
        name: "Nixie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.LZp7LLcFzDBlrwod",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.X4gmFWEuhtpjBj4P",
    },
    {
        name: "Giant Crawling Hand",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.M4mDroIJlrBYfHkM",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.TlDmc2ZKeIAJuD5v",
    },
    {
        name: "Gosreg",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.MUVc2ZjwGtlpcuX1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.TwFcW5O5J1SdsYv3",
    },
    {
        name: "Shade (Heaven)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.MYE3jqYh3CrdWolX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.sxgfInlzlVdZS7KD",
    },
    {
        name: "Crystal Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.mZLOTDHhChme6mfh",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.EwVHGcwPT3fJloRK",
    },
    {
        name: "Living Thunderclap",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.mZxVXRI1Zh3HUXxn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.UIRu1RDIjv8ueYJr",
    },
    {
        name: "Icewyrm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.N3XfcwDn1Nu7milG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zEystWZ5lvDsnTqF",
    },
    {
        name: "Dweomercat",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.n6cv7eCzPSs4dbHn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Of7WVNrWgvkwctfE",
    },
    {
        name: "Grindylow",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.N7Ej1AyPPolzboex",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.sC4B1pjGrKFXhjOQ",
    },
    {
        name: "Radiant Warden",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Nk3Inn5jel1VQMLt",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.qF9hjssrMjHuVFYK",
    },
    {
        name: "Carnivorous Blob",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.NlMqwcN2ZaALOVSY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.d8ePlvZTcfKCa6Fm",
    },
    {
        name: "Umbral Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.nOAQehZL3045YMX1",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.h1SmS5Y4Sg0v4cD1",
    },
    {
        name: "Cloud Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.NoCtPLRoVvloZe63",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.HtaWKsUKKwW6CaLG",
    },
    {
        name: "Thulgant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.NtezcliwnH4R1tJw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.mEjCLVRt7iDiNZL6",
    },
    {
        name: "Rhinoceros",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.o2IbtStBj11QCRvS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.LiURMjxzav8SBKSq",
    },
    {
        name: "Theletos",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.OaKx1ZaU25i3cypS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.JJOscf3TNaZQ6AW1",
    },
    {
        name: "Brine Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.oMZaSpBmWddKZ1KN",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.fyWOC6EGIhB3kjRN",
    },
    {
        name: "Crawling Hand",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.oSQ3Q9tzTohksAtf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.KH1GkazaI59zftst",
    },
    {
        name: "Evangelist",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.OuimMwM3yFRy5tRK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.66MUUmu8950MEXFf",
    },
    {
        name: "Grodair",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.OVRvL7fKERLsM4KP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.peCOXs71JT57JLsn",
    },
    {
        name: "Coil Spy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.PAGytLw1QnAiNYC2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.y2w2jjs2O3gP0H5v",
    },
    {
        name: "Badger",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.PKAs8bMBMpnegmwq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.DMoeZLBSXHO4nibR",
    },
    {
        name: "Brine Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.pqqe4IKAmUXdf7VM",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.7q6gHmLkKu3gAoxW",
    },
    {
        name: "Doprillu",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.prNJZOU8tdRIZITT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.LwpPOXWeDY2KkL9l",
    },
    {
        name: "Brine Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.PXTQ8wTvnd5qF1hW",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.La2xTgWEI75mXxCy",
    },
    {
        name: "Shade (Ethereal Plane)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.p5ZGpvIfEiBgMG2f",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.assVtFdE3wpL41nf",
    },
    {
        name: "Spiral Centurion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.q6FDEqLZQVjZfJ3x",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.5Gw0j1Qbh1uXUhkj",
    },
    {
        name: "Spear Frog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.QHNXT5bZDqKRzwEF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.KIwZekBcdyBX8X9k",
    },
    {
        name: "Bythos",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.qjAtPDIi7OyUGsNy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.oLfyxHNz8IX06ZcU",
    },
    {
        name: "Smoke Creeper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.QLY246Z6hP41LnCF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.1Flhs1lWpOmAujhd",
    },
    {
        name: "Shade (Plane of Water)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.QpTRWkbZ6k6xP4tR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Wk5flXpCpPzCNfs8",
    },
    {
        name: "Cythnigot",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.QR3AC4mkpfz6KPSh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YhVYGhzNrOFQROui",
    },
    {
        name: "Island Oni",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.R0dyG06kbNYiCqRW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.VGPtiSeeT7CYgWrv",
    },
    {
        name: "Leprechaun",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.R0YrD0izubtQYbTU",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.RY9Xm1B6NwWuChFs",
    },
    {
        name: "Filth Fire",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.r5i3MkSNgNBYa5Cm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vdXh2dETJ21UlgUg",
    },
    {
        name: "Giant Chameleon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.r9L6tdT44kYeN1FV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.oZTRZZlGb722xFMf",
    },
    {
        name: "Attic Whisperer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ril4ohkYrf5mGwHO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.mtRofD6H5BEDHHSm",
    },
    {
        name: "Giant Cockroach",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.RqABskvexmp5sT7X",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.UWRydTp1UvpsOWYO",
    },
    {
        name: "Orca",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.RqcIiiNNEkF28ui2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.uco1YijAEotYjdnF",
    },
    {
        name: "Shade (Plane of Earth)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Rt3lbxJ4jcwGnpF3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.SN5yHit6vkKd4HQJ",
    },
    {
        name: "Striding Fire",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.RUdP7qWg6pnKrPnh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.qdelXqVZKfk1MlAB",
    },
    {
        name: "Pachycephalosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.rZdaxjM7CFVAEq2e",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.dUI8N2AXDGcf3qRD",
    },
    {
        name: "Zyss Serpentfolk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.s0wn50S5mGxagSAa",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.0jSkyGbnMiN6kzwH",
    },
    {
        name: "Spinosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.s8EjxYqdN4gOvcBh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.cbcNwxJAur5r7sr5",
    },
    {
        name: "Brine Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.scSsdEmG0jkEnyLV",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.RZfELtgsk80bDuLi",
    },
    {
        name: "Brownie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.SFpMOxBwiS529dJk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.SjTv1ayVrguLsnTX",
    },
    {
        name: "Granite Glyptodont",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sGI1gh7EPVSRadhY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.oo6wVzEKDYTb62Ai",
    },
    {
        name: "Shade (Dreamlands)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.sHKhlvs40YywkYw4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.oDSlHEEOL2C5ioHb",
    },
    {
        name: "Giant Jellyfish",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.SKooDsYDMEloMG16",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.klE1DOebNsmqmmzh",
    },
    {
        name: "Shadow Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.SpnJQIHLeiJOjEWR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.JSKZryHwf0Ggq8KR",
    },
    {
        name: "Iguanodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.SsR4wiSWA7xhlkH9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.8G5IWZdj7LG4WHPv",
    },
    {
        name: "Weretiger",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.SYaC46yrqcyp16Dq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yS0bUM8R6hb4fIx2",
    },
    {
        name: "Catrina",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.t8XwrLnvMnz3Z1al",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.QgHtsAbVYswHzMC2",
    },
    {
        name: "Giant Badger",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.T9vzmpvpRL5xjrhd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Y3wRpLSDZsYcigjX",
    },
    {
        name: "Shade (Dead Vault)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.TCFurVn1aWhukqxb",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.iOvt926hGa6ci3Q2",
    },
    {
        name: "Carbuncle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.tdCyjq57rgfPezjT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.hXWykGzjb5RLkJvZ",
    },
    {
        name: "Magma Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.TeUO57XO1Mqk1cTl",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.HdIr8upCJBgIdnyj",
    },
    {
        name: "Totenmaske",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.TKlnOKpYJkg1dNwb",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Bg9QWIRHTPIsKKyy",
    },
    {
        name: "Denizen of Leng",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.tOVGYQueeJwLtn0v",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.RLpV0XLGZJWjtEYT",
    },
    {
        name: "Umbral Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.TRXxfSSk8oKHvMn5",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.1QteIiv5ZqGtWQDb",
    },
    {
        name: "Stygira",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.tZkiE8hnN5e9KIzi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7kiT6lveGXWzNo23",
    },
    {
        name: "Rusalka",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.U2hAALepVC90CNhQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.tHXV7mD747K60656",
    },
    {
        name: "Giant Mosquito",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uBG93M52pa84qIt5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.mno9JBZ1XgEHo6m4",
    },
    {
        name: "Ahuizotl",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.UgEN8JYAT6tLbryy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zstEJQKVAKoMskcM",
    },
    {
        name: "Vanth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uiTUtcXixZ6TdKYE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.74TxKGaW7RPzTdbm",
    },
    {
        name: "Brine Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.uIYl2DKLlcFLHNKo",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.9D9woSv4rl4brb50",
    },
    {
        name: "Crystal Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.UJHJVPPvV0VbQqlW",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.wFcWMrjNtnfSKOYm",
    },
    {
        name: "Tatzlwyrm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.UnWr8QSMq2VZUQhX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.oUCl1KA2s2t18nlU",
    },
    {
        name: "Giant Ant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.URYQ5goPCmrQvJf5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.mEZUTqNIgu0ASApu",
    },
    {
        name: "Vrolikai",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Va2LUALLnnfWX3wq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.iy5XBb2u4BOVxjtz",
    },
    {
        name: "Icicle Snake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.veyyE0brfjIoQK1q",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.6sYj9SQRzKywNDOJ",
    },
    {
        name: "Megalania",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.VHXsmfnOBRBXB6TL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XmuMPoHv108sHJOu",
    },
    {
        name: "Giant Amoeba",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.VPDKzeTY8O1XrKLk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.37VjWGXq40eLfrl6",
    },
    {
        name: "Cloud Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.VlxScTgNFzdc6KUY",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.tWSiwS6vQif9808l",
    },
    {
        name: "Behemoth Hippopotamus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.VrkmTQKB3Ln7wVTr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.c8kb958djPh4wXj5",
    },
    {
        name: "Mist Stalker",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.vXXEdDy8ciGJxt3i",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vYpuSMLX0yQSDyFn",
    },
    {
        name: "Elasmosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.VYEPG1G64OaCQmwf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.czYNR3AktDDQYDUB",
    },
    {
        name: "Marsh Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.W2gd0emEVbD8EGmf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.tuuSayyL0A5R6hZh",
    },
    {
        name: "Snow Oni",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wBGUIPJMm9Van9GQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.CIQgNHkiUtBQR2NJ",
    },
    {
        name: "Zebub",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wCsfRovcZMZxSdGm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.IE0EM4KDUbI5ZJz0",
    },
    {
        name: "Shade (Outer Rifts)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wE9kb53ZHifUfdD8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.0phL9JgjsbcPsuoS",
    },
    {
        name: "Umbral Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WfzhHOqGb3bR1e7e",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.DDtdh1SP5PFNm73S",
    },
    {
        name: "Shade (Universe)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wjcBMB7OvCHrnS39",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.3orVmNKI1518s4m7",
    },
    {
        name: "Aolaz",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WMiPblOVq5w2Fa1x",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.KdW5UeZSqeTZZlo5",
    },
    {
        name: "Brine Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.WPTXi1WGKAvIIsrH",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.PZlEThIJ3lWXEKMa",
    },
    {
        name: "Raven Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wrzlJufGEfMg5kVE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.k5lxeobI0Q3l6rqV",
    },
    {
        name: "Crystal Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.wtxNIFVSpVFuYfmI",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.PrIiJRB0lRwD9SZw",
    },
    {
        name: "Giant Dragonfly Nymph",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xarabMfYuo7yvD1N",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.OYBkVqJA95V3J1WG",
    },
    {
        name: "Jyoti",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Xb0uY2tg1Cd3kZd0",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.VeCpLJCnBiHAwfCg",
    },
    {
        name: "Norn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.XCNRztCxn6EbJ0gr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.8w0LwQHkip8nzFo0",
    },
    {
        name: "Oread Guard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.xrAx0xj0UsM4DG5T",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.gZL6zc7tQAmBKXpx",
    },
    {
        name: "Hippogriff",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Xv74O1mFzzP06IXl",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.eFGPKbhix65FSG9u",
    },
    {
        name: "Compsognathus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.XZZdG5RosoYsF237",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.uzH85ifDz5GU525p",
    },
    {
        name: "Augnagar",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Y1lwEf06O1ijOnwt",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YKMvlKA1AZJlXtz9",
    },
    {
        name: "Giant Maggot",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.y9D2wh63pBzIyI7i",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.e0Jxg2AHeQSDGNnV",
    },
    {
        name: "Animate Dream",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Y9SDbANT1DWI1DKU",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.r3PNRpEir4BVjnCC",
    },
    {
        name: "Gylou",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.yIpB2uLyeBWQjfsn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.s492qJ4psEb4FXuy",
    },
    {
        name: "Umbral Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Y5uPBnABTaAnpdqz",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.wr4R6PfEfFkZjm2P",
    },
    {
        name: "Cloud Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.yr5xSfvSt7vA45wx",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.WqZ25wiUIuDAu8xT",
    },
    {
        name: "Meladaemon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ytsHNgRwLzabsrZt",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.faZ3sXbvs51DFvrM",
    },
    {
        name: "Ravener Husk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Yv0005Vym1peVKHq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.OK7Gl2rBDDBvICvh",
    },
    {
        name: "Esobok",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.yvmX4J21XE1wqDar",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.n1KQRInuKkFRM7ot",
    },
    {
        name: "Shade (Astral Plane)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.yXP9vS35tZ5iAUix",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.2ZJo8mtDRD4Xffto",
    },
    {
        name: "Shade (Hell)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.YZeJRw4hvKyBrNFx",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.5BgI2GFP6D9B3wIN",
    },
    {
        name: "Dream Spider",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Z2v611Np3J1MBkpv",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.4SfnQzORMdmBsp49",
    },
    {
        name: "Magma Scorpion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Z3J7uGaLmlFRfwPk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.tlz1pWkPehmFj6YS",
    },
    {
        name: "Undine Hydromancer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Z4eI4EhXBWDs8bl8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.yFFw1Gsd4teXA97L",
    },
    {
        name: "Drainberry Bush",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.Z9rOUqCqAaMjvgBc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.MAxlGSzjsTYi1w6c",
    },
    {
        name: "Hippocampus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.z39LYFGYmOsoGVSh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.CHVMOXznjUDcb3XP",
    },
    {
        name: "Cloud Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.zA9tCwjyViY6ZPfS",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Z4cV7G4r3zgDoAlH",
    },
    {
        name: "Living Boulder",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.zAxCU99Jwky6QoBy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Z6yCW77f44bEUgLH",
    },
    {
        name: "War Wraith",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ZGEf08j9q4fIPDFd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ZQ7lS9TYOFv07m1a",
    },
    {
        name: "Verdurous Ooze",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.zXZrUTQSI0WxAsF5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.GOQPbXk8HZDypZzd",
    },
    {
        name: "Shade (Netherworld)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-2.Actor.ZyZMJ19Ea0cfydK4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Xmo4EAdMgltKqjah",
    },
    {
        name: "Clockwork Mage",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.0A2XLkvOzDMOjC6Q",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.wHtddmyDuL1l2E6I",
    },
    {
        name: "Air Wisp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.0HTju4vf8ADAAh2g",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Q6oMLXjmGqF6dxzp",
    },
    {
        name: "Sovereign Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.0laxaxLySatd0Uii",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.NgxX7OjbK40eRFde",
    },
    {
        name: "Sky Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.0qqABck8p0lCe4xz",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.D7YQwzLCMFSnYOxd",
    },
    {
        name: "Ganzi Martial Artist",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.0sQg5UM8dQY7fBhQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ko19XnS66DM8Pjr9",
    },
    {
        name: "Elysian Titan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.0yisb2wbIvfNqciD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.synED0IrMbFHimtc",
    },
    {
        name: "Giant Opossum",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.1DzJjE7OnRDY5Pir",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.kmLBKW8e68HICZau",
    },
    {
        name: "Slithering Pit",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.2DrerJYEJon5U6Fx",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AEIZnjIGnqkYIeQo",
    },
    {
        name: "Viper Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.2pQoqcUxyHsTLhjw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ScawCKxGgd4d0Gle",
    },
    {
        name: "Shae",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.2vvPHlLhgDGr8fOF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vhfeBnFTj2xm3jfH",
    },
    {
        name: "Wyrwood Sneak",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.3OrdGXuPXSlrLlbf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.eEnyd5lwBY9wtgSS",
    },
    {
        name: "Kitsune Trickster",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.3SYFPEaAl4g5G3GK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.uvzy6nHGS430DEfC",
    },
    {
        name: "Underworld Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.3VTjHYQjp1aE27n4",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.dr20tOnX7F7sIXF9",
    },
    {
        name: "Girtablilu Sentry",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.4glVe36VTR8HTjcE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Eqyg78faM4mqIoh5",
    },
    {
        name: "Animated Colossus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.4WMThCqvHV1aaBwa",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.G0BuqHfjITO4ZLi3",
    },
    {
        name: "Incutilis",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.4vwMHy39IQyb7I7p",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TExLkHMs37EL7uzZ",
    },
    {
        name: "Grioth Scout",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.5dZaPSltPYYIupeq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.NeKtvaz1jB7D6oti",
    },
    {
        name: "Thanatotic Titan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.5qtnZRnS3WF5oTUq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Ww4WnWmMJcfqZlCX",
    },
    {
        name: "Rat Snake Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.60bknqrpHs2lL4pt",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.VRhTPMegGeeCtAzx",
    },
    {
        name: "Munavri Spellblade",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.6A317pomsGPzW17M",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.iUa0h6JPrGosE7qi",
    },
    {
        name: "Abrikandilu",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.6bkqOecc1n0PulCu",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zfy0YOxEAMaeHAWI",
    },
    {
        name: "Hārakasura",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.6yc1exIcngUEvBQH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.gdr3v0rBehOKnh82",
    },
    {
        name: "Caligni Vanguard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.79pfivF3swvfsJE4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.bgeCbx3Gr54YaKEJ",
    },
    {
        name: "Vilderavn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.7bTj2DC91yEdJiLq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.NxLQHUMs57TktiZa",
    },
    {
        name: "Terror Shrike",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.7lSwznbhNb7THfZo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.kU4QpEUIx4R1sF5K",
    },
    {
        name: "Kimenhul",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.7M7mwhETGEJjYoiY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.dl5JB5ZgKPcbKEMw",
    },
    {
        name: "Deimavigga",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.8Ds7BAEjgSSB32wS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.rxeSI37OvsSoXvYf",
    },
    {
        name: "Vulpinal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.8HdbN5NwEolamidg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.NnIEe9PZHqUOmAY9",
    },
    {
        name: "Festrog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.8LBJ0jKca3vLaUhx",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.NQlPvg8SaIb9jzDl",
    },
    {
        name: "Khravgodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.8S088wbZjUhx6IB7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.H9P2QB311Qi5IwUo",
    },
    {
        name: "Raktavarna",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.8M91u7Q3javRQVEY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.nFhAJSpbJz1w71EU",
    },
    {
        name: "Sabosan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.92nVPdtlJR5uHzIl",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Fyzj8WVOlsuTWTTU",
    },
    {
        name: "Clockwork Soldier",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.9HkUdRKoprwo27VN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7xZDgCCOkbDAv4Sm",
    },
    {
        name: "Fire Wisp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.9KZRWATLOGP7QGyM",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.micllXbcz1eBcAoz",
    },
    {
        name: "Haniver",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.9RNisBYwGOCQan1S",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.wlfPfrgdsHhXhQYZ",
    },
    {
        name: "Sulfur Zombie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.A7TFAr1rBtKJyprn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ekC1VHJtexh3AgVv",
    },
    {
        name: "Nosferatu Overlord",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.aAU3gHWd1a9DyQPH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.pMNBNo8VMAJdlhN3",
    },
    {
        name: "Forest Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ACTvXKXcw1RZQxrP",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.S1ZWBUItiQKCsoSr",
    },
    {
        name: "Hermit Crab Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.aeLTz7wO9ajPaQ0V",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AWEclumj1PE4LrVR",
    },
    {
        name: "Tupilaq",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.AlLBsYO3ax9OQzAK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.FxGtlYqs1bRrpAuZ",
    },
    {
        name: "Garuda",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.aqvMwn6885CJEmCO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ej7H1ft2CNCIsTMg",
    },
    {
        name: "Lampad",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.AxfH7V8A38VVugYo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.j62ZpsgfHVfiRzAP",
    },
    {
        name: "Trilobite",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.aZBp1m5C9nXRgxHA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.VhO8zvcp0K23bC2x",
    },
    {
        name: "Nosferatu Malefactor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.BEzfxlrA0CNfh4Fr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.rchfzUI2MVOVp56K",
    },
    {
        name: "Shambler Troop",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.cbduxhlI7JbONLXF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.WQYzPF4cN4msA8lw",
    },
    {
        name: "Clockwork Spy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.cKZtOsBlN3Qu8Kyq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.9Uc7T3x3cxNo7lvY",
    },
    {
        name: "Pukwudgie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.cMBXcfS0DuZ7O2vm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.1ZRHjuGOluR4IUrs",
    },
    {
        name: "Hellknight Cavalry Brigade",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.CXCdPqMRX58sBQ9G",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.02AGznZTv5jjcnOg",
    },
    {
        name: "Sky Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.cXz5nWwlbRQ1g90y",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.WYLwQl6vyfoe7FdV",
    },
    {
        name: "Sky Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.D0IY6UW5I0R4GprS",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.DvTyMt09Dw9JKYaD",
    },
    {
        name: "Sea Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.d1hv3x7syXaltxg4",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.PoL0b0ro9SES3N3t",
    },
    {
        name: "Sea Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.DCzr8qOfSg2K7e3z",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.9DwBxIoHnUShWw1Q",
    },
    {
        name: "Cave Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.DIJQ1UvfDDnDP545",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zjt9MtcggYu1cG9i",
    },
    {
        name: "Girtablilu Seer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.DmQM0QTSPJ7YtpMg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.KerIcyz9XOTkZUdF",
    },
    {
        name: "Arboreal Reaper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.dniiLeUhXaq5CElX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.9Gex7SavD3YJDPBs",
    },
    {
        name: "Mix Coatl",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.dVJkFPCqJcPjImdG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.B9XWYO1yD0VFXphr",
    },
    {
        name: "Calikang",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.EvLBhZSMrzVDk4mM",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.FP2JGgFA3NmnXf1o",
    },
    {
        name: "Levaloch",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.e6r8AGxfp8PDXaZk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.g2UXJD84mrssh4tc",
    },
    {
        name: "Sky Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.eO3hNubEw16BC8UJ",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.hyfAioJMfO52gVP2",
    },
    {
        name: "Hekatonkheires Titan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.esw400AugH9XWq5p",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TWr3kyBo1FhAX2oH",
    },
    {
        name: "Blood Hag",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ew52XP0hjUACnidH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Jbc4BC6wv9GLtoY7",
    },
    {
        name: "Nightgaunt",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.eYKWJCYNqqp1rp2i",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.g6sgRVXnvpjkl2KV",
    },
    {
        name: "Animated Trebuchet",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.fcFQ2GDUZ9YAhiDC",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.jaKVhw83CPKpW9UJ",
    },
    {
        name: "Kodama",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Fj3CXqR0Y6kgvcBE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.X6Avn6djuSmMPGrG",
    },
    {
        name: "Tyrannosaurus Skeleton",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.FjZ737XIvSOSaYcA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.SpvzECYhPp7rKLA1",
    },
    {
        name: "Animated Furnace",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.fLyIWlTCW3cUPjvd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.P3jFBFnHhjl6VsLd",
    },
    {
        name: "Ovinnik",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.fuCPoL2OVcQf5uT9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.8uUkBJlMvKlJWtKx",
    },
    {
        name: "Flaming Skull",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.FvywQFbFzwLV8mvW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.UfiWHXnDg13Gqyyu",
    },
    {
        name: "Samsaran Anchorite",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Gf3g6wQquSjJhFMC",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.NBdVKrLxKhurBETJ",
    },
    {
        name: "Zombie Dragon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.GGuT6YsRH4aXhpl3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.fCsCDQAH23UOtECx",
    },
    {
        name: "Amphisbaena",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.H796hayJm3J7MYJg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TbgHiHtPCK59KStC",
    },
    {
        name: "Grioth Cultist",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.HiazGJoPkJ3gQVAO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.2ooIWWoCK1NCJKwT",
    },
    {
        name: "Fuath",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.hiDSC6gqneQTB106",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.M6c9Trk8tzwZ2wVf",
    },
    {
        name: "Sovereign Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.HoBmSopFM5TjlmBj",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.cxCqulLN9wT5Mqfi",
    },
    {
        name: "Tikbalang",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.HObVT8aJnsx5nnqu",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zGdsQWq6uHjE7TSx",
    },
    {
        name: "Tooth Fairy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.HPVVewX9vqKH94xf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.q95mjOkL678a1Wnt",
    },
    {
        name: "Globster",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.i3Ui3hHIBZnHl0Le",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.H9CHNiW18cRFocNO",
    },
    {
        name: "Forest Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ie5MyxqTqGlxzgsH",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.c0xJ6vt0CncmExKl",
    },
    {
        name: "Skeleton Infantry",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.iiXjQ1SchGiotpVp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.dwPrJjsIA0AEk3vl",
    },
    {
        name: "Herexen",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.iLoVkzve6Nu3gErr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.oNR29GreK0AxLucN",
    },
    {
        name: "Shikigami",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.JKF2cMQEWkA5avCO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.MovMBbHEln0TUlYh",
    },
    {
        name: "Owb",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.JkJRKxuIGJ3DOD9L",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.V6CX3rQPq8iqQccW",
    },
    {
        name: "Forest Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Jn35hqHlyzEyv0T7",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.DfpQvOOkqdEbUnyC",
    },
    {
        name: "Jorogumo",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.jdqCEhsHDs4ABh2X",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.u45PPktoMp5L2vf3",
    },
    {
        name: "Forest Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.JvT56DMG6vKiii0u",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.3l13v1lJj5If8wQn",
    },
    {
        name: "Sea Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.JZMK7j7WGWlB3Jhw",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.uizTKvo2VEZX62ZQ",
    },
    {
        name: "Sea Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.JZuQJnATcqljgGWn",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Q2RKuEDXFh2uezrF",
    },
    {
        name: "Trilobite Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.kCaEwjZyHXy7cJre",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.YKHMhYikhIUovuEE",
    },
    {
        name: "Aghash",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.KGAuzJaKfPAdn0It",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.2Uz8i4Q3xaECmemr",
    },
    {
        name: "Wihsaak",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.KGiEFgiqiexNBfS3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.hj7in3ZZlTu8n4vi",
    },
    {
        name: "Blood Painter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.krbmyD1SuPQb4QfF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vLgNUa2zB9FPwfhB",
    },
    {
        name: "Phantom Beast",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.KSKettq5j3A7UsIh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YAGc6gQ5VrvWyR37",
    },
    {
        name: "Winter Hag",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.KTzSpyphiJ78EnBd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.MrDjKHDkUS9UMjEL",
    },
    {
        name: "Green Man",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.kXc11R18rF28AgIf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vpXcLtLPWNRGSQWA",
    },
    {
        name: "Lampad Queen",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.lat5aZFMlWUR2Wbs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.15EHktvYa21dENni",
    },
    {
        name: "House Drake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ldzHiLhLAHhwpVJe",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Zh8awPHA7DZxTboc",
    },
    {
        name: "Elder Wyrmwraith",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.lqDwO2xkBNNEZ57B",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.xcnM6RMbA2ROniM7",
    },
    {
        name: "Sky Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Ls2qYZDASu3VgXxo",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.LFOjID9xGMPd7BIl",
    },
    {
        name: "Xiuh Coatl",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.MD6eXpxoSPO02fZY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.gVgVKlSqg0crOQSl",
    },
    {
        name: "Athamaru Hunter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.mgQSYE94vb2ICVjL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.pzQhR0mc8HEhXLOZ",
    },
    {
        name: "Hellbound Attorney",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.MolnKBns2ePDFbAB",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.R2Vgjb3Mpyq6HyjM",
    },
    {
        name: "Draconal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.mRsiT9EtpbOQ7AeX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7gzLs1OP0aCZZNU9",
    },
    {
        name: "Millindemalion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.n9xSjQA1YSlYc9p3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TmvTgG1M8nzC5Q0K",
    },
    {
        name: "Domovoi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.NhHGDx6ChbrhAmbO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AzYYP23uGecb0Jmw",
    },
    {
        name: "Nagaji Soldier",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.NikAalo85JWVE6d2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.OLGvwUyA441SwgQn",
    },
    {
        name: "Wyrmwraith",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.NldgVUIHB3asozHm",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.mkhoMY6pFClaARVg",
    },
    {
        name: "Ostovite",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Nq0MR5YsuglgPi0m",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.A53wPFx58XRx0UZ7",
    },
    {
        name: "Sumbreiva",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.NQzkW5D28zIGESBt",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.DHzm2QFsaGTGgReI",
    },
    {
        name: "Stone Lion Cub",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.NSD8H0xzbSWOgt7x",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ROHOyxPW1njsDOG3",
    },
    {
        name: "Draconal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.nSpM8CroNk3J78SR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7gzLs1OP0aCZZNU9",
    },
    {
        name: "Tooth Fairy Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.NUWL7LHDqmP0c7OB",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.rmJItn5jMW7Af0Iy",
    },
    {
        name: "Underworld Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.nX3LIuvHqiKNrth9",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.jqcAeid4jcx9Lrjc",
    },
    {
        name: "Pakalchi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.nzF46X8zcUG0CvpV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.vDYawEVRlCxiIp5k",
    },
    {
        name: "Desert Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.o740a5FFLG834FkV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.D1P14zfFcD1Y0vXe",
    },
    {
        name: "Underworld Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.OiMWiQQuBYt6Yc73",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.L4a9tb4s7FmwWi6J",
    },
    {
        name: "Pusk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ooyJuLQ3AivRwLpa",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.OoUrk7aHE5wq9nLs",
    },
    {
        name: "Hyakume",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.OPeTxIUwkkAjC6T5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.y8bxt4vLmHHy1Xys",
    },
    {
        name: "Earth Wisp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.OPRuZ1cEuKkJGPMV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.5YmEdbkqk1IYWL7B",
    },
    {
        name: "Sovereign Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.OrO28a9h8kakTTj7",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.yKxTaTrjBWCk7lPq",
    },
    {
        name: "Hadrinnex",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.OTEJFZ03NDqtrhcj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.OKoayj8C936nmmd0",
    },
    {
        name: "Omox",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.phOYPM1OVAKPg68l",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.hvVFocY8r72XEaqQ",
    },
    {
        name: "Draxie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.PJCeh8sj9Sm5Eqz8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.UuQHd4v6gG8ONdCt",
    },
    {
        name: "Tylosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.PX8tlo804y4I1C8S",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.s6A2tdZ3r3uOLca1",
    },
    {
        name: "Stone Lion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Q02Io3eFQpBad3vD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ZLqdudajQtI8dkTT",
    },
    {
        name: "Ximtal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.q2ja0fkdr4PeZOTE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.FlrIq6SquIYb9REJ",
    },
    {
        name: "Draconal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.QHl25x11pMTJ9SxN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7gzLs1OP0aCZZNU9",
    },
    {
        name: "Esipil",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.qlYzd5vmhsFTNdbX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Ipbn4WsIT4DxAWEH",
    },
    {
        name: "Moon Hag",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.qm0YqO9ik2U2Gjdx",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.5oHZRcwDl7jhLOT5",
    },
    {
        name: "Doru",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.QJRi6WzEm0LbXjAc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.cneF8jYlvluvLkZM",
    },
    {
        name: "Kappa",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.QrD96KPUHGjjkLbL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.hoqQ2x6x1tffC6wX",
    },
    {
        name: "Dybbuk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.QUzBzxRy6HLeK7ja",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.IrssIkWkW6fsbHJL",
    },
    {
        name: "Brainchild",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.rFpExrqWywVDPYdP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.6WgGNVcmuwNlGDJP",
    },
    {
        name: "Terror Bird",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.rnxg09tUCFPGW8IS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Mlgww6QXZoJt4WLF",
    },
    {
        name: "Skull Peeler",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.rOBXOcxMcnFR2P9y",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.69ymtDVWT6e8gFbW",
    },
    {
        name: "Feathered Bear",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.rr48cUJxGpII7jWz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.1BIrNW4L32e9fTFF",
    },
    {
        name: "Brimorak",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.rVtBZrHnWM3lvSs7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6UrgCT8MwC8CeGbu",
    },
    {
        name: "Wayang Whisperblade",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.rW6vTwkAEAH8AMGw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.wGnhBByFbXVFt9WX",
    },
    {
        name: "Lovelorn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.RyFqNQ86931Y5tqO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.H2awmVR3ENs0VeYg",
    },
    {
        name: "Vanara Disciple",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.RZ1SLG0gxrOYSKRs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.za4NM8NwZKumv3NM",
    },
    {
        name: "Dvorovoi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.S2DdLrq9V7M5WzM3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.bm8t04PxMs5TYFS0",
    },
    {
        name: "Silvanshee",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.sCzgD99DO10Koovq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.UhnElzzdp553WUyM",
    },
    {
        name: "Draconal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.sFePZ5s3vMtC4YPx",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7gzLs1OP0aCZZNU9",
    },
    {
        name: "Tzitzimitl",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ShcTh3dSwjxbtoGG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Ws6554On4eh2Blq7",
    },
    {
        name: "Forest Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.SNOPmNj4ZEiFBAdv",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.WLTTW463KWOamgCE",
    },
    {
        name: "City Guard Squadron",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.SQKdvPIhWkrHlkbn",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.jAdRgBHut1h1et10",
    },
    {
        name: "Munsahir",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Su21mCjUxFJnoWGg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.9YU5IF7pIcuq9bNY",
    },
    {
        name: "Platecarpus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.SuI5sxy5cuc0lnsh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.BiIAxNkNqSlDf8Mp",
    },
    {
        name: "Draconal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.szEyrpElcYBagqL2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.7gzLs1OP0aCZZNU9",
    },
    {
        name: "Vishkanya Infiltrator",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.tjtTHdIBP5QIAyS7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.GMhMNMf5HpTojgLv",
    },
    {
        name: "Valkyrie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.tr9bmyZ6CYl2FPnr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.PC6i1eCbQgWBvi7U",
    },
    {
        name: "Nosferatu Thrall",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.tQIYWBefvpemUVeJ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.nzlBAi0k8n5Mzbzk",
    },
    {
        name: "Sovereign Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.tWjY4BJMhawdqkD5",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.aobRRpvbF7mi9Agk",
    },
    {
        name: "Penanggalan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.TzltHdjikojp7Um7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Bz8Sexx3bGFhE1Lq",
    },
    {
        name: "Maftet Guardian",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.U3rMc5sN05MempVX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Xn65difyR7Jp4K3q",
    },
    {
        name: "Hesperid Queen",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.uDebX6flGwrviGZK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.dA6UaeIi9wFgBAQO",
    },
    {
        name: "Sea Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.uDNQyboLAiIxBatL",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.syPyp7ZI9ygqMl5J",
    },
    {
        name: "Sepid",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.UTqProdd8LA0X1BQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XlFn2e6yj0mxHeq8",
    },
    {
        name: "Shokasura",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.UxiwQ2Nmvfk9Q9tC",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.K5ahJfASpyXA2WqM",
    },
    {
        name: "Hesperid",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.v0bKmqnUHxPTFQu4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.cEHRuzsGF73PVT3P",
    },
    {
        name: "Betobeto-San",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.v0nvME08U3mZJWB3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.440q9qZ4A7fDNQJQ",
    },
    {
        name: "Adlet",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.v7nu3NMYTS0YyxH4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Zaixy2G1NHnaYhEo",
    },
    {
        name: "Sky Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Vf4uzrQYTbENFFFF",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.FkzvfxxgLdEwqtx3",
    },
    {
        name: "Einherji",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.VF81W91YRFgtBLli",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.jgTjzUA2nJKYY2Tu",
    },
    {
        name: "Procyal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Vi2p9VroteSHsSy9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.kOwaB2H8v9c2BXGf",
    },
    {
        name: "Arboreal Archive",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.vJAPvmWCjVGKr06E",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.zs7dPbTetShR8T3D",
    },
    {
        name: "Cunning Fox",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.VMZOQGY1x1of0XLm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Olett4ib6Xik7qYt",
    },
    {
        name: "Rancorous Priesthood",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.vOTFqODTDDC2BDLx",
        linkNew: "Compendium.pf2e.pathfinder-npc-core.Actor.uFQsIRC0zz3sNNIW",
    },
    {
        name: "Forest Dragon (Young)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.vWF79pVG3dbZIlId",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.gfAU2eApv4qSuawU",
    },
    {
        name: "Tomb Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.vwzfmjR0Me6xPdTP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.XbaIHmvgqjLChTKq",
    },
    {
        name: "Nucol",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.vzBsZqtGuj2FVLGj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ANptV6ltBi9C3P1l",
    },
    {
        name: "Zuishin",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.wLG0f6J8cgyCA0w4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.mPFQENrVt5xhML1T",
    },
    {
        name: "Underworld Dragon (Adult)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.wmKIB7cgWdAZ29mv",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.QbKEJtqThE5q9XCl",
    },
    {
        name: "Animated Silverware Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.wnrgiB2PkaBC5gOQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.3isJhl2RNoYeYSSV",
    },
    {
        name: "Sovereign Dragon (Adult, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.WPRjynFmJ2p1MnT3",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.ehYT62H6Uc36Tjjm",
    },
    {
        name: "Severed Head",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Wq0Euk0RK6rhRDsN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.B1ZWz3rJ6VBYVH1U",
    },
    {
        name: "Storm Hag",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.wVMMl1jfxWyqU4yq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AjEh9Mk44RleMwSR",
    },
    {
        name: "Pairaka",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.XgCQnswAedPcwLck",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.D4apkwiUo5Rb6TFr",
    },
    {
        name: "Rhu-Chalik",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.XmOYhscNHFw7M2G0",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yj2nhIS8ZsAJh2l5",
    },
    {
        name: "Strix Kinmate",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.XrSz2IIKbeYFGILW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.JyEB2owA0s3mI3DQ",
    },
    {
        name: "Clockwork Dragon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.XwtH5kP5gkY42yWp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.44cDgnq0KY88X70E",
    },
    {
        name: "Danava Titan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.xwTZZAEs1sf5RWCq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.l3ULL4wKnaoOZ51P",
    },
    {
        name: "Moose",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.XXsOK8ZUoqQATarG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.1wVVI0Jj7MdZ3uHg",
    },
    {
        name: "Bison",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.XyEvsURVDnJwb76F",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.z2qSD3VrlRsXGHT5",
    },
    {
        name: "Phantom Knight",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ZDGYrJ68aTzZ2EtT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9VMoTqyVaKc4ZR4H",
    },
    {
        name: "Swordkeeper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Y8lQqtOgXYXDCPFg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.L10I8M22nLRERxY8",
    },
    {
        name: "Underworld Dragon (Young, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.YfosnJUwR0fSV7a8",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.ked8eClr3mWdIZoJ",
    },
    {
        name: "Mi-Go",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.yi9g7D49uGvAdGDP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.WmLoggAiAGBUZDSZ",
    },
    {
        name: "Aphorite Sharpshooter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.YLLyd6Jb4Zqmz0lo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Yei6zuiycFTzNMvN",
    },
    {
        name: "Camel",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Yq9TcUof5D117yns",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.ZAXM01KREZECWRvz",
    },
    {
        name: "Sovereign Dragon (Ancient)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ytYKPtPotjvsWoSl",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.Hu89cqmPhPuuMf82",
    },
    {
        name: "Water Wisp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.YX0CqhKKtRzoLkuP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.PV8ex8ivTfD7bzEP",
    },
    {
        name: "Underworld Dragon (Ancient, Spellcaster)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.YzWAuyEVPLTyRoAy",
        linkNew: "Compendium.pf2e.lost-omens-bestiary.Actor.cdvuNbNQ1sPCjG9S",
    },
    {
        name: "Myceloid",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.Z5RBfl8x39uFpDUn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.jWsHDhzrIOqOp29p",
    },
    {
        name: "Caligni Caller",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.zdJgaVe6VRSfEE1n",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.wTX5G19zieFnaHYD",
    },
    {
        name: "Grimple",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.zGco5QmokZpFgLes",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.IErCbIpdYOBQHNmN",
    },
    {
        name: "Owb Prophet",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ZOrG61DZ9aiv8poK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.4NXlXj2looUjPJY1",
    },
    {
        name: "Mobogo",
        linkOld: "Compendium.pf2e.pathfinder-bestiary-3.Actor.ZwtcCnW9CEs78WRC",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TQtISRsI3FI2ddBR",
    },
    {
        name: "Brontosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.05E3kkjoLZVjFOeO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.wy8Ve0m3wbHMo1U1",
    },
    {
        name: "Giant Anaconda",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.05wwpHHsBlxBbdkN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.XDNJSVxOOryeuN44",
    },
    {
        name: "Umbral Gnome Rockwarden",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.0hnnwyqLfYVIenzd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6yTmbDaZmrkXUJ4t",
    },
    {
        name: "Zombie Shambler",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.0plBflWwrCWQO2RO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Xo4IGzw28hivgMmM",
    },
    {
        name: "Goblin Dog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.0rfropeocJWXC6pg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yclRuradTmZbdKFQ",
    },
    {
        name: "Gancanagh",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.0SAlss24nUMdX9r8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.hGYIynV60GGfg8Du",
    },
    {
        name: "Dullahan",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.0SJqmk4ItwL31Rg9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.GNwLVbfFx8EPz7xO",
    },
    {
        name: "Lizardfolk Scout",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.1CzZINpYRcNBKDnO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.V8w4iOwUMPqYnqVE",
    },
    {
        name: "Homunculus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.2GRPw4VK6zfCS2Qw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9wNjq9BirBoxyJVH",
    },
    {
        name: "Ghost Commoner",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.2H2AEwQnfKJC0nrd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.N98ug9jQHqeFoK1N",
    },
    {
        name: "Roc",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.2HvXtedQziTTfI0S",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.S67oZ1mvVNz9FTUE",
    },
    {
        name: "Tarn Linnorm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.2IrbfdtWyXiGOLBA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.k0HUy6WdbZUNfG8X",
    },
    {
        name: "Deinonychus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.2IrWQjtFvsen8ioo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.wNkS1ArFjS6ZsrPS",
    },
    {
        name: "Satyr",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.3kLXBdtKpUsU8ey5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.aj4ZJUULa7VoPYWy",
    },
    {
        name: "Giant Moray Eel",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.3VsQFEdIN5e1uWle",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WamGnH8v0QHz8NFr",
    },
    {
        name: "Kraken",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.45Eo7MFWG3ShikvD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bgKwwvO0uDGD7XsG",
    },
    {
        name: "Tabellia",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.45neevf5aLl0YPyk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.H8Xq9hZP5bEEI3Hf",
    },
    {
        name: "Goblin War Chanter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.4BBzo72pHOpecoIp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.wepiUEi2Lxl8j1BH",
    },
    {
        name: "Cave Worm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.4h9jhODg2NwiYsPg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.vijBriZmbUJjbJNH",
    },
    {
        name: "Bugbear Prowler",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.4htFfofrXLkbWMRg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9cBuzDV8seJqhNKJ",
    },
    {
        name: "Boar",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.4MwjCsa5O9aAjxSm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.IyhbcdTVmkV4pSju",
    },
    {
        name: "Graveknight",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.4p07SH4zdmVZ405I",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.MCgSMT680ic6kr5k",
    },
    {
        name: "Xulgath Skulker",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.4zXn6xaaxo1DtIRk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.S1XgBHtXIOV3JjLy",
    },
    {
        name: "Riding Dog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.5Azg87M6OnQ7Q4ZS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ECe2DkOgSSqXHBqv",
    },
    {
        name: "Skeleton Guard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.5H8ZX7y5IkUBhvhF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.trchDxbDR2TiPMxT",
    },
    {
        name: "Hobgoblin General",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.5hQk5NJk4L10txyW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.xgKDQB6ZYmAutwAm",
    },
    {
        name: "Skeletal Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.5MVBU86ZRw2ANMQn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.sEgjgitJmwYYa4mV",
    },
    {
        name: "Giant Flytrap",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.5pk6bfodgnllSIOy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ka7bXO7HIfBxk8Gy",
    },
    {
        name: "Werebear",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.5U13zQ77DIcqpH9U",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.h3JksV9Idr9eZLkE",
    },
    {
        name: "Ankylosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.6CQEelygt968CB7m",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.CYt04IKRQeiC9Ly9",
    },
    {
        name: "Ice Linnorm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.6eabIbxzYepfZAHX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Np5Z7RMQzvSNnH0h",
    },
    {
        name: "Tengu Sneak",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.70JDH25JLTC4t5Ko",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ClAXGpqu4ZsYuNle",
    },
    {
        name: "Bugbear Tormentor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.7JvA7kTqCUwcJoNe",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.httXfBPGseF9csXa",
    },
    {
        name: "Yeti",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.7ZgQuis8r8YQyUnI",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.alPZcKVrHTcMdtIU",
    },
    {
        name: "Fire Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.80TiZrVvIBW7E6L2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.rEDhI2oI4TqTICN2",
    },
    {
        name: "Treerazer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.8BloAdRqlLpt5bNg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.P8pNcpNeXQcj6lBB",
    },
    {
        name: "Quetzalcoatlus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.8JvzSTwQWtOsxRfL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.a4LgD3NrgkiINvru",
    },
    {
        name: "Voidworm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.8meqlz36gPHTTvNz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ciLdEf6sld8h2a2j",
    },
    {
        name: "Eagle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.8r8Ar08ojdJuPeiH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WBPEvEqIGvxeQKlp",
    },
    {
        name: "Magma Worm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.8U8K0YEghIErml35",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.jh3XmHoFtcGYkdJm",
    },
    {
        name: "Elananx",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.8uXLbKKzxN5O0ZhM",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.RJFpwZIGbuOuCtXr",
    },
    {
        name: "Vidileth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9AlfVoEMLwDODjxl",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.VDm2XhfNwhgiJOxD",
    },
    {
        name: "Umbral Gnome Scout",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9FZMzpAu4XhCI0IB",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.63gNd2JNUDcAjYzo",
    },
    {
        name: "Giant Gecko",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9hOuoOONmp6500GZ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.mathcxCcrQmn9Jj8",
    },
    {
        name: "Mukradi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9llfviiJg5bJlBth",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.IGzoFGlVbkit8hnH",
    },
    {
        name: "Axiomite",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9qjXP1Lho1UmAihJ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.7v1gykqjBO1YHDfu",
    },
    {
        name: "Brine Shark",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9sa2KE4Fbh3OPH7M",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.H7z7VHzlHlEFev1r",
    },
    {
        name: "Giant Tarantula",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.9X7hOvCKy1bqw0g6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.4ISm82EYQeOndynw",
    },
    {
        name: "Gargoyle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.aeCoh4u6c5kt1iCs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.cvfIkEF6xmWn2soN",
    },
    {
        name: "Succubus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.AiPXegCJ1leUslTm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.md1fhwGMwDv4NNwO",
    },
    {
        name: "Arboreal Warden",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.aNWiP985fISjClGo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.0rm0UDbXvwg4sSxQ",
    },
    {
        name: "Fey Dragonet",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.atrhmCtNKx1MR06I",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.QIXc18xHrEWDmtKW",
    },
    {
        name: "Harpy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.AuCC04X2AO8oFN75",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.uBNm3R9wbLTPrM9i",
    },
    {
        name: "Giant Rat",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.AYwdybUfm4meGUTJ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.iIJPJcDT8wlJ8z5M",
    },
    {
        name: "Umbral Gnome Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.b6qiHvyx6ymROTBL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.GJShyw6HgV25ywqU",
    },
    {
        name: "Greater Hell Hound",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.B7b0alybm5U34nFV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.15TyWlbDQWNjMKeL",
    },
    {
        name: "Cave Bear",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.b8NQkby4QV4uOqFT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.AZIG0COCaDBronJa",
    },
    {
        name: "Phistophilus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.B8QjalVNcWjuqgG7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.3QyqHIuAXE3YVLUh",
    },
    {
        name: "Redcap",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.BAD7npndaooB3Pz1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.fWAjkhQ0y50Eh2BT",
    },
    {
        name: "Changeling Exile",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.bAjHCeyNcPRqOmLv",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.RqX0vfUjlycKjGyp",
    },
    {
        name: "Leaf Leshy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.BeptBpCJ4Ny4biOH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.v1UK3IwCB8wCbL3L",
    },
    {
        name: "Giant Stag Beetle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.bIw7czN0E3rENrVd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.MkupNnMKqDBElhhp",
    },
    {
        name: "Ogre Boss",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.bIXfNKFWduf8MH0f",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.oopxVowT2jnUQJiS",
    },
    {
        name: "Pleroma",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.bjJUZKcA47Qp0ZwL",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.HLM55InRGOAUkqoH",
    },
    {
        name: "Giant Centipede",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.BKPRkJgq7ehsW7uX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.NRBgcu0LkXXp8mtp",
    },
    {
        name: "Living Waterfall",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.BLFEu9jCKPAMko01",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.1AZoRkLec47xrTqY",
    },
    {
        name: "Werewolf",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.bLMoqt9xqTZKnjxr",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Hg7nCvltRBQOiijQ",
    },
    {
        name: "Mimic",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Br1AtKUHe3nbzjnY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.h74BX4Iw78gWewa4",
    },
    {
        name: "Dero Stalker",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.bxAJWWKrEMjgNkUp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BxOlYmZiwLRpxGWp",
    },
    {
        name: "Unicorn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.c3iA9lkU1QY4YCY6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.lYoAwofYGbhWL75Q",
    },
    {
        name: "Arboreal Regent",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.c6AE2Mh8BRtBgbtz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.z2l8K7woKYPkm0qz",
    },
    {
        name: "Giant Bat",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.C9s5tBxVValC2HTE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.xnpuGO8jEMba9wy5",
    },
    {
        name: "Zephyr Hawk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.cBHpMcVaLRPZu9po",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.sAfjpjAS56jtrUbi",
    },
    {
        name: "Sprite",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.cDgOfBCrWcpYwRVS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.lUBkzsSqMfQBczU1",
    },
    {
        name: "Orc Scrapper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.cDm6PzhO5nXlkGoi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YReM6QbqwUz3UTP7",
    },
    {
        name: "Sea Serpent",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.CFHLgMj8zHLqcagc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.PUPnGG406PanzIvL",
    },
    {
        name: "Grizzly Bear",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.CJP3GGBXuGgkaj6C",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6K4RWus85o8iqy0t",
    },
    {
        name: "Vampire Count",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Cq8sRhVVF0hagBu6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.pPQyoQHTxrE2U7px",
    },
    {
        name: "Pteranodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.CSefkWGVmA5yGxNR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bGp2t0UteEYu3BGe",
    },
    {
        name: "Terotricus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.cZsaAKlEYWZUO1CV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.3IPLvfez8DzwwNqm",
    },
    {
        name: "Ether Spider",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.csRH8Fx0r6iMWlFc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TFRt64nosuS3PzmH",
    },
    {
        name: "Pridespawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.cXSTuUJct5iepH75",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.h4cMwW2K34KheWtD",
    },
    {
        name: "Animated Armor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.cZDiyluplFqRxmGy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.CFlx1tkRxKC9qAC7",
    },
    {
        name: "Kanya",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.d9W89Yv6zyvfxZuG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.hmcXFrf8xwrYQIg6",
    },
    {
        name: "Hryngar Taskmaster",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.dEecX0AEfl32KUVN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.eI6rRuxIPSZcm9OC",
    },
    {
        name: "Morrigna",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.DPEmRRXYevk3ADqW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.z9jEyLrsoBMmh9qg",
    },
    {
        name: "Cyclops",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Dwgl1DzJAYE3ienu",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.oZVeE7D70bHOrs1d",
    },
    {
        name: "River Drake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.DX1xNtucLTenn3P3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.nMC9d7ORMz3cdaHa",
    },
    {
        name: "Mitflit",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.E0LCMHVp4sxAbQYa",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.kkAllKGsVCZVGFpf",
    },
    {
        name: "Cacodaemon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.E0PIGtVfc5PFVT2C",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9Bl1ua3uLqodv47s",
    },
    {
        name: "Hunting Spider",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.E4ctF7Fvi3cdkgQq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.A4VgQIHsqJKssQOM",
    },
    {
        name: "Mummy Guardian",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.E5RDV3n7GnjAspQ5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.XZWUQklzWF6YFPmG",
    },
    {
        name: "Shemhazian",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.e8rmI5xt6IANatfX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.3vkQLclK0z4LhAh7",
    },
    {
        name: "Minotaur Hunter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.E9rT02pPDLq7rARq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.vN2alMciNlKpBpKN",
    },
    {
        name: "Lizardfolk Defender",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.EhB5Q98OO25DDOOl",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WZRHV2WU0SkpbtJI",
    },
    {
        name: "Slurk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.eHLDsL1LG3jQ1H6Y",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.tashopA1s2fAbSXA",
    },
    {
        name: "Lich",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.EibxkD9y30YmPaLH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.smItqlbr0iuDJ8nL",
    },
    {
        name: "Stegosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.eP96NzLFSjua4NS5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.qtJ36jlcRQw5sBnr",
    },
    {
        name: "Dero Magister",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ePa0KmNPpR4zUPfX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.qyCcr32PVcnNm4Wr",
    },
    {
        name: "Caligni Dancer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.eQdLBzkluS1fvVC8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.SZCf0IZkf36plwVd",
    },
    {
        name: "Animated Broom",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ETwmjdnmSkqGdD5r",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ybkelAOtSIA06fnj",
    },
    {
        name: "Snapping Flytrap",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Ey19J4nTn1dQvLtE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.vRAdYovWcy2euwuL",
    },
    {
        name: "Sea Hag",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.f3c1CS2W8Tft3hW7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.EYiIQh526d0HLiDu",
    },
    {
        name: "Jah-Tohl",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Fa1S0A8fAx3SkO9h",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YUI465JYqM65iimj",
    },
    {
        name: "Cockatrice",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.fgsDAeZHVbHRhSE8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.MrzlaE7k1PEsd3iQ",
    },
    {
        name: "Cauthooj",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.FHfrIJCdKTzy2rrR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.1a5faH5CCtFfbQHO",
    },
    {
        name: "Zombie Hulk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.FJo8VkrM7kLkHa5D",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.EDYKUdYmilw3rgJg",
    },
    {
        name: "Astradaemon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.fkBcMpr3Yxxfvz9v",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.hSSe2FxlXKvjKsEw",
    },
    {
        name: "Elemental Hurricane",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.FPKoiMXENk5FouXp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.mx2Xpra7bRJP0GuX",
    },
    {
        name: "Shuln",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.fxYMucI5b2IUoBpw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.xz2NZqSG5YVl17dc",
    },
    {
        name: "Ogre Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.gdXok08bITkhowDJ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Twvzy1yRo6m6dM8D",
    },
    {
        name: "Jinkin",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.gfRXFd24U633OC9r",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.lFDYJOIp2knQ0IRY",
    },
    {
        name: "Phoenix",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.gioxLqV8N4p9iIAh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.mQJL411e9Iz8dJoh",
    },
    {
        name: "Megaprimatus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.GssFAdolUA3ghg2e",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.pyTr1VOPrPYH8UNg",
    },
    {
        name: "Caligni Hunter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.gWxpeqOQ54Jd4HTG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.AcUb8s5fiktYw8Fx",
    },
    {
        name: "Dragon Turtle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.gX66KyBxUOvMv5Sf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.kLhBdqKOMHDGjdFz",
    },
    {
        name: "Vampire Servitor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.H2ZxTHZOEigpH4LK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.dFzTXkrpoOOdbzuW",
    },
    {
        name: "Wraith",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.HbROgIcU9Z9m6XuD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Gu0cJHGwPd547OtC",
    },
    {
        name: "Deadly Mantis",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.HeoH8hi5iieKPuJ2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.zQraVA7SUjd6qGNh",
    },
    {
        name: "Cinder Rat",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.hiGwRWdxAsoCII4f",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.xN5J9S485LxFZMkL",
    },
    {
        name: "Sewer Ooze",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Hkq9ZS2J2iKnT7vT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9InGpxq5xbbHaL9f",
    },
    {
        name: "Elephant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.HpY0addhUqtHMgUN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.1x0BdpVQLX7o3rrA",
    },
    {
        name: "Kholo Bonekeeper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.hXpqjD3eBRxlemNs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yogotW0edcHEPeuR",
    },
    {
        name: "Gimmerling",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.HyOf4CfAIhC3qWtz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.pH2yNe16EnoJ8R0i",
    },
    {
        name: "Hryngar Sharpshooter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.i1HEQ6f15fMEcHQf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Ytp0kRaG8iexmPfN",
    },
    {
        name: "Imp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.I4CpyMUsWfFYdpL5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yPYQC2bfOYmqcfIB",
    },
    {
        name: "Xulgath Leader",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.I4o2Gqpr2ioiUXA9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.7w1w7VTnIWMBdFux",
    },
    {
        name: "Flash Beetle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.i6Rd1BE30hhyKxwo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.E2XL2egIA3QaSDBM",
    },
    {
        name: "Orc Veteran",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.iA9lbwH0qROTjCva",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.V90OYOMyyPLPJuod",
    },
    {
        name: "Benthic Worm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.iD3YlM0QzI2SrjD6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.v7LH85fl189pXMsR",
    },
    {
        name: "Riding Horse",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.In2nNwo3JL1RXQhj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.CLf9k9A9ApTAkZeL",
    },
    {
        name: "Dryad Queen",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.io7johJlZinrSCiH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.gRy6Ci6zb1s4Nvy5",
    },
    {
        name: "Scorpion Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.IpzDMSmJ42alvf9F",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.5SFDHViyTCZ47TR5",
    },
    {
        name: "Lamia",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.IQsTNM8aXcCUmFu0",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.vqYrJ33XgoeQUUle",
    },
    {
        name: "Dryad",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.iSwUKe7cEytclS7r",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.4MoqBCDQA6FR1sPw",
    },
    {
        name: "Greater Shadow",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.IUzKFRX0uHl1yxkn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.5meW7DytYnF7Iq2V",
    },
    {
        name: "Zombie Brute",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Ix1PziAEk9IIMYBz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WioQ6rOeMRuTOliY",
    },
    {
        name: "Gogiteth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.IXen98RbUlbxDWBD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Iwk2qT4lVyrvoz3B",
    },
    {
        name: "Giant Wasp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.J0dSbywBRgD2kf19",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6aaBmiOgqZ5h2IhW",
    },
    {
        name: "Hell Hound",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.jeAGl6OAVrrIPgu3",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.RTviEfjYnsXa0wkT",
    },
    {
        name: "Goblin Commando",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.jGzVwekcRX5aQpbT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.sA2dFdRUwiapo69Z",
    },
    {
        name: "Baomal",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.JiThbhDfjUoPaTP1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.Hk2cd4HlPbhBJKfx",
    },
    {
        name: "Boggard Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.JkBJ8B07ElXrfDaG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
    },
    {
        name: "Dhampir Wizard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.jMiiQDIDxW9ZMvCV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bveW59P2mTiiFVIt",
    },
    {
        name: "Pugwampi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.jnmUcTs4hn1c5bz9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.aeOzCBpwnUVcpqxI",
    },
    {
        name: "Ofalth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.jP8CO6z7bNIhOuqQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.2jtRdYo9ey7osDUH",
    },
    {
        name: "Goblin Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.jVZRROs0GzDjVrgi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.fLLKuOXwPq1Iq0U4",
    },
    {
        name: "War Horse",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Jy2va0NTTbaUH1zP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ExVmw8bSvUd2wYkI",
    },
    {
        name: "Poltergeist",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.k3Lt3bWBadXvlIbG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.zpd6b6UPP72ZELCj",
    },
    {
        name: "Grothlut",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.K9Hw43co8fhwmKkM",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.VCYF0NAfPKwTHkK1",
    },
    {
        name: "Hobgoblin Archer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.KclNszYZ7sjwE9nX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.JwOlSrHk1pkAKMRn",
    },
    {
        name: "Mummy Pharaoh",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.kfeL172Ix3x1YRc9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Ro49rEZwBLkkoEKE",
    },
    {
        name: "Balisse",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.kFQorgvvyozQVSKi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Q1wybC7rSc4MIF9g",
    },
    {
        name: "Medusa",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.kkFVngQUGTACeggf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.QCPpQya5TEUuIxQn",
    },
    {
        name: "Spider Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.KpxhSWRIhG7ns5NA",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.NcYbJS5PWBGdNDqh",
    },
    {
        name: "Giant Viper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.KsWAIXTTh3mfNWOY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.AJ5LuNMVPLCydryP",
    },
    {
        name: "Plague Zombie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.KxN9aGFGPxl6oLGF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.aWiTcxAySoYjUP6T",
    },
    {
        name: "Cloud Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.l17XDoK0UIjXUvOv",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Z5QezXy38ZHyt3O3",
    },
    {
        name: "Lion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.l3Pe8FsFbLvft1Fq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6KF6TQvLHHpE0uAM",
    },
    {
        name: "Tyrannosaurus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.LDQpLwN40OGefZD0",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.tpNP1UooPPHMyZye",
    },
    {
        name: "Viper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.lFlXmieuHTBIonhj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.1uVwkGlqYzyWaDMy",
    },
    {
        name: "Skeletal Hulk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.lo4fR4jDVzLdwwkH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.V4rVnbjJbcOIdC4Z",
    },
    {
        name: "Arbiter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.LVhVb7abhv4onzZZ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.oaxKg1yQDmK2PWXG",
    },
    {
        name: "Guthallath",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.m3x8q5rZ6zh9x82s",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BPznJcLvfkpfeQ2q",
    },
    {
        name: "Banshee",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.M6RknN77XTo23v45",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.XKOQ3ll9TGNso0uB",
    },
    {
        name: "Skeletal Horse",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.mblGfyIXWhiaNpFw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.X2vz6CrMaHIso0ha",
    },
    {
        name: "Grim Reaper",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.mGr4e6fH3w8ewcSX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.kKFfigxrJ2vbJazp",
    },
    {
        name: "Phade",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.mqz4MfBwFxlBQeHs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.HKXa9E91WLy6dAZA",
    },
    {
        name: "Skulltaker",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.myEeYWWAgnkLwtIb",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.zkl6planCbeCuAdS",
    },
    {
        name: "Leukodaemon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.N62zM3aTelygWIt2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bb5Z4z4EHb5LbCLK",
    },
    {
        name: "Elemental Inferno",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.NbGLrlt7RYdFFBQ5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yYicb7uJH4EaBO4v",
    },
    {
        name: "Stone Mauler",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.NeYU7wwCv0RUesZ1",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ToteDLIM7jCyHwDH",
    },
    {
        name: "Caligni Skulker",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.nFMZjWQL6pd9XdqR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9YPFqikAmURwcTEO",
    },
    {
        name: "Chimera",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.nkWnoEHWUsBLgNje",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bVn0EUj4xrOWjtna",
    },
    {
        name: "Warsworn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.NpcS7iocNNsno6lE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.llSpQyOTaylpqgnW",
    },
    {
        name: "Wemmuth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.NTXm3ee7WZJ92Sww",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.jW55DX3sJU2uTNrM",
    },
    {
        name: "Sod Hound",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.NVWaLagWOu5tCCZu",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.VQPzDz3xnCQGFOGL",
    },
    {
        name: "Lamia Matriarch",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.NymSyXbXqfkGLFWF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.0qaGLx8ads9blcfS",
    },
    {
        name: "Kholo Hunter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.o3DRwRKeJrl83Wv9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.qOAuCiPgsjpjDgA1",
    },
    {
        name: "Merfolk Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.O3J59mUJ6DHQZZ6F",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YiGZxwT2xTVYQyTu",
    },
    {
        name: "Flame Drake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.O5YbsTSlX5VhciP4",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.qlxVPpwVFw5qIVQM",
    },
    {
        name: "Awakened Tree",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oBMIc2S8ekmDgPpi",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.0Dsy2I3mu86Czjm0",
    },
    {
        name: "Griffon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Oc5NXZmMkSDCRNlQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.gWgMg7cARqOe82O6",
    },
    {
        name: "Nosoi",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oGIWTW0WqQxYNJOD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.5KstOkXabrOlZaKR",
    },
    {
        name: "Wolf",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Oilfs8Atv2LjAsUS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BN5Lb6IsQ9Wyu3rL",
    },
    {
        name: "Fungus Leshy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oiXbo1VSfDrHpIQm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BoXCGLACP9vuIZkZ",
    },
    {
        name: "Ogre Glutton",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oJaC1WbXQuQX2d2J",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.X7PaA6XgvrY5ByfM",
    },
    {
        name: "Rune Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oMcHaTX5unOHC2Pm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.YRyTBciVtCnO7J0Z",
    },
    {
        name: "Kholo Sergeant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oMsOm06HhX1gG0Jz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.SipdgBCL7XuuEjn6",
    },
    {
        name: "War Pony",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.OPavstjKhgcp30fc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BMpBXSq8T20WdUDl",
    },
    {
        name: "Frost Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.oSvWsqFnQLS5wlvg",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.893mp411SdYren3H",
    },
    {
        name: "Pegasus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.PCh2kxeSYWRit9TE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.HMfH0CI1CQCXB9Xr",
    },
    {
        name: "Nilith",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.PfcS6WzhMGzds5Wf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.D2Pe38jYbeBxUaxU",
    },
    {
        name: "Boggard Swampseer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.pG3UPgbAxNCXAyQE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.F2Xhn4rqPAj55w3O",
    },
    {
        name: "Animated Statue",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.PiAGhPEzJMC2egQk",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yQ2mosomuAPiLMkU",
    },
    {
        name: "Hobgoblin Soldier",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.PiZkpRK23u89h82S",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.NW68bxCLC6oDHxL9",
    },
    {
        name: "Lesser Death",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.pkNWilK2pHZ5TDsd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WoICHri7raCYv1wU",
    },
    {
        name: "Naunet",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.pL4sS2HZtGAryKnN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.JumkQRD1Cn4TF5XS",
    },
    {
        name: "Wrathspawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.pMoAlNjMJ7DArLPh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.yv7hdQ3MO3pLgCF5",
    },
    {
        name: "Ankhrav Hive Mother",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.pTkz08ak9YlKRsOY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.qYw2ToefDK5Vrwgu",
    },
    {
        name: "Frost Drake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.pyFvLyQsyYjOz0xI",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.2SixuEUfKpEyfOEY",
    },
    {
        name: "Shoggoth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Q3EaaLLx5kDXb5vQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.p4GHJGguGRp5ucHV",
    },
    {
        name: "Slothspawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.q3LrTrfnCvoUXuRz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ccAeM0tNgf5aVokj",
    },
    {
        name: "Firewyrm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Q8FAcsuta4p6d8KS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.MX2cLbODuo4gECPJ",
    },
    {
        name: "Sphinx",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Qa7HaKfKiosEPr94",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.rdgs2gxTWxkyanD6",
    },
    {
        name: "Wasp Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.qcZvFCAnslI9XNTR",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.h7je8nkscJQ2Ac8j",
    },
    {
        name: "Hryngar Bombardier",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.qfuoFK2GXBJusQ33",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.KDbJ402jFuvn5frX",
    },
    {
        name: "Envyspawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.QGTSPki2eoLuavif",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.3nUt7cW8fqE5IpyE",
    },
    {
        name: "Dire Wolf",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.qHqhUWeNUZRET9xV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.AFWmiIBJ7ypgydQD",
    },
    {
        name: "Manticore (Quill Tail)",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.qpRJOzx3bJ7rolHp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ZeUxgpNi5AXr9pX6",
    },
    {
        name: "Greater Nightmare",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.QQQhNnCit9XLMMoN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WG4Tk2k9Lm21CEQv",
    },
    {
        name: "Ugothol",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.qr46S4VDnaUK0GcM",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.fRjJkktWp7s8NBN7",
    },
    {
        name: "Giant Frilled Lizard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.QRjjE4TJNfaDhhQC",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.FFnsYr2aIfDGnUVS",
    },
    {
        name: "Guard Dog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.QRRX82FIjBKd8pzs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.KHTYbQgR5hnFZdGL",
    },
    {
        name: "Nessari",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.QT2gA8WMaT2cuXr7",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BlTEvlCUKPOfBYMR",
    },
    {
        name: "Daeodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.quXuocHuT2US7cWz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.v4KP0HYaygoFOIlo",
    },
    {
        name: "Kobold Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.r9w1n85mp9Ip4QiS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BIZfjoz8DZt75EDn",
    },
    {
        name: "Poracha",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.r9WAwtCLxoJMjd8J",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.WNUvjcKRAqdguWfN",
    },
    {
        name: "Hydra",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.RiKjpztTt7tZbOeo",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Bkr0soTDhQq1qjWx",
    },
    {
        name: "Skeletal Champion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.RMSx2C27yty0MTva",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.FH58AcRBZIfrHKvv",
    },
    {
        name: "Kobold Scout",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.rPaHIh0ICnTLnRO6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.PcHQDmPTztw32PhL",
    },
    {
        name: "Basilisk",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.rPHxXClTnoPYHYuZ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.mX47c0W9rizbmMBM",
    },
    {
        name: "Chimera",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.RTUp97xNDutzYpuY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bVn0EUj4xrOWjtna",
    },
    {
        name: "Xulgath Warrior",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.RTzFvmdSCf5yhguy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.5vBG8a8dnJfmVd3Y",
    },
    {
        name: "Naiad",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.RXEnAk6cbSnk3w7O",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Cqi8jadYpUTajIC6",
    },
    {
        name: "Velociraptor",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.S5z0mtoEhbz7BvE9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ZW8ARUrNdc3zewLM",
    },
    {
        name: "Catfolk Pouncer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.saKs2Qaor8QktboH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.PvYl5kItb7xoE8Is",
    },
    {
        name: "Chimera",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ScNPruIwcIJNuSHb",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bVn0EUj4xrOWjtna",
    },
    {
        name: "Deinosuchus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ScOT6QOlXIsevhNq",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.xC6v5Ef8mDt05QFK",
    },
    {
        name: "Python",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.sf42HB8VsWGlYixP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Yadztw8CmYuWfA7k",
    },
    {
        name: "Warg",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Sft7n3LMmnTxhhYn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.x7Aa4Tvr9eBaHryF",
    },
    {
        name: "Smilodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.SP72xojHR0UGAWcs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6EgJNAJss45TQqpa",
    },
    {
        name: "Rat Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.sPClc6y3dT3XZupv",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6wPW2dvpt86Ou6bL",
    },
    {
        name: "Giant Monitor Lizard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.SuWpn5yZdsHDHpL2",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.oyfheSs1ta4xvtEg",
    },
    {
        name: "Shining Child",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.t4JYGYJqT1CaqKvh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.ePJcp2ADOjJYYQ5Q",
    },
    {
        name: "Goliath Spider",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.T5CUuPsMPb17d6Qy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.eP4a0FAbus3tNTbc",
    },
    {
        name: "Giant Eagle",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.tKaOsbg8cmIUSjSE",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.XEjkJ8fQqLc02hrU",
    },
    {
        name: "Pitborn Adept",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.tm3Tixb7IDoLdJ5k",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BCPpwj9uCiS7bF9C",
    },
    {
        name: "Ghost Mage",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ToSwRvspZ0IB7SHQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.LN7MXD38Zs2bDoW6",
    },
    {
        name: "Electric Eel",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.tr75FAbdOkrfQviy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.gCmfPEfqS60BiuVP",
    },
    {
        name: "Gluttonyspawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.triuze3NMe4kWpdS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.eke1AhiUjNPpyRhG",
    },
    {
        name: "Crag Linnorm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.tTmml7T2Knz2NrLd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.JRBUBgJymEeEE4hm",
    },
    {
        name: "Wererat",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.tXHUr947sanB5tdN",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.2k0JX3RFTVRf0KS2",
    },
    {
        name: "Dezullon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.U1L3MFKHe0sNvLoU",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.jR4E2I2tmQ6sd5DR",
    },
    {
        name: "Merfolk Wavecaller",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.uCw15c4AnIrOy5AV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.IxezJU9rIKKyd3LY",
    },
    {
        name: "Grikkitog",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.UPm2rwIevsX9Odbm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.702acAJ1OPRBjcni",
    },
    {
        name: "Reefclaw",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.URREWYZtc8QJ9ld6",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Rr1u6WvZEdPw1s6v",
    },
    {
        name: "Gourd Leshy",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.UYHtIbN0JVaIYcgs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.f9fjSDdcBKkEPoIi",
    },
    {
        name: "Witchwarg",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.v92cB3RBUMhysOpD",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.diU0V2M3LiMDMsS0",
    },
    {
        name: "Vampire Bat Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.VAWmwDA08ZLQd8lW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.2mg30nJR6P3HJDSd",
    },
    {
        name: "Hyaenodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.VcUdFYNaxauNr5Hn",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.1Qqu3b4J4aJYEQOX",
    },
    {
        name: "Jungle Drake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.vEFENJJixCdmBNl5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.aYDbWuOj66nve8r4",
    },
    {
        name: "Crocodile",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.vJwnApm0HkadGR7w",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.2rMLYkUR47ZCQMUg",
    },
    {
        name: "Elemental Tsunami",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.vmN9SCUJxN1MIXwp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.R427CMT90S7fv7MY",
    },
    {
        name: "Duskwalker Ghost Hunter",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.VoLW6eUxMSsXvgVP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.3t1z62LREP4nnIDr",
    },
    {
        name: "Megalodon",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.vUKCuAgLQdz5akgp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9rXYGu7D3umIW1sv",
    },
    {
        name: "Giant Octopus",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.vxKqnzwcxNAgLp7C",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.k5p4mRDT26DrDXPA",
    },
    {
        name: "Greedspawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.w20FfmKH7ukghczT",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.pkhNqTDUttoAzcKn",
    },
    {
        name: "Triceratops",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.WAgQt9pkzgPOlcJI",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.zAxKR8XWtQm2rqh4",
    },
    {
        name: "Nightmare",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.waPgKbjhijeZ00Zm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.qRUqoezeEnQ2KdyT",
    },
    {
        name: "Boggard Scout",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wifELOkkRO2634bc",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.s2TkernjfKVEhlJY",
    },
    {
        name: "Stone Giant",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.WiOY3YbiKEJKIQQz",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.zT3fSxNatEbrkCzN",
    },
    {
        name: "Living Whirlwind",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wjw8FQp4icafYash",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.XgGeD4fz5m7nQQlN",
    },
    {
        name: "Giant Animated Statue",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wKVZdVVcXtvLxgsY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.I00S3LWnDJfCn4zv",
    },
    {
        name: "Ankhrav",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wMomrpcaC8QvIdlj",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.V1Kr5aiPaTM0mDFu",
    },
    {
        name: "Great White Shark",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.WNiNj0Brn2LCYmwd",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.uNNOQFvuMq8ZsQkn",
    },
    {
        name: "Krooth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.WNqPRMjKW0oCHZ8X",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.f15mNNhOT3aq66VQ",
    },
    {
        name: "Pixie",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wpmvdP5w936Kmq0e",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Ehtm5k9iBYTvSUcZ",
    },
    {
        name: "Leopard",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wqPYzMNgYvrO6oEP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.kB7FNn3vosp6cqQg",
    },
    {
        name: "Will-o'-Wisp",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wRQ7TZdd0n5UIIao",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.KgJq51AeYrENo3Db",
    },
    {
        name: "Wyvern",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.wuaSG22lLjQ6yali",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.5iqkL9Me5164H7NY",
    },
    {
        name: "Tor Linnorm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.x6wfK4UCJ6wYok9t",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.0H54u83vZ1w3xHcD",
    },
    {
        name: "Chimera",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.x81PGKEsOtPquFVa",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bVn0EUj4xrOWjtna",
    },
    {
        name: "Lustspawn",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.x8ZWNcFOfpJYjXOw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.k4fqHhiax2GPrkbh",
    },
    {
        name: "Ratfolk Grenadier",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.XbClt5wkqECrQToJ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.C1gYuDSwTkTIkAcC",
    },
    {
        name: "Orc Commander",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.XLqbEDjmGpIc4XoY",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.PLZk6zY5iwccPTPS",
    },
    {
        name: "Elemental Avalanche",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.XoXf5ExS95Vv6lNf",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Oq31fcKwH0EE9R89",
    },
    {
        name: "Shadow",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.XrmHgbKgcHDi4OnK",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.VotlWUsFKdOrHWF6",
    },
    {
        name: "Lyrakien",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.XUTUBrQixSs7VLov",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.iNwaxIYuD0OTDNjJ",
    },
    {
        name: "Gorilla",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.XVX9Uhqb8shG5Pwm",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.PlkRv9NMKq9TShYf",
    },
    {
        name: "Living Landslide",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.xYlOudjXyTakF1m8",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.4Ejgj6p1LAu1RAN3",
    },
    {
        name: "Desert Drake",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Y3T7XfC2BeiNBmuS",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.irl1wnfk4b83JWkY",
    },
    {
        name: "Chimera",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.YdlmpfZso6GwPr2D",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.bVn0EUj4xrOWjtna",
    },
    {
        name: "Mammoth",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.yIXRooXdsKtbcw2D",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.jkp7THTZMc0ivN8Y",
    },
    {
        name: "Tiger",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ypLkUfuHHfNDsVUQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.JGwKk83oX4gTGlqe",
    },
    {
        name: "Riding Pony",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.YUk9S6caKqheRsUQ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.F3ungAqpGjFotwUK",
    },
    {
        name: "Vampire Mastermind",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.yxCmLBpw6xqWFU3E",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.TZt3H39oxVdZRKs9",
    },
    {
        name: "Lizardfolk Stargazer",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.yzyaD2yGDrxmYh7P",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.gGdIV6uUHzX23vz6",
    },
    {
        name: "Goblin Pyro",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.z0l0lHc79NbMxiqZ",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.Ky5eNRvN71O0tY9l",
    },
    {
        name: "Naiad Queen",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zA1I5YXI9GCSaksP",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.H8lGFF3PKUv2yRL2",
    },
    {
        name: "Keketar",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zBPGUUP788b0g1Ng",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.z1TEwL0plpK4l2uf",
    },
    {
        name: "Ort",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zJro50sLFmOcDLdO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.kohQQtOfhwxbzWZB",
    },
    {
        name: "Giant Scorpion",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zJZqpx6pPW7dxEUV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BWm17BRQYGMLqtNe",
    },
    {
        name: "Great Cyclops",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Zn0p5YjELMjEwkqx",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.6mdq7UV9gFXAEOpJ",
    },
    {
        name: "Centipede Swarm",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ZPAM4OavHmdgmGnw",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.sldauWtSyK4JEiRl",
    },
    {
        name: "Wight",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ZPjQkKVMi3xoPcU0",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.DBTbqI9QQRtlJwWh",
    },
    {
        name: "Gug",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zq18QX6CBJNeUIgG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.QLyDRZPvMsYGZEeN",
    },
    {
        name: "Living Wildfire",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zRNHsSxi1g3IFYFu",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.pVbggIyXxCo8pPue",
    },
    {
        name: "Dero Strangler",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ZsduIlmluQe4ZxFy",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.uUP9MQscB0EFPptr",
    },
    {
        name: "Choral",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.zUvgAbgeQH5t6DWs",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9SNpsnwlzZjH4DQf",
    },
    {
        name: "Hyena",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.Zv6eaumsdz4HdxRV",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.tUWchW8dXavTFeBy",
    },
    {
        name: "Cassisian",
        linkOld: "Compendium.pf2e.pathfinder-bestiary.Actor.ZzMJ7Y4qxapAVvlF",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.9qERA2jk7Yv74Hqq",
    },
    {
        name: "Dryad",
        linkOld: "Compendium.pf2e.pfs-season-1-bestiary.Actor.bfTmy4404MFMykxH",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.4MoqBCDQA6FR1sPw",
    },
    {
        name: "Boggard Warrior",
        linkOld: "Compendium.pf2e.pfs-season-1-bestiary.Actor.pJck5AXRMWcAequ5",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.EH84J9FedbK3ax50",
    },
    {
        name: "Dero Stalker",
        linkOld: "Compendium.pf2e.pfs-season-4-bestiary.Actor.oH2KT9LhUs299AN9",
        linkNew: "Compendium.pf2e.pathfinder-monster-core.Actor.BxOlYmZiwLRpxGWp",
    },
    {
        name: "Vloriak",
        linkOld: "Compendium.pf2e.rusthenge-bestiary.Actor.fRiOPTsfqJBiwUwh",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.YTG7w3V77ZfrjRIC",
    },
    {
        name: "Ferrugon",
        linkOld: "Compendium.pf2e.stolen-fate-bestiary.Actor.0C9muUhjn4vAL5UW",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.CgDdoQ0pa0LI45NB",
    },
    {
        name: "Obcisidaemon",
        linkOld: "Compendium.pf2e.stolen-fate-bestiary.Actor.eC0O1nNWMjWydbPG",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.5AafVmcECTFaicll",
    },
    {
        name: "Phasmadaemon",
        linkOld: "Compendium.pf2e.stolen-fate-bestiary.Actor.laVap7VG0MRaoQnO",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.kqbvkWsmrnlziWNp",
    },
    {
        name: "Katpaskir",
        linkOld: "Compendium.pf2e.stolen-fate-bestiary.Actor.s8pBIwZjOdep4Lfp",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.TbkLKyfQI6hBwaVo",
    },
    {
        name: "Graveknight Champion",
        linkOld: "Compendium.pf2e.strength-of-thousands-bestiary.Actor.7GcDjU3EhVn54AKX",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.qStWCL0wtOuQlqVy",
    },
    {
        name: "Sand Racer",
        linkOld: "Compendium.pf2e.strength-of-thousands-bestiary.Actor.DaOSfNGARU0QeMsp",
        linkNew: "Compendium.pf2e.vehicles.Actor.8rXCF2Fr4iA0VmFx",
    },
    {
        name: "Graveknight Captain",
        linkOld: "Compendium.pf2e.strength-of-thousands-bestiary.Actor.tyEZGXm1pbb5b77K",
        linkNew: "Compendium.pf2e.pathfinder-monster-core-2.Actor.AfubOmkdmPRctnLX",
    },
    {
        name: "Alchemical Golem",
        linkOld: "Compendium.pf2e.the-slithering-bestiary.Actor.idj4GBmsLUNUbk9r",
        linkNew: "Compendium.pf2e.pathfinder-bestiary.Actor.Tpuqwt6Af29EMtqX",
    },
];

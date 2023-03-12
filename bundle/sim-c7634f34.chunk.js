import{A as t,aq as n,ar as e,c4 as a,c5 as i,c6 as s,c7 as l,c1 as o,Q as r,D as d,e as m,c8 as c,c9 as h,L as p,bL as u,bG as f,bJ as g,ao as S,a$ as b,K as y,al as T,ap as w,bt as v,d as I,a as M}from"./detailed_results-f35d3fd3.chunk.js";import{m as O,a as P,b as W,c as R,B as N,I as B,M as C,d as x,A as U,e as D,f as E,g as F,h as A,T as H,D as z}from"./individual_sim_ui-25bc03c1.chunk.js";const k=O({fieldName:"innervateTarget",id:t.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().innervateTarget?.targetIndex!=n,setValue:(t,a,i)=>{const s=a.getSpecOptions();s.innervateTarget=e.create({targetIndex:i?0:n}),a.setSpecOptions(t,s)}}),L={inputs:[P({fieldName:"type",label:"Type",labelTooltip:"If set to 'Adaptive', will dynamically adjust rotation.",values:[{name:"Adaptive",value:a.Adaptive,tooltip:"Dynamically adapts based on available mana to maximize CL casts without going OOM."},{name:"Manual",value:a.Manual,tooltip:"Allows custom selection of which spells to use, dot managment and CD usage."}]}),W({fieldName:"useSmartCooldowns",label:"Smart Cooldowns usage",labelTooltip:"The rotation will use cooldowns during eclipses, avoiding Haste CDs in solar and Crit CDs in lunar",showWhen:t=>t.getRotation().type==a.Manual}),P({fieldName:"mfUsage",label:"Moonfire Usage",labelTooltip:"Defines how Moonfire will be used in the rotation.",values:[{name:"Unused",value:i.NoMf},{name:"Before lunar",value:i.BeforeLunar},{name:"Maximize",value:i.MaximizeMf}],showWhen:t=>t.getRotation().type==a.Manual}),P({fieldName:"isUsage",label:"Insect Swarm Usage",labelTooltip:"Defines how Insect Swarm will be used in the rotation.",values:[{name:"Unused",value:s.NoIs},{name:"Before solar",value:s.BeforeSolar},{name:"Maximize",value:s.MaximizeIs}],showWhen:t=>t.getRotation().type==a.Manual}),W({fieldName:"useStarfire",label:"Use Starfire",labelTooltip:"Should the rotation use Starfire.",showWhen:t=>t.getRotation().type==a.Manual}),W({fieldName:"useWrath",label:"Use Wrath",labelTooltip:"Should the rotation use Wrath.",showWhen:t=>t.getRotation().type==a.Manual}),W({fieldName:"useTyphoon",label:"Use Typhoon",labelTooltip:"Should the rotation use Typhoon.",showWhen:t=>t.getRotation().type==a.Manual}),W({fieldName:"useHurricane",label:"Use Hurricane",labelTooltip:"Should the rotation use Hurricane.",showWhen:t=>t.getRotation().type==a.Manual}),W({fieldName:"useBattleRes",label:"Use Battle Res",labelTooltip:"Cast Battle Res on an ally sometime during the encounter.",showWhen:t=>t.getRotation().type==a.Manual}),R({fieldName:"playerLatency",label:"Player latency",labelTooltip:"Time before the player reacts to an eclipse proc, in milliseconds.",showWhen:t=>t.getRotation().type==a.Manual}),P({fieldName:"eclipsePrio",label:"Eclipse priority",labelTooltip:"Defines which eclipse will get prioritized in the rotation.",values:[{name:"Lunar",value:l.Lunar},{name:"Solar",value:l.Solar}],showWhen:t=>t.getRotation().type==a.Manual}),W({fieldName:"multidotIs",label:"Mutlti-dot Insect Swarm",labelTooltip:"Should the rotation mutlti-dot Insect Swarm",showWhen:t=>t.getRotation().isUsage==s.MaximizeIs}),W({fieldName:"eclipseShuffling",label:"Eclipse Shuffling",labelTooltip:"Should the rotation alternate Starfire and Wrath when both eclipses are available."})]},j={name:"Phase 1",data:o.create({talentsString:"5032003115331303213305311231--205003012",glyphs:r.create({major1:d.GlyphOfFocus,major2:d.GlyphOfInsectSwarm,major3:d.GlyphOfStarfall,minor1:m.GlyphOfTyphoon,minor2:m.GlyphOfUnburdenedRebirth,minor3:m.GlyphOfTheWild})})},G=c.create({type:a.Adaptive,maintainFaerieFire:!0,useSmartCooldowns:!0,mfUsage:i.NoMf,isUsage:s.MaximizeIs,useStarfire:!0,useWrath:!0,useBattleRes:!1,playerLatency:200}),J=h.create({innervateTarget:e.create({targetIndex:n})}),_=p.create({defaultPotion:u.PotionOfSpeed,flask:f.FlaskOfTheFrostWyrm,food:g.FoodFishFeast,prepopPotion:u.PotionOfWildMagic,thermalSapper:!0}),K=S.create({arcaneBrilliance:!0,bloodlust:!0,divineSpirit:!0,giftOfTheWild:b.TristateEffectImproved,icyTalons:!0,moonkinAura:b.TristateEffectImproved,leaderOfThePack:b.TristateEffectImproved,powerWordFortitude:b.TristateEffectImproved,sanctifiedRetribution:!0,strengthOfEarthTotem:b.TristateEffectImproved,trueshotAura:!0,wrathOfAirTotem:!0}),V=y.create({blessingOfKings:!0,blessingOfMight:b.TristateEffectImproved,blessingOfWisdom:b.TristateEffectImproved,vampiricTouch:!0}),q=T.create({heroicPresence:!1}),Q=w.create({bloodFrenzy:!0,ebonPlaguebringer:!0,faerieFire:b.TristateEffectImproved,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0,sunderArmor:!0,totemOfWrath:!0}),$={distanceFromTarget:18},X={name:"P2 Preset",tooltip:N,gear:v.fromJsonString(' {\n      "items": [\n        {\n          "id": 45497,\n          "enchant": 3820,\n          "gems": [\n            41285,\n            42144\n          ]\n        },\n        {\n          "id": 45133,\n          "gems": [\n            40048\n          ]\n        },\n        {\n          "id": 46196,\n          "enchant": 3810,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45242,\n          "enchant": 3859,\n          "gems": [\n            40048\n          ]\n        },\n        {\n          "id": 45519,\n          "enchant": 3832,\n          "gems": [\n            40051,\n            42144,\n            40026\n          ]\n        },\n        {\n          "id": 45446,\n          "enchant": 2332,\n          "gems": [\n            42144,\n            0\n          ]\n        },\n        {\n          "id": 45665,\n          "enchant": 3604,\n          "gems": [\n            39998,\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 45619,\n          "gems": [\n            39998,\n            39998,\n            39998\n          ]\n        },\n        {\n          "id": 46192,\n          "enchant": 3719,\n          "gems": [\n            39998,\n            39998\n          ]\n        },\n        {\n          "id": 45537,\n          "enchant": 3606,\n          "gems": [\n            39998,\n            40026\n          ]\n        },\n        {\n          "id": 46046,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45495,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45466\n        },\n        {\n          "id": 45518\n        },\n        {\n          "id": 45620,\n          "enchant": 3834,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45617\n        },\n        {\n          "id": 40321\n        }\n      ]\n    }')},Y={name:"P1 Preset",tooltip:N,gear:v.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40467,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44661,\n\t\t\t"gems": [\n\t\t\t\t40026\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40470,\n\t\t\t"enchant": 3810,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44005,\n\t\t\t"enchant": 3859,\n\t\t\t"gems": [\n\t\t\t\t40026\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40469,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44008,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40466,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39998,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40561,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40560,\n\t\t\t"enchant": 3719\n\t\t},\n\t\t{\n\t\t\t"id": 40519,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 40399\n\t\t},\n\t\t{\n\t\t\t"id": 40080\n\t\t},\n\t\t{\n\t\t\t"id": 40255\n\t\t},\n\t\t{\n\t\t\t"id": 40432\n\t\t},\n\t\t{\n\t\t\t"id": 40395,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40192\n\t\t},\n\t\t{\n\t\t\t"id": 40321\n\t\t}\n\t]}')},Z={name:"Pre-raid Preset",tooltip:N,gear:v.fromJsonString('{ "items": [\n\t\t{\n\t\t\t"id": 42554,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t40049\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40680\n\t\t},\n\t\t{\n\t\t\t"id": 37673,\n\t\t\t"enchant": 3810,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41610,\n\t\t\t"enchant": 3859\n\t\t},\n\t\t{\n\t\t\t"id": 39547,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t40026\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37884,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39544,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40696,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t40014,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37854,\n\t\t\t"enchant": 3719\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40585\n\t\t},\n\t\t{\n\t\t\t"id": 43253,\n\t\t\t"gems": [\n\t\t\t\t40026\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37873\n\t\t},\n\t\t{\n\t\t\t"id": 40682\n\t\t},\n\t\t{\n\t\t\t"id": 45085,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40698\n\t\t},\n\t\t{\n\t\t\t"id": 40712\n\t\t}\n\t]}')};class tt extends B{constructor(t,n){super(t,n,{cssClass:"balance-druid-sim-ui",cssScheme:"druid",knownIssues:[],epStats:[I.StatIntellect,I.StatSpirit,I.StatSpellPower,I.StatSpellHit,I.StatSpellCrit,I.StatSpellHaste,I.StatMP5],epReferenceStat:I.StatSpellPower,displayStats:[I.StatHealth,I.StatStamina,I.StatIntellect,I.StatSpirit,I.StatSpellPower,I.StatSpellHit,I.StatSpellCrit,I.StatSpellHaste,I.StatMP5],defaults:{gear:Y.gear,epWeights:M.fromMap({[I.StatIntellect]:.38,[I.StatSpirit]:.34,[I.StatSpellPower]:1,[I.StatSpellCrit]:.69,[I.StatSpellHaste]:.77,[I.StatMP5]:0}),consumes:_,rotation:G,talents:j.data,specOptions:J,raidBuffs:K,partyBuffs:q,individualBuffs:V,debuffs:Q,other:$},playerIconInputs:[k],rotationInputs:L,includeBuffDebuffInputs:[C,x,U,D,E,F,A],excludeBuffDebuffInputs:[],otherInputs:{inputs:[H,z]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[j],gear:[Z,Y,X]}})}}export{tt as B,G as D,$ as O,Y as P,j as S,J as a,_ as b,X as c};
//# sourceMappingURL=sim-c7634f34.chunk.js.map

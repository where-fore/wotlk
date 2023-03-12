import{c1 as t,Q as n,n as e,o as a,dD as s,cr as i,cs as r,ct as d,cu as l,cv as o,dE as m,co as c,L as h,bL as f,bG as p,bJ as S,bt as g,A as u,d as y,a as O,ao as I,a$ as P,al as b,K as G,ap as v}from"./detailed_results-f35d3fd3.chunk.js";import{B as T,m as W,u as w,I as j,w as E,T as k}from"./individual_sim_ui-25bc03c1.chunk.js";import{T as H}from"./totem_inputs-73dd2b0d.chunk.js";const M={name:"Tank Healing",data:t.create({talentsString:"-3020503-50005331335310501122331251",glyphs:n.create({major1:e.GlyphOfChainHeal,major2:e.GlyphOfEarthShield,major3:e.GlyphOfLesserHealingWave,minor2:a.GlyphOfWaterShield,minor1:a.GlyphOfRenewedLife,minor3:a.GlyphOfGhostWolf})})},B={name:"Raid Healing",data:t.create({talentsString:"-3020503-50005331335310501122331251",glyphs:n.create({major1:e.GlyphOfChainHeal,major2:e.GlyphOfEarthShield,major3:e.GlyphOfEarthlivingWeapon,minor2:a.GlyphOfWaterShield,minor1:a.GlyphOfRenewedLife,minor3:a.GlyphOfGhostWolf})})},C=s.create({totems:i.create({earth:r.StrengthOfEarthTotem,air:d.WrathOfAirTotem,fire:l.FlametongueTotem,water:o.ManaSpringTotem})}),F=m.create({shield:c.WaterShield,bloodlust:!0}),R=h.create({defaultPotion:f.RunicManaInjector,flask:p.FlaskOfTheFrostWyrm,food:S.FoodFishFeast}),L={name:"Pre-raid Preset",tooltip:T,gear:g.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42555,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40681\n\t\t},\n\t\t{\n\t\t\t"id": 37875,\n\t\t\t"enchant": 3838,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37291,\n\t\t\t"enchant": 3859\n\t\t},\n\t\t{\n\t\t\t"id": 44180,\n\t\t\t"enchant": 2381\n\t\t},\n\t\t{\n\t\t\t"id": 37788,\n\t\t\t"enchant": 3758,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37623,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40693,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37791,\n\t\t\t"enchant": 3721\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44283\n\t\t},\n\t\t{\n\t\t\t"id": 37694\n\t\t},\n\t\t{\n\t\t\t"id": 37111\n\t\t},\n\t\t{\n\t\t\t"id": 37657\n\t\t},\n\t\t{\n\t\t\t"id": 37169,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40700,\n\t\t\t"enchant": 1128\n\t\t},\n\t\t{\n\t\t\t"id": 40709\n\t\t}\n  ]}')},D={name:"P1 Preset",tooltip:T,gear:g.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40510,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t40051\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44662,\n\t\t\t"gems": [\n\t\t\t\t42150\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40513,\n\t\t\t"enchant": 3810,\n\t\t\t"gems": [\n\t\t\t\t40051\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44005,\n\t\t\t"enchant": 3859,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40508,\n\t\t\t"enchant": 2381,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t42150\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40209,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40564,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40327,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40512,\n\t\t\t"enchant": 3721,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40237,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40399\n\t\t},\n\t\t{\n\t\t\t"id": 40375\n\t\t},\n\t\t{\n\t\t\t"id": 40432\n\t\t},\n\t\t{\n\t\t\t"id": 37111\n\t\t},\n\t\t{\n\t\t\t"id": 40395,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40401,\n\t\t\t"enchant": 1128\n\t\t},\n\t\t{\n\t\t\t"id": 40709\n\t\t}\n  ]}')},x={name:"P2 Preset",tooltip:T,gear:g.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 46201,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45443,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46204,\n\t\t\t"enchant": 3810,\n\t\t\t"gems": [\n\t\t\t\t40051\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45486,\n\t\t\t"enchant": 3859,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45867,\n\t\t\t"enchant": 2381,\n\t\t\t"gems": [\n\t\t\t\t40017,\n\t\t\t\t40051\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45460,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t40105,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46199,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40017,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45151,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46202,\n\t\t\t"enchant": 3719,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45615,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46323,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46046,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45535\n\t\t},\n\t\t{\n\t\t\t"id": 37111\n\t\t},\n\t\t{\n\t\t\t"id": 45612,\n\t\t\t"enchant": 3834,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45470,\n\t\t\t"enchant": 1128,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45114\n\t\t}\n\t]}')},J=W({fieldName:"bloodlust",id:u.fromSpellId(2825)}),N=w({fieldName:"shield",values:[{value:c.NoShield,tooltip:"No Shield"},{actionId:u.fromSpellId(57960),value:c.WaterShield},{actionId:u.fromSpellId(49281),value:c.LightningShield}]}),_={inputs:[]};class A extends j{constructor(t,n){super(t,n,{cssClass:"restoration-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],warnings:[],epStats:[y.StatIntellect,y.StatSpirit,y.StatSpellPower,y.StatSpellCrit,y.StatSpellHaste,y.StatMP5],epReferenceStat:y.StatSpellPower,displayStats:[y.StatHealth,y.StatMana,y.StatStamina,y.StatIntellect,y.StatSpirit,y.StatSpellPower,y.StatSpellCrit,y.StatSpellHaste,y.StatMP5],modifyDisplayStats:t=>{let n=new O;return n=n.addStat(y.StatSpellCrit,1*t.getTalents().tidalMastery*E),{talents:n}},defaults:{gear:D.gear,epWeights:O.fromMap({[y.StatIntellect]:.22,[y.StatSpirit]:.05,[y.StatSpellPower]:1,[y.StatSpellCrit]:.67,[y.StatSpellHaste]:1.29,[y.StatMP5]:.08}),consumes:R,rotation:C,talents:B.data,specOptions:F,raidBuffs:I.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:P.TristateEffectImproved,moonkinAura:P.TristateEffectImproved,sanctifiedRetribution:!0}),partyBuffs:b.create({}),individualBuffs:G.create({blessingOfKings:!0,blessingOfWisdom:2,vampiricTouch:!0}),debuffs:v.create({faerieFire:P.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,curseOfElements:!0,shadowMastery:!0})},playerIconInputs:[N,J],rotationInputs:_,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[k]},customSections:[H],encounterPicker:{showExecuteProportion:!1},presets:{talents:[B,M],gear:[L,D,x]}})}}export{C as D,D as P,A as R,B as a,F as b,R as c,x as d};
//# sourceMappingURL=sim-980a9246.chunk.js.map

import{c1 as t,Q as n,P as e,j as a,dL as i,dM as s,by as l,bz as o,dN as r,dO as d,cO as m,cP as c,L as g,bL as h,bF as p,bG as u,bJ as f,bt as S,A as v,d3 as b,d as I,a6 as O,a as y,T as P,ao as C,a$ as W,al as T,K as A,ap as w}from"./detailed_results-f35d3fd3.chunk.js";import{B as k,u as D,c as E,b as H,k as M,a as x,I as R,a4 as N,R as j,T as J,t as G}from"./individual_sim_ui-25bc03c1.chunk.js";const B={name:"Basic w/Aura Mastery+LoH buff",data:t.create({talentsString:"050501-05-05232051203331302133231331",glyphs:n.create({major1:e.GlyphOfSealOfVengeance,major2:e.GlyphOfJudgement,major3:e.GlyphOfConsecration,minor1:a.GlyphOfSenseUndead,minor2:a.GlyphOfLayOnHands,minor3:a.GlyphOfBlessingOfKings})})},L={name:"Basic w/Dsac",data:t.create({talentsString:"03-453201002-05222051203331302133201331",glyphs:n.create({major1:e.GlyphOfSealOfVengeance,major2:e.GlyphOfJudgement,major3:e.GlyphOfConsecration,minor1:a.GlyphOfSenseUndead,minor2:a.GlyphOfLayOnHands,minor3:a.GlyphOfBlessingOfKings})})},q=i.create({type:s.Standard,exoSlack:500,consSlack:500,useDivinePlea:!0,avoidClippingConsecration:!0,holdLastAvengingWrathUntilExecution:!1,divinePleaPercentage:.75,holyWrathThreshold:4,sovTargets:1,customRotation:l.create({spells:[o.create({spell:r.JudgementOfWisdom}),o.create({spell:r.HammerOfWrath}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.DivineStorm}),o.create({spell:r.Exorcism}),o.create({spell:r.Consecration})]}),customCastSequence:l.create({spells:[o.create({spell:r.JudgementOfWisdom}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.DivineStorm}),o.create({spell:r.Consecration}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.Exorcism}),o.create({spell:r.JudgementOfWisdom}),o.create({spell:r.CrusaderStrike}),o.create({spell:r.DivineStorm}),o.create({spell:r.Consecration}),o.create({spell:r.CrusaderStrike})]})}),U=d.create({aura:m.RetributionAura,judgement:c.JudgementOfWisdom}),V=g.create({defaultPotion:h.PotionOfSpeed,defaultConjured:p.ConjuredDarkRune,flask:u.FlaskOfEndlessRage,food:f.FoodFishFeast}),F={name:"Pre-Raid Preset",tooltip:k,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 41386,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40022\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40678\n\t\t},\n\t\t{\n\t\t\t"id": 34388,\n\t\t\t"enchant": 3875,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t40037\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37647,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39633,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t40038\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41355,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39634,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40694,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37193,\n\t\t\t"enchant": 3326,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44297,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 40586\n\t\t},\n\t\t{\n\t\t\t"id": 37685\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 37852,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 37574\n\t\t}\n\t]}')},K={name:"P1 Preset",tooltip:k,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n\t\t  {\n\t\t\t"id": 44006,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t  41398,\n\t\t\t  49110\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t  42142\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40578,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t  },\n\t\t  {\n\t\t\t"id": 40574,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40330,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t  0\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40278,\n\t\t\t"gems": [\n\t\t\t  39996,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 44011,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t  42142,\n\t\t\t  39996\n\t\t\t]\n\t\t  },\n\t\t  {\n\t\t\t"id": 40591,\n\t\t\t"enchant": 3606\n\t\t  },\n\t\t  {\n\t\t\t"id": 40075\n\t\t  },\n\t\t  {\n\t\t\t"id": 40474\n\t\t  },\n\t\t  {\n\t\t\t"id": 42987\n\t\t  },\n\t\t  {\n\t\t\t"id": 40431\n\t\t  },\n\t\t  {\n\t\t\t"id": 40384,\n\t\t\t"enchant": 3789\n\t\t  },\n\t\t  {},\n\t\t  {\n\t\t\t"id": 42852\n\t\t  }\n\t\t]}')},z={name:"P2 Preset",tooltip:k,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 45472,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45245,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45461,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45473,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45663,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45444,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46095,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45134,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45599,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45534,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45609\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 45516,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 42853\n\t\t}\n\t]}')},_={name:"P3 Preset (Placeholder)",tooltip:k,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 48614,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 53103,\n\t\t\t"gems": [\n\t\t\t\t40162\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47972,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40162\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46971,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47004,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47155,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t49110,\n\t\t\t\t40111,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 48615,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40162,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47460,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46975,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47154,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47075,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46966,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 47131\n\t\t},\n\t\t{\n\t\t\t"id": 47115\n\t\t},\n\t\t{\n\t\t\t"id": 47519,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 47661\n\t\t}\n\t]}')},Q={name:"P4 Preset (Placeholder)",tooltip:k,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 51162,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50421,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51160,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 49998,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t40125\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51164,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51832,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50021,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40125,\n\t\t\t\t40111,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51925,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111,\n\t\t\t\t40125\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51161,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 49895,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40125,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51843,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 49949,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50351\n\t\t},\n\t\t{\n\t\t\t"id": 50343\n\t\t},\n\t\t{\n\t\t\t"id": 49888,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 50455\n\t\t}\n\t]}')},$={name:"P5 Preset (Placeholder)",tooltip:k,enableWhen:t=>!0,gear:S.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 51277,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 54581,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51279,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40118\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50653,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t40125\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51275,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40118,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 54580,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50690,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40125,\n\t\t\t\t40111,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50707,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111,\n\t\t\t\t40125\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 51161,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t42142,\n\t\t\t\t42142\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 54578,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 54576,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 52572,\n\t\t\t"gems": [\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 50706\n\t\t},\n\t\t{\n\t\t\t"id": 54590\n\t\t},\n\t\t{\n\t\t\t"id": 49623,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t40111,\n\t\t\t\t40111,\n\t\t\t\t40111\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 50455\n\t\t}\n\t]}')},X=D({fieldName:"aura",values:[{value:m.NoPaladinAura,tooltip:"No Aura"},{actionId:v.fromSpellId(54043),value:m.RetributionAura}]}),Y=D({fieldName:"seal",values:[{actionId:v.fromSpellId(42463),value:b.Vengeance},{actionId:v.fromSpellId(20154),value:b.Righteousness},{actionId:v.fromSpellId(20424),value:b.Command,showWhen:t=>t.getTalents().sealOfCommand}],changeEmitter:t=>t.changeEmitter}),Z=D({fieldName:"judgement",values:[{actionId:v.fromSpellId(53408),value:c.JudgementOfWisdom},{actionId:v.fromSpellId(20271),value:c.JudgementOfLight}]}),tt=E({fieldName:"exoSlack",label:"Exo Slack (MS)",labelTooltip:"Amount of extra time in MS to give main abilities to come off cooldown before using Exorcism on single target",positive:!0,showWhen:t=>t.getRotation().type==s.Standard}),nt=E({fieldName:"consSlack",label:"Cons Slack (MS)",labelTooltip:"Amount of extra time in MS to give main abilities to come off cooldown before using Consecration on single target",positive:!0,showWhen:t=>t.getRotation().type==s.Standard}),et=H({fieldName:"useDivinePlea",label:"Use Divine Plea",labelTooltip:"Whether or not to maintain Divine Plea",showWhen:t=>t.getRotation().type==s.Standard}),at=H({fieldName:"useDivinePlea",label:"Use Divine Plea - Out of Sequence",labelTooltip:"Whether or not to maintain Divine Plea, this happens OUTSIDE of the cast sequence",showWhen:t=>t.getRotation().type==s.CastSequence}),it=E({fieldName:"divinePleaPercentage",label:"Divine Plea Mana Threshold %",labelTooltip:"% of max mana left before beginning to use Divine Plea",percent:!0,positive:!0}),st=E({fieldName:"holyWrathThreshold",label:"Holy Wrath Threshold",labelTooltip:"Minimum number of Demon and Undead units before Holy Wrath is considered viable to add to an AOE rotation.",positive:!0,showWhen:t=>t.getRotation().type==s.Standard}),lt=E({fieldName:"sovTargets",label:"Max SoV Targets",labelTooltip:"The maximum number of targets to keep the SoV debuff on.",positive:!0,showWhen:t=>t.getSpecOptions().seal==b.Vengeance,changeEmitter:t=>t.changeEmitter}),ot=H({fieldName:"avoidClippingConsecration",label:"Avoid Clipping Consecration",labelTooltip:"Avoid clipping consecration at the end of a fight.",showWhen:t=>t.getRotation().type==s.Standard||t.getRotation().type==s.Custom}),rt=H({fieldName:"holdLastAvengingWrathUntilExecution",label:"Hold Avenging Wrath Until Execution",labelTooltip:"Hold last Avenging Wrath usage until the execution phase. This currently does not work if specific Avenging Wrath CD usage times are specified.",showWhen:t=>t.getRotation().type==s.Standard||t.getRotation().type==s.Custom}),dt=M({fieldName:"customRotation",numColumns:2,values:[{actionId:v.fromSpellId(53408),value:r.JudgementOfWisdom},{actionId:v.fromSpellId(53385),value:r.DivineStorm},{actionId:v.fromSpellId(48806),value:r.HammerOfWrath},{actionId:v.fromSpellId(48819),value:r.Consecration},{actionId:v.fromSpellId(48817),value:r.HolyWrath},{actionId:v.fromSpellId(35395),value:r.CrusaderStrike},{actionId:v.fromSpellId(48801),value:r.Exorcism},{actionId:v.fromSpellId(54428),value:r.DivinePlea}],showWhen:t=>t.getRotation().type==s.Custom}),mt=M({fieldName:"customCastSequence",numColumns:2,values:[{actionId:v.fromSpellId(53408),value:r.JudgementOfWisdom},{actionId:v.fromSpellId(53385),value:r.DivineStorm},{actionId:v.fromSpellId(48806),value:r.HammerOfWrath},{actionId:v.fromSpellId(48819),value:r.Consecration},{actionId:v.fromSpellId(48817),value:r.HolyWrath},{actionId:v.fromSpellId(35395),value:r.CrusaderStrike},{actionId:v.fromSpellId(48801),value:r.Exorcism},{actionId:v.fromSpellId(54428),value:r.DivinePlea}],showWhen:t=>t.getRotation().type==s.CastSequence}),ct=x({fieldName:"type",label:"Type",labelTooltip:"<ul>\n\t\t<li>\n\t\t\t<div>Standard: All-in-one rotation for single target and aoe.</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div>Custom: Highest spell that is ready will be cast.</div>\n\t\t</li>\n\t\t<li>\n\t\t\t<div>Cast Sequence: Spells will be cast in the order of the list. (Like 1-button-macro)</div>\n\t\t</li>\n\t</ul>",values:[{name:"Standard",value:s.Standard},{name:"Custom",value:s.Custom},{name:"Cast Sequence",value:s.CastSequence}]});class gt extends R{constructor(t,n){super(t,n,{cssClass:"retribution-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[I.StatStrength,I.StatAgility,I.StatIntellect,I.StatMP5,I.StatAttackPower,I.StatMeleeHit,I.StatMeleeCrit,I.StatMeleeHaste,I.StatExpertise,I.StatArmorPenetration,I.StatSpellPower,I.StatSpellCrit,I.StatSpellHit,I.StatSpellHaste],epPseudoStats:[O.PseudoStatMainHandDps],epReferenceStat:I.StatAttackPower,displayStats:[I.StatStrength,I.StatAgility,I.StatIntellect,I.StatMP5,I.StatAttackPower,I.StatMeleeHit,I.StatMeleeCrit,I.StatMeleeHaste,I.StatExpertise,I.StatArmorPenetration,I.StatSpellHaste,I.StatSpellPower,I.StatSpellCrit,I.StatSpellHit,I.StatMana,I.StatHealth],modifyDisplayStats:t=>{let n=new y;return P.freezeAllAndDo((()=>{t.getMajorGlyphs().includes(e.GlyphOfSealOfVengeance)&&t.getSpecOptions().seal==b.Vengeance&&(n=n.addStat(I.StatExpertise,10*N))})),{talents:n}},defaults:{gear:K.gear,epWeights:y.fromMap({[I.StatStrength]:2.53,[I.StatAgility]:1.13,[I.StatIntellect]:.15,[I.StatSpellPower]:.32,[I.StatSpellHit]:.41,[I.StatSpellCrit]:.01,[I.StatSpellHaste]:.12,[I.StatMP5]:.05,[I.StatAttackPower]:1,[I.StatMeleeHit]:1.96,[I.StatMeleeCrit]:1.16,[I.StatMeleeHaste]:1.44,[I.StatArmorPenetration]:.76,[I.StatExpertise]:1.8},{[O.PseudoStatMainHandDps]:7.33}),consumes:V,rotation:q,talents:B.data,specOptions:U,raidBuffs:C.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:W.TristateEffectImproved,bloodlust:!0,manaSpringTotem:W.TristateEffectRegular,hornOfWinter:!0,battleShout:W.TristateEffectImproved,sanctifiedRetribution:!0,swiftRetribution:!0,elementalOath:!0,rampage:!0,trueshotAura:!0,icyTalons:!0,totemOfWrath:!0,wrathOfAirTotem:!0}),partyBuffs:T.create({}),individualBuffs:A.create({judgementsOfTheWise:!0,blessingOfKings:!0,blessingOfMight:W.TristateEffectImproved}),debuffs:w.create({shadowMastery:!0,totemOfWrath:!0,judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,curseOfElements:!0,bloodFrenzy:!0,exposeArmor:!0,sunderArmor:!0,faerieFire:W.TristateEffectImproved,curseOfWeakness:W.TristateEffectRegular})},playerIconInputs:[X,Z,Y],rotationInputs:{inputs:[ct,et,ot,rt,at,it,nt,tt,st,lt,dt,mt]},includeBuffDebuffInputs:[j],excludeBuffDebuffInputs:[],otherInputs:{inputs:[J,G]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[B,L],gear:[F,K,z,_,Q,$]}})}}export{B as A,q as D,K as P,gt as R,U as a,V as b,z as c,_ as d,Q as e,$ as f};
//# sourceMappingURL=sim-57ff6266.chunk.js.map

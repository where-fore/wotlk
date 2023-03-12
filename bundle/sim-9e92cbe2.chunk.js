import{cS as t,A as n,cT as e,cU as a,cV as i,T as s,c1 as o,Q as r,H as l,f as d,cW as m,by as p,bz as c,cX as h,bP as g,L as S,bL as f,bG as u,bJ as T,bE as v,bt as y,bQ as I,b$ as b,d as M,a6 as w,a as P,B as A,bV as O,aE as C,ao as R,a$ as E,al as W,K as k,ap as G}from"./detailed_results-f35d3fd3.chunk.js";import{u as B,_ as N,j as x,m as D,a as H,b as j,c as U,k as F,$ as V,a0 as J,B as K,I as L,a1 as z,a2 as _,a3 as $,n as Q,p as q,o as X,T as Y,t as Z}from"./individual_sim_ui-25bc03c1.chunk.js";const tt=B({fieldName:"ammo",numColumns:2,values:[{value:t.AmmoNone,tooltip:"No Ammo"},{actionId:n.fromItemId(52021),value:t.IcebladeArrow},{actionId:n.fromItemId(41165),value:t.SaroniteRazorheads},{actionId:n.fromItemId(41586),value:t.TerrorshaftArrow},{actionId:n.fromItemId(31737),value:t.TimelessArrow},{actionId:n.fromItemId(34581),value:t.MysteriousArrow},{actionId:n.fromItemId(33803),value:t.AdamantiteStinger},{actionId:n.fromItemId(28056),value:t.BlackflightArrow}]}),nt=N(),et=x({fieldName:"petUptime",label:"Pet Uptime (%)",labelTooltip:"Percent of the fight duration for which your pet will be alive.",percent:!0}),at=D({fieldName:"useHuntersMark",id:n.fromSpellId(53338)}),it=x({fieldName:"sniperTrainingUptime",label:"ST Uptime (%)",labelTooltip:"Uptime for the Sniper Training talent, as a percent of the fight duration.",percent:!0,showWhen:t=>t.getTalents().sniperTraining>0,changeEmitter:t=>s.onAny([t.specOptionsChangeEmitter,t.talentsChangeEmitter])}),st={inputs:[H({fieldName:"type",label:"Type",values:[{name:"Single Target",value:e.SingleTarget},{name:"AOE",value:e.Aoe},{name:"Custom",value:e.Custom}]}),H({fieldName:"sting",label:"Sting",labelTooltip:"Maintains the selected Sting on the primary target.",values:[{name:"None",value:a.NoSting},{name:"Scorpid Sting",value:a.ScorpidSting},{name:"Serpent Sting",value:a.SerpentSting}],showWhen:t=>t.getRotation().type==e.SingleTarget}),j({fieldName:"trapWeave",label:"Trap Weave",labelTooltip:"Uses Explosive Trap at appropriate times. Note that selecting this will disable Black Arrow because they share a CD.",showWhen:t=>t.getRotation().type!=e.Custom}),U({fieldName:"timeToTrapWeaveMs",label:"Weave Time",labelTooltip:"Amount of time, in milliseconds, between when you start moving towards the boss and when you re-engage your ranged autos.",enableWhen:t=>t.getRotation().type!=e.Custom&&t.getRotation().trapWeave||t.getRotation().type==e.Custom&&t.getRotation().customRotation?.spells.some((t=>t.spell==i.ExplosiveTrap))||!1}),j({fieldName:"allowExplosiveShotDownrank",label:"Allow ES Downrank",labelTooltip:"Weaves Explosive Shot Rank 3 during LNL procs. This works because the rank 3 and rank 4 dots can stack.",showWhen:t=>t.getRotation().type!=e.Custom&&t.getTalents().explosiveShot&&t.getTalents().lockAndLoad>0,changeEmitter:t=>s.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),F({fieldName:"customRotation",numColumns:2,values:[{actionId:n.fromSpellId(49052),value:i.SteadyShot},{actionId:n.fromSpellId(49045),value:i.ArcaneShot},{actionId:n.fromSpellId(49050),value:i.AimedShot},{actionId:n.fromSpellId(49048),value:i.MultiShot},{actionId:n.fromSpellId(49001),value:i.SerpentStingSpell},{actionId:n.fromSpellId(3043),value:i.ScorpidStingSpell},{actionId:n.fromSpellId(61006),value:i.KillShot},{actionId:n.fromSpellId(63672),value:i.BlackArrow},{actionId:n.fromSpellId(53209),value:i.ChimeraShot},{actionId:n.fromSpellId(60053),value:i.ExplosiveShot,text:"R4"},{actionId:n.fromSpellId(60052),value:i.ExplosiveShotDownrank,text:"R3"},{actionId:n.fromSpellId(49067),value:i.ExplosiveTrap},{actionId:n.fromSpellId(58434),value:i.Volley}],showWhen:t=>t.getRotation().type==e.Custom}),U({fieldName:"viperStartManaPercent",label:"Viper Start Mana %",labelTooltip:"Switch to Aspect of the Viper when mana goes below this amount.",percent:!0}),U({fieldName:"viperStopManaPercent",label:"Viper Stop Mana %",labelTooltip:"Switch back to Aspect of the Hawk when mana goes above this amount.",percent:!0})]},ot={name:"Beast Mastery",data:o.create({talentsString:"51200201505112243120531251-025305101",glyphs:r.create({major1:l.GlyphOfBestialWrath,major2:l.GlyphOfSteadyShot,major3:l.GlyphOfSerpentSting,minor1:d.GlyphOfFeignDeath,minor2:d.GlyphOfRevivePet,minor3:d.GlyphOfMendPet})})},rt={name:"Marksman",data:o.create({talentsString:"502-035335131030013233035031051-5000002",glyphs:r.create({major1:l.GlyphOfSerpentSting,major2:l.GlyphOfSteadyShot,major3:l.GlyphOfChimeraShot,minor1:d.GlyphOfFeignDeath,minor2:d.GlyphOfRevivePet,minor3:d.GlyphOfMendPet})})},lt={name:"Survival",data:o.create({talentsString:"-015305101-5000032500033330532135301311",glyphs:r.create({major1:l.GlyphOfSerpentSting,major2:l.GlyphOfExplosiveShot,major3:l.GlyphOfKillShot,minor1:d.GlyphOfFeignDeath,minor2:d.GlyphOfRevivePet,minor3:d.GlyphOfMendPet})})},dt=m.create({type:e.SingleTarget,sting:a.SerpentSting,trapWeave:!1,timeToTrapWeaveMs:2e3,viperStartManaPercent:.1,viperStopManaPercent:.3,customRotation:p.create({spells:[c.create({spell:i.SerpentStingSpell}),c.create({spell:i.KillShot}),c.create({spell:i.ChimeraShot}),c.create({spell:i.BlackArrow}),c.create({spell:i.ExplosiveShot}),c.create({spell:i.AimedShot}),c.create({spell:i.ArcaneShot}),c.create({spell:i.SteadyShot})]})}),mt=h.create({ammo:t.SaroniteRazorheads,useHuntersMark:!0,petType:g.Wolf,petTalents:V,petUptime:1,sniperTrainingUptime:.9}),pt=h.create({ammo:t.SaroniteRazorheads,useHuntersMark:!0,petType:g.Wolf,petTalents:J,petUptime:1,sniperTrainingUptime:.9}),ct=S.create({defaultPotion:f.PotionOfSpeed,flask:u.FlaskOfEndlessRage,food:T.FoodFishFeast,petFood:v.PetFoodSpicedMammothTreats}),ht={name:"MM Preraid Preset",tooltip:K,enableWhen:t=>2!=t.getTalentTree(),gear:y.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42551,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40678\n\t\t},\n\t\t{\n\t\t\t"id": 37373,\n\t\t\t"enchant": 3808\n\t\t},\n\t\t{\n\t\t\t"id": 43566,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39579,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37170,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39582,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40014,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37407,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37669,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 37167,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37685\n\t\t},\n\t\t{\n\t\t\t"id": 42642,\n\t\t\t"gems": [\n\t\t\t\t40044\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 44253\n\t\t},\n\t\t{\n\t\t\t"id": 44249,\n\t\t\t"enchant": 3827\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 37191,\n\t\t\t"enchant": 3608\n\t\t}\n\t]}')},gt={name:"MM P1 Preset",tooltip:K,enableWhen:t=>2!=t.getTalentTree(),gear:y.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40543,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40507,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 43998,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40282,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40275,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40506,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40549,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 40074\n\t\t},\n\t\t{\n\t\t\t"id": 40474\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 44253\n\t\t},\n\t\t{\n\t\t\t"id": 40388,\n\t\t\t"enchant": 3827\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40385,\n\t\t\t"enchant": 3608\n\t\t}\n\t]}')},St={name:"MM P2 Preset",tooltip:K,enableWhen:t=>2!=t.getTalentTree(),gear:y.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 45610,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45300,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40043\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t40043\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45473,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t39997,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45869,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t40044,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45444,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t39997,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45467,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45536,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t39997,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45244,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46322,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45931\n\t\t},\n\t\t{\n\t\t\t"id": 46038\n\t\t},\n\t\t{\n\t\t\t"id": 45613,\n\t\t\t"enchant": 3827,\n\t\t\t"gems": [\n\t\t\t\t45879,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 45570,\n\t\t\t"enchant": 3608\n\t\t}\n\t]}')},ft={name:"SV Preraid Preset",tooltip:K,enableWhen:t=>2==t.getTalentTree(),gear:y.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42551,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40678\n\t\t},\n\t\t{\n\t\t\t"id": 37373,\n\t\t\t"enchant": 3808\n\t\t},\n\t\t{\n\t\t\t"id": 43406,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 39579,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37170,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39582,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37407,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37669,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 37167,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37685\n\t\t},\n\t\t{\n\t\t\t"id": 42642,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 44253\n\t\t},\n\t\t{\n\t\t\t"id": 44249,\n\t\t\t"enchant": 3827\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 37191,\n\t\t\t"enchant": 3608\n\t\t}\n\t]}')},ut={name:"SV P1 Preset",tooltip:K,enableWhen:t=>2==t.getTalentTree(),gear:y.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40505,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40507,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 43998,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40282,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39762,\n\t\t\t"enchant": 3601,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40331,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40549,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 40074\n\t\t},\n\t\t{\n\t\t\t"id": 40474\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 44253\n\t\t},\n\t\t{\n\t\t\t"id": 40388,\n\t\t\t"enchant": 3827\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40385,\n\t\t\t"enchant": 3608\n\t\t}\n\t]}')},Tt={name:"SV P2 Preset",tooltip:K,enableWhen:t=>2==t.getTalentTree(),gear:y.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 45610,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40023\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45300,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t40044\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45473,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t39997,\n\t\t\t\t45879\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45869,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t40043,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45444,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t40023,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46095,\n\t\t\t"gems": [\n\t\t\t\t42143,\n\t\t\t\t42143,\n\t\t\t\t42143\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45536,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t39997,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45244,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t40023\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46322,\n\t\t\t"gems": [\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44253\n\t\t},\n\t\t{\n\t\t\t"id": 45931\n\t\t},\n\t\t{\n\t\t\t"id": 45613,\n\t\t\t"enchant": 3827,\n\t\t\t"gems": [\n\t\t\t\t39997,\n\t\t\t\t39997\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 45570,\n\t\t\t"enchant": 3608\n\t\t}\n\t]}')};class vt extends L{constructor(t,n){super(t,n,{cssClass:"hunter-sim-ui",cssScheme:"hunter",knownIssues:[],warnings:[t=>({updateOn:s.onAny([t.player.talentsChangeEmitter,t.player.specOptionsChangeEmitter]),getContent:()=>{const n=[g.Chimaera,g.CoreHound,g.Devilsaur,g.Silithid,g.SpiritBeast,g.Worm].includes(t.player.getSpecOptions().petType),e=t.player.getTalents().beastMastery;return n&&!e?"Cannot use exotic pets without the Beast Mastery talent.":""}}),t=>({updateOn:s.onAny([t.player.talentsChangeEmitter,t.player.specOptionsChangeEmitter]),getContent:()=>{const n=t.player.getSpecOptions(),e=n.petTalents||I.create(),a=z(e,_(n.petType)),i=b(a),s=t.player.getTalents().beastMastery?20:16;return 0==i?"":i<s?"Unspent pet talent points.":i>s?"More than 16 points spent in pet talents, but Beast Mastery is not talented.":""}})],epStats:[M.StatStamina,M.StatIntellect,M.StatAgility,M.StatRangedAttackPower,M.StatMeleeHit,M.StatMeleeCrit,M.StatMeleeHaste,M.StatArmorPenetration,M.StatMP5],epPseudoStats:[w.PseudoStatRangedDps],epReferenceStat:M.StatRangedAttackPower,displayStats:[M.StatHealth,M.StatStamina,M.StatAgility,M.StatIntellect,M.StatRangedAttackPower,M.StatMeleeHit,M.StatMeleeCrit,M.StatMeleeHaste,M.StatArmorPenetration,M.StatMP5],modifyDisplayStats:t=>{let n=new P;n=n.addStat(M.StatMeleeCrit,1*t.getTalents().lethalShots*$);const e=t.getEquippedItem(A.ItemSlotRanged);return 3608==e?.enchant?.effectId&&(n=n.addStat(M.StatMeleeCrit,40)),t.getRace()==O.RaceDwarf&&e?.item.rangedWeaponType==C.RangedWeaponTypeGun&&(n=n.addStat(M.StatMeleeCrit,1*$)),t.getRace()==O.RaceTroll&&e?.item.rangedWeaponType==C.RangedWeaponTypeBow&&(n=n.addStat(M.StatMeleeCrit,1*$)),{talents:n}},defaults:{gear:ut.gear,epWeights:P.fromMap({[M.StatStamina]:.5,[M.StatAgility]:2.65,[M.StatIntellect]:1.1,[M.StatRangedAttackPower]:1,[M.StatMeleeHit]:2,[M.StatMeleeCrit]:1.5,[M.StatMeleeHaste]:1.39,[M.StatArmorPenetration]:1.32},{[w.PseudoStatRangedDps]:6.32}),consumes:ct,rotation:dt,talents:lt.data,specOptions:mt,raidBuffs:R.create({arcaneBrilliance:!0,powerWordFortitude:E.TristateEffectImproved,giftOfTheWild:E.TristateEffectImproved,bloodlust:!0,strengthOfEarthTotem:E.TristateEffectImproved,windfuryTotem:E.TristateEffectImproved,battleShout:E.TristateEffectImproved,leaderOfThePack:E.TristateEffectImproved,sanctifiedRetribution:!0,unleashedRage:!0,moonkinAura:E.TristateEffectImproved}),partyBuffs:W.create({}),individualBuffs:k.create({blessingOfKings:!0,blessingOfWisdom:2,blessingOfMight:2,vampiricTouch:!0}),debuffs:G.create({sunderArmor:!0,faerieFire:E.TristateEffectImproved,judgementOfWisdom:!0,curseOfElements:!0,heartOfTheCrusader:!0,savageCombat:!0})},playerIconInputs:[nt,tt,at],rotationInputs:st,petConsumeInputs:[Q],includeBuffDebuffInputs:[q,X],excludeBuffDebuffInputs:[],otherInputs:{inputs:[et,it,Y,Z]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[ot,rt,lt],gear:[ht,gt,St,ft,ut,Tt]}})}}export{ot as B,dt as D,vt as H,gt as M,lt as S,pt as a,ct as b,St as c,rt as d,mt as e,ut as f,Tt as g};
//# sourceMappingURL=sim-9e92cbe2.chunk.js.map

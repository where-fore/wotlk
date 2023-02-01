local _G = getfenv(0)
_G.select = select
_G.string = string
_G.AtlasLoot = {
  Data = {
    ContentPhase = 2
  },
  GameVersion_LT = function(gameVersion) return false end,
  GetRetByFaction = function(horde, alliance) return alliance end,
  Loader = {
    IsMapsModuleAviable = false
  },
}

assert(loadfile("AtlasLootClassic/AtlasLootClassic/Locales/Locales.lua"))(addonname, ALPrivate)

AtlasLoot.DIFFICULTY = {
	[1] 	= {	id = 1,		short = "n", 	  loc = "Normal",				  sourceLoc = "N", 	 key = "NORMAL"	  },
	[2] 	= {	id = 2,		short = "h", 	  loc = "Heroic",				  sourceLoc = "H", 	 key = "HEROIC"	  },
	[3] 	= {	id = 3,		short = "r10", 	loc = "10 Raid",			  sourceLoc = "10",  key = "10RAID"	  },
	[4] 	= {	id = 4,		short = "r25", 	loc = "25 Raid",			  sourceLoc = "25",  key = "25RAID"	  },
	[5] 	= {	id = 5,		short = "r10h", loc = "10 Raid Heroic",	sourceLoc = "10H", key = "10RAIDH"	},
	[6] 	= {	id = 6,		short = "r25h",	loc = "25 Raid Heroic",	sourceLoc = "25H", key = "25RAIDH"	},
	[9] 	= {	id = 7,		short = "r40", 	loc = "40 Raid",			  sourceLoc = nil, 	 key = "40RAID"		},
	[148] = {	id = 148,	short = "r20", 	loc = "20 Raid",			  sourceLoc = nil, 	 key = "20RAID"		},
	[173] = {	id = 173,	short = "n", 	  loc = "Normal",				  sourceLoc = "N", 	 key = "NORMAL2"	},
	[174] = {	id = 174,	short = "h", 	  loc = "Heroic",				  sourceLoc = "H", 	 key = "HEROIC2"	},
	[175] = {	id = 175,	short = "r10", 	loc = "10 Raid",			  sourceLoc = "10",  key = "10RAID2"	},
	[176] = {	id = 176,	short = "r25", 	loc = "25 Raid",			  sourceLoc = "25",  key = "25RAID2"	},
	[193] = {	id = 193,	short = "r10h", loc = "10 Raid Heroic",	sourceLoc = "10H", key = "10RAIDH2" },
	[194] = {	id = 194,	short = "r25h",	loc = "25 Raid Heroic",	sourceLoc = "25H", key = "25RAIDH2" },
}

for k,v in pairs(AtlasLoot.DIFFICULTY) do
	AtlasLoot.DIFFICULTY[v.key] = v
end

local addonname = "AtlasLootClassic"
local ALPrivate = {}

assert(loadfile("AtlasLootClassic/AtlasLootClassic/ItemDB/ItemDB.lua"))(addonname, ALPrivate)

data = assert(loadfile("AtlasLootClassic/AtlasLootClassic_DungeonsAndRaids/data-wrath.lua"))(addonname, ALPrivate)
jsonData = json.encode(data)
  file = io.open("data.json", "a")
  io.output(file)
  io.write(jsonData)
  io.close(file)

  local mock_env = {
  addonname = "AtlasLootClassic",
  json = require "json",
  print = print,
  require = require,
  select = select,
  string = string,
  AtlasLoot = "test",
}

f(mock_env)


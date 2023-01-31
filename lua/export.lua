local function f(env)
  setfenv(1, env) -- change the environment
  
  data = require "AtlasLootClassic/AtlasLootClassic_DungeonsAndRaids/data-wrath"
  jsonData = json.encode(data)
  file = io.open("data.json", "a")
  io.output(file)
  io.write(jsonData)
  io.close(file)
end

local mock_env = {
  json = require "json",
  require = require,
  select = select,
  string = string,
}

f(mock_env)


import { SapphireClient } from "@sapphire/framework";
import * as config from "./config.json";

const client = new SapphireClient({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  loadMessageCommandListeners: true,
  defaultPrefix: "!",
});

client.login(config.token);

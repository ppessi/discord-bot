import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";

export class TestCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
    });
  }

  public async messageRun(message: Message) {
    await message.channel.send("test");
  }
}

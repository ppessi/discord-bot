import { Listener } from "@sapphire/framework";
import { Message } from "discord.js";

export class MessageCreateListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, options);
  }

  // currently just logs the content of the message
  public run(message: Message) {
    if (message.channelId !== "995697687846473828") return;
    this.container.logger.info(message.content);
  }
}

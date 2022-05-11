const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

//new client instance
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

//client is ready, run this code
client.once("ready", () => {
  console.log("Ready!");
});

//log into discord
client.login(token);

client.on("messageCreate", (message) => {
  if (message.content === "Hello") {
    message.reply("Welcome!");
  }

  const PREFIX = "?";
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.reply("pong");
      message.channel.send("Ping and Pong");
      break;
    case "clear":
      message.channel.bulkDelete(100);
      break;
    case "website":
      message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      break;
    case "hi":
        message.channel.send("Hi, How are ya?");
    case "Pikachu":
        message.channel.send("I CHOOSE YOU");
                case 'info':
            if (args[1] == 'version') {
                message.channel.send("version 1.0")
            } else { message.channel.send("ivnaid args") }
            break;
        case 'avatar':
            message.reply(message.author.displayAvatarURL());
            break;
  }
});

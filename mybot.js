const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// start announce (console) and 'Now Playing'setting
client.on("ready", () => {
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users, in ${client.channels.size} channels.`);
  client.user.setActivity('List games !servers', { type: 'PLAYING' }); // now playing
});

// console log for new server joined
client.on("guildCreate", guild => {
  console.log('New server joined: ${guild.name} (id: ${guild.id}). Serving ${guild.memberCount} members.');
})

// for when a bot has been removed from a server
client.on("guildDelete", guild => {
  console.log('I have been removed from: ${guild.name} (id:  ${guild.id})');
});

// server action fro display of game list
client.on("message", (message) => {
  // check if message has prefix, if no then drop action, check if user is a bot with prefix, if bot with prefix then drop
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  // ignore messages that have no prefix added
  if (message.content.indexOf(config.prefix) !==0) return;

 // start serve listing embed
  if (message.content.startsWith(config.prefix + "servers")) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Games being played currently!",
      description: "Check below for games currently being played and their servers.",
      fields: [{
        name: "Minecraft",
        value: "**Server:** FOO"
      },
      {
        name: "ARMA 3",
        value: "**Server name:**  \n Find it in the server browser!"
      },
      {
        name: "ARK: Survival Evolved",
        value: "**Server Address:** TBA \n Check back soon!"
      },
      {
        name: "Factorio",
        value: "**Server Address:** FOO"
      },
      {
        name: "Space Engineers",
        value: "**Server Address:** FOO"
      },
      {
        name: "Updates!",
        value: "**Check often for updates!**"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "via !servers | If any issues ask!"
    }
    }});
  }
});

client.login(config.token);

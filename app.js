// dependencies

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

// required config variables

var config = require('./config.json');
var server_list = require('./server_list.json');

// startup logging

client.on('ready', function() {
  console.log('|----------------------------------------------|');
  console.log('|                                              |');
  console.log('|          Toast_Bot Online and ready!         |');
  console.log('|          Current build version 0.1.3         |');
  console.log("|     Serving ${client.guilds.size} servers    |");
  console.log("|       Serving ${client.user.size} users      |");
  console.log('|                                              |');
  console.log('|----------------------------------------------|');

// set now playing activity

  client.user.setActivity('List games !servers', { type: 'PLAYING' });
});

// bot has added to a new server

client.on("guildCreate", guild => {
  console.log("| New server joined: ${guild.name}             |");
  console.log("| New server has: ${guild.memberCount} users   |");
  console.log('|----------------------------------------------|');
});

// bot has been kicked from a server

client.on('guildDelete', guild => {
  console.log('| Kicked from server: ${guild.name}            |');
  console.log('|----------------------------------------------|');
});

// file logic
let server_info = JSON.parse(fs.readFileSync(server_list, "utf8"));


// create message to send

client.on('message', msg => {
  // ignore message that has no prefix, and check if user is bot
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
  // drop mesage if it has no prefix
  if (msg.content.indexOf(config.prefix) !==0) return;
  //starting message
  if (msg.content.startsWith(config.prefix + "servers")) {

    // create the discord embed  structure
    var embed = {
      color: 3447003,
      title: "Games being played currently!",
      url: "http://www.tcdu.com.au",
      description: "\n» Game Servers online are: ",
      fields: [server_info], //displaying JSON data
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Via !servers | If any issues ask in general or voice chat!"
      }
    }
    //log request to console
    console.log('| Game server status requested                 |');
    console.log('|----------------------------------------------|');
    //send request to channel
    msg.channel.send('<@' + msg.author.id + '> here are the game details!');
    msg.channel.send ({
      embed
    });
    server_info = [];
  } // end message

});

client.login(config.token);

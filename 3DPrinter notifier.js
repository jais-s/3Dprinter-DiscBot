/*const Discord =require('discord.js');
require('dotenv').config();
const client =new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const channel =client.guilds.cache.get('id');
var OctoprinterStatusPrint = require('octo-client');
client.on('message',(msg)=> {
    console.log("3dprinter updater bot online")
    if(msg.content=='!hello'){
        msg.reply ('yo')
    }
    if(msg.content=='!3dprintStat'){
        msg.reply (printerStatus.toString())
    }
});

OctoprinterStatusPrint.printerState(function(response){
   console.log(response);  });
client.login(process.env.DISCORD_TOKEN);
*/
var OctoPrint = require('octo-client');

OctoPrint.printerState(function(response){
  console.log(response);
  
});
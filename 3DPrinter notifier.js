const Discord =require('discord.js');
require('dotenv').config();
const client =new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const channel =client.guilds.cache.get('id')

client.on('message',(msg)=> {
    console.log("3dprinter updater bot online")
    if(msg.content=='!hello'){
        msg.reply ('yo')
    }
});


client.login(process.env.DISCORD_TOKEN);
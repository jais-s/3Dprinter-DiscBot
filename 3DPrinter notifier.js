const Discord =require('discord.js');
const client =new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('message',(msg)=> {
    console.log("3dprinter updater bot online")
    if(msg.content=='!hello'){
        msg.reply ('yo')
    }
});


client.login('OTQ2MTI1OTEzNTUxMTUxMTQ2.YhaKaw.ehm8D2shhn95AxK1XRRyD3ua6eo');
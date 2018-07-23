const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Modérer");
    console.log("Connectedç");
});

bot.login("NDY4NDU2NjgxMDcyODg1NzYw.DjaxDQ.FzYMNSG_IXe2jliLutruzR0OJag");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        Message.channel.sendMessage("Liste des commades: \n -*help");
    }
    
    if (message.content === "Salut" ){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});

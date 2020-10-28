const Discord = require('discord.js');

var hd = [
    "http://steamcommunity.com/groups/Redno",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( " Steam Grubumuz: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'grup',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'grup'
};
const Discord = require('discord.js');

var hd = [
    "https://discord.gg/ZZZ72YR",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( " Davet Linkimiz: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'link',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'link'
};
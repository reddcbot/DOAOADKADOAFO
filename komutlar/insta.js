const Discord = require('discord.js');

var hd = [
    "https://www.instagram.com/rednoofficial/",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( " İnstagram Sayfamız: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'instagram',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'instagram'
};
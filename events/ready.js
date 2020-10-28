const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let prefix = ayarlar.prefix;

module.exports = client => {


setInterval(() =>{
client.channels.get('701047320619253780').join('Kanala katıldım!!!')
}, 1000)
//

var oyun = [
        "r!yardım - 7/24 Security 🔥",
        "r!yardım - Küfür Engel ✨",
        "r!yardım - Reklam Engel⭐️",
        "r!yardım - Koruma Sistemi 💥",
        "r!yardım - Anti Ddos 🌹",
        "r!yardım - Anti Spam ⚡️",
        "r!yardım - Anti Raid 👑",
        
  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/rednoofficial" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
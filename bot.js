const Discord = require('discord.js');//تعريف بكج
const client = new Discord.Client();// تعريف الكلينت
const ms = require('ms');
const pms = require('pretty-ms');

client.on('ready', () => {
          client.user.setActivity("Royal Gamer 7K Soon",{type: 'WATCHING'});
  
  });







var ServerID = "475944692245200898"; // ايدي السيرفر
var ChannelID = "508713355079319552"; // اول روم للسبام

var ChannelIID = "508713378424815623"; // تاني روم للسبام

 

//البكجات
//npm i discord.js
//npm install opusscript
//npm install node-opus
//npm install ffmpeg-binaries
//npm i ms : For Good Quality
//npm i pretty-ms : For Good Quality



client.on('Warn', console.warn);//

client.on('Error', console.error);//

client.on('Disconnect', () => console.log('Disconnected!'));//If The Bot Disconnected You Will See That In The Consol

client.on('Reconnecting', () => console.log('Reconnecting...'));//If The Bot Desconnected And He Comes Online Again Will Say That In The Console

function timerFunc() {
  
  
    client.on('message', msg => {//Rie
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // 


    });




    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelIID).send(Math.random().toString(36).substring(7)) // 


    });
}





var timer = setTimeout(timerFunc, 870);//Good Speed : 870 Very Fast : 305

client.on('ready', () => console.log('ProBot Credits Miner v2'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('Lets Go'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('This Is A Beta Version And Maybe You Will Get Banned Quiqly Tip : Wait For The Official Release')); 

client.on('ready', () => console.log('By Rie'));//كلام يظهر فل كونسول



//ProBot Miner V3 
//Better Quality & Fast Mining & Better Minning = More Credits

var prefix = "n";
const pr1 = ['' , '407244267984125972' , ''];


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send('${prefix}say <words>'); 
   
  if (command == "say") {
            if (!pr1.includes(message.author.id)) return;
   
  message.channel.send(args.join("  "))
      message.delete();
    }
  });
 

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'Ajoin') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
    }
  }
})



client.on('ready', () => {
  client.channels.find(ch => ch.id === "589838169537773570" && ch.type === 'voice').join();//اكتب اي دي روم صوت هنا
});

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format")
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "창초서버입니다 안녕하세요";
const byeChannelComment = "감사합니다 안녕히가세요";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '궁금한사항은!help.' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "👨창초시민👨"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '굿모닝') {
    return message.reply('좋은아침이에요 좋은하루돼세요');
  }
  if(message.content == '!봇정보') {
    let embed = new Discord.RichEmbed()
    let img = 'https://cdn.discordapp.com/attachments/696366994890424331/724320662809870355/unknown.png';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#18dfe6')
    embed.setAuthor('Server info of 창초 봇', img)
    embed.setFooter(`창초 bot`)
    embed.addBlankField()
    embed.addField('RAM사용량',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('봇가동시간', `${duration}`, true);
    embed.addField('서버유저수',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('서버목록',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);
    w
    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;
    
    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);
  }

  if(message.content == '!내정보') {
    let img = 'https://cdn.discordapp.com/attachments/696366994890424331/724320662809870355/unknown.png';
    let embed = new Discord.RichEmbed()
      .setTitle('내정보.')
      il(img)
      .addBlankField()
      .addField('역할', 'some value here')
      .addField('봇 여부', 'Some value here', true)
      .addField('상태', 'Some value here', true)
      .addField('디스코드가입날짜', 'Some value here', true)
      .addField('서버가입날짜', 'Some value he.setURL')
      .setAuthor('후리스', img, 'http://www.naver.com')
      .setThum
      .addBlankField()
      .setTimestamp()
      .setFooter('Made By 후리스', img)

    message.channel.send(embed)
  } else if(message.content == '!help') {
    let helpImg = 'https://cdn.discordapp.com/attachments/696366994890424331/724320662809870355/unknown.png';
    let commandList = [
      {name: '!help', desc: 'help'},
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: '!관리자공지', desc: 'DM으로 전체 공지 보내기(관리자권한없을시 사용불가능'},
      {name: '!관리자공지2', desc: 'DM으로 전체 embed 형식으로 공지 보내기(관리자권한없을시사용불가능'},
      {name: '!청소', desc: '메세지 삭제(관리자권한없을시 사용불가능'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '!초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
      {name: '!봇정보', desc: '봇 가동시간 메모리 사용량 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Made By 후리스', helpImg)
      .setColor('#e618c7')
      .setFooter('창초 봇')
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite(maxAge0) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('DM에서 사용할 수 없습니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!관리자공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!관리자공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 창초 BOT')
        .setColor('#e61818')
        .setFooter('창초 bot')
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!관리자공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!관리자공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('개인DM에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 자동으로 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "메세지청소를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
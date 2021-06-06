const Discord = require('discord.js');

module.exports = {
    name: 'nuke',
    description: 'Nuke!',
    async execute(msg, args, bot) {
        console.log(args[0]);
        const count = args[0];
        if (isNaN(count)) return msg.reply('Enter a real number, dumbhead');
        if (count > 100) {
            let iterationTimes = Math.ceil(count / 100);
            while (iterationTimes > 0) {
                await msg.channel.bulkDelete(100, true)
                    .then(deleted => {
                        console.log(count - (iterationTimes * 100) + ' messages to be nuked!');
                        iterationTimes--;
                    }).catch(error => {
                        iterationTimes = 0;
                        return msg.reply(error.message);
                    });
            }
        } else {
            await msg.channel.bulkDelete(count, true).catch(error => {
                return msg.reply(error.message);
            });
        }
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Whoops~!!')
            .setAuthor(msg.author.username, msg.author.avatarURL())
            .setTimestamp()
            .attachFiles('./images/W.png')
            .setFooter('Wolfy says Hi!', 'attachment://W.png');
        msg.channel.send(embed);
    }
};
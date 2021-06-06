const Discord = require('discord.js');

module.exports = {
    name: 'mommy',
    description: 'Mommy!',
    execute(msg, args, bot) {
        if (msg.author.id == 763817378077212682 || msg.author.id == 727270445216170085) {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Mommy loves Roho the Most!')
                .setAuthor(msg.author.username, msg.author.avatarURL())
                .attachFiles('./images/mommy.gif')
                .setThumbnail("attachment://mommy.gif")
                .attachFiles('./images/mommyRoho.gif')
                .setImage('attachment://mommyRoho.gif')
                .setTimestamp()
                .attachFiles('./images/W.png')
                .setFooter('Wolfy says Hi!', 'attachment://W.png');

            msg.channel.send(embed);
        } else {
            msg.reply('Sorry, The command is only available for Roho');
        }
    }
};
const paginationEmbed = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help!',
    execute(msg, args, bot) {
        const embed1 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Wolfy says Hi!')
            .setAuthor(msg.author.username, msg.author.avatarURL())
            .addFields(
                { name: '‎w,avatar', value: '‎Provides you with the avatar of the mentioned user/author' },
                { name: '‎w,nuke', value: 'w,nuke 1500 nukes the recent 1500 texts in a channel, upto 14 days prior' },
                { name: 'w,ping/w,pong', value: 'Ping pong when you have nothing to do' }
            )
            .setTimestamp();
        const embed2 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Wolfy says Hi!')
            .setAuthor(msg.author.username, msg.author.avatarURL())
            .addFields(
                { name: '‎w,createRole', value: 'w,createRole Role-name Color-code' },
                { name: '‎w,createRole', value: 'w,createRole Role-name Color-code @user-name' },
                { name: 'w,mommy', value: 'Only Roho is supposed to access this ^_^' }
            )
            .setTimestamp();
        const pages = [
            embed1,
            embed2
        ];
        paginationEmbed(msg, pages);
    }
};
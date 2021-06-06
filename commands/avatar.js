const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Avatar!',
    async execute(message, args, bot) {
        const user = message.mentions.users.first() || message.author;
        let date = new Date(user.createdAt);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        const createdDate = `${da}/${mo}/${ye}`;
        const member = await message.guild.member(user);
        let nickname = member ? member.nickname : user.username;
        let lastMessagedChannel = 'Mystery aan';
        if (user.lastMessageChannelID) {
            lastMessagedChannel = await bot.channels.fetch(user.lastMessageChannelID);
        }
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .addField("USER", `${user.username}#${user.discriminator}`)
            .addField("ID", user.id)
            .addField("Profile Created : ", createdDate)
            .addField("Last Texted On : ", lastMessagedChannel)
            .setAuthor(nickname ? nickname : user.username)
            .setImage(user.displayAvatarURL())
            .setTimestamp()
            .attachFiles('./images/W.png')
            .setFooter('Wolfy says Hi!', 'attachment://W.png');
        message.channel.send(avatarEmbed);
    }
};


module.exports = {
    name: 'createrole',
    description: 'createRole!',
    async execute(message, args, bot) {
        let roleName = args[0];
        let color = args[1];
        console.log(roleName, color);
        console.log(message.channel.permissionsFor(message.member));
        if (message.channel.permissionsFor(message.member).has("MANAGE_ROLES", false)) {
            if (roleName && color) {
                await message.guild.roles.create({
                    data: {
                        name: roleName,
                        color: color,
                    },
                    reason: 'New Role',
                }).catch(console.error);
                message.reply('New Role Created : ' + roleName);

                let member = message.mentions.members.first();
                console.log(member);
                if (member) {
                    let role = message.guild.roles.cache.find(r => r.name === roleName);
                    member.roles.add(role).catch(console.error);
                    message.reply(roleName + ' added to ' + member.nickname);
                }
            }
        } else {
            message.reply('You do not have permission to create a new role');
        }
    }
};
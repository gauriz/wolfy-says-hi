
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(msg, args, bot) {
        msg.reply('pong');
        // msg.channel.send('pong');
    },
};
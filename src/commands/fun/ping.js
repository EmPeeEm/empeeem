
module.exports = {
	name: 'ping',
	category: 'fun',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		message.channel.send('Pong.');
	},
};
module.exports = {
	name: 'beep',
	category: 'fun',
	description: 'Beep!',
	execute(message) {
		message.channel.send('Boop.');
	},
};
module.exports = {
	name: 'server',
	category: 'utility',
	description: 'Display info about this server.',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Just Says Hello'),
    async execute(interaction) {
        await interaction.reply('Hello There, My Fellow Traveler');
    },
};
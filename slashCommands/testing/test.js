const { EmbedBuilder } = require("discord.js");
const { pagination, TypesButtons, StylesButton } = require('@devraelfreeze/discordjs-pagination');

module.exports = {
  name: "test",
  description: "dont use this",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/9EDYw8D.png')
      
      const embed2 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/9EDYw8D.png')
      
      const embed3 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/9EDYw8D.png')

    const pages = [
        embed1, embed2, embed3
        ]


    await pagination({
    interaction: interaction,
    embeds: pages, // Array of embeds objects
    author: interaction.member.user,
    time: 180000, // 40 seconds
    fastSkip: false,
    disableButtons: true,
    pageTravel: true,
    ephemeral: true,
    /** Enable buttons pagination system only for member with ID: 123456789 */
    customFilter: (interaction) => {
        return interaction.member.user.id === '765911201296416829';
    },
    buttons: [
        {
            value: TypesButtons.previous,
            label: 'Previous Image',
            style: StylesButton.Success,
            emoji: '<:kiri:886854576303665202>'
        },
        {
            value: TypesButtons.next,
            label: 'Next Image',
            style: StylesButton.Success,
            emoji: null // Disable emoji for this button
        }
    ]
});

  }
}

const { EmbedBuilder } = require("discord.js");
const { pagination, TypesButtons, StylesButton } = require('@devraelfreeze/discordjs-pagination');

module.exports = {
  name: "test",
  description: "dont use this",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Page1')
      //.setImage('https://imgur.com/9EDYw8D.png')
      
      const embed2 = new EmbedBuilder()
      .setTitle('Page2')
      //.setImage('https://imgur.com/9EDYw8D.png')
      
      const embed3 = new EmbedBuilder()
      .setTitle('Page3')
      //.setImage('https://imgur.com/9EDYw8D.png')

    const pages = [
        embed1, embed2, embed3
        ]


    await pagination({
    interaction: interaction,
    embeds: pages, 
    author: interaction.member.user,
    time: 180000, 
    disableButtons: true,
    pageTravel: true,
    
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
            emoji: null 
        }
    ]
});

  }
}

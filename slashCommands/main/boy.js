const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "boy",
  description: "Boy reference",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/9EDYw8D.png')
      .setColor('Random')

    const pages = [
        embed1
        ]


    const buttons = [{
      label: 'Previous',
      emoji: '<:kiri:886854576303665202>',
      style: ButtonStyle.Secondary
    },
      {
        label: 'Next',
        emoji: '<:kanan:886854524562722857>',
        style: ButtonStyle.Secondary
      },
    ]

    new Pagination()
    .setCommand(interaction)
    .setPages(pages)
    .setButtons(buttons)
    .setPaginationCollector({
      timeout: 120000
    })
    .setSelectMenu({
      enable: true
    })
    .setFooter({
      enable: true
    })
    .send();
  }
}

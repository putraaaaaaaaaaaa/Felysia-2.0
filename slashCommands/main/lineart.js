const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "lineart",
  description: "dont forget make new layer",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/UC8vhNw.png')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/htxWQvB.png')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/UzWY8Ve.png')
      .setColor('Random')

    const embed4 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/BlhBIIb.png')
      .setColor('Random')

    const embed5 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/DhRs5bD.png')
      .setColor('Random')

    const embed6 = new EmbedBuilder()
      .setTitle('Curve In gown')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650643784302612/FB_IMG_1646723148815.jpg')
      .setColor('Random')

    const pages = [embed1, embed2, embed3, embed4, embed5, embed6]

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

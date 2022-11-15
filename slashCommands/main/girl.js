const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "girl",
  description: "girl?",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/YR1BIgA.png')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/7F03gGR.png')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/zr4iAET.png')
      .setColor('Random')

    const embed4 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/kbCi0te.png')
      .setColor('Random')

    const embed5 = new EmbedBuilder()
      .setTitle('hair')
      .setImage('https://imgur.com/OCDwhji.png')
      .setColor('Random')

    const embed6 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/bQQlamQ.png')
      .setColor('Random')

    const embed7 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/KOL9ofH.png')
      .setColor('Random')

    const embed8 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/S6HTsfF.png')
      .setColor('Random')

    const embed9 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/zkXYRFb.png')
      .setColor('Random')

    const pages = [
      embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9
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

const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "shadow",
  description: "is cool man, try it",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Ambient Shadow')
      .setImage('https://imgur.com/l9vbgQj.png')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Lightning Shadow')
      .setImage('https://imgur.com/EeGiFaH.png')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Lightning')
      .setImage('https://imgur.com/xfSCJGi.png')
      .setColor('Random')

    const embed4 = new EmbedBuilder()
      .setTitle('Lightning')
      .setImage('https://imgur.com/kd6sd0O.png')
      .setColor('Random')

    const embed5 = new EmbedBuilder()
      .setTitle('Shadow')
      .setImage('https://imgur.com/TGSKTwZ.png')
      .setColor('Random')

    const embed6 = new EmbedBuilder()
      .setTitle('Shadow')
      .setImage('https://imgur.com/VOBSE3A.png')
      .setColor('Random')

    const pages = [
        embed1, embed2, embed3, embed4, embed5, embed6
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
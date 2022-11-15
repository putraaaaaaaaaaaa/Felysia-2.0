const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "perspective",
  description: "this is cool fr fr",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Crowd')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865835268915251/FB_IMG_16467736371877599.jpg')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Store')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865835046633522/FB_IMG_16467736398572348.jpg')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Building position')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865834321010719/FB_IMG_16467736427097623.jpg')
      .setColor('Random')

    const pages = [
        embed1, embed2, embed3
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

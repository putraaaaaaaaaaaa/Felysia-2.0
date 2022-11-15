const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "mouth",
  description: "lips",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Teeth')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148038795804682/FB_IMG_16470797255002989.jpg')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('More')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148039005511680/FB_IMG_16470797187159577.jpg')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Lips')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148040163139594/FB_IMG_16470796905135902.jpg')
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

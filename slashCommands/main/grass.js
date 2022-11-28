const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "grass",
  description: "not enough? go outside, touch the grass",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('bush')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865018369499196/FB_IMG_16467736843396350.jpg')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Tree')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865018658893854/FB_IMG_16467736866481284.jpg')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Materials')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865018881187870/FB_IMG_16467736918112941.jpg')
      .setColor('Random')
      
      const embed4 = new EmbedBuilder()
      .setTitle('Tree')
      .setImage('https://i.imgur.com/kr6NFdR.jpg')
      .setColor('Random')
      
      const embed5 = new EmbedBuilder()
      .setTitle('Grass')
      .setImage('https://i.imgur.com/NMQFzgh.jpg')
      .setColor('Random')
      
      const embed6 = new EmbedBuilder()
      .setTitle('Shadow Tree')
      .setImage('https://i.imgur.com/7wyWxNC.jpg')
      .setColor('Random')
      
      const embed7 = new EmbedBuilder()
      .setTitle('colour pallet')
      .setImage('https://i.imgur.com/2KEEtlf.jpg')
      .setColor('Random')
      
      const embed8 = new EmbedBuilder()
      .setTitle('dirt environment')
      .setImage('https://i.imgur.com/Zvc6TUv.jpg')
      .setColor('Random')

    const pages = [
        embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8
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

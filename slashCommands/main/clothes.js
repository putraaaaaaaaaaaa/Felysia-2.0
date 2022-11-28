const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "clothes",
  description: "don't naked",
  
  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Maid Costume')
      .setImage('https://imgur.com/WTDlke7.png')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Maid Costume')
      .setImage('https://imgur.com/CKqq1PC.png')
      .setColor('Random')

      const embed4 = new EmbedBuilder()
      .setTitle('Cloak')
      .setImage('https://imgur.com/cByzDmb.png')
      .setColor('Random')

      const embed5 = new EmbedBuilder()
      .setTitle('Gown')
      .setImage('https://imgur.com/ZP7nilv.png')
      .setColor('Random')

      const embed6 = new EmbedBuilder()
      .setTitle('Skirt')
      .setImage('https://imgur.com/elo4sek.png')
      .setColor('Random')
      
      const embed7 = new EmbedBuilder()
      .setTitle('Skirt school')
      .setImage('https://imgur.com/FAId9PC.png')
      .setColor('Random')
     
      const embed8 = new EmbedBuilder()
      .setTitle('Skirts')
      .setImage('https://imgur.com/reZHcO3.png')
      .setColor('Random')
      
      const embed9 = new EmbedBuilder()
      .setTitle('Uniform')
      .setColor('Random')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650366985404427/FB_IMG_1646723078644.jpg')
      
      const embed10 = new EmbedBuilder()
      .setTitle('Uniform')
      .setColor('Random')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650367325110312/FB_IMG_1646723076280.jpg')

      const embed11 = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Uniform')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650368042356766/FB_IMG_1646723070511.jpg')
      
      const embed12 = new EmbedBuilder()
      .setTitle('Skirt?')
      .setImage('https://i.imgur.com/PgKpLgA.jpg')
      .setColor('Random')
      
      const embed13 = new EmbedBuilder()
      .setTitle('cool')
      .setImage('https://i.imgur.com/EbWPg4Z.jpg')
      .setColor('Random')
      
      const embed14 = new EmbedBuilder()
      .setTitle('Realistic')
      .setImage('https://i.imgur.com/UbnFOy3.jpg')
      .setColor('Random')
      
      const embed15 = new EmbedBuilder()
      .setTitle('Maid')
      .setImage('https://i.imgur.com/7tzZSdR.jpg')
      .setColor('Random') 

    const pages = [embed1, embed2, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15]


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

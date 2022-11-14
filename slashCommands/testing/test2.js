const Pagination = require('customizable-discordjs-pagination');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "test2",
  description: "yet",

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
        
        const buttons = [
   { label: 'Previous', emoji: '<:kiri:886854576303665202>', style: ButtonStyle.Secondary },
   { label: 'Next', emoji: '<:kanan:886854524562722857>', style: ButtonStyle.Secondary },
]
        
        new Pagination()
   .setCommand(interaction)
   .setPages(pages)
   .setButtons(buttons)
   .setPaginationCollector({ timeout: 120000 })
   .setSelectMenu({ enable: true })
   .setFooter({ enable: true })
   .send();
  }
}

const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "clothes",
  description: "don't naked",
  
  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Maid Costume')
      .setImage('https://imgur.com/WTDlke7.png')

    const embed2 = new EmbedBuilder()
      .setTitle('Maid Costume')
      .setImage('https://imgur.com/CKqq1PC.png')

      const embed4 = new EmbedBuilder()
      .setTitle('Cloak')
      .setImage('https://imgur.com/cByzDmb.png')

      const embed5 = new EmbedBuilder()
      .setTitle('Gown')
      .setImage('https://imgur.com/ZP7nilv.png')

      const embed6 = new EmbedBuilder()
      .setTitle('Skirt')
      .setImage('https://imgur.com/elo4sek.png')
      
      
      const embed7 = new EmbedBuilder()
      .setTitle('Skirt school')
      .setImage('https://imgur.com/FAId9PC.png')
      
      
      
      const embed8 = new EmbedBuilder()
      .setTitle('Skirts')
      .setImage('https://imgur.com/reZHcO3.png')
      
      
      
      const embed9 = new EmbedBuilder()

      .setTitle('Uniform')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650366985404427/FB_IMG_1646723078644.jpg')

      

      
      
      const embed10 = new EmbedBuilder()

      .setTitle('Uniform')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650367325110312/FB_IMG_1646723076280.jpg')

      

      
      
      const embed11 = new EmbedBuilder()

      .setTitle('Uniform')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650368042356766/FB_IMG_1646723070511.jpg')

      

      




    const pages = [embed1, embed2, embed4, embed5, embed6, embed7, embed8, embed9, embed10]


    buttonPages(interaction, pages)
      
  }
}

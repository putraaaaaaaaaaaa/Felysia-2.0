const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "nose",
  description: "dont just draw a line",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Anatomy for Nose #1')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148226092449852/FB_IMG_16470794457461393.jpg')



    const embed2 = new EmbedBuilder()
      .setTitle('Anatomy for Nose #2')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148225643647015/FB_IMG_16470794541301190.jpg')



    const embed3 = new EmbedBuilder()
      .setTitle('Another anatomy for nose')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147970353135626/FB_IMG_16470798017081004.jpg')



    const embed4 = new EmbedBuilder()
      .setTitle('Man nose')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147969673666650/FB_IMG_16470798195364600.jpg')



    const embed5 = new EmbedBuilder()
      .setTitle('Different nose pov')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147969354891324/FB_IMG_16470798221370130.jpg')



    const embed6 = new EmbedBuilder()
      .setTitle('Nose alt type')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147969673666650/FB_IMG_16470798195364600.jpg')



    const embed7 = new EmbedBuilder()
      .setTitle('Nose in different pov')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147970101481482/FB_IMG_16470798103990077.jpg')



    const embed8 = new EmbedBuilder()
      .setTitle('Consept of nose')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147970353135626/FB_IMG_16470798017081004.jpg')





    const pages = [
        embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8
        ]


    buttonPages(interaction, pages)

  }
}
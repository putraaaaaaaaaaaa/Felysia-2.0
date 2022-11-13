const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "girl",
  description: "girl?",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/YR1BIgA.png')



    const embed2 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/7F03gGR.png')


    const embed3 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/zr4iAET.png')



    const embed4 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/kbCi0te.png')



    const embed5 = new EmbedBuilder()
      .setTitle('hair')
      .setImage('https://imgur.com/OCDwhji.png')



    const embed6 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/bQQlamQ.png')



    const embed7 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/KOL9ofH.png')



    const embed8 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/S6HTsfF.png')



    const embed9 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/zkXYRFb.png')



    const pages = [
      embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9
        ]

    buttonPages(interaction, pages)

  }
}
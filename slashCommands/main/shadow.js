const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "shadow",
  description: "is cool man, try it",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Ambient Shadow')
      .setImage('https://imgur.com/l9vbgQj.png')



    const embed2 = new EmbedBuilder()
      .setTitle('Lightning Shadow')
      .setImage('https://imgur.com/EeGiFaH.png')



    const embed3 = new EmbedBuilder()
      .setTitle('Lightning')
      .setImage('https://imgur.com/xfSCJGi.png')



    const embed4 = new EmbedBuilder()
      .setTitle('Lightning')
      .setImage('https://imgur.com/kd6sd0O.png')



    const embed5 = new EmbedBuilder()
      .setTitle('Shadow')
      .setImage('https://imgur.com/TGSKTwZ.png')



    const embed6 = new EmbedBuilder()
      .setTitle('Shadow')
      .setImage('https://imgur.com/VOBSE3A.png')



    const pages = [
        embed1, embed2, embed3, embed4, embed5, embed6
        ]

    buttonPages(interaction, pages)

  }
}
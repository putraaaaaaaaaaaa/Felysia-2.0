const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "lineart",
  description: "dont forget make new layer",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/UC8vhNw.png')



    const embed2 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/htxWQvB.png')



    const embed3 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/UzWY8Ve.png')



    const embed4 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/BlhBIIb.png')



    const embed5 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/DhRs5bD.png')



    const embed6 = new EmbedBuilder()

      .setTitle('Curve In gown')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650643784302612/FB_IMG_1646723148815.jpg')






    const pages = [embed1, embed2, embed3, embed4, embed5, embed6]

    buttonPages(interaction, pages)

  }
}

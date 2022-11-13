const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "perspective",
  description: "this is cool fr fr",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Crowd')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865835268915251/FB_IMG_16467736371877599.jpg')



    const embed2 = new EmbedBuilder()
      .setTitle('Store')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865835046633522/FB_IMG_16467736398572348.jpg')



    const embed3 = new EmbedBuilder()
      .setTitle('Building position')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865834321010719/FB_IMG_16467736427097623.jpg')



    const pages = [
        embed1, embed2, embed3
        ]

    buttonPages(interaction, pages)

  }
}

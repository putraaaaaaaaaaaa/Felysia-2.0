const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "grass",
  description: "not enough? go outside, touch the grass",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('bush')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865018369499196/FB_IMG_16467736843396350.jpg')



    const embed2 = new EmbedBuilder()
      .setTitle('Tree')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865018658893854/FB_IMG_16467736866481284.jpg')



    const embed3 = new EmbedBuilder()
      .setTitle('Materials')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950865018881187870/FB_IMG_16467736918112941.jpg')



    const pages = [
        embed1, embed2, embed3
        ]


    buttonPages(interaction, pages)

  }
}
const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "mouth",
  description: "lips",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Teeth')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148038795804682/FB_IMG_16470797255002989.jpg')



    const embed2 = new EmbedBuilder()
      .setTitle('More')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148039005511680/FB_IMG_16470797187159577.jpg')



    const embed3 = new EmbedBuilder()
      .setTitle('Lips')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148040163139594/FB_IMG_16470796905135902.jpg')



    const pages = [
        embed1, embed2, embed3
        ]


    buttonPages(interaction, pages)

  }
}
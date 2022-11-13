const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "mood",
  description: "make u image more emotional",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()

      .setTitle('Building Mood')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094815243173988/FB_IMG_1646590211987.jpg')

    const embed2 = new EmbedBuilder()

      .setTitle('Switchup Mood')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094815549333665/FB_IMG_1646590214356.jpg')

    const embed3 = new EmbedBuilder()

      .setTitle('changeit up')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094815821975613/FB_IMG_1646590216530.jpg')

    const embed4 = new EmbedBuilder()

      .setTitle('Moment is Important')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094816245596190/FB_IMG_1646590219037.jpg')

    const embed5 = new EmbedBuilder()

      .setTitle('Temperature')

      .setImage('https://media.discordapp.net/attachments/950094766048178197/950094816505655326/FB_IMG_1646590221653.jpg')

    const pages = [embed1, embed2, embed3, embed4, embed5]

    buttonPages(interaction, pages)

  }
}

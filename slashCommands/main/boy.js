const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "boy",
  description: "Boy reference",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/9EDYw8D.png')

    const pages = [
        embed1
        ]


    buttonPages(interaction, pages)

  }
}

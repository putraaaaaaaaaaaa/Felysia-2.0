const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events
} = require("discord.js");

module.exports = {
  name: "help",
  description: "Learn Felysia",

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
    
      .setAuthor({
        name: `${client.user.username} Help Menu`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true })
      })
      
      
     
      .addFields(
        {
          name: `About Me`,
          value: `${client.user.username} is a program to make it easier for Digital Artists to find references. I'm gona generate reference you want, the embed will stay for 3, minutes`,
        },
        {
          name: "Reference List",
          value:
            "Anatomy\nBoy\nClothes\nColouring\nEyes\nGirl\nGrass\nLineart\nMood\nMouth\nNose\nPose\nPov\nRock\nShadow\n",
        }
      )
      
      
      
      .setFooter({
    text: `How to use? just type /`,
    iconURL: interaction.user.displayAvatarURL(),
  })
      .setColor("FE00FF");

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setURL(`https://www.paypal.com/paypalme/sptra22`)
        .setStyle(ButtonStyle.Link)
        .setLabel("Support Me"),
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};

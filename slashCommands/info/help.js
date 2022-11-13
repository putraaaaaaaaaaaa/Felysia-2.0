const {EmbedBuilder,
  MessageButton,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");

module.exports = {
  name: "help",
  description: "Learn Felysia",

  run: async (client, interaction) => {
    const embed = new MessageEmbed()
    
      .setAuthor({
        text: `${client.user.username} Help Menu`,
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
      .setDescription("Note: Please do slowly when you switch between image to avoid rate limited API request")
      
      
      .setFooter({
    text: `How to use? just type /`,
    iconURL: interaction.user.displayAvatarURL(),
  })
      .setColor("FE00FF");

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL(`https://www.paypal.com/paypalme/sptra22`)
        .setStyle("LINK")
        .setLabel("Support Me"),

      new MessageButton()
        .setStyle("LINK")
        .setLabel("Submit Reference")
        .setURL(`https://forms.gle/m7xSvrwgVWXzZ75J9`)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};

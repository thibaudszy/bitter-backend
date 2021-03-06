"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("boilHopAdditions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "recipes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      hopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hops",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      variety: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alphaAcidContent: {
        type: Sequelize.FLOAT,
      },
      percentageAlphaAcidsFromAddition: {
        type: Sequelize.FLOAT,
      },
      timeOfAdditionInMinBeforeEndOfBoil: Sequelize.INTEGER,
      defaultQuantityInGramsPerLiter: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("boilHopAdditions");
  },
};

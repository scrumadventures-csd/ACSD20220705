const {Given,When,Then} = require('@cucumber/cucumber')
const assert = require('assert')
const {Game, Frame, Roll} = require("../../game/game");

var game = new Game();

Given('I have started a game', function () {
    // Write code here that turns the phrase above into concrete actions
    game = new Game();
  });

When('I knock down {int} pins', function (pins) {
    // When('I knock down {float} pins', function (float) {
        // Write code here that turns the phrase above into concrete actions
        game.addRoll(pins);
    });

Then('I receive a score of {int}', function (expected) {
    // Then('I receive a score of {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
      assert.equal(game.getScore(),expected)
    });
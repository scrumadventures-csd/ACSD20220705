const {Game, Frame, Roll} = require("../game/game");

test("gameScoreForOne", async () => {

    let game = new Game();
    game.addRoll(1);
    expect(game.getScore()).toBe(1);
});

test("gameScoreForThree", async () => {

    let game = new Game();
    game.addRoll(1);
    game.addRoll(10);
    game.addRoll(3);
    expect(game.getScore()).toBe(14);
});
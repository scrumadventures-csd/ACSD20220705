const {Game, Frame, Roll} = require("../game/game");

test("frameScoreForOne", async () => {

    let frame = new Frame();
    frame.addRoll(1);
    expect(frame.getScore() == 1).toBe(true);
});

test("frameScoreForTwoRoll_Scenario1", async () => {

    let frame = new Frame();
    frame.addRoll(2);
    frame.addRoll(4);
    expect(frame.getScore() == 6).toBe(true);
});

test("frameScoreForThree", async () => {

    let frame = new Frame();
    frame.addRoll(1);
    frame.addRoll(10);
    frame.addRoll(8);
    expect(frame.getScore() == 19).toBe(true);
});
test("frameScoreForFour", async () => {

    let game = new Game();
    game.addRoll(2);
    game.addRoll(4);
    expect(game.getCurrentFrame().getScore() == 6).toBe(true);

    game.addRoll(4);
    game.addRoll(4);
    expect(game.getCurrentFrame().getScore() == 14).toBe(true);

    expect(game.getScore() == 14).toBe(true);


});

test("frameScoreForTwoRoll_Scenario2", async () => {

    let frame = new Frame();
    frame.addRoll(6);
    frame.addRoll(4);
    expect(frame.getScore() == 10).toBe(true);
});

const {Game, Frame, Roll} = require("../game/game");

test("frameScoreForOne", async () => {

    let frame = new Frame();
    frame.addRoll(1);
    expect(frame.getScore() == 1).toBe(true);
});

test("frameScoreForThree", async () => {

    let frame = new Frame();
    frame.addRoll(1);
    frame.addRoll(10);
    frame.addRoll(8);
    expect(frame.getScore() == 19).toBe(true);
});
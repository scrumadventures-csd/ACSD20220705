const express = require("express");
const router = express.Router();
const { registerGame } = require("../../../functions/register");
const { getRoll } = require("../../../functions/roll");
const { getGameScore, getFrameScore } = require("../../../functions/score");
const mCache = require('memory-cache');
const {Game, Frame, Roll} = require("../../../game/game");


var game =null;

//@route    GET api/mbc/register
//@desc     REGISTER a new game
//@access   Public

router.get("/register", async (req,res) => {
    try {
        //Register With Server
        let id = await registerGame(req.query.frames,req.query.pins,req.query.rolls,req.query.test);
        
        //Create New Game Object
        game = new Game(id);

        //Cache New Game Object
        mCache.put(id, JSON.stringify(game));

        res.json({ id });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server: Registration Error");
    }
});

//@route    GET api/mbc/roll
//@desc     GET pins for one ball
//@access   public

router.get("/roll", async (req, res) => {
    try {
      let counter = 0;
      let myPins = await getRoll(req.query.id);
  
        if(myPins == "X")
        {
            game.addRoll(10);
        }
        else if(myPins == "/")
        {
            game.addRoll(10);
        }
        else if(myPins == "-")
        {
            game.addRoll(0);
        }
        else
        {
            game.addRoll(parseInt(myPins));
        }


     let pins = game.getScore();

      res.json({ pins });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
});

//@route    GET api/mbc/score
//@desc     Get score for a game
//@access   Public

router.get("/score/game", async (req,res) => {
  try {
      let id = await getGameScore(req.query.id);
      res.json({ id });
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server: Unable To Get Game Score");
  }
});


//@route    GET api/mbc/score
//@desc     Get score for a frame
//@access   Public

router.get("/score/frame", async (req,res) => {
  try {
      let id = await getFrameScore(req.query.id, req.query.frame);
      res.json({ id });
  } catch (err) {
      console.error(err.message);
      res.status(500).send("Server: Unable To Get Frame Score");
  }
});


  
module.exports = router;

const axios = require("axios");

const registerGame = async (frames=10,pins=10,rolls=2,test="") => {
  //call pinsetter
  let myUrl=`http://pinsetter.herokuapp.com/pinsetter/?action=register&frames=${frames}&pins=${pins}&rolls=${rolls}&test=${test}`;
  console.log("url = " + myUrl)
  const res = await axios.get(myUrl);
  return res.data;
};

module.exports = {
  registerGame,
};
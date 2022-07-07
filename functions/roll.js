const axios = require("axios");

const getRoll = async (id) => {
  //call pinsetter action roll
  let   myUrl  =`http://pinsetter.herokuapp.com/pinsetter/?action=roll&id=${id}`;
  console.log   ("[REQUEST ] " + myUrl)
  const res    = await axios.get (myUrl);
  let   pins   = String(res.data);
  console.log   ("[RESPONSE] " + pins)
  return pins;
};

module.exports = {
  getRoll,
};

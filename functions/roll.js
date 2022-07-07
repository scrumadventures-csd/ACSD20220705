const axios = require("axios");

const getRoll = async (id) => {
  //call pinsetter action roll
  const res = await axios.get(
    `http://pinsetter.herokuapp.com/pinsetter/?action=roll&id=${id}`
  );
  let pins = String(res.data);
  return pins;
};

module.exports = {
  getRoll,
};

const axios = require("axios");
const devSchema = require("../models/dev");
const toArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket");
const { response } = require("express");

const store = async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;

  const dev = await devSchema.findOne({ github_username });
  if (dev) {
    return res.status(400).res({ error: "User already exists" });
  }

  const responseApi = await axios.get(
    `https://api.github.com/users/${github_username}`
  );
  const { name = login, avatar_url, bio } = responseApi.data;

  const techsArray = toArray(techs, ",");

  const location = {
    type: "Point",
    coordinates: [longitude, latitude],
  };
  const newDev = await devSchema.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
    location,
  });

  //Filtrar as conexoes que atendem às condicoes de distancia e tecnologias compativeis
  const sendSocketMessageTo = findConnections(
    { latitude, longitude },
    techsArray
  );
  sendMessage(sendSocketMessageTo, "new-dev", newDev);

  return res.status(200).json(newDev);
};

const index = async (req, res) => {
  try {
    const devs = await devSchema.find();
    return res.status(200).json(devs);
  } catch {
    return res.status(500).json({ error: "Impossible get users" });
  }
};
module.exports = { store, index };

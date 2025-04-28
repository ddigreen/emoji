const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/emojis", async (req, res) => {
  try {
    const response = await axios.get("https://cheatsnake.github.io/emojihub/api/all.json");
    const emojis = response.data.map(emoji => ({
      id: emoji.id,
      name: emoji.name,
      category: emoji.category,
      description: emoji.description,
      image: emoji.image,
    }));
    res.json(emojis);
  } catch (error) {
    res.status(500).send("Error fetching emojis");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

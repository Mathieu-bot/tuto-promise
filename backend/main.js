import express from "express";
import fs from "fs";
const app = express();

app.use(express.json());

// GET /characters ==> Get all characters
app.get("/characters", (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read characters" });
    }

    try {
      const characters = JSON.parse(data).characters;
      return res.status(200).json(characters);
    } catch (error) {
      return res.status(500).json({ error: "Failed to parse characters" });
    }
  });
});

// GET /characters/:id ==> Get a character by ID
app.get("/characters/:id", (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read characters" });
    }

    try {
      const characters = JSON.parse(data).characters;
      const id = parseInt(req.params.id);
      const character = characters.find((c) => c.id === id);
      if (!character) {
        return res.status(404).json({ error: "Character not found" });
      }
      return res.status(200).json(character);
    } catch (error) {
      return res.status(500).json({ error: "Failed to parse characters" });
    }
  });
});

// POST /characters ==> Create a new character
app.post("/characters", (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read characters" });
    }

    try {
      const characters = JSON.parse(data).characters;
      const newId = characters.length + 1;
      const newCharacter = {
        id: newId,
        name: req.body.name,
        realName: req.body.realName,
        universe: req.body.universe,
      };
      characters.push(newCharacter);
      fs.writeFile("user.json", JSON.stringify({ characters }), (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to write characters" });
        }
        return res.status(201).json(newCharacter);
      });
    } catch (error) {
      return res.status(500).json({ error: "Failed to parse characters" });
    }
  });
});

// PUT /characters/:id ==> Update a character by ID
app.put("/characters/:id", (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read characters" });
    }

    try {
      const characters = JSON.parse(data).characters;
      const id = parseInt(req.params.id);
      const character = characters.find((c) => c.id == id);
      if (!character) {
        return res.status(404).json({ error: "Character not found" });
      }
      character.name = req.body.name;
      character.realName = req.body.realName;
      character.universe = req.body.universe;
      fs.writeFile("user.json", JSON.stringify({ characters }), (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to write characters" });
        }
        return res.status(200).json(character);
      });
    } catch (error) {
      return res.status(500).json({ error: "Failed to parse characters" });
    }
  });
});

// DELETE /characters/:id ==> Delete a character by ID
app.delete("/characteres/:id", (req, res) => {
    fs.readFile("user.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({error: "Failed to read characters"})
        }
    })
    try {
        const characters = JSON.parse(data).characters
        const id = parseInt(req.params.id)
        const character = characters.find(c => c.id == id)
        if (!character) {
            return res.status(404).json({ error: "Character not found" })
        }
        characters.splice(characters.indexOf(character), 1)
        fs.writeFile("user.json", JSON.stringify({ characters }), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to write characters" })
            }
            return res.status(200).json(character)
        })
    } catch (error) {
        return res.status(500).json({ error: "Failed to parse characters" })
    }
})

app.listen(8080, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server running on port 8080")
})
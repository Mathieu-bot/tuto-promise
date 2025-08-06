import { readCharacters, writeCharacters } from "../services/fileService.js";

export const getAllCharacters = async (req, res) => {
  try {
    const data = await readCharacters();
    res.status(200).json(data.characters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getCharacterById = async (req, res) => {
  try {
    const data = await readCharacters();
    const id = parseInt(req.params.id);
    const character = data.characters.find((c) => c.id === id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const createCharacter = async (req, res) => {
  try {
    const data = await readCharacters();
    const characters = data.characters;
    const newId = characters.length > 0 ? characters[characters.length - 1].id + 1 : 1;
    const newCharacter = {
      id: newId,
      name: req.body.name,
      realName: req.body.realName,
      universe: req.body.universe,
      imageUrl: req.body.imageUrl,
    };
    characters.push(newCharacter);
    await writeCharacters({ characters });
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updateCharacter = async (req, res) => {
  try {
    const data = await readCharacters();
    const characters = data.characters;
    const id = parseInt(req.params.id);
    const character = characters.find((c) => c.id === id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    character.name = req.body.name;
    character.realName = req.body.realName;
    character.universe = req.body.universe;
    character.imageUrl = req.body.imageUrl;
    await writeCharacters({ characters });
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteCharacter = async (req, res) => {
  try {
    const data = await readCharacters();
    const characters = data.characters;
    const id = parseInt(req.params.id);
    const characterIndex = characters.findIndex((c) => c.id === id);
    if (characterIndex === -1) {
      return res.status(404).json({ error: 'Character not found' });
    }
    const [deleted] = characters.splice(characterIndex, 1);
    await writeCharacters({ characters });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

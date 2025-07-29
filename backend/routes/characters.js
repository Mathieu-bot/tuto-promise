import express from 'express';
const router = express.Router();

import * as charactersController from '../controllers/characters.js';

router.get('/', charactersController.getAllCharacters);
router.get('/:id', charactersController.getCharacterById);
router.post('/', charactersController.createCharacter);
router.put('/:id', charactersController.updateCharacter);
router.delete('/:id', charactersController.deleteCharacter);

export default router;

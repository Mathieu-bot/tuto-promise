import { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button 
} from '@mui/material';
import { withToast, toastMessages } from '../utils/toastUtils';
import type { Character, CreateCharacterRequest } from '../types/Character';
import { characterService } from '../services/characterService';

interface CharacterActionsProps {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

const CharacterActions = ({ 
  characters, 
  setCharacters 
}: CharacterActionsProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState<number | null>(null);

  const handleCreateCharacter = async (characterData: CreateCharacterRequest) => {
    try {
      const newCharacter = await withToast(
        () => characterService.createCharacter(characterData),
        toastMessages.character.create
      );
      setCharacters([...characters, newCharacter]);
    } catch (err) {
      console.error('Error creating character:', err);
    }
  };

  const handleUpdateCharacter = async (
    characterData: CreateCharacterRequest, 
    editingCharacter: Character
  ) => {
    try {
      const updatedCharacter = await withToast(
        () => characterService.updateCharacter({ ...characterData, id: editingCharacter.id }),
        toastMessages.character.update
      );
      setCharacters(characters.map(char => 
        char.id === updatedCharacter.id ? updatedCharacter : char
      ));
    } catch (err) {
      console.error('Error updating character:', err);
    }
  };

  const handleDeleteCharacter = async () => {
    if (characterToDelete === null) return;
    
    try {
      await withToast(
        () => characterService.deleteCharacter(characterToDelete),
        toastMessages.character.delete
      );
      setCharacters(characters.filter(char => char.id !== characterToDelete));
      setDeleteDialogOpen(false);
      setCharacterToDelete(null);
    } catch (err) {
      console.error('Error deleting character:', err);
    }
  };

  const openDeleteDialog = (id: number) => {
    setCharacterToDelete(id);
    setDeleteDialogOpen(true);
  };

  return {
    handleCreateCharacter,
    handleUpdateCharacter,
    openDeleteDialog,
    deleteDialog: (
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to permanently delete this character? 
          <strong> This action cannot be undone.</strong>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteCharacter} color="error" variant="contained">
            Delete Permanently
          </Button>
        </DialogActions>
      </Dialog>
    )
  };
};

export default CharacterActions;

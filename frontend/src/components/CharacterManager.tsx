import { useState, useMemo } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import CharacterGrid from './CharacterGrid';
import CharacterFormDialog from './CharacterFormDialog';
import CharacterActions from './CharacterActions';
import CompactLayout from './CompactLayout';
import type { ViewMode } from './ViewToggle';
import type { Character } from '../types/Character';
import { useCharacters } from '../hooks/useCharacters';

const CharacterManager = () => {
  const { characters, setCharacters, loading, error: apiError, setError: setApiError } = useCharacters();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);

  const actions = CharacterActions({ characters, setCharacters });

  // Dialog management functions
  const openCreateDialog = () => {
    setEditingCharacter(null);
    setDialogOpen(true);
  };

  const openEditDialog = (character: Character) => {
    setEditingCharacter(character);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingCharacter(null);
  };

  const handleDialogSubmit = (data: any) => {
    if (editingCharacter) {
      actions.handleUpdateCharacter(data, editingCharacter);
    } else {
      actions.handleCreateCharacter(data);
    }
    closeDialog();
  };

  const filteredCharacters = useMemo(() => {
    if (!searchQuery.trim()) {
      return characters;
    }
    
    const query = searchQuery.toLowerCase();
    return characters.filter(character => 
      character.name.toLowerCase().includes(query) ||
      character.realName.toLowerCase().includes(query) ||
      character.universe.toLowerCase().includes(query)
    );
  }, [characters, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <CompactLayout
      onSearch={handleSearch}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
      onCreateNew={openCreateDialog}
    >
      {(error || apiError) && (
        <Alert severity="error" className="mb-6" onClose={() => {
          setError(null);
          setApiError(null);
        }}>
          {error || apiError}
        </Alert>
      )}

      <CharacterGrid
        characters={filteredCharacters}
        viewMode={viewMode}
        onEdit={openEditDialog}
        onDelete={actions.openDeleteDialog}
        onCreateNew={openCreateDialog}
      />

      <CharacterFormDialog
        open={dialogOpen}
        character={editingCharacter}
        onClose={closeDialog}
        onSubmit={handleDialogSubmit}
      />
      {actions.deleteDialog}
    </CompactLayout>
  );
};

export default CharacterManager;

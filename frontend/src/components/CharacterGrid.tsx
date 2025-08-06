import { Box, List } from '@mui/material';
import CharacterCard from './CharacterCard';
import CharacterListItem from './CharacterListItem';
import EmptyState from './EmptyState';
import type { Character } from '../types/Character';
import type { ViewMode } from './ViewToggle';

interface CharacterGridProps {
  characters: Character[];
  viewMode: ViewMode;
  onEdit: (character: Character) => void;
  onDelete: (id: number) => void;
  onCreateNew?: () => void;
}

const CharacterGrid = ({ 
  characters, 
  viewMode, 
  onEdit, 
  onDelete,
  onCreateNew 
}: CharacterGridProps) => {
  
  // Show empty state when no characters
  if (characters.length === 0) {
    return (
      <EmptyState
        title="No Characters Yet"
        description="Create your first character to start building your collection. Add heroes, villains, or any character from your favorite universes!"
        onAction={onCreateNew}
        actionLabel="Create First Character"
      />
    );
  }
  if (viewMode === 'grid') {
    return (
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Box>
    );
  }
  
  return (
    <List className="space-y-2">
      {characters.map((character) => (
        <CharacterListItem
          key={character.id}
          character={character}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default CharacterGrid;

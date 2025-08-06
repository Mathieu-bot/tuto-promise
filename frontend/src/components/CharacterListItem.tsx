import { 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Box,
  Chip 
} from '@mui/material';
import CharacterAvatar from './CharacterAvatar';
import ActionButtons from './ActionButtons';
import type { Character } from '../types/Character';

interface CharacterListItemProps {
  character: Character;
  onEdit: (character: Character) => void;
  onDelete: (id: number) => void;
}

const CharacterListItem = ({ 
  character, 
  onEdit, 
  onDelete 
}: CharacterListItemProps) => {

  return (
    <ListItem 
      className="character-list-item mb-2 bg-white rounded-lg shadow-sm fade-in hover:shadow-md transition-shadow"
      secondaryAction={
        <ActionButtons
          character={character}
          onEdit={onEdit}
          onDelete={onDelete}
          size="small"
        />
      }
    >
      <ListItemAvatar>
        <CharacterAvatar
          name={character.name}
          imageUrl={character.imageUrl}
          size={48}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box className="flex items-center gap-2">
            <span className="font-medium">{character.name}</span>
            <Chip 
              label={character.universe} 
              size="small" 
              variant="outlined"
              className="text-xs"
            />
          </Box>
        }
        secondary={character.realName}
      />
    </ListItem>
  );
};

export default CharacterListItem;

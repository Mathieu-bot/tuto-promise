import { IconButton, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import type { Character } from '../types/Character';

interface ActionButtonsProps {
  character: Character;
  onEdit: (character: Character) => void;
  onDelete: (id: number) => void;
  size?: 'small' | 'medium';
  layout?: 'horizontal' | 'vertical';
}

const ActionButtons = ({ 
  character, 
  onEdit, 
  onDelete, 
  size = 'small',
  layout = 'horizontal' 
}: ActionButtonsProps) => {
  const handleEdit = () => onEdit(character);
  const handleDelete = () => onDelete(character.id);

  return (
    <Box className={`flex ${layout === 'vertical' ? 'flex-col' : 'flex-row'} gap-1`}>
      <IconButton 
        size={size}
        color="primary" 
        onClick={handleEdit}
        aria-label="edit character"
        className="hover:bg-blue-50"
      >
        <Edit />
      </IconButton>
      <IconButton 
        size={size}
        color="error" 
        onClick={handleDelete}
        aria-label="delete character"
        className="hover:bg-red-50"
      >
        <Delete />
      </IconButton>
    </Box>
  );
};

export default ActionButtons;

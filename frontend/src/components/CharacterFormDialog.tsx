import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import ImagePreview from './ImagePreview';
import { useCharacterForm } from '../hooks/useCharacterForm';
import type { Character, CreateCharacterRequest } from '../types/Character';

interface CharacterFormDialogProps {
  open: boolean;
  character?: Character | null;
  onClose: () => void;
  onSubmit: (character: CreateCharacterRequest) => void;
}

const CharacterFormDialog = ({
  open,
  character,
  onClose,
  onSubmit,
}: CharacterFormDialogProps) => {
  const { formData, errors, handleChange, validate } = useCharacterForm(character, open);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="flex justify-between items-center">
        {character ? 'Edit Character' : 'Create Character'}
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box className="flex flex-col gap-4">
            <ImagePreview 
              imageUrl={formData.imageUrl} 
              name={formData.name} 
            />
            <TextField
              label="Name"
              value={formData.name}
              onChange={handleChange('name')}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              required
              className="mb-2"
            />
            <TextField
              label="Real Name"
              value={formData.realName}
              onChange={handleChange('realName')}
              error={!!errors.realName}
              helperText={errors.realName}
              fullWidth
              required
              className="mb-2"
            />
            <TextField
              label="Universe"
              value={formData.universe}
              onChange={handleChange('universe')}
              error={!!errors.universe}
              helperText={errors.universe}
              fullWidth
              required
              className="mb-2"
            />
            <TextField
              label="Image URL (Optional)"
              value={formData.imageUrl}
              onChange={handleChange('imageUrl')}
              fullWidth
              placeholder="https://example.com/image.jpg (leave empty for initials)"
              helperText="Optional: Leave empty to show character initials"
            />
          </Box>
        </DialogContent>
        
        <DialogActions className="p-4">
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {character ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CharacterFormDialog;

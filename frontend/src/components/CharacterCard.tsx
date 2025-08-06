import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import CharacterAvatar from './CharacterAvatar';
import ActionButtons from './ActionButtons';
import { cardVariants } from '../utils/animations';
import type { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
  onEdit: (character: Character) => void;
  onDelete: (id: number) => void;
}

const CharacterCard = ({
  character,
  onEdit,
  onDelete,
}: CharacterCardProps) => {

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full flex flex-col shadow-md max-w-sm m-2 bg-white rounded-lg overflow-hidden"
    >
      <Card className="h-full border-0 shadow-none">
      <Box className="flex items-center p-4 pb-2">
        <CharacterAvatar
          name={character.name}
          imageUrl={character.imageUrl}
          size={64}
        />
        <Box className="ml-4 flex-1">
          <Typography variant="h6" component="h2" noWrap>
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {character.realName}
          </Typography>
        </Box>
      </Box>
      
      <CardContent className="pt-0">
        <Chip
          label={character.universe}
          variant="outlined"
          size="small"
          color="primary"
        />
      </CardContent>
      
      <CardActions className="justify-end">
        <ActionButtons
          character={character}
          onEdit={onEdit}
          onDelete={onDelete}
          size="small"
        />
      </CardActions>
      </Card>
    </motion.div>
  );
};

export default CharacterCard;

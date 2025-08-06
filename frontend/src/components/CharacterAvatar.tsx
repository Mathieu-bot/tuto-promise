import { Avatar } from '@mui/material';

interface CharacterAvatarProps {
  name: string;
  imageUrl?: string;
  size?: number;
}

const CharacterAvatar = ({ name, imageUrl, size = 56 }: CharacterAvatarProps) => {
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  };

  const hasImageUrl = imageUrl && imageUrl.trim() !== '';

  if (hasImageUrl) {
    return (
      <Avatar
        src={imageUrl}
        alt={name}
        className="font-semibold text-white bg-blue-600"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.4,
        }}
      >
        {getInitials(name)}
      </Avatar>
    );
  }

  return (
    <Avatar
      className="font-semibold text-white bg-blue-600"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
      }}
    >
      {getInitials(name)}
    </Avatar>
  );
};

export default CharacterAvatar;

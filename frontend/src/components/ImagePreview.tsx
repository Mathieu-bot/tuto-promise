import { useState } from 'react';
import { Box, Avatar } from '@mui/material';

interface ImagePreviewProps {
  imageUrl: string;
  name: string;
  size?: number;
}

const ImagePreview = ({ 
  imageUrl, 
  name, 
  size = 120 
}: ImagePreviewProps) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  if (imageError || !imageUrl) {
    return (
      <Box className="flex justify-center items-center mb-4">
        <Avatar
          className="font-semibold border-2 border-gray-200"
          style={{
            width: size,
            height: size,
            fontSize: size * 0.3,
          }}
        >
          {getInitials(name || 'NA')}
        </Avatar>
      </Box>
    );
  }

  return (
    <Box className="flex justify-center items-center mb-4">
      <Avatar
        src={imageUrl}
        alt={name}
        className="font-semibold border-2 border-gray-200"
        style={{
          width: size,
          height: size,
          fontSize: size * 0.3,
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
      >
        {getInitials(name || 'NA')}
      </Avatar>
    </Box>
  );
};

export default ImagePreview;

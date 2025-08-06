import { useState } from 'react';
import { 
  Box, 
  IconButton, 
  TextField, 
  InputAdornment,
  Tooltip,
  Slide
} from '@mui/material';
import { Search, Close } from '@mui/icons-material';

interface AnimatedSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const AnimatedSearchBar = ({ 
  onSearch, 
  placeholder = "Search characters..." 
}: AnimatedSearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = () => {
    if (isOpen && searchQuery) {
      // Clear search when closing with content
      setSearchQuery('');
      onSearch('');
    }
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
    setIsOpen(false);
  };

  return (
    <Box 
      sx={{ 
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1300,
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      {/* Animated Search Input */}
      <Slide 
        direction="left" 
        in={isOpen} 
        mountOnEnter 
        unmountOnExit
        timeout={300}
      >
        <Box>
          <TextField
            size="small"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleSearchChange}
            autoFocus
            sx={{
              width: 280,
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search className="text-gray-400" />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={handleClear}
                    sx={{ color: 'text.secondary' }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Slide>

      {/* Search Toggle Button */}
      <Tooltip title={isOpen ? "Close Search" : "Search Characters"}>
        <IconButton
          onClick={handleToggle}
          className="animated-button"
          sx={{
            backgroundColor: isOpen ? 'primary.main' : 'background.paper',
            color: isOpen ? 'white' : 'primary.main',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          {isOpen ? <Close /> : <Search />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AnimatedSearchBar;

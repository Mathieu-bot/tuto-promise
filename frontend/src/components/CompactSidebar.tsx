import { 
  Box, 
  IconButton, 
  Tooltip 
} from '@mui/material';
import { 
  GridView,
  ViewList,
  Add 
} from '@mui/icons-material';
import type { ViewMode } from './ViewToggle';

interface CompactSidebarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onCreateNew: () => void;
}

const SIDEBAR_WIDTH = 64;

const CompactSidebar = ({ 
  viewMode, 
  onViewModeChange, 
  onCreateNew 
}: CompactSidebarProps) => {
  
  const handleViewToggle = () => {
    onViewModeChange(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: '100vh',
        backgroundColor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1200,
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
      }}
    >


      {/* View Mode Toggle */}
      <Tooltip 
        title={viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'} 
        placement="right"
      >
        <IconButton 
          onClick={handleViewToggle}
          className="mb-2 animated-button"
          sx={{ 
            color: 'text.primary',
            '&:hover': { backgroundColor: 'action.hover' }
          }}
        >
          {viewMode === 'grid' ? <ViewList /> : <GridView />}
        </IconButton>
      </Tooltip>

      {/* Create Character */}
      <Tooltip title="Create New Character" placement="right">
        <IconButton 
          onClick={onCreateNew}
          className="mb-2 animated-button fab-pulse"
          sx={{ 
            color: 'success.main',
            backgroundColor: 'success.light',
            '&:hover': { backgroundColor: 'success.main', color: 'white' }
          }}
        >
          <Add />
        </IconButton>
      </Tooltip>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Footer indicator */}
      <Box
        sx={{
          width: 4,
          height: 20,
          backgroundColor: 'primary.main',
          borderRadius: 2,
          opacity: 0.3,
        }}
      />
    </Box>
  );
};

export { SIDEBAR_WIDTH };
export default CompactSidebar;

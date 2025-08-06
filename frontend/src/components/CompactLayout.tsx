import { Box, Typography } from '@mui/material';
import CompactSidebar, { SIDEBAR_WIDTH } from './CompactSidebar';
import AnimatedSearchBar from './AnimatedSearchBar';
import type { ViewMode } from './ViewToggle';

interface CompactLayoutProps {
  children: React.ReactNode;
  onSearch: (query: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onCreateNew: () => void;
}

const CompactLayout = ({ 
  children, 
  onSearch, 
  viewMode, 
  onViewModeChange,
  onCreateNew 
}: CompactLayoutProps) => {
  return (
    <Box className="flex h-screen bg-gray-50">
      {/* Compact Sidebar */}
      <CompactSidebar
        viewMode={viewMode}
        onViewModeChange={onViewModeChange}
        onCreateNew={onCreateNew}
      />

      {/* Animated Search Bar */}
      <AnimatedSearchBar onSearch={onSearch} />

      {/* Main Content */}
      <Box 
        component="main" 
        sx={{ 
          marginLeft: `${SIDEBAR_WIDTH}px`,
          width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header with Title */}
        <Box 
          sx={{ 
            p: 3,
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            className="font-bold text-gray-800"
          >
            Characters
          </Typography>
          <Typography 
            variant="body2" 
            className="text-gray-600 mt-1"
          >
            Manage your character collection
          </Typography>
        </Box>

        {/* Scrollable Content Area */}
        <Box 
          sx={{ 
            flex: 1,
            overflow: 'auto',
            p: 3
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default CompactLayout;

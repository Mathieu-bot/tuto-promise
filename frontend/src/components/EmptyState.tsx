import { Box, Typography, Button } from '@mui/material';
import { PersonAdd, SupervisorAccount } from '@mui/icons-material';

interface EmptyStateProps {
  title: string;
  description: string;
  onAction?: () => void;
  actionLabel?: string;
  icon?: React.ReactNode;
}

const EmptyState = ({ 
  title, 
  description, 
  onAction, 
  actionLabel = "Get Started",
  icon 
}: EmptyStateProps) => {
  const defaultIcon = <SupervisorAccount sx={{ fontSize: 80, color: 'text.secondary' }} />;

  return (
    <Box 
      className="empty-state flex flex-col items-center justify-center py-16 px-8 text-center"
      sx={{ minHeight: '400px' }}
    >
      <Box className="mb-6 opacity-60">
        {icon || defaultIcon}
      </Box>
      
      <Typography 
        variant="h5" 
        component="h2" 
        className="mb-3 font-medium text-gray-700"
      >
        {title}
      </Typography>
      
      <Typography 
        variant="body1" 
        className="mb-8 text-gray-500 max-w-md"
      >
        {description}
      </Typography>
      
      {onAction && (
        <Button
          variant="contained"
          size="large"
          startIcon={<PersonAdd />}
          onClick={onAction}
          className="px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;

import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { GridView, ViewList } from '@mui/icons-material';

export type ViewMode = 'grid' | 'list';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ 
  viewMode, 
  onViewModeChange 
}) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: ViewMode | null,
  ) => {
    if (newMode !== null) {
      onViewModeChange(newMode);
    }
  };

  return (
    <ToggleButtonGroup
      value={viewMode}
      exclusive
      onChange={handleChange}
      aria-label="view mode"
      size="small"
      className="bg-white shadow-sm"
    >
      <ToggleButton 
        value="grid" 
        aria-label="grid view"
        className="px-3 py-2"
      >
        <GridView fontSize="small" />
      </ToggleButton>
      <ToggleButton 
        value="list" 
        aria-label="list view"
        className="px-3 py-2"
      >
        <ViewList fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ViewToggle;

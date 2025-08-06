import toast from 'react-hot-toast';

export const withToast = async <T>(
  operation: () => Promise<T>,
  messages: {
    loading: string;
    success: string;
    error: string;
  }
): Promise<T> => {
  const loadingToast = toast.loading(messages.loading, {
    position: 'bottom-right',
    style: {
      background: '#2196f3',
      color: 'white',
      fontWeight: '500',
      borderRadius: '8px',
    },
  });
  try {
    const result = await operation();
    toast.dismiss(loadingToast);
    toast.success(messages.success, {
      position: 'bottom-right',
      style: {
        background: '#4caf50',
        color: 'white',
        fontWeight: '500',
        borderRadius: '8px',
      },
    });
    return result;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(messages.error, {
      position: 'bottom-right',
      style: {
        background: '#f44336',
        color: 'white',
        fontWeight: '500',
        borderRadius: '8px',
      },
    });
    throw error;
  }
};

export const toastMessages = {
  character: {
    create: {
      loading: 'Creating character...',
      success: 'Character created successfully!',
      error: 'Failed to create character. Please try again.'
    },
    update: {
      loading: 'Updating character...',
      success: 'Character updated successfully!',
      error: 'Failed to update character. Please try again.'
    },
    delete: {
      loading: 'Deleting character...',
      success: 'Character deleted successfully!',
      error: 'Failed to delete character. Please try again.'
    }
  }
};

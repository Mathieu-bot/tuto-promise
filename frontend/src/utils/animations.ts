import type { Variants } from 'framer-motion';

// Card hover and entrance animations
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  hover: { 
    y: -4, 
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

// List item animations
export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  hover: { 
    x: 4, 
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.2 }
  }
};

// Dialog/Modal animations
export const dialogVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: -20,
    transition: { duration: 0.2 }
  }
};

// Button animations
export const buttonVariants: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

// FAB pulse animation
export const fabVariants: Variants = {
  idle: {
    boxShadow: '0 0 0 0 rgba(25, 118, 210, 0.7)'
  },
  pulse: {
    boxShadow: [
      '0 0 0 0 rgba(25, 118, 210, 0.7)',
      '0 0 0 10px rgba(25, 118, 210, 0)',
      '0 0 0 0 rgba(25, 118, 210, 0)'
    ],
    transition: { duration: 2, repeat: Infinity }
  }
};

// Search bar animations
export const searchBarVariants: Variants = {
  collapsed: { width: 48 },
  expanded: { 
    width: 300,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Empty state animations
export const emptyStateVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Stagger animation for lists
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Loading skeleton animation
export const skeletonVariants: Variants = {
  loading: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

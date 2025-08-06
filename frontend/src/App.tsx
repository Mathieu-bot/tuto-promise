import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import CharacterManager from './components/CharacterManager';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import { theme } from './theme/theme';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CharacterManager />
        <PWAInstallPrompt />
        <Toaster />
      </ThemeProvider>
      <SpeedInsights />
    </>
  );
}

export default App;

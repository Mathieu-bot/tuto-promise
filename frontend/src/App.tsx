import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import CharacterManager from './components/CharacterManager';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CharacterManager />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

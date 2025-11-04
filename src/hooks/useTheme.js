import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext'; 

/**
 * Hook personalizado para acceder al contexto del tema.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }

  return context;
};
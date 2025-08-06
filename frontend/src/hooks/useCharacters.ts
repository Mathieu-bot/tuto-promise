import { useState, useEffect } from 'react';
import type { Character } from '../types/Character';
import { characterService } from '../services/characterService';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await characterService.getAllCharacters();
      setCharacters(data);
    } catch (err) {
      setError('Error loading characters');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return {
    characters,
    setCharacters,
    loading,
    error,
    setError,
    loadCharacters
  };
};

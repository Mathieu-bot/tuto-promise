import { useState, useEffect } from 'react';
import type { Character, CreateCharacterRequest } from '../types/Character';
import { validateCharacterForm, createEmptyCharacterForm, createCharacterFormFromData } from '../utils/formUtils';

export const useCharacterForm = (character?: Character | null, open?: boolean) => {
  const [formData, setFormData] = useState<CreateCharacterRequest>(createEmptyCharacterForm());
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (character) {
      setFormData(createCharacterFormFromData(character));
    } else {
      setFormData(createEmptyCharacterForm());
    }
    setErrors({});
  }, [character, open]);

  const handleChange = (field: keyof CreateCharacterRequest) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors = validateCharacterForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleChange,
    validate,
  };
};

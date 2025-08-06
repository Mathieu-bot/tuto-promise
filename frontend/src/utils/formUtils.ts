import type { CreateCharacterRequest } from '../types/Character';

export const validateCharacterForm = (formData: CreateCharacterRequest): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  if (!formData.realName.trim()) {
    errors.realName = 'Real name is required';
  }
  if (!formData.universe.trim()) {
    errors.universe = 'Universe is required';
  }

  return errors;
};

export const createEmptyCharacterForm = (): CreateCharacterRequest => ({
  name: '',
  realName: '',
  universe: '',
  imageUrl: '',
});

export const createCharacterFormFromData = (character: any): CreateCharacterRequest => ({
  name: character.name,
  realName: character.realName,
  universe: character.universe,
  imageUrl: character.imageUrl,
});

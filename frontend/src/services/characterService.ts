import axios from 'axios';
import type { Character, CreateCharacterRequest, UpdateCharacterRequest } from '../types/Character';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const characterService = {
  async getAllCharacters(): Promise<Character[]> {
    const response = await api.get<Character[]>('/characters');
    return response.data;
  },

  async getCharacterById(id: number): Promise<Character> {
    const response = await api.get<Character>(`/characters/${id}`);
    return response.data;
  },

  async createCharacter(character: CreateCharacterRequest): Promise<Character> {
    const response = await api.post<Character>('/characters', character);
    return response.data;
  },

  async updateCharacter(character: UpdateCharacterRequest): Promise<Character> {
    const response = await api.put<Character>(`/characters/${character.id}`, character);
    return response.data;
  },

  async deleteCharacter(id: number): Promise<Character> {
    const response = await api.delete<Character>(`/characters/${id}`);
    return response.data;
  },
};

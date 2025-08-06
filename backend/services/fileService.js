import { promises as fs } from 'fs';

const FILE_PATH = 'user.json';

export const readCharacters = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed;
  } catch (error) {
    throw new Error('Failed to read or parse characters');
  }
}

export const writeCharacters = async (data) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    throw new Error('Failed to write characters');
  }
}

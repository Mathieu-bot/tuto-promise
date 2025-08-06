import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, '..', 'user.json');

export const readCharacters = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed;
  } catch (error) {
    console.error('Error reading characters:', error);
  }
}

export const writeCharacters = async (data) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    throw new Error('Failed to write characters');
  }
}

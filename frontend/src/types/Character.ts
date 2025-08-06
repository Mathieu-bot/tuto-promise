export interface Character {
  id: number;
  name: string;
  realName: string;
  universe: string;
  imageUrl: string;
}

export interface CreateCharacterRequest {
  name: string;
  realName: string;
  universe: string;
  imageUrl: string;
}

export interface UpdateCharacterRequest extends CreateCharacterRequest {
  id: number;
}

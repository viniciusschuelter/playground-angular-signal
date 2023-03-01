export interface CharacterModel {
  id: number;
  name: string;
  created: string;
  episode: string;
  gender: string;
  image: string;
  location: CharacterThumbModel;
  origin: CharacterThumbModel;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharacterThumbModel {
  name: string;
  url: string;
}

type CharacterStatus = "Alive" | "Dead" | "unknown";
type CharacterGender = "Male" | "Female" | "Genderless" | "unknown";

type CharacterOrigin = {
  name: string;
  url: string;
};

type CharacterLocation = {
  name: string;
  url: string;
};

export type CharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
  error?: string;
};

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

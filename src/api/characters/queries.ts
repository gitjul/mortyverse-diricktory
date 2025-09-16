import { useQuery } from "@tanstack/react-query";
import type { CharactersResponse } from "./types";

const fetchCharacters = async (): Promise<CharactersResponse> => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCharactersQuery = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });
};

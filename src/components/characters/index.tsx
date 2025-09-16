import { useCharactersQuery } from "@/api/characters/queries";
import CharactersTable from "./table";

export const Characters = () => {
  const { data, isLoading, error } = useCharactersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading characters</div>;
  }

  return (
    <div>
      <h1>Characters</h1>
      {data && <CharactersTable data={data.results} />}
    </div>
  );
};

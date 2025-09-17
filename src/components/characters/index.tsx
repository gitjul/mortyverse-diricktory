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
    <>
      <h1 className="text-center text-3xl font-bold py-4 font-mono">
        Rick & Morty Characters
      </h1>
      <main className="container mx-auto py-4">
        {data && <CharactersTable data={data.results} />}
      </main>
    </>
  );
};

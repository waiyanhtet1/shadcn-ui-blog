import CharacterCard from "@/components/CharacterCard";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Results {
    characters {
      results {
        id
        image
        name
        species
        status
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return "Loading..";
  if (error) return "Fail to get Characters!";

  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.characters?.results?.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharacterList;

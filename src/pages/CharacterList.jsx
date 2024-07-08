import CharacterCard from "@/components/CharacterCard";
import PaginationComponent from "@/components/Pagination";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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

  // for pagination
  const pageParcharcter = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageParcharcter);

  if (loading) return "Loading..";
  if (error) return "Fail to get Characters!";

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {data?.characters?.results
          ?.slice(startIndex, endIndex)
          .map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
              status={character.status}
            />
          ))}
      </div>
      <PaginationComponent
        startIndex={startIndex}
        endIndex={endIndex}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
        pageParcharcter={pageParcharcter}
        totalLength={data?.characters?.results?.length}
      />
    </>
  );
};

export default CharacterList;

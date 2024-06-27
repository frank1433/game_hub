import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGeners";

interface Props{
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log('game', data)
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer key={item} >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((item) => (
          <GameCardContainer key={item.id}>
            <GameCard game={item} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

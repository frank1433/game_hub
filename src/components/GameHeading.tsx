import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGeners";
import usePlatform from "../hooks/usePlatforms";
import useGameQuery from "../stores/gameQuery";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const genreId = useGameQuery((s) => s.gameQuery.genreId);
  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  const genre = genres?.results.find((g) => g.id === genreId);
  const platform = platforms?.results.find((p) => p.id === platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

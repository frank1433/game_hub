import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-url";
import useGameQuery from "../stores/gameQuery";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQuery((s) => s.gameQuery.genreId);
  const setGenreId = useGameQuery((s) => s.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(item.image_background)}
                borderRadius={8}
                objectFit="cover"
                boxSize="32px"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={item.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(item.id)}
                fontSize="lg"
                variant="link"
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

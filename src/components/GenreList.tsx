// import { HStack, List, ListItem } from "@chakra-ui/react"
import { List, ListItem, HStack, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGeners";

interface Props{
    onSelectedGenre: (genre: Genre)=> void
}

const GenreList = ({onSelectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  console.log("genre:", data);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(item.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Button onClick={()=>onSelectedGenre(item)} fontSize="lg" variant='link'>{item.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

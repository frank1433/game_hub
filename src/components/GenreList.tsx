
import { List, ListItem, HStack, Image, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGeners";

interface Props{
    onSelectedGenre: (genre: Genre)=> void
    selectedGenreId?: number
}

const GenreList = ({onSelectedGenre, selectedGenreId}: Props) => {
  const { data, isLoading, error } = useGenres();
  console.log("genre:", data);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
  <>
   <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((item) => (
        <ListItem key={item.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(item.image_background)}
              borderRadius={8}
              objectFit='cover'
              boxSize="32px"
            />
            <Button whiteSpace='normal'  textAlign='left' fontWeight={item.id===selectedGenreId? 'bold' : 'normal' } onClick={()=>onSelectedGenre(item)} fontSize="lg" variant='link'>{item.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;

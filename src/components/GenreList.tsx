// import { HStack, List, ListItem } from "@chakra-ui/react"
import {List, ListItem, Text, HStack, Image, Spinner } from '@chakra-ui/react'
import useGenres from "../hooks/useGeners"
import getCroppedImageUrl from "../services/image-url"



const GenreList = () => {
  const {data, isLoading, error}= useGenres()
  console.log("genre:",data)
  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <List>
        {
          data.map(item=>(<ListItem key={item.id} paddingY='5px'>
            <HStack>
             <Image src={getCroppedImageUrl(item.image_background)} borderRadius={8} boxSize='32px'/>
            <Text fontSize='lg'>
            {item.name}
            </Text>
            </HStack>
            </ListItem>))
        }
        </List>
  )
}

export default GenreList
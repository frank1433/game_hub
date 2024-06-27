// import { HStack, List, ListItem } from "@chakra-ui/react"
import {List, ListItem, Text, HStack, Image } from '@chakra-ui/react'
import useGenres from "../hooks/useGeners"
import getCroppedImageUrl from "../services/image-url"



const GenreList = () => {
  const {data}= useGenres()
  console.log("genre:",data)
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
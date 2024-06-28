import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import Searchinput from "./Searchinput"
interface Props{
  onSearch: (searchText: string)=>void
}
const Navbar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <Searchinput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
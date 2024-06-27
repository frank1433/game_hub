import { Menu, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatforms'


const PlatformSelector = () => {
const {data, error}=usePlatform()
if (error) return null
  return (
    <Menu>
        <MenuButton as={Button}  rightIcon={<BsChevronDown/>}>Platform</MenuButton>
        <MenuList>
            {data.map(platform=> (<MenuItem key={platform.id}>{platform.name}</MenuItem>))}
            {/* <MenuItem>item 1</MenuItem>
            <MenuItem>item 2</MenuItem>
            <MenuItem>item 3</MenuItem>
            <MenuItem>item 4</MenuItem> */}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector
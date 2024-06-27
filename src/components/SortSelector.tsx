import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button}  rightIcon={<BsChevronDown/>}>{'sort'}</MenuButton>
    <MenuList>
      <MenuItem>test 1</MenuItem>
      <MenuItem>test 2</MenuItem>
      <MenuItem>test 3</MenuItem>
      <MenuItem>test 4</MenuItem>
     
    </MenuList>
</Menu>
  )
}

export default SortSelector
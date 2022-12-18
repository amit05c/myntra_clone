import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
  } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'

export function FilterSlider() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
       
        <Button colorScheme='blue' onClick={onOpen} padding={['0.5rem','1rem','1.5rem']} w={['40%','30%','30%']}>
          Filter
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size={['xs','xs']}>
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHeader borderBottomWidth='1px'>Filter</DrawerHeader>
            <DrawerBody>
              <Filter/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
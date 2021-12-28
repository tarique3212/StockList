import { TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons'
import { Box, Flex, ListItem, Spacer } from '@chakra-ui/layout'
import { Text} from '@chakra-ui/react'
import React,{useState} from 'react'

export default function Listem({name,prevP,currP}) {
    let stockInfo=name.split("::")
    let change=((currP-prevP)/prevP)*100
    let color="blue.400"
    let icon=<TriangleUpIcon color={color}/>
    if(change<0)
        {color="orange";icon=<TriangleDownIcon color={color}/>}

    const [hover, setHover] = useState(false)
    
    const handleEnter=()=>{
        setHover(true)
    }
    const handleLeave=()=>{
        setHover(false)
    }
    return (
        <ListItem onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave} bg={hover?"pink.100":"white"} p={1} 
        borderBottom="1px solid lightgray" 
        >
            <Flex >
                <Box>
                    <Text color={color} fontSize="md" fontWeight="bold">{stockInfo[0]}</Text>
                    <Text color="gray.400" fontSize="sm">{stockInfo[1]}</Text>
                </Box>
                <Spacer/>
                <Box>
                <Text color={color} fontSize="md" fontWeight="bold" align="right">{currP.toFixed(2)} </Text>
                <Box display="flex" alignItems="center" justifyContent="center">
                    {icon}
                    <Text fontSize="sm">{change.toFixed(2)}%</Text>
                </Box>
                </Box>
            </Flex>
        </ListItem>
    )
}

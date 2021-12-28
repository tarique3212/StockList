import { AddIcon, TriangleDownIcon, TriangleUpIcon ,MinusIcon} from '@chakra-ui/icons'
import { Box, Flex, ListItem, Spacer } from '@chakra-ui/layout'
import {Button, Text} from '@chakra-ui/react'
import React,{useState} from 'react'

export default function DDitem({name,prevP,currP,isDDitem,watchList,setWatchList,isInWatch}) {
    let stockInfo=name.split("::")

    if(!currP)
     currP=100
    if(!prevP)
     prevP=100
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

    const addToList=()=>{
        
        let newList=[...watchList]
        for(let i=0;i<newList.length;i++)
        {
            if(newList[i][0]===name){
                newList[i][3]=1;
                break;
            }
        }
        setWatchList(newList)
    }

    const removeFromList=()=>{
        let newList=[...watchList]
        for(let i=0;i<newList.length;i++)
        {
            if(newList[i][0]===name){
                newList[i][3]=0;
                break;
            }
        }
        console.log(newList)
        setWatchList(newList)
    }

    const getButton=()=>{
        if(!isDDitem)
        return null

        if(isInWatch===0){
            return(
                <Button m="4px" zIndex="2" p="0" colorScheme="teal" onClick={addToList}><AddIcon w={3}/></Button>
            )
        }
        else{
            return(
                <Button m="4px" zIndex="2" p="0" colorScheme="red" onClick={removeFromList}><MinusIcon w={3}/></Button>
            )
        }

    }
    return (
        <ListItem onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave} bg={hover?"gray.100":"white"} p={0.5} 
        borderBottom="1px solid lightgray" 
        borderRadius="5px">
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
                {
                hover &&  getButton()
                }
            </Flex>
        </ListItem>
    )
}

import { Box, List, Text } from '@chakra-ui/layout'
import React from 'react'
import Listem from './Listem'

function WatchList({watchList,setWatchList}) {
    //console.log("wwaas",watchList)
    return (
        <Box border="1px solid lightgray" borderBottom="none" borderRadius="5px" width="max(33%,400px)">
            <Text fontSize="2xl" textAlign="center" bg="purple.200">Stock Watch List</Text>
            <List>
            {
                watchList.map((item)=>{
                    return <Listem name={item[0]} prevP={item[1]} currP={item[2]}
                      key={item[0]}
                     />
                })
            }
            </List>
        </Box>
    )
}

export default WatchList

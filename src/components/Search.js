import { Input } from '@chakra-ui/input'
import { Box, List } from "@chakra-ui/layout";
import React,{useState} from 'react'

import DDitem from './DDitem';

function Search({watchList,setWatchList}) {
    const [text, setText] = useState("")
    //console.log("search",watchList)
    const inputChangeHandler=(e)=>{
        setText(e.target.value)
    }
    const getDropdownContent=()=>{
        
        if(!text)
        return []

        let tempList=watchList.filter((item)=>{
            return (item[0].split("::")[0].includes(text.toLocaleUpperCase()))
        })
        return tempList
    }
    return (
        <Box m="20px" width="max(33%,400px)">
            <Input
             placeholder="search stocks" 
             value={text} onChange={inputChangeHandler} 
             size="lg"
             //variant="filled"
             />
            <List maxH="250px" overflow="scroll" bg="lightblue" overflowX="hidden" >
                {
                    getDropdownContent().map((item)=>{
                        return <DDitem name={item[0]} prevP={item[1]} currP={item[2]} isInWatch={item[3]}
                        isDDitem={true} 
                        watchList={watchList}
                        setWatchList={setWatchList}
                        key={item[0]}/>
                    })
                }
            </List>
        </Box>
    )
}

export default Search

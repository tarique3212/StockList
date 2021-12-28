import { Box } from "@chakra-ui/layout";
import { useState ,useEffect} from "react";
import Search from "./components/Search";
import WatchList from "./components/WatchList";
import data from './components/data.json'


function App() {

  const [watchList, setWatchList] = useState([])

  useEffect(() => {
    let list=data.map(item=>{
      return [...item,0]
    })
    setWatchList(list)
   
  }, [])


  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Search watchList={watchList} setWatchList={setWatchList}/>
     <WatchList watchList={watchList.filter(item=>(item[3]===1))} /> 
    </Box>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
import Navbar from "./componentes/Navbar";
import Characters from './componentes/Characters'
import Pagination from './componentes/Pagination'
function App() {
  const [characters,setCharacters] =useState([]);
  const[info,setInfo] = useState({});
  const initialUrl ="https://rickandmortyapi.com/api/character";
  const fetchCharacters=(url)=>{
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    }) 
    .catch(error => console.log(error))
};
  const onPrevious = () => {
    fetchCharacters(info.prev);
  } 
  const onNext = () => {
    fetchCharacters(info.next);   
  }  
    useEffect(() => {
      fetchCharacters(initialUrl);
    }, [])
      return (
      <div className="App ">
          <Navbar brand="Rick and Morty App" />    
          <div className="container mt-5" >
          <Pagination  
             prev={info.prev} 
             next={info.next} 
             onPrevious={onPrevious} 
             onNext={onNext} 
          />
            <Characters characters={characters} />
          <Pagination />
          </div>
      </div>
      );
  }
export default App;


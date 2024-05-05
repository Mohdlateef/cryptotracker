import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'



function Search({search,onSearchChange}){
    // const[search,setSearch]=useState("")
    return(
        <div className="search_flex">
            <SearchIcon />
            <input placeholder="Search" type="text" value={search}
            onChange={(e) => onSearchChange(e)}
            />
       
        </div>
    )
}


export default Search;
import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ControlPagination() {
const [page,setPage]=useState(1);
  const handleChange = (event,value) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange} sx={{
        color:"var(--white)",
        ".Mui-selected ":{

            backgroundColor:"var(--blue) !important",
            color:"#ff !important",
        },
        "& .muipaginatioinItem-ellipsis":{
            border:"0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text":{
            color:"var(--white)",
            border:"1px solid var(--grey)"
        }
      }} />
    </div>
  );
}


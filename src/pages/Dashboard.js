import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashbord/Tabs";
import axios from "axios";
import Search from "../components/Dashbord/Search";
import ControlPagination from "../components/Dashbord/Pagination";
function Dashboard() {
  const [coins, setcoins] = useState("");
  const [search, setSearch] = useState("");
  const [page,setPage]=useState(1);
  const [pageNationsCoins,setPageNationCoins]=useState([]);

  const handleChange = (event,value) => {
    setPage(value);
    var previousIndex=(value-1)*10;
    setPageNationCoins(coins.slice(previousIndex,previousIndex+10))
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  // console.log('test')
  console.log(coins)
if(coins!=""){
  var filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())||
    item.symbol.toLowerCase().includes(search.toLowerCase())

  );
}
  useEffect(() => {
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    // ).then((res)=>res.json()).then((data)=>{console.log(data)});
    // console.log("test");
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      ).then((response) => {
        console.log("res", response);
        setcoins(response.data);
    setPageNationCoins(response.data.slice(0,10))

      }).catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={search? filteredCoins:pageNationsCoins} />
   {!search &&(
   <ControlPagination page={page} handleChange={handleChange} />

   )}
    </div>
  );
}

export default Dashboard;

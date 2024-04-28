import React,{useEffect, useState} from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashbord/Tabs";
import axios from "axios";
function Dashboard(){

const [coins,setcoins]=useState([])
// console.log('test')
useEffect(()=>{
// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
// ).then((res)=>res.json()).then((data)=>{console.log(data)});
// console.log("test");
axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
).then((response)=>{
    console.log("res",response)
    setcoins(response.data)
}).catch((error)=>{
    console.log(error);
})

},[])
    return(
        <div>
<Header/>
<TabsComponent coins={coins }/>
        </div>
    )
}

export default Dashboard;
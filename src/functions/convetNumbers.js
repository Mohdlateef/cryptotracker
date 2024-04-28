import React from "react";

export const ConvertNumber=(number)=>{
    const numberWithCommas=number.toLocaleString();
    var arr=numberWithCommas.split(",");
    if(arr.length==5){
    return arr[0]+"."+arr[1].slice(0,2)+"l"}
    if(arr.length==4){
        return arr[0]+"."+arr[1].slice(0,2)+"B"}
    if(arr.length==3){
        return arr[0]+"."+arr[1].slice(0,2)+"M"}
    if(arr.length==2){
        return arr[0]+"."+arr[1].slice(0,2)+"2"}
    else{
        return number.toLocaleString();
    }
};
import React from 'react';
import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeableURL = url

    if (country) {
        changeableURL = `${url}/countries/${country}`
    }

    try{
        const {data: {confirmed, deaths, lastUpdate, recovered} } = await axios.get(changeableURL)
        return { confirmed, deaths, recovered, lastUpdate }

    }   
    catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifiedData
    }
    catch(error){

    }
}

export const fetchCountry = async () => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)
    }
    catch(error){
        console.log(error)
    }
} 
import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core"
import { fetchCountry } from "../../api"

import style from "./CountryPicker.module.css"

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchingCountry = async () => {
            setFetchedCountries(await fetchCountry())
        }
        fetchingCountry()
    },[setFetchedCountries])

    return (
        <FormControl className={style.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
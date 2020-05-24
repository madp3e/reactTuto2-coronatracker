import React, {Component} from 'react';

import {Cards, Chart, CountryPicker} from "./components"
import style from "./App.module.css"
import { fetchData } from "./api"
import coronaimages from "../images/image.png"

class App2 extends Component {
    state = { 
        data:{},
        country:"",
     }

    async componentDidMount() {
        const data = await fetchData()
        this.setState({data:data})
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country)
        this.setState({data:data, country:country})
        console.log(data)

    }

    render() { 
        const {data,country} = this.state
        return ( 
            <div className={style.container}>
                <img src={coronaimages} className={style.image}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
         );
    }
}
 
export default App2;
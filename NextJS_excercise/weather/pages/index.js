import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'



export async function getStaticProps() {
    const api_key = 'c66361ea6655b28bed44236606ccb99a'
    let url = 'https://api.openweathermap.org/data/2.5/weather'
    url += '?q=' + 'Haiphong' + '&appid' + api_key
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=haiphong&appid=c66361ea6655b28bed44236606ccb99a')
    //'https://api.openweathermap.org/data/2.5/weather?q=haiphong&appid=c66361ea6655b28bed44236606ccb99a'
    return {
        props: {
            weatherInfo: response.data
        }
    }
}

export default function Home({ weatherInfo }) {
    // const [city, setCity] = useState('')
    // const handleChange = (event) => {
    //     setCity = event.target.value
    // }
    // async function getStaticProps() {
    //     const api_key = 'c66361ea6655b28bed44236606ccb99a'
    //     let url = 'https://api.openweathermap.org/data/2.5/weather' + '?q=' + city + '&appid' + api_key
       
    //     const response = await axios.get(url)
    //     //'https://api.openweathermap.org/data/2.5/weather?q=haiphong&appid=c66361ea6655b28bed44236606ccb99a'
    //     return {
    //         props: {
    //             weatherInfo: response.data
    //         }
    //     }
    // }
    // const handleSubmit = () => {
    //     getStaticProps()

    // }
    return (
        <div>
            <h1>Weather in Haiphong</h1>
            <p>Check the weather in your address.a</p>
            {/* <div>
                <input type="text" onChange={handleChange} />
                    <button onClick={handleSubmit}>Search</button>
            </div> */}

            <div>
            <h2><FontAwesomeIcon icon={["far", "coffee"]}/>Temp:  {weatherInfo.main.temp -273.1}</h2> 
            </div>
        </div>

    )
}
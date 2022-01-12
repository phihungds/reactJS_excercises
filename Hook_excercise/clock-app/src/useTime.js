import {useState, useEffect} from 'react';

function useTime() {
    const [time, setTime] = useState('')
    const [day, setDay] = useState('')
    
    const updateTime = () => {
        let date = new Date()   

        let hours = date.getHours() < 10 ? 
        '0' + date.getHours() : date.getHours()

        let minutes = date.getMinutes() < 10 ?
        '0' + date.getMinutes() : date.getMinutes()

        let seconds = date.getSeconds() < 10 ?
        '0' + date.getSeconds() : date.getSeconds()

        setTime(`${hours}:${minutes}:${seconds}`)
        
        let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ]
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let toDay = days[date.getDay()]
        let dateNum = date.getDate()
        let month = months[date.getMonth()]
        let year = date.getFullYear()

        setDay(`${toDay}, ${dateNum} ${month} ${year}`)
        }
        
        useEffect( () => {
            const clock = setInterval(function () {
                updateTime();
            }, 1000);
            return () => {
                clearInterval(clock)
            }
        }, [])
        

        


    return [time, day]
        // <div style={{textAlign:'center'}}>
        //     <div>
        //         <h1>What time is it ?</h1>
        //         <h2>{day}</h2>
        //         <h2>{time}</h2>
        //     </div>
        // </div>

    
}
export default useTime
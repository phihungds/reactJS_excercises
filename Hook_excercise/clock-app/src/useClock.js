import {useState, useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState('')
    const [day, setDay] = useState('')
    
    const updateTime = () => {
        let date = new Date()

        let hours = date.getHours() < 10 ? 
        parseInt('0' + date.getHours()) : date.getHours()

        let minutes = date.getMinutes() < 10 ?
        parseInt('0' + date.getMinutes()) : date.getMinutes()

        let seconds = date.getSeconds() < 10 ?
        '0' + date.getSeconds() : date.getSeconds()

        setTime(`${hours}:${minutes}:${seconds}`)
        
        let days = []
        }
        setInterval(function () {
            updateTime();
        }, 1000);

    


    return (
        <div style={{textAlign:'center'}}>
            <div>
                <h1>What time is it ?</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
export default Clock
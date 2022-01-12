import useTime from "./useTime";

function Clock() {
    const [time, day] = useTime()
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>What time is it ?</h1>
                <h2>{day}</h2>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
export default Clock
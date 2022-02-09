import axios from 'axios'

export async function getStaticProps() {
  const response = await axios.get('https://covid19-api.com/country?name=Vietnam&format=json')
  return {
    props: {
      covidInfo : response.data[0]
    }
  }
}

export default function Home ({covidInfo}) {
  return (
    <div>
      <h1>COVID-19 in Vietnam</h1>
      <p>Tổng số ca nhiễm: {covidInfo.confirmed}</p>
      <p>Đã khỏi bệnh: {covidInfo.recovered}</p>
      <p>Nguy kịch: {covidInfo.critical}</p>
      <p>Tử vong: {covidInfo.deaths}</p>
    </div>
  )
}

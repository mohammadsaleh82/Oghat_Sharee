import axios from "axios";
import { Fragment, useState } from "react";



const App = () => {

  const [result, setResult] = useState()
  const [city, setCity] = useState('')
  const [noresult, setNoResult] = useState('نام مکان را وارد کنید')
  const [loading, setloading] = useState(false)

  const handleGetInfo = () => {
    setloading(true)
    axios.get(`https://one-api.ir/owghat/?token=809094:6236bf4ca515f9.55429155&city=${city}`)
      .then(res => {
        if (res.data.status === 404) {
          setResult('')
          setNoResult('نام مکان معتبر نیست')
          setloading(false)
        }
        else {
          setResult(res.data)
          setloading(false)
        }
      }).catch(err => {
        setNoResult('مشکلی پیش آمد')
        setloading(false)
      })



  }

  return (
    <Fragment>
      <div className="App">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={handleGetInfo} className="btn-search">جستجو</button>

        {loading ? (<h2>در حال بررسی</h2>) : result ? (
          <div className="link">
            <div className="card">
              {/* <img src="http://localhost:3000/img/sobh.jpg" alt="" width={`100px`} /> */}
              <h3> اذان صبح:{result.result.azan_sobh}</h3>
            </div>
            <div className="card">
              {/* <img src="http://localhost:3000/img/zohr2.jpg" alt="" width={`100px`} /> */}
              <h3> اذان ظهر:{result.result.azan_zohre}</h3>
            </div>
            <div className="card">
              {/* <img src="http://localhost:3000/img/maghreb.jpg" alt="" width={`100px`} /> */}
              <h3> غروب آفتاب:{result.result.ghorob_aftab}</h3>
            </div>
            <div className="card">
              {/* <img src="http://localhost:3000/img/maghreb.jpg" alt="" width={`100px`} /> */}
              <h3> اذان مغرب:{result.result.azan_maghreb}</h3>
            </div>
            <div className="card">
              {/* <img src="http://localhost:3000/img/maghreb.jpg" alt="" width={`100px`} /> */}
              <h3> نیمه شب شرعی:{result.result.nime_shabe_sharie}</h3>
            </div>
          </div>
        ) : (
          <div>
            <h3>{noresult}</h3>
          </div>
        )}

        <div className="date">
          <img src="http://localhost:3000/img/sun2.png" alt="" width={'100px'} />
          {result ? (<>
            <h3>{`${result.result.month}/${result.result.day}`}</h3>
            <h3>{`طلوع خورشید: ${result.result.toloe_aftab}`}</h3>
          </>) : ''}
        </div>
      </div>
    </Fragment>
  );
}

export default App;

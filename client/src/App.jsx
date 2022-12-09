import React, { useState, useEffect } from 'react'
import StatusBar from './components/StatusBar'

const countryData = {
  name: "CountryName",
  freedom: {
    personal: 50,
    economy: 50,
    political: 50
  },
}

const App = () => {

  const [country, setCountry] = useState(null)

  useEffect(() => {
    setCountry(countryData)

    // Fetch country data, with username and password

  }, [])
  
  if (!country) return null
  return (
    <div className='App'>
      <h1>{countryData.name}</h1>
      <div className="status">
        {
          Object.entries(country.freedom).map(value => <StatusBar stat={value}/>)
        }
      </div>
    </div>
  )
}

export default App
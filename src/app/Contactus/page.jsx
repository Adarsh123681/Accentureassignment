"use client"
import React, { useState } from 'react'
import Banner from '../Components/Banner'

const page = () => {

  // list of cities
  const cities = ["mumbai", "algeria", "kolkata", "Delhi", " Chennnai", "Benaluru", "Lucknow", "pune", "Kanpur", "Jaipur", "Indore", "Hyderabad"]

  // useState for the state management
  const [searchcity, setSearchcity] = useState('');

  // input field change
  const handleOnChange = (e) => {
    setSearchcity(e.target.value)
  }

  // filterCities according to search input
  const filterCities = cities.filter(city => city.toLowerCase().includes(searchcity.toLowerCase()))

  
  return (
    <>
      <div className="w-screen main">
        <section className="">
          <Banner />
        </section>
        <form action="" className='w-[53%] text-end space-x-5 space-y-5'>
          <input type="search" value={searchcity} name="searchCity" id="city" className='p-3 text-blue-700 rounded-lg ' onChange={handleOnChange} />
          <button className="search p-2 bg-blue-900 border-2 border-blue-500 rounded-lg inset-3 ">
            SEARCH
          </button>
        </form>
        <ul className="w-[57%] text-center">
          {/* map method fo the list */}
          {
            filterCities.map((val, index) => {
              return (
                <>
                  <li key={index} className='mb-2'>{val}</li>
                </>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default page
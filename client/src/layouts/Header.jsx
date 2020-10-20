import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAllHospitals } from './../services/hospitals'

export default function Header() {
  const [hospital, setHospital] = useState([])

  useEffect(() => {
    const fetchHospital = async () => {
      const hospitalName = await getAllHospitals()
      setHospital(hospitalName[0])
    }
    fetchHospital()
  }, [])
  
  return (
    <div>
      <h1>{hospital.name}</h1>
    </div>
  )
}

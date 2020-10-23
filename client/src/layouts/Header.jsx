import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to='/' style={{ textDecoration: "none" }}>
        <h1>{hospital.name}</h1>
      </Link>
    </div>
  )
}

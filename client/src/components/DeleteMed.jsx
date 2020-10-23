import React from 'react'
import { useHistory } from 'react-router-dom'
import { destroyMedFromDevice } from '../services/medications'

export default function DeleteMed(props) {
  const { deviceId, medicationId, meds, setMeds } = props
  const history = useHistory()

  const deleteMed = async (deviceId, medicationId) => {
    await destroyMedFromDevice(deviceId, medicationId)
    setMeds(prevState => prevState.filter(med => {
      return med.id !== medicationId
    }))
    // history.push('/')
  }

  console.log(deviceId)
  console.log(medicationId)

  return (
    <div>
      <button onClick={() => {
        deleteMed(deviceId, medicationId)
      }}>Delete</button>
    </div>
  )
}

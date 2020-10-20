import api from './api-config'

export const getAllMedsFromDevice = async (device_id) => {
  const resp = await api.get(`/devices/${device_id}/medications`)
  return resp.data
}

export const getMedFromDevice = async (device_id, medication_id) => {
  const resp = await api.get(`/devices/${device_id}/medications/${medication_id}`)
  return resp.data
}

export const postMedToDevice = async (device_id, medData) => {
  const resp = await api.post(`/devices/${device_id}/medications`, { medication: medData })
  return resp.data
}

export const putMedToDevice = async (device_id, medication_id, medData) => {
  const resp = await api.put(`/devices/${device_id}/medications/${medication_id}`, { medication: medData })
  return resp.data
}

export const destroyMedFromDevice = async (device_id, medication_id) => {
  const resp = await api.delete(`devices/${device_id}/medications/${medication_id}`)
  return resp
}
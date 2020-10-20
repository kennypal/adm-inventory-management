import api from './api-config'

export const getAllHospitals = async () => {
  const resp = await api.get(`/hospitals`)
  return resp.data
}

export const getOneHospital = async (id) => {
  const resp = await api.get(`/hospitals/${id}`)
  return resp.data
}
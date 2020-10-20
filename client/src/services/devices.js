import api from './api-config'

export const getAllDevices = async () => {
  const resp = await api.get(`/devices`)
  return resp.data
}
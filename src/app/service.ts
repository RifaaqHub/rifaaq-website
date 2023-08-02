import axios from 'axios'
import { waitListInput } from '../../types/waitlistInput'

export const service = axios.create({
  baseURL: 'https://rifaaq-backend.onrender.com',
})

export const joinWaitlist = async (data: waitListInput) => {
  const response = await service.post('/api/v1/users/waiting', {
    ...data,
    nickname: 'reed',
  })

  console.log(response.data)

  return response.data
}

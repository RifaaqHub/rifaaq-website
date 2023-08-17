import axios from 'axios'

export const service = axios.create({
  baseURL: 'https://rifaaq-backend-c6p3.onrender.com/',
})

export const joinWaitlist = async (data: waitListInput) => {
  const response = await service.post('/api/v1/users/waiting', data)

  return response.data

  // await new Promise<void>((resolve, reject) => {
  //   setTimeout(() => {
  //     // toast.dismiss(toastId)
  //     // resolve()
  //     resolve()
  //   }, 1000)
  // })
}

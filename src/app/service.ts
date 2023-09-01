import axios from 'axios'

const baseURL = 'https://rifaaq-backend-c6p3.onrender.com/'
// process.env.NODE_ENV === 'production'
//   ? 'https://rifaaq-backend-c6p3.onrender.com/'
//   : 'https://dev-rifaaq-backend.onrender.com'

export const service = axios.create({
  baseURL,
})

export const joinNewsletter = async (data: waitListInput) => {
  const response = await service.post('/api/v1/users/newsletter', data)

  return response.data
}

export const unsubscribe = async (data: IUnsubscribe) => {
  const { email, name, type, token } = data
  const url = token
    ? `/api/v1/users/unsubscribe?token=${token}`
    : `/api/v1/users/unsubscribe?email=${email}&name=${name}&type=${type}`

  const response = await service.delete(url)

  return response.data
}

export const resubscribe = async (data: IUnsubscribe) => {
  const { email, name, type } = data
  const url =
    type === 'newsletter' ? '/api/v1/users/newsletter' : '/api/v1/users/waiting'

  const response = await service.post(url, { nickname: name, email })

  return response.data
}

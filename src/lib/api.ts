import axios from 'axios'
import { apiBaseUrl } from './site'

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

// Mirrors backend CreateAccountDeletionRequestDto: { email, reason? }.
export type AccountDeletionRequestInput = {
  email: string
  reason?: string
}

export const requestAccountDeletion = async ({ email, reason }: AccountDeletionRequestInput) => {
  const trimmed = reason?.trim()
  const response = await api.post<{ id: string; status: string }>('/account-deletion-requests', {
    email: email.trim(),
    ...(trimmed ? { reason: trimmed } : {}),
  })
  return response.data
}

export type NewsletterSubscribeInput = {
  email: string
  name?: string
}

// Idempotent: the backend never reveals whether the email was already subscribed.
export const subscribeNewsletter = async ({ email, name }: NewsletterSubscribeInput) => {
  const trimmedName = name?.trim()
  const response = await api.post<{ status: 'subscribed' }>('/newsletter/subscribe', {
    email: email.trim(),
    ...(trimmedName ? { name: trimmedName } : {}),
  })
  return response.data
}

export const unsubscribeNewsletter = async (token: string) => {
  const response = await api.post<{ status: 'unsubscribed' }>('/newsletter/unsubscribe', { token })
  return response.data
}

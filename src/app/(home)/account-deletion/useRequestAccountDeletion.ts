'use client'

import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import { requestAccountDeletion } from '@/lib/api'

const errorMessage = (error: unknown) => {
  if (isAxiosError(error)) {
    const message = error.response?.data?.message
    if (Array.isArray(message)) return message.join(', ')
    if (typeof message === 'string') return message
  }
  return 'Could not submit your request. Please try again, or contact us by email.'
}

const useRequestAccountDeletion = () =>
  useMutation({
    mutationKey: ['request-account-deletion'],
    mutationFn: requestAccountDeletion,
    onError: error => {
      toast.error(errorMessage(error))
    },
  })

export default useRequestAccountDeletion

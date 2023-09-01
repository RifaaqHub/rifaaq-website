'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { joinNewsletter } from '../service'
import { useRef } from 'react'

const useJoinWaitList = () => {
  const toastId = useRef<any>()

  let dismiss = () => {
    if (toastId.current) toast.dismiss(toastId.current)
  }

  const onSettled = () => {
    dismiss()
  }

  const onMutate = () => {
    toastId.current = toast.loading('Joining newsletter...')
  }

  const onSuccess = (data: any) => {
    toast.success(
      data?.message ?? 'Marhaban! Please check your mail for confirmation',
    )
  }
  const onError = (error: any) => {
    if (
      error?.response?.data?.errors?.[0]?.msg ===
      'You have already joined the waiting list...'
    ) {
      toast.success('You have been added to our newsletter.')
      return
    }

    toast.error('error joining newsletter, please try again')
  }

  return useMutation({
    mutationKey: ['join'],
    onMutate,
    mutationFn: joinNewsletter,
    onSettled,
    onSuccess,
    onError,
  })
}

export default useJoinWaitList

'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { joinWaitlist } from '../service'
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
    toastId.current = toast.loading('Joining waitlist...')
  }

  const onSuccess = (data: any) => {
    toast.success(
      data?.message ?? 'Marhaban! Please check your mail for confirmation',
    )
  }
  const onError = (error: any) => {
    toast.error(
      error?.response?.data.errors?.[0]?.msg ??
        'error joining waitlist, please try again',
    )
  }

  return useMutation({
    mutationKey: ['join'],
    onMutate,
    mutationFn: joinWaitlist,
    onSettled,
    onSuccess,
    onError,
  })
}

export default useJoinWaitList

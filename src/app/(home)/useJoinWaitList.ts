'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { joinWaitlist } from '../service'

const useJoinWaitList = () => {
  let toastId: any

  let dismiss = () => {
    if (toastId) toast.dismiss(toastId)
  }

  return useMutation({
    mutationKey: ['join'],
    onMutate: () => {
      toastId = toast.loading('Joining waitlist...')
    },
    mutationFn: joinWaitlist,
    onSettled: () => dismiss,
    onSuccess: () =>
      toast.success('Marhaban! Please check your mail for confirmation'),
    onError: () => toast.error('error joining waitlist, please try again'),
  })
}

export default useJoinWaitList

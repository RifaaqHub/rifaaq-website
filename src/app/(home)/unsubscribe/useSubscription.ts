import { resubscribe, unsubscribe } from '@/app/service'
import userServiceStateFn from '@/app/useServiceStatesFn'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useUnsubscribe = (data: IUnsubscribe, enabled: boolean) => {
  const { email, type, name } = data
  return useQuery({
    queryKey: ['unsubscribe', data],
    queryFn: () => unsubscribe(data),
    enabled: !!email && !!type && !!name && !enabled,
  })
}

export const useResubscribe = () => {
  const { onMutate, onSuccess, onError, onSettled } = userServiceStateFn({
    error: 'unable to unsubscribe now, please try again from your email',
    success: 'Subscribed successfully',
    loading: 'Subscribing....',
  })

  return useMutation({
    mutationKey: ['resubscribe'],
    mutationFn: resubscribe,
    onMutate,
    onSuccess,
    onError,
    onSettled,
  })
}

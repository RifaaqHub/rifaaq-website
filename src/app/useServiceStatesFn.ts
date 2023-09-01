import { useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import { usePathname } from 'next/navigation'

type IStateMessages = {
  success: string
  error: string
  loading: string
}

const userServiceStateFn = ({
  success,
  error: errorMessage,
  loading,
}: IStateMessages) => {
  const toastId = useRef<any>()
  const pathName = usePathname()

  let dismiss = () => {
    if (toastId.current) toast.dismiss(toastId.current)
  }

  const onSettled = () => {
    dismiss()
  }

  const onMutate = () => {
    toastId.current = toast.loading(loading)
  }

  const onSuccess = (data: any) => {
    toast.success(data?.message ?? success)
  }

  const onError = (error: any) => {
    toast.error(error?.response?.data?.message ?? errorMessage)
  }

  useEffect(
    () => {
      dismiss()
      toast.dismiss(toastId.current)
    },
    // eslint-disable-next-line
    [pathName],
  )

  return { onSuccess, onError, onMutate, onSettled }
}

export default userServiceStateFn

import { Button, Heading, Icon, Maxwidth, Paragraph } from '@/components'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'

type FormInput = {
  email: string
}

const WaitListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      email: '',
    },
  })

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const subscribe = (data: FormInput) => {
    console.log(data)
  }

  return (
    <Maxwidth
      as="section"
      id="join-waitlist"
      tw="py-14 px-6 md:(px-10 py-[4.25rem]) 2xl:(py-[5.16rem] px-[6.25rem])"
    >
      <form
        onSubmit={handleSubmit(subscribe)}
        tw="w-full relative overflow-hidden px-4 py-[6.25rem] flex flex-col gap-6 rounded-[0.75rem] text-white text-center bg-primary bg-cover bg-no-repeat  lg:(gap-4 py-[4.5rem])"
      >
        <Icon tw="absolute -top-[3rem] -right-[3rem] 2xl:(-top-[6rem] -right-[6rem])" />
        <Icon tw="absolute -bottom-[3rem] -left-[3rem] 2xl:(-bottom-[6rem] -left-[6rem])" />

        <div tw="max-w-[44rem] mx-auto flex flex-col gap-4">
          <Heading as="label" htmlFor="email">
            Join Our Waitlist Today!
          </Heading>
          <Paragraph tw="pb-6 lg:(pb-8)">
            Are you ready to embark on a transformative journey towards becoming
            the best version of yourself? Join our waitlist and be among the
            first to experience Rifaaq - the ultimate companion for your
            spiritual growth and all-round development.
          </Paragraph>
        </div>

        <div
          tw="bg-white rounded-[1rem] flex items-center justify-stretch gap-4 p-[0.65rem] w-full max-w-[35rem] mx-auto lg:(p-[0.88rem])"
          css={[errors?.email && tw`border border-[red]`]}
        >
          <input
            type="text"
            {...register('email', { required: true, pattern: emailPattern })}
            tw="w-full p-2 text-black font-semibold"
          />

          <Button
            $variant="primary"
            tw="text-[0.875rem] whitespace-nowrap px-0 min-w-[5.8rem] md:(min-w-[8.375rem])"
          >
            Join Now
          </Button>
        </div>
      </form>
    </Maxwidth>
  )
}

export default WaitListForm

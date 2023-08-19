import { Button, Heading, Icon, Maxwidth, Paragraph } from '@/components'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import useJoinWaitList from './useJoinWaitList'
import Image from 'next/image'
import newsletter from 'public/newsletter.svg'

const NewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<waitListInput>({
    defaultValues: {
      email: '',
      nickname: '',
    },
  })

  const { mutate: join } = useJoinWaitList()

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const subscribe = (data: waitListInput) => {
    join(data, {
      onSuccess: () => reset(),
    })
  }

  return (
    <Maxwidth
      as="section"
      id="join-waitlist"
      tw="py-20 px-6 flex flex-col gap-[4.5rem] md:(px-12) lg:(flex-row justify-between items-center) 2xl:(px-[6.25rem])"
    >
      <Heading
        $variant="h3"
        as="h4"
        tw="text-primary lg:(text-[2.5rem] hidden)"
      >
        Subscribe to our Newsletter
      </Heading>

      <Image
        src={newsletter}
        alt="join-newsletter"
        tw="mx-auto transition hocus:scale-105"
      />

      <form
        onSubmit={handleSubmit(subscribe)}
        tw="flex flex-col justify-stretch gap-4 w-full mx-auto max-w-[31rem]"
      >
        <Heading
          $variant="h3"
          as="h4"
          tw="hidden lg:(text-primary text-[2.5rem] block mb-8)"
        >
          Subscribe to our Newsletter
        </Heading>

        <Input
          type="text"
          placeholder="Name"
          {...register('nickname', { required: true, minLength: 3 })}
          css={[errors?.email && tw`border border-[red]`]}
        />
        <Input
          type="text"
          placeholder="Email"
          {...register('email', { required: true, pattern: emailPattern })}
          css={[errors?.email && tw`border border-[red]`]}
        />

        <Button tw="text-sm px-16 mt-2 max-w-fit lg:(text-base)">
          Subscribe
        </Button>
      </form>
    </Maxwidth>
  )
}

const Input = tw.input`bg-white w-full rounded-[1rem] border border-[#686C76] p-5 text-primary text-lg lg:(p-6 text-xl)`

export default NewsLetterForm

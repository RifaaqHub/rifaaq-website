import { HTMLProps } from 'react'
import tw from 'twin.macro'

interface LoadingSvgProps extends HTMLProps<HTMLDivElement> {
  color?: string
}

const Cover = tw.div`h-8 w-8 max-w-fit`

const LoadingSvg = ({ color, ...props }: LoadingSvgProps) => {
  return (
    <Cover {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        tw="animate-spin w-full h-full inline"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            opacity="0.2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill={color ? color : '#FFCF3F'}
          ></path>
          <path
            d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
            fill={color ? color : '#FFCF3F'}
          ></path>
        </g>
      </svg>
    </Cover>
  )
}

export const LoadingPage = () => (
  <LoadingSvg tw="w-20 h-20 m-auto translate-y-52" color="#FFCF3F" />
)

export default LoadingSvg

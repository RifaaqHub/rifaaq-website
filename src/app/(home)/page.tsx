'use client'

import React from 'react'
import Hero from './hero'
import About from './about'
import Offerings from './offerings'
import NewsLetterForm from './newsletterForm'
import { zonedTimeToUtc } from 'date-fns-tz'
import tw from 'twin.macro'
import CountDown from '../countdown'

const Home = () => {
  const targetTimeZone = 'Africa/Lagos' // WAT is Africa/Lagos time zone
  const watDateTime = zonedTimeToUtc(
    new Date(2023, 7, 20, 17, 0, 0),
    targetTimeZone,
  )
  const now = new Date()
  const isPrelaunch = now < watDateTime

  return (
    <>
      <div
        css={[
          isPrelaunch && tw`fixed w-full h-full overflow-hidden z-[200] top-0`,
          !isPrelaunch && tw`hidden`,
        ]}
      >
        <CountDown />
      </div>
      <Hero />
      <About />
      <Offerings />
      <NewsLetterForm />
    </>
  )
}

export default Home

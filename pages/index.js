import Head from 'next/head'
import Image from 'next/image'
import Code from '../components/Code'
import Hero from '../components/Hero'
import Phone from '../components/Phone'
import Portfolio from '../components/Portfolio'
import Stack from '../components/Stack'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="Container">
      <Hero />
      <Stack />
      <Portfolio />

    </div>
  )
}

import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import ordinal from 'ordinal'
import Confetti, { ConfettiConfig } from 'react-dom-confetti'

import Count from '../db/incrementCount'
import styles from './index.module.scss'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      count: await Count.increment(),
    },
  }
}

interface IndexProps {
  count: number
}

export default function Index({ count }: IndexProps) {
  const [confetti, setConfetti] = useState(false)

  useEffect(() => {
    setConfetti(true)
  })

  const config: ConfettiConfig = {
    spread: 360,
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Congrats, you're the {ordinal(count)} person to click the button!
      </h1>
      <p className={styles.github}>
        I see you've found my <b>pointless profile button project</b>. Since I
        now know you're the type of person who likes clicking buttons, it would
        mean a lot if you{' '}
        <a href="https://github.com/jdtzmn/pointless-profile-button">
          starred this project's GitHub repository
        </a>
        .
      </p>
      <Confetti active={confetti} config={config} />
    </div>
  )
}

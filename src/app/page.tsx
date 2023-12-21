import Image from 'next/image'

import * as styles from "./page.css";
import { Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>dai chat</h1>
      
      <Text>Text of RadixUI</Text>
    </main>
  )
}

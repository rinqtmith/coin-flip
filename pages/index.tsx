import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [result, setResult] = useState<'TAILS' | 'HEADS' | null>(null);
  const [ani, setAni] = useState<'animate-coin' | ''>('')

  const handleClick = () => {
    setResult(null)
    setAni('animate-coin')
    let coin = Math.floor(Math.random() * 2)

    setTimeout(() => {
      if (coin) {
        setResult('HEADS')
      } else {
        setResult('TAILS')
      }
      setAni('')
    }, 4000)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '5em'
      }}
    >
      <Head>
        <title>Flip a coin!</title>
        <meta name='description' content='Coin flipper!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className={'coin ' + ani}>{result}</div>
        <span><div onClick={handleClick}></div></span>
      </main>
    </div>
  );
};

export default Home;

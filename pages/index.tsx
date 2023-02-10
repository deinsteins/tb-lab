import Wrapper from 'components/layout/Wrapper'
import Image from 'next/image'
import Responsive from 'components/layout/Responsive';
import XrayImage from '../public/images/ilustration/xray.png';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TB Lab - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper className='text-white' footer>
      <Responsive className='flex flex-col gap-2 font-raleway'>
        <div className='flex mx-auto'>
          <div className='flex my-auto flex-col'>
            <h1 className='text-3xl'>Sistem klasifikasi gambar chest x-ray penyakit</h1>
            <h1 className='font-bold text-3xl'>Tuberculosis</h1>
          </div>
          <Image alt='xray' src={XrayImage} width={300} />
        </div>
        <div className='mx-auto'>
          <button type="button" className="w-[15rem] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:w-[16rem] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold text-lg px-5 py-2.5 text-center tracking-widest mr-2 mb-2"><Link href="/predict" legacyBehavior><a>Start Predict &gt;</a></Link></button>
        </div>
      </Responsive>
    </Wrapper>
    </>
  )
}

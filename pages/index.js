import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="main h-screen relative w-full">
        <div className="name absolute top-8 left-10 text-4xl antialiased"><div class="font-bold animate-charcter">ByteAi</div></div>
        <div className="heading w-3/4 mx-auto h-full flex justify-center items-center flex-col">
          <div className="name pb-10 text-6xl antialiased">Driver Sleepness Detection</div>
          <div className="disc text-xl pb-10 text-center antialiased">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, perspiciatis. Culpa sint maiores corporis sapiente! Quis sapiente qui eum minus similique! Architecto sequi inventore doloremque numquam iste corporis quidem officiis totam pariatur esse dolor vitae ut neque nihil, quod incidunt enim dignissimos illum maiores? Autem magni quia voluptatibus quo maxime</div>
          <div className="btn"><Link href={"./main"}><button className="glow-on-hover" type="button"><p className='text-xl antialiased uppercase font-bold'>Let's Safe</p></button></Link></div>
        </div>
        <div className="github absolute text-5xl bottom-8 left-10"><Link href={"https://github.com/Byte-Brains-Ai/IW_ByteAi"} target="_blank"><AiFillGithub/></Link></div>
        <div className="github absolute text-5xl bottom-8 right-10"><Link href={"https://github.com/Byte-Brains-Ai/IW_ByteAi"} target="_blank"><AiOutlineInstagram/></Link></div>
      </div>
    </>
  )
}

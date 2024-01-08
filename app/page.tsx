import Image from 'next/image';
import {  } from "module";

export default function Home() {
  const now = new Date()
  const years = now.getFullYear() - 2007;

  return (
    <div className="mx-auto max-w-2xl font-mono text-2xl text-center">
      <Image className="rounded-full mx-auto my-10" src="/img/rich.jpg" alt="s picture of rich perez" width="100" height="100" />
      <p>Hello 👋🏽 my name is <span className="font-black text-white">Rich Perez</span> and I'm a full-stack developer with {years}+ years of experience.</p>
    </div>
  )
}

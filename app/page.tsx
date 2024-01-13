import Link from 'next/link';
import Image from 'next/image';
import { featured } from '@/src/repositories/projects';
import Project from '@/src/components/Project';

export default function Home() {
  const now = new Date()
  const years = now.getFullYear() - 2007;

  return <div className="flex flex-col gap-20">
    <section className="mx-auto max-w-2xl font-mono text-2xl text-center">
      <Image className="rounded-full mx-auto my-10" src="/img/rich.jpg" alt="picture of rich perez" width="100" height="100" />
      <p>Hello 👋🏽 my name is <span className="font-black text-white">Rich Perez</span> and I am a full-stack developer with {years}+ years of experience.</p>
    </section>
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold font-mono text-center border-b border-slate-500 pb-4">What I've worked on</h2>
      <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {featured().map(project => {
          return <li key={project.title}>
            <Project project={project} />
          </li>
        })}
      </ol>
      <div className="flex justify-center">
        <Link className="btn btn-error text-white" href="/projects">
          View More Projects <i className="las la-chevron-right"></i>
        </Link>
      </div>
    </section>
  </div>
}

import Image from 'next/image';
import Link from 'next/link';
import LinkedInButton from './buttons/LinkedInButton';
import ResumeButton from './buttons/ResumeButton';

export default function SiteHeader() {
    return <header className="flex flex-col md:flex-row items-center md:justify-between px-4 py-4 md:py-0 border-b border-slate-500">
      <Link href="/">
        <Image src="/img/site-logo.png" alt="imperez logo" width="300" height="86" />
      </Link>
      <nav className="flex gap-2 justify-center">
        <Link className="btn btn-ghost md:my-2" href="/projects">Projects</Link>
        <ResumeButton />
        <LinkedInButton />
      </nav>
    </header>;
}
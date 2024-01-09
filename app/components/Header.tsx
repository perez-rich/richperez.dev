import Image from 'next/image';
import LinkedInButton from './buttons/LinkedInButton';
import ResumeButton from './buttons/ResumeButton';

export default function Header() {
    return <header className="flex flex-col md:flex-row items-center md:justify-between px-4 border-b py-4 md:py-0 border-slate-500">
    <a href="/"><Image src="/img/site-logo.png" alt="imperez logo" width="300" height="86" /></a>
    <nav className="flex gap-2 justify-center">
      <LinkedInButton />
      <ResumeButton />
    </nav>
  </header>;
}
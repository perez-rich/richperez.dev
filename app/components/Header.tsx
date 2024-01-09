import Image from 'next/image';

export default function () {
    return <header className="flex flex-col md:flex-row items-center md:justify-between px-4 border-b py-4 md:py-0 border-slate-500">
    <a href="/"><Image src="/img/site-logo.png" alt="imperez logo" width="300" height="86" /></a>
    <nav className="flex gap-2 justify-center">
      <a className="btn btn-sm btn-primary text-white md:my-4" href="https://www.linkedin.com/in/imperez/" target="_blank" >LinkedIn</a>
      <a className="btn btn-sm btn-ghost text-white md:my-4" href="https://docs.google.com/document/d/1-X2XsNCaCy0j93hHALWcO9V_5NWPxGGYRBbh7p0eAxk/export?format=pdf" target="_blank">
        Resume <i className="lar la-file-pdf"></i>
      </a>
    </nav>
  </header>;
}
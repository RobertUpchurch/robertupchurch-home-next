import NavLink from "src/components/base/NavLink";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";

const LINKS = [];

const SOCIALS = [
  "https://github.com/robertupchurch",
  "https://linkedin.com/in/robert-upchurch/",
  "https://youtube.com/c/RobertUpchurch-defi",
];

export default function HeaderDefault() {
  return (
    <header className="bg-gray-200 text-white z-30 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Robert Upchurch</span>
                <div className="relative h-10 w-48">Robert Upchurch</div>
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {LINKS.map((link, key) => (
                <HeaderLink key={key} link={link} />
              ))}
            </div>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden ml-10 space-x-4">
            <MenuIcon className="h-10" />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex ml-10 space-x-4">
            {SOCIALS.map((account) => (
              <SocialIcon key={account} url={account} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export function HeaderLink({ link }) {
  return (
    <NavLink
      href={link.href}
      classes="text-gray-500 hover:border-gray-300 hover:text-gray-700"
      activeClasses="border-b border-indigo-500 text-gray-900"
      external={link.external}
    >
      {link.name}
    </NavLink>
  );
}

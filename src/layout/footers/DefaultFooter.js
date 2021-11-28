import NavLink from "src/components/base/NavLink";
import moment from "moment";

const LINKS = [
  {
    header: "Projects",
    links: [
      {
        name: "Rob Coin (ERC20)",
        href: "https://coin.robertupchurch.com",
        external: true,
      },
      {
        name: "Rob NFT (ERC722)",
        href: "https://coin.robertupchurch.com",
        external: true,
      },
      {
        name: "Rob DEX (UniSwapV2)",
        href: "https://coin.robertupchurch.com",
        external: true,
      },
    ],
  },
  {
    header: "Learn",
    links: [
      {
        name: "YouTube",
        href: "https://youtube.com/c/RobertUpchurch-defi",
        external: true,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/robert-upchurch/",
        external: true,
      },
      {
        name: "Github",
        href: "https://github.com/robertupchurch",
        external: true,
      },
    ],
  },
  {
    header: "Connect",
    links: [
      {
        name: "YouTube",
        href: "https://youtube.com/c/RobertUpchurch-defi",
        external: true,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/robert-upchurch/",
        external: true,
      },
      {
        name: "Github",
        href: "https://github.com/robertupchurch",
        external: true,
      },
    ],
  },
  {
    header: "Companies",
    links: [
      {
        name: "Axia Labs",
        href: "https://axialabs.com",
        external: true,
      },
      {
        name: "Realium",
        href: "https://realium.io",
        external: true,
      },
      {
        name: "Omnicore",
        href: "https://omnicore.com",
        external: false,
      },
    ],
  },
];

export default function DefaultFooter() {
  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1>Robert Upchurch</h1>
            <p className="text-gray-500 text-base">
              Robert Upchurch is a young entrepreneur that has been involved in
              the growth of Axia Labs, Realium, and the Utah Crytpo Community.
              He contributes to several DeFi projects and provides smart
              contract auditing services.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 xl:mt-0 xl:col-span-2">
            {LINKS.map((section, key) => (
              <FooterSection key={key} section={section} />
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {moment().format("YYYY")} RobertUpchurch.com All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export const FooterSection = ({ section }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        {section.header}
      </h3>
      <ul role="list" className="mt-4 space-y-4">
        {section.links.map((link) => (
          <FooterLink key={link.href} link={link} />
        ))}
      </ul>
    </div>
  );
};

export const FooterLink = ({ link }) => {
  return (
    <li>
      <NavLink
        href={link.href}
        exact
        classes="text-base text-gray-500 hover:text-gray-900"
        external={link.external}
      >
        {link.name}
      </NavLink>
    </li>
  );
};

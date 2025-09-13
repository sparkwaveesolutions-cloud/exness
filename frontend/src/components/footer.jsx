export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="[align-items:normal] box-border caret-transparent flex flex-col flex-wrap justify-normal md:items-center md:flex-row md:justify-between">
        <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex flex-col gap-y-2 md:items-center md:gap-x-6 md:flex-row">
          <a
            href="/"
            className="text-xs box-border caret-transparent block leading-[18px] underline decoration-[0.5px] md:text-sm md:leading-5 hover:decoration-1"
          >
            Privacy notice
          </a>
          <a
            href="/"
            className="text-xs box-border caret-transparent block leading-[18px] underline decoration-[0.5px] md:text-sm md:leading-5 hover:decoration-1"
          >
            Cookie policy
          </a>
        </div>
        <div className="box-border caret-transparent mt-6 md:mt-0">
          <p className="text-gray-900/60 text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-5">
            © 2025 Exness
          </p>
        </div>
      </div>
    </div>
  );
};

export const FooterLogo = () => {
  return (
    <a href="/" className="text-sky-600 box-border caret-transparent inline-block hover:underline">
      <img
        src="/logo.svg"
        alt="logo"
        className="box-border caret-transparent h-6 w-36"
      />
    </a>
  );
};

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const SocialLinks = () => {
  const iconClasses = "h-10 w-10 text-gray-900/60 hover:text-sky-600";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/"
        className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <FaFacebookF className={iconClasses} />
      </a>
      <a
        href="/"
        className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <FaTwitter className={iconClasses} />
      </a>
      <a
        href="/"
        className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <FaLinkedinIn className={iconClasses} />
      </a>
    </div>
  );
};


export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto pb-[0.8px] md:max-w-[1032px]">
      <div className="box-border caret-transparent leading-[0px] mb-6 md:mb-12">
        <FooterLogo />
      </div>
      <div className="box-border caret-transparent">
        <SocialLinks />
      </div>
      <div className="box-border caret-transparent mt-6 md:mt-12">
        <p className="text-gray-900/60 text-xs box-border caret-transparent leading-[18px] md:text-sm md:leading-5">
          Important note: Please ensure all communications come from official Exness email addresses
          ending in @exness.com to ensure authenticity and security.
        </p>
      </div>
      <hr className="text-zinc-500 box-border caret-transparent shrink-0 border-gray-900/10 mt-6 mb-4 border-t-0 border-x-0 border-solid md:mt-12 md:mb-6" />
      <FooterBottom />
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-cover box-border caret-transparent bg-center mt-8 mx-6 pb-16 md:mt-16 md:mx-[84px] md:pb-32">
      <FooterContent />
    </footer>
  );
};

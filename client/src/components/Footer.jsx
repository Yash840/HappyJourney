import { footerLinks, images } from "../assets/assets";

const Footer = () => {
  const linkSections = footerLinks;

  return (
    <div className="px-6 md:px-16 lg:px-10 xl:px-32">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img
            className="w-34 md:w-32"
            src={images.Flogo}
            alt="dummyLogoColored"
          />
          <p className="max-w-[410px] mt-6">
            HappyJourney is your friendly and reliable platform for booking bus tickets with ease. We're dedicated to making your travel planning simple, enjoyable, and affordable, so you can look forward to every trip.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.path} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © Cross Interactives All Right Reserved.
      </p>
    </div>
  );
};

export default Footer

// src/components/SocialIcons.js
import { type ReactNode } from "react";
import { socials } from "@/constants";

const SocialIcons = () => {
  return (
    <ul className="flex gap-5 flex-wrap">
      {socials.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
        >
          <img src={item.iconUrl} width={16} height={16} alt={item.title} />
        </a>
      ))}
    </ul>
  );
};

export default SocialIcons;

import React from "react";
import Image from "next/image";

type SocialMediaIconProps = {
  title: string;
  href: string;
  src: string;
};

const SocialMediaIcon = ({ title, href, src }: SocialMediaIconProps) => {
  return (
    <li>
      <a title={title} href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={title} width="40" height="40" />
      </a>
    </li>
  );
};

export default SocialMediaIcon;

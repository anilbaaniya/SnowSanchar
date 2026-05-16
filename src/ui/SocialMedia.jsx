import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { AiOutlineTikTok } from "react-icons/ai";
export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-3">
      <a
        href="https://www.facebook.com/share/1DuhmfhB1X/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#ffbf00]"
      >
        <FaFacebookF /> Facebook
      </a>

      <a
        href="https://www.instagram.com/snow.sanchar_production?igsh=MWxrMnhubHl0OGJhaw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#ffbf00]"
      >
        <FaInstagram /> Instagram
      </a>

      <a
        href="https://www.tiktok.com/@snow.sanchar_production?_r=1&_t=ZS-96P6yfYn9ct"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#ffbf00]"
      >
        <AiOutlineTikTok /> TikTok
      </a>
    </div>
  );
}

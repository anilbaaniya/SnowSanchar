import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { AiOutlineTikTok } from "react-icons/ai";
export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-3">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#ffbf00]"
      >
        <FaFacebookF /> Facebook
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#ffbf00]"
      >
        <FaInstagram /> Instagram
      </a>

      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#ffbf00]"
      >
        <AiOutlineTikTok /> TikTok
      </a>
    </div>
  );
}

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const navItems = [
  { id: "home", icon: <FaHome /> },
  { id: "about", icon: <FaUser /> },
  { id: "projects", icon: <FaProjectDiagram /> },
  { id: "contact", icon: <FaEnvelope /> },
];

const Footer = () => {
  // Hàm xử lý cuộn mượt giống hệt trên Header
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="hidden lg:block w-full bg-transparent pt-20 mt-20 mb-4 ">
      <div className="w-full px-6 md:px-12 flex flex-row justify-between items-center">
        {/* Bên trái: Logo */}
        <div className="text-xl font-bold tracking-wider text-white">
          Portfolio
        </div>

        {/* Ở giữa: Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://facebook.com/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6 text-white/70 hover:text-blue-500 transition-all" />
          </a>
          <a
            href="https://instagram.com/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-white/70 hover:text-pink-500 transition-all" />
          </a>
          <a
            href="https://tiktok.com/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok className="w-6 h-6 text-white/70 hover:text-gray-400 transition-all" />
          </a>
          <a
            href="https://github.com/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-white/70 hover:text-purple-400 transition-all" />
          </a>
        </div>

        {/* Bên phải: 4 ô vuông Menu với hiệu ứng giống Header */}
        <div className="flex flex-row items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)} // Thêm sự kiện onClick ở đây
              className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 text-white/70 hover:border-white hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all duration-300 rounded-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

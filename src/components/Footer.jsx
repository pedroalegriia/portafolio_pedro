import React from 'react';
import { navigation, socialLinks } from '../data/navigation';
import { Heart, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="text-2xl font-bold text-white mb-4 inline-block">
              Pedro<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 mb-4 max-w-md">
              Desarrollador Full Stack especializado en crear soluciones tecnológicas 
              innovadoras y eficientes. Transformando ideas en realidad digital.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name === 'Email' ? <Mail size={20} /> : social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p>pedro.alegriia@gmail.com</p>
              <p>+52 312 141 7718</p>
              <p>Colima, México</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Pedro Antonio Cruz Alegria. Hecho con 
            <Heart size={16} className="text-red-500 mx-1" /> 
            y mucho código
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Desarrollado con React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
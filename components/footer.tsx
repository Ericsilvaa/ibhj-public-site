import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import {
  CONTACT_INFOS_FOOTER,
  MORE_LINKS,
  QUICK_LINKS,
} from "../constants/navigation";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Igreja Batista de Henrique Jorge
            </h3>
            <p className="mb-4">55 anos cuidando de vidas em amor.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/ibhenriquejorge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/IB.Henrique.Jorge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link
                href="https://www.youtube.com/@CanalIBHJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Mais Links</h3>
            <ul className="space-y-2">
              {MORE_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              {CONTACT_INFOS_FOOTER.map(({ icon: Icon, value }, i) => (
                <li key={i} className="flex items-start">
                  <Icon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Igreja Batista de Henrique Jorge.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

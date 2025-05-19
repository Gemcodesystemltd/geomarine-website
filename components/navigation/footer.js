"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-[#173668] px-4 pt-16 pb-7 md:px-16">
      <section className="grid gap-12 grid-cols-1 lg:grid-cols-3 text-white">
        {/* Logo & Copyright */}
        <div className="space-y-4">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="Geomarine Logo"
              className="h-14 w-auto mb-4"
            />
          </Link>
          <p className="text-sm leading-relaxed hidden lg:block">
            © {new Date().getFullYear()} Geomarine Systems Limited. All Rights
            Reserved.
          </p>
        </div>
        {/* Quick Links */}
        <div className="space-y-4 lg:mx-auto">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`transition ${
                    isActive(link.path) ? "underline" : "hover:underline"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-base">
            Geomarine Systems Limited, <br />
            234B Iyowuna Drive, Peter Odili Rd, Off Trans-Amadi, Port-Harcourt,
            Rivers State, Nigeria.
          </p>
          <p className="text-base">
            <span className="text-lg font-semibold">Telephone:</span> <br />
            – +234 703 927 8982 <br />
            – +234 803 790 0029
          </p>
          <p className="text-base">
            <span className="text-lg font-semibold">E-mail:</span>{" "}
            <a href="mailto:mail@geomarinesystems.net" className="underline">
              mail@geomarinesystems.net
            </a>
          </p>
        </div>
      </section>
      <div className="text-center md:text-start w-full pt-10 text-white">
        <p className="text-sm leading-relaxed lg:hidden">
          © {new Date().getFullYear()} Geomarine Systems Limited. All Rights
          Reserved.
        </p>
        <p className="text-sm">
          Developed by:{" "}
          <a href="https://gemcodesystemlimited.com/" target="_blank">
            Gemcode System Limited.
          </a>
        </p>
      </div>
    </div>
  );
}

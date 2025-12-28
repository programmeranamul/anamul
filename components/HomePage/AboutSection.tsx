import {
  Link,
  Gamepad2,
  Linkedin,
  Github,
  Youtube,
  Clock,
  Heart,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import RustImage from "../HeroSection/RustImage";

const socialLinks = [
  {
    name: "Website",
    icon: <Gamepad2 size={18} />,
    url: "#",
  },
  {
    name: "Linkedin",
    icon: <Linkedin size={18} />,
    url: "#",
  },
  {
    name: "Github",
    icon: <Github size={18} />,
    url: "#",
  },
  {
    name: "Youtube",
    icon: <Youtube size={18} />,
    url: "#",
  },
];

function AboutSection() {
  return (
    <section className="px-6 py-16">
      <div className="grid grid-cols-2">
        <div></div>
        <div className="grid gap-6">
          <div className="p-4 rounded-xl shadow-feature-card lg:p-6 flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <Link size={18} className="" />
              <span className="text-sm font-medium"> Connect</span>
            </div>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex gap-3 items-center transition-colors hover:text-primary-500 text-muted-foreground"
                >
                  {link.icon}
                  <span className="text-sm"> {link.name}</span>
                </a>
              ))}
            </div>
            <div className="text-sm">
              Email :{" "}
              <a
                href="#"
                className="hover:underline hover:text-primary transition-colors"
              >
                {" "}
                morshedulmunna1@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl shadow-feature-card flex flex-col gap-6 p-4 lg:p-6">
              <div className="flex gap-x-2 items-center">
                <Clock size={18} />
                <p className="text-sm font-medium">Coding Hours</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold">10,500+ hrs</h3>
                <p className="text-sm font-normal mt-2">
                  Experience : ~4.5 years
                </p>
              </div>
            </div>

            <div className="rounded-xl shadow-feature-card flex flex-col gap-6 p-4 lg:p-6">
              <div className="flex gap-x-2 items-center">
                <Heart size={18} />
                <p className="text-sm font-medium">Favorite Technology</p>
              </div>
              <div className="flex justify-center">
                <RustImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

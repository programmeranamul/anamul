import {
  Link,
  Gamepad2,
  Linkedin,
  Github,
  Youtube,
  ArrowRight,
} from "lucide-react";

const socialLinks = [
  {
    name: "Website",
    icon: (
      <Gamepad2
        size={18}
        className=" w-5 h-5 text-secondary-foreground hover:text-primary"
      />
    ),
    url: "#",
  },
  {
    name: "Linkedin",
    icon: (
      <Linkedin
        size={18}
        className=" w-5 h-5 text-secondary-foreground hover:text-primary"
      />
    ),
    url: "#",
  },
  {
    name: "Github",
    icon: (
      <Github
        size={18}
        className=" w-5 h-5 text-secondary-foreground hover:text-primary"
      />
    ),
    url: "#",
  },
  {
    name: "Youtube",
    icon: (
      <Youtube
        size={18}
        className=" w-5 h-5 text-secondary-foreground hover:text-primary"
      />
    ),
    url: "#",
  },
];

const generaleLinks = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
  {
    title: "Projects",
    url: "#",
  },
  {
    title: "Projects",
    url: "#",
  },
];
const socialLinks1 = [
  {
    title: "Github",
    url: "#",
  },
  {
    title: "Linkedin",
    url: "#",
  },
  {
    title: "Facebook",
    url: "#",
  },
  {
    title: "Twitter",
    url: "#",
  },
];

function Footer() {
  return (
    <footer className="py-16">
      <div className="text-foreground shadow-feature-card rounded-lg px-6 py-8 md:px-12 lg:px-16">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div>Anamul.</div>
            <p className="text-sm text-secondary-foreground max-w-md">
              Have a project in mind? I’ll respond within 6 hours.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-medium mb-4"> General</h3>
              <div className="text-sm space-y-2">
                {generaleLinks.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="text-secondary-foreground hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-4"> Social</h3>
              <div className="text-sm space-y-2">
                {socialLinks1.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="text-secondary-foreground hover:text-primary transition-colors block"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-4"> Resources</h3>
              <a
                href="#"
                className="text-secondary-foreground hover:text-primary transition-colors block text-sm"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-base font-medium mb-4">
              Subscribe to Anamul&apos;s blog newsletter
            </h3>
            <p className="text-sm text-secondary-foreground">
              Get the latest news and updates delivered straight to your inbox.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-background text-foreground font-medium shadow-feature-card border border-foreground/5 transition-all duration-200 hover:translate-y-0.5 hover:border-foreground/20"
            >
              <span>Send Email</span> <ArrowRight />{" "}
            </a>
          </div>
        </div>
        <div className="border-t border-[#2f2f30] pt-6 text-center flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground">
            <p>©  2025 Anamul , all rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0"> 
<a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
<a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

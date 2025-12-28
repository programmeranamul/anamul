import {
  Link,
  Gamepad2,
  Linkedin,
  Github,
  Youtube,
  Clock,
  Heart,
  MoveRight,
} from "lucide-react";

const socialLinks = [
  {
    name: "Website",
    icon: <Gamepad2 size={18} className=" w-5 h-5 text-secondary-foreground hover:text-primary" />,
    url: "#",
    
  },
  {
    name: "Linkedin",
    icon: <Linkedin size={18} className=" w-5 h-5 text-secondary-foreground hover:text-primary"/>,
    url: "#",
  },
  {
    name: "Github",
    icon: <Github size={18} className=" w-5 h-5 text-secondary-foreground hover:text-primary"/>,
    url: "#",
  },
  {
    name: "Youtube",
    icon: <Youtube size={18} className=" w-5 h-5 text-secondary-foreground hover:text-primary"/>,
    url: "#",
  },
];

const generaleLinks = [
    {
        title: 'Home',
        url: "#"
    },
    {
        title: 'Blog',
        url: "#"
    },
    {
        title: 'Projects',
        url: "#"
    },
    {
        title: 'Projects',
        url: "#"
    },
]
const socialLinks1 = [
    {
        title: 'Github',
        url: "#"
    },
    {
        title: 'Linkedin',
        url: "#"
    },
    {
        title: 'Facebook',
        url: "#"
    },
    {
        title: 'Twitter',
        url: "#"
    },
]

function Footer() {
  return (
    <footer className="py-16">
      <div className="text-foreground shadow-feature-card rounded-lg px-6 py-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div>Anamul.</div>
          <p className="text-sm text-secondary-foreground max-w-md">
            Have a project in mind? I’ll respond within 6 hours.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-base font-medium mb-4" > General</h3>
                <div className="text-sm space-y-2">
                    {
                        generaleLinks.map((item, index) => <a href={item.url} key={index} className="text-secondary-foreground hover:text-primary transition-colors block">{item.title}</a>)
                    }
                </div>
            </div>
            <div>
                <h3 className="text-base font-medium mb-4" > Social</h3>
                <div className="text-sm space-y-2">
                    {
                        socialLinks1.map((item, index) => <a href={item.url} key={index} className="text-secondary-foreground hover:text-primary transition-colors block">{item.title}</a>)
                    }
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

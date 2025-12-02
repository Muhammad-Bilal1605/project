import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Fundraise for',
      links: ['Medical', 'Emergency', 'Memorial', 'Education', 'Nonprofit', 'Animals'],
    },
    {
      title: 'Learn more',
      links: ['How it works', 'Why FundRise', 'Success stories', 'Supported countries', 'Pricing'],
    },
    {
      title: 'Resources',
      links: ['Help center', 'Blog', 'Fundraising tips', 'Guidelines', 'Careers'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <h3 className="text-lg font-bold text-white">FundRise</h3>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              The trusted platform for crowdfunding. Helping people raise money for what matters most.
            </p>
            {/* Social media icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 bg-gray-800 hover:bg-amber-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 FundRise. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#legal" className="text-gray-400 hover:text-white transition-colors">
                Legal
              </a>
              <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

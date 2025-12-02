import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Discover', href: '#featured' },
    { label: 'About us', href: '#about' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FundRise</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="primary" size="sm">
              Start a fundraiser
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-amber-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <Button variant="ghost" size="md" fullWidth>
                  Sign in
                </Button>
                <Button variant="primary" size="md" fullWidth>
                  Start a fundraiser
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

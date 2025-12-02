import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const floatingCategories = [
    {
      label: 'Your cause',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop&q=80',
      position: 'top-8 left-[18%]',
      delay: '0s',
    },
    {
      label: 'Medical',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=300&h=300&fit=crop&q=80',
      position: 'top-1/2 left-[8%] -translate-y-1/2',
      delay: '0.5s',
    },
    {
      label: 'Emergency',
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=300&h=300&fit=crop&q=80',
      position: 'bottom-16 left-[18%]',
      delay: '1s',
    },
    {
      label: 'Education',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=300&fit=crop&q=80',
      position: 'top-8 right-[18%]',
      delay: '1.5s',
    },
    {
      label: 'Animals',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=300&h=300&fit=crop&q=80',
      position: 'top-1/2 right-[8%] -translate-y-1/2',
      delay: '2s',
    },
    {
      label: 'Business',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop&q=80',
      position: 'bottom-16 right-[18%]',
      delay: '2.5s',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-warm-50 overflow-hidden py-16 lg:py-24">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Category Circles - Arranged in a circle */}
      {floatingCategories.map((category, index) => (
        <div
          key={index}
          className={`hidden xl:block absolute ${category.position} animate-float pointer-events-none`}
          style={{ animationDelay: category.delay }}
        >
          <div className="relative">
            {/* Partial arc ring - warm amber/orange gradient */}
            <svg className="absolute -inset-2 w-36 h-36" style={{ transform: 'rotate(-45deg)' }}>
              <circle
                cx="72"
                cy="72"
                r="66"
                fill="none"
                stroke="url(#amberGradient)"
                strokeWidth="8"
                strokeDasharray="280 420"
                strokeLinecap="round"
                opacity="0.8"
              />
              <defs>
                <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Image circle */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 whitespace-nowrap">
              <span className="text-sm font-semibold text-gray-700">{category.label}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 animate-fadeIn">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-amber-200 text-amber-800 text-sm font-medium shadow-sm">
              #1 crowdfunding platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fadeIn">
            Successful
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              fundraisers
            </span>
            <br />
            start here
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-500">
            Turn your dreams into reality. Start fundraising in minutes.
          </p>

          {/* CTA Button - Amber theme */}
          <div className="animate-fadeIn animation-delay-1000 mb-12">
            <Button size="lg" variant="primary" className="text-base px-10 py-4 shadow-xl hover:shadow-2xl">
              Start a FundRise
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeIn animation-delay-1500">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">$50M+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Raised weekly</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">2M+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Fundraisers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">150+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Countries</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}

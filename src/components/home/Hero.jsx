import Button from '../common/Button';
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-warm-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 text-amber-800 text-sm font-medium mb-6 shadow-sm">
              <TrendingUp className="w-4 h-4" />
              Trusted by millions worldwide
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Help make dreams
              <span className="block mt-2 text-amber-700">
                come true
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              Whether you're raising money for yourself, friends, family, or charity—we're here to support you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" variant="primary">
                Start fundraising free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary">
                Discover campaigns
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-medium">Secure payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-medium">Fast withdrawals</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80" 
                alt="People helping each other"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating stat cards */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-900">$50M+</div>
                  <div className="text-xs text-gray-600">Weekly</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-900">2M+</div>
                  <div className="text-xs text-gray-600">Campaigns</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Card from '../common/Card';
import Button from '../common/Button';
import { Shield, CheckCircle, Headphones, Zap, Star, ArrowRight } from 'lucide-react';

export default function TrustSection() {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Secure & Protected',
      description: 'Bank-level security with encryption and fraud protection for every donation.',
    },
    {
      icon: CheckCircle,
      title: 'Giving Guarantee',
      description: 'Your donation is protected. If something goes wrong, we\'ve got you covered.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 customer support team ready to help you succeed.',
    },
    {
      icon: Zap,
      title: 'Fast & Easy',
      description: 'Set up in minutes and receive funds quickly with no waiting period.',
    },
  ];

  const testimonials = [
    {
      quote: "This platform helped us raise funds for our daughter's medical treatment. The support was incredible and we reached our goal in just two weeks.",
      author: "Michael Chen",
      role: "Fundraiser Organizer",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    },
    {
      quote: "Simple, transparent, and trustworthy. I've donated to several causes and love seeing the direct impact of my contributions.",
      author: "Emily Rodriguez",
      role: "Regular Donor",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
    },
    {
      quote: "Started my campaign in minutes. The tools and guidance made everything so straightforward. Highly recommend to anyone needing support.",
      author: "James Wilson",
      role: "Small Business Owner",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why people trust FundRise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to keeping your fundraising safe and successful
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center group hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-xl mb-4 group-hover:bg-amber-600 transition-colors">
                  <Icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Stories from our community
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section with image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&h=600&fit=crop&q=80"
              alt="People collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-800/95"></div>
          </div>
          
          <div className="relative text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to make a difference?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Join millions of people raising money for causes they care about. Start your free fundraiser today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start your fundraiser
                <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/50 rounded-lg font-semibold transition-all">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

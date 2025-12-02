import { TrendingUp, Heart, Globe, Rocket } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      number: '$50M+',
      label: 'Raised every week',
      icon: TrendingUp,
      subtext: 'Supporting causes worldwide',
    },
    {
      number: '100M+',
      label: 'Donations received',
      icon: Heart,
      subtext: 'From generous donors',
    },
    {
      number: '150+',
      label: 'Countries supported',
      icon: Globe,
      subtext: 'Global reach and impact',
    },
    {
      number: '2M+',
      label: 'Fundraisers started',
      icon: Rocket,
      subtext: 'Dreams being realized',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Making a global impact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Together, we're creating positive change around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-200 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

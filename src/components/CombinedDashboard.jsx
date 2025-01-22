import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, Users, Link as LinkIcon, Unlink, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ActivityGrid from './ActivityGrid';

const CombinedDashboard = () => {
  const [linkedPlatforms, setLinkedPlatforms] = React.useState({
    instagram: true,
    youtube: true,
    x: true,
    linkedin: true
  });

  const platformGrowth = [
    { month: 'Sep', instagram: 15000, youtube: 20000, x: 12000, linkedin: 8000 },
    { month: 'Oct', instagram: 18000, youtube: 25000, x: 14000, linkedin: 10000 },
    { month: 'Nov', instagram: 22000, youtube: 30000, x: 16000, linkedin: 12000 },
    { month: 'Dec', instagram: 25000, youtube: 35000, x: 18000, linkedin: 14000 },
    { month: 'Jan', instagram: 28000, youtube: 40000, x: 20000, linkedin: 16000 }
  ];

  const platformCards = [
    { 
      id: 'instagram', 
      name: 'Instagram', 
      path: '/instagram', 
      followers: '28K', 
      growth: '+12%', 
      color: '#E1306C',
      icon: Instagram
    },
    { 
      id: 'youtube', 
      name: 'YouTube', 
      path: '/youtube', 
      followers: '40K', 
      growth: '+15%', 
      color: '#FF0000',
      icon: Youtube
    },
    { 
      id: 'x', 
      name: 'X', 
      path: '/x', 
      followers: '20K', 
      growth: '+8%', 
      color: '#000000',
      icon: Twitter
    },
    { 
      id: 'linkedin', 
      name: 'LinkedIn', 
      path: '/linkedin', 
      followers: '16K', 
      growth: '+10%', 
      color: '#0077B5',
      icon: Linkedin
    }
  ];

  const togglePlatform = (platform) => {
    setLinkedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4">
      <div className="max-w-[98vw] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-white">Combined Platform Insights</h1>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {platformCards.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link to={platform.path}>
                <Card className="bg-[#111111] border-none cursor-pointer hover:bg-[#1a1a1a] transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-white flex items-center gap-2">
                      {React.createElement(platform.icon, { 
                        size: 20, 
                        style: { color: platform.color }
                      })}
                      {platform.name}
                      {linkedPlatforms[platform.id] ? (
                        <LinkIcon
                          className="h-4 w-4 text-green-400 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            togglePlatform(platform.id);
                          }}
                        />
                      ) : (
                        <Unlink
                          className="h-4 w-4 text-gray-400 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            togglePlatform(platform.id);
                          }}
                        />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{platform.followers}</div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <p className="text-xs text-green-400">{platform.growth}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Activity Grid */}
        <div className="mb-6">
          <ActivityGrid />
        </div>

        {/* Growth Chart */}
        <Card className="bg-[#111111] border-none">
          <CardHeader>
            <CardTitle className="text-white">Combined Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={platformGrowth}>
                  <defs>
                    <linearGradient id="instagramGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E1306C" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="youtubeGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="xGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000000" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#000000" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="linkedinGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0077B5" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0077B5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f1f1f', border: 'none' }}
                    labelStyle={{ color: '#9ca3af' }}
                  />
                  {linkedPlatforms.instagram && (
                    <Area
                      type="monotone"
                      dataKey="instagram"
                      stroke="#E1306C"
                      fill="url(#instagramGrowth)"
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                  )}
                  {linkedPlatforms.youtube && (
                    <Area
                      type="monotone"
                      dataKey="youtube"
                      stroke="#FF0000"
                      fill="url(#youtubeGrowth)"
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                  )}
                  {linkedPlatforms.x && (
                    <Area
                      type="monotone"
                      dataKey="x"
                      stroke="#000000"
                      fill="url(#xGrowth)"
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                  )}
                  {linkedPlatforms.linkedin && (
                    <Area
                      type="monotone"
                      dataKey="linkedin"
                      stroke="#0077B5"
                      fill="url(#linkedinGrowth)"
                      strokeWidth={2}
                      animationDuration={2000}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Engagement Stats */}
      </div>
    </div>
  );
};

export default CombinedDashboard;

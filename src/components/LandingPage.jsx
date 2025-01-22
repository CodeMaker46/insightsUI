import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const LandingPage = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      color: '#E1306C',
      path: '/instagram',
      description: 'Track your Instagram followers, engagement, and reach'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      color: '#FF0000',
      path: '/youtube',
      description: 'Monitor your YouTube subscribers, views, and watch time'
    },
    {
      name: 'X',
      icon: Twitter,
      color: '#000000',
      path: '/x',
      description: 'Analyze your X followers, engagement, and impressions'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: '#0077B5',
      path: '/linkedin',
      description: 'Measure your LinkedIn connections, engagement, and reach'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Social Media Analytics Dashboard</h1>
          <p className="text-gray-400 text-lg">
            Track and analyze your social media performance across multiple platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={platform.path}>
                  <Card className="bg-[#111111] border-none hover:bg-[#1a1a1a] transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <Icon
                          size={40}
                          style={{ color: platform.color }}
                          className="mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
                        <p className="text-gray-400 text-sm">{platform.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Combined Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;

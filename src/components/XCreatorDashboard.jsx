import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const XCreatorDashboard = () => {
  const impressionData = [
    { date: '2023/7', impressions: 55000, engagement: 15000 },
    { date: '2023/8', impressions: 62000, engagement: 18000 },
    { date: '2023/9', impressions: 58000, engagement: 16000 },
    { date: '2023/10', impressions: 65000, engagement: 20000 },
    { date: '2023/11', impressions: 60000, engagement: 17000 }
  ];

  const engagementTypes = [
    { type: 'Likes', value: '35.2K', color: '#1DA1F2' },
    { type: 'Retweets', value: '8.8K', color: '#17BF63' },
    { type: 'Replies', value: '4.1K', color: '#794BC4' },
    { type: 'Bookmarks', value: '2.5K', color: '#F45D22' }
  ];

  const contentPerformance = [
    { type: 'Text', value: 40 },
    { type: 'Images', value: 35 },
    { type: 'Videos', value: 25 }
  ];

  const bestPostingTimes = [
    { hour: '6am', posts: 45 },
    { hour: '9am', posts: 75 },
    { hour: '12pm', posts: 85 },
    { hour: '3pm', posts: 65 },
    { hour: '6pm', posts: 90 },
    { hour: '9pm', posts: 70 }
  ];

  const topHashtags = [
    '#tech',
    '#coding',
    '#startup',
    '#innovation'
  ];

  const metrics = [
    { title: 'Engagement Rate', value: '4.31%', change: '+0.6%' },
    { title: 'Total Followers', value: '42.5K', change: '+2.1%' },
    { title: 'Impressions', value: '156.2K', change: '+12%' },
    { title: 'Profile Visits', value: '18.3K', change: '+3.2%' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">X Insights</h1>
          <span className="text-gray-400">Last 30 Days</span>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#111111] border-none">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.title}</div>
                  <div className={`text-sm mt-2 ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Engagement Types */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Engagement Types</CardTitle>
            </CardHeader>
            <CardContent>
              {engagementTypes.map((type) => (
                <div key={type.type} className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">{type.type}</span>
                  <span className="text-white font-medium" style={{ color: type.color }}>{type.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Impressions & Engagement Chart */}
          <Card className="col-span-6 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Impressions & Engagement Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impressionData}>
                    <defs>
                      <linearGradient id="impressionsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1DA1F2" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#1DA1F2" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#17BF63" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#17BF63" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Area type="monotone" dataKey="impressions" stroke="#1DA1F2" fill="url(#impressionsGradient)" />
                    <Area type="monotone" dataKey="engagement" stroke="#17BF63" fill="url(#engagementGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Follower Growth */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Follower Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impressionData}>
                    <defs>
                      <linearGradient id="followerGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#794BC4" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#794BC4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Area type="monotone" dataKey="impressions" stroke="#794BC4" fill="url(#followerGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top Hashtags */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Top Hashtags</CardTitle>
            </CardHeader>
            <CardContent>
              {topHashtags.map((hashtag) => (
                <div key={hashtag} className="text-gray-400 mb-2">{hashtag}</div>
              ))}
            </CardContent>
          </Card>

          {/* Content Performance */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Content Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={contentPerformance}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {contentPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#1DA1F2', '#17BF63', '#794BC4'][index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Best Posting Times */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Best Posting Times</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bestPostingTimes}>
                    <XAxis dataKey="hour" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Bar dataKey="posts" fill="#1DA1F2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Audience Insights */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Audience Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 mb-1">Top Location</div>
                  <div className="text-white">San Francisco, USA</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Age Range</div>
                  <div className="text-white">25-34 (52%)</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Active Times</div>
                  <div className="text-white">8AM - 11PM</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Interests</div>
                  <div className="text-white">Tech, Business, News</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default XCreatorDashboard;

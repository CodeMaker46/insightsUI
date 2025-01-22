import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const LinkedInCreatorDashboard = () => {
  const impressionData = [
    { date: '2023/7', impressions: 45000, engagement: 12000 },
    { date: '2023/8', impressions: 52000, engagement: 15000 },
    { date: '2023/9', impressions: 48000, engagement: 13000 },
    { date: '2023/10', impressions: 55000, engagement: 16000 },
    { date: '2023/11', impressions: 50000, engagement: 14000 }
  ];

  const engagementTypes = [
    { type: 'Reactions', value: '28.2K', color: '#0A66C2' },
    { type: 'Comments', value: '6.8K', color: '#057642' },
    { type: 'Shares', value: '3.1K', color: '#7F4CB5' },
    { type: 'Saves', value: '1.5K', color: '#E7A33E' }
  ];

  const contentPerformance = [
    { type: 'Articles', value: 35 },
    { type: 'Posts', value: 45 },
    { type: 'Videos', value: 20 }
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
    '#leadership',
    '#business',
    '#innovation',
    '#career'
  ];

  const metrics = [
    { title: 'Engagement Rate', value: '3.82%', change: '+0.5%' },
    { title: 'Connections', value: '15.5K', change: '+1.8%' },
    { title: 'Post Impressions', value: '125.2K', change: '+10%' },
    { title: 'Profile Views', value: '8.3K', change: '+2.5%' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">LinkedIn Insights</h1>
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
                      <linearGradient id="linkedinImpressionsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0A66C2" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#0A66C2" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="linkedinEngagementGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#057642" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#057642" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Area type="monotone" dataKey="impressions" stroke="#0A66C2" fill="url(#linkedinImpressionsGradient)" />
                    <Area type="monotone" dataKey="engagement" stroke="#057642" fill="url(#linkedinEngagementGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Connection Growth */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Connection Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impressionData}>
                    <defs>
                      <linearGradient id="connectionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7F4CB5" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#7F4CB5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Area type="monotone" dataKey="impressions" stroke="#7F4CB5" fill="url(#connectionGradient)" />
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
                        <Cell key={`cell-${index}`} fill={['#0A66C2', '#057642', '#7F4CB5'][index]} />
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
                    <Bar dataKey="posts" fill="#0A66C2" />
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
                  <div className="text-gray-400 mb-1">Top Industries</div>
                  <div className="text-white">Technology, Finance</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Job Levels</div>
                  <div className="text-white">Senior+ (65%)</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Peak Hours</div>
                  <div className="text-white">9AM - 5PM</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Company Size</div>
                  <div className="text-white">100-1000 (42%)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LinkedInCreatorDashboard;

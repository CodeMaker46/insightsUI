import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const YouTubeCreatorDashboard = () => {
  const viewsData = [
    { date: '2023/7', views: 85000, engagement: 25000 },
    { date: '2023/8', views: 92000, engagement: 28000 },
    { date: '2023/9', views: 88000, engagement: 26000 },
    { date: '2023/10', views: 95000, engagement: 30000 },
    { date: '2023/11', views: 90000, engagement: 27000 }
  ];

  const engagementTypes = [
    { type: 'Likes', value: '85.2K', color: '#FF0000' },
    { type: 'Comments', value: '12.8K', color: '#282828' },
    { type: 'Shares', value: '5.1K', color: '#666666' },
    { type: 'Saves', value: '3.5K', color: '#CC0000' }
  ];

  const contentPerformance = [
    { type: 'Long Form', value: 45 },
    { type: 'Shorts', value: 35 },
    { type: 'Live', value: 20 }
  ];

  const bestPostingTimes = [
    { hour: '6am', posts: 45 },
    { hour: '9am', posts: 75 },
    { hour: '12pm', posts: 85 },
    { hour: '3pm', posts: 65 },
    { hour: '6pm', posts: 90 },
    { hour: '9pm', posts: 70 }
  ];

  const topTags = [
    '#tutorial',
    '#tech',
    '#vlog',
    '#howto'
  ];

  const metrics = [
    { title: 'Watch Time', value: '450K hrs', change: '+1.2%' },
    { title: 'Subscribers', value: '125.5K', change: '+2.1%' },
    { title: 'Total Views', value: '892.2K', change: '+15%' },
    { title: 'Avg. View Duration', value: '8:45', change: '+1.8%' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">YouTube Insights</h1>
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

          {/* Views & Engagement Chart */}
          <Card className="col-span-6 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Views & Engagement Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={viewsData}>
                    <defs>
                      <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF0000" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#FF0000" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#282828" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#282828" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Area type="monotone" dataKey="views" stroke="#FF0000" fill="url(#viewsGradient)" />
                    <Area type="monotone" dataKey="engagement" stroke="#282828" fill="url(#engagementGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Subscriber Growth */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Subscriber Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={viewsData}>
                    <defs>
                      <linearGradient id="subscriberGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#CC0000" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#CC0000" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ background: '#111111', border: 'none' }} />
                    <Area type="monotone" dataKey="views" stroke="#CC0000" fill="url(#subscriberGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top Tags */}
          <Card className="col-span-3 bg-[#111111] border-none">
            <CardHeader>
              <CardTitle className="text-white text-lg">Top Tags</CardTitle>
            </CardHeader>
            <CardContent>
              {topTags.map((tag) => (
                <div key={tag} className="text-gray-400 mb-2">{tag}</div>
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
                        <Cell key={`cell-${index}`} fill={['#FF0000', '#282828', '#CC0000'][index]} />
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
                    <Bar dataKey="posts" fill="#FF0000" />
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
                  <div className="text-white">United States</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Age Range</div>
                  <div className="text-white">18-24 (38%)</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Peak Hours</div>
                  <div className="text-white">2PM - 8PM</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Device Type</div>
                  <div className="text-white">Mobile: 75% / Desktop: 25%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCreatorDashboard;

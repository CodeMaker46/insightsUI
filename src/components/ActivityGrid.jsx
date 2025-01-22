import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const ActivityGrid = () => {
  // Generate full year of data (52 weeks)
  const generateDummyData = () => {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {  // 52 weeks * 7 days = 364 days
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date,
        activity: Math.floor(Math.random() * 5)
      });
    }
    return data;
  };

  const activityData = generateDummyData();

  // Group data by weeks for the grid
  const weeks = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  const getActivityColor = (level) => {
    switch (level) {
      case 0:
        return 'bg-[#1a1a1a] dark:bg-[#1a1a1a]';
      case 1:
        return 'bg-[#0e4429] dark:bg-[#0e4429]';
      case 2:
        return 'bg-[#006d32] dark:bg-[#006d32]';
      case 3:
        return 'bg-[#26a641] dark:bg-[#26a641]';
      case 4:
        return 'bg-[#39d353] dark:bg-[#39d353]';
      default:
        return 'bg-[#1a1a1a] dark:bg-[#1a1a1a]';
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const getActivityText = (level) => {
    switch (level) {
      case 0:
        return 'No posts';
      case 1:
        return '1-2 posts';
      case 2:
        return '3-4 posts';
      case 3:
        return '5-6 posts';
      case 4:
        return '7+ posts';
      default:
        return 'No posts';
    }
  };

  // Get month labels for the top of the grid
  const getMonthLabels = () => {
    const months = [];
    let currentMonth = null;
    
    activityData.forEach((day) => {
      const month = day.date.toLocaleString('default', { month: 'short' });
      if (month !== currentMonth) {
        months.push({ month, date: day.date });
        currentMonth = month;
      }
    });
    
    return months;
  };

  const monthLabels = getMonthLabels();

  return (
    <Card className="bg-[#111111] border-none">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-white">Social Media Activity (Past Year)</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Month labels */}
        <div className="flex gap-2 mb-2">
          <div className="w-8" /> {/* Spacer for day labels */}
          <div className="flex flex-1 gap-1">
            {monthLabels.map((month, index) => (
              <div
                key={index}
                className="text-xs text-gray-400"
                style={{
                  width: `${100 / 12}%`,
                  textAlign: 'center'
                }}
              >
                {month.month}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-gray-400 h-4">Sun</div>
            <div className="text-xs text-gray-400 h-4">Mon</div>
            <div className="text-xs text-gray-400 h-4">Tue</div>
            <div className="text-xs text-gray-400 h-4">Wed</div>
            <div className="text-xs text-gray-400 h-4">Thu</div>
            <div className="text-xs text-gray-400 h-4">Fri</div>
            <div className="text-xs text-gray-400 h-4">Sat</div>
          </div>
          <div className="flex flex-1 gap-1 overflow-x-auto pb-2">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <TooltipProvider key={dayIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-3 h-3 rounded-sm ${getActivityColor(
                            day.activity
                          )} cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all`}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#1a1a1a] border-[#333] text-white">
                        <div className="text-xs">
                          <div className="font-medium">{formatDate(day.date)}</div>
                          <div className="text-gray-400">{getActivityText(day.activity)}</div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="text-xs text-gray-400">Less</div>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`}
            />
          ))}
          <div className="text-xs text-gray-400">More</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityGrid;

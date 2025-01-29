import React from 'react';
import { useInView } from 'react-intersection-observer';

const TimelineEvent = ({ date, events }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div ref={ref} className="relative w-full md:w-1/4 px-4 mb-8 md:mb-0">
      <div className={`transform transition-all duration-1000 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 '
      }`}>
        {/* Month Label */}
        <div className="text-lg font-bold mb-14 text-gray-200">
          {date}
        </div>
        
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-600 top-0 mt-10">
          <div className={`w-4 h-4 rounded-full bg-white absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            inView ? 'scale-100' : 'scale-0'
          }`} />
        </div>

        {/* Events Container */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`p-4 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-1000 delay-${
                index * 200
              } ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="font-semibold text-gray-200 mb-1">
                {event.date}: {event.title}
              </div>
              {event.subtitle && (
                <div className="text-sm text-gray-400">{event.subtitle}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
        month: 'November 2024',
        events: [
          { date: '09 & 10', title: 'Sophomore Interviews' },
          { date: '17', title: 'Nimbus Orientation', subtitle: 'Introducing Abraxas to Freshmen' },
          { date: '18 & 19', title: 'Freshmen Interviews' }
        ]
    },
    {
        month: 'December 2024',
        events: [
          { date: '09 & 10', title: 'Sophomore Interviews' },
          { date: '17', title: 'Nimbus Orientation', subtitle: 'Introducing Abraxas to Freshmen' },
          { date: '18 & 19', title: 'Freshmen Interviews' }
        ]
    },
    {
      month: 'January 2024',
      events: [
        { date: '09 & 10', title: 'Sophomore Interviews' },
        { date: '17', title: 'Nimbus Orientation', subtitle: 'Introducing Abraxas to Freshmen' },
        { date: '18 & 19', title: 'Freshmen Interviews' }
      ]
    },
    {
      month: 'February 2024',
      events: [
        { date: '13', title: 'Print Hub', subtitle: '3D-Printing Workshop' },
        { date: '18', title: 'Innovision' }
      ]
    },
    {
      month: 'March 2024',
      events: [
        { date: '08', title: 'Samvardhan', subtitle: 'Empowering with sustainable technology' },
        { date: '22', title: 'Physics Carnival' }
      ]
    },
    {
      month: 'April 2024',
      events: [
        { date: '04', title: 'Guest Lecture', subtitle: 'by Influencer and educator Rajan Chopra' },
        { date: '11', title: 'Locked In Time' },
        { date: '12', title: 'Möbius', subtitle: 'An infinite continuum' },
        { date: '13', title: 'Physics Arena' }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center font-serif">TIMELINE</h1>
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        {timelineData.map((month, index) => (
          <TimelineEvent
            key={index}
            date={month.month}
            events={month.events}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

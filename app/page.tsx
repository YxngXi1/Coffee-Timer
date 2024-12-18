'use client'

import React, { useState } from 'react';

export default function Home() {
  const [time, setTime] = useState('');
  const [time10MinutesLater, setTime10MinutesLater] = useState('');
  const [time45MinutesLater, setTime45MinutesLater] = useState('');
  const [time6HoursLater, setTime6HoursLater] = useState('');
  const [time12HoursLater, setTime12HoursLater] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const baseTime = new Date(`1970-01-01T${time}:00`);
    setTime10MinutesLater(new Date(baseTime.getTime() + 10 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setTime45MinutesLater(new Date(baseTime.getTime() + 45 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setTime6HoursLater(new Date(baseTime.getTime() + 6 * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setTime12HoursLater(new Date(baseTime.getTime() + 12 * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    console.log('Selected time:', time);
  };

  return (
    <section className="m-8 h-[90vh] border flex flex-col justify-center items-center">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold">Coffee Timer</h1>
        <p className='text-md my-2'>When will your coffee taper off, hit its peak, and leave your system?</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col md:flex-row border justify-evenly items-center h-96 md:w-5/12">
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="w-[324px] h-[56px] border border-black bg-white text-black text-center rounded-md" 
        />
        <button type="submit" className="w-[172px] h-[56px] border rounded-2xl border border-black bg-white text-black">Submit</button>
      </form>
      
      <div className="h-full flex justify-center items-center">
        <div className='bg-[#493628] h-[419px] w-[293px] md:w-[876px] rounded-[18px] flex justify-center items-center md:shadow-none md:hover:shadow-[10px_10px_4px_0px_rgba(0,0,0,0.25)] shadow-[10px_10px_4px_0px_rgba(0,0,0,0.25)] border border-black transition-shadow duration-300'>
            {time ? (
              <div className="">
                <p>Coffee gonna kick in: {time10MinutesLater}</p>
                <p>Productivity gonna peak at: {time45MinutesLater}</p>
                <p>Coffee starting to wear off: {time6HoursLater}</p>
                <p>Coffee mostly gone: {time12HoursLater}</p>
              </div>
            ) : (
              <div className=''>
                <p>nothing to see</p>
              </div>
            )}
        </div>
        
      </div>
    </section>
  );
}
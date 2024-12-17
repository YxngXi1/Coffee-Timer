'use client'

import React, { useState } from 'react';
import CoffeeCalculation from "@/components/CoffeeCalculation";

export default function Home() {
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Selected time:', time);
  };

  return (
    <section className="m-8 h-[90vh] border">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold">Coffee Timer</h1>
        <p>When will your coffee taper off, hit its peak, and leave your system?</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="p-2 border rounded" 
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
      <div className="h-full flex justify-center items-center">
        <CoffeeCalculation />
      </div>
    </section>
  );
}
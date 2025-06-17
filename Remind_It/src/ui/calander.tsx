import React, { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC = () => {

  const currentDate=new Date()
  const selectedDate=currentDate
  const selectedMonth=currentDate.getMonth()
  const selectedYear=currentDate.getFullYear()
  
 

  return (
    <div className="w-100 h-100 p-4 bg-white rounded-lg shadow-md">
      <p className='text-black text-3xl'>{selectedYear}</p>
      <p className='text-black text-2xl p-2'>{selectedMonth}</p>
      <div className='flex'>
        {daysOfWeek.map((e,i)=>{
          return <p key={i} className='text-black w-1/7'>{e}</p>
        })}
      </div>
      <div className='grid grid-cols-7 gap-4'>
          {Array.from({ length: 30 }).map((_, i) => (
  <p key={i} className="text-black text-1xl p-2 w-10 h-10 bg-green-300 rounded-full">
    {selectedDate.getDate()}
  </p>
))}

          
      </div>
    

    </div>
  );
};

export default Calendar;

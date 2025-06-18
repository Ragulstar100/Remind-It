import React, { useState } from 'react';

const days= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];




const Calendar: React.FC = () => {

  const currentDate=new Date()

  const selectedDate=currentDate
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const selectedYear=currentDate.getFullYear()

  // const handlePrev = () => {
  //   setSelectedMonth((prev) => (prev - 1 + 12) % 12);
  // };

  // const handleNext = () => {
  //   setSelectedMonth((prev) => (prev + 1) % 12);
  // };


  let startDate=new Date(selectedYear,selectedMonth,1)
      startDate.setDate(startDate.getDate()-startDate.getDay())
    
  let endDate=new Date(selectedYear,selectedMonth+1,1)
      endDate.setDate(0)
      endDate.setDate(endDate.getDate()+(6-endDate.getDay())) 
      
  const dates: Date[] = [];
  let current = new Date(startDate);
  
 
    while (current <= endDate) {
    dates.push(new Date(current)); // push copy
    current.setDate(current.getDate() + 1); // move to next date
  }

  return (
    <div className="w-100  p-4 bg-white rounded-lg shadow-md">
      
      {/* Year */}
      <div className='flex justify-between'>
        <button className='w-15 h-12 bg-blue-600'>{'prv'}</button>    
        <p className='text-black text-3xl'>{selectedYear}</p>
         <button className='w-15 h-12 text-center'>{'next'}</button> 
      </div>

     
      
      {/* Month */}
      <div className='flex justify-between mt-1'>
      <button className='w-15 h-12'>{'<'}</button>  
      <p className='text-black text-2xl p-2'>{months[selectedMonth%12]}</p>
      <button className='w-15 h-12'>{'>'}</button>  
      </div>
      
  
      
      {/* Days */}
      <div className='flex justify-evenly gap-4 mt-1'>
        {days.map((e,i)=>{
          return <p key={i} className='text-black w-1/7'>{e}</p>
        })}
      </div>
      <hr className='m-2 bg-black/50 h-0.5'/>

      {/* Dates */}
      <div className='grid grid-cols-7 gap-4 mt-1'>
        {
    dates.map((date, index) => {
    const isToday =date.getDate() === currentDate.getDate() &&date.getMonth() === currentDate.getMonth() &&date.getFullYear() === currentDate.getFullYear();

    const isThisMonth=date.getMonth()==selectedDate.getMonth()
    const isSunday=date.getDay()==0


  return (
    <p key={index} className={`${isThisMonth? (!isSunday? "text-black":"text-red-500") :"text-gray-300"} text-1xl p-2 w-10 h-10 rounded-full text-center ${ isToday ? "bg-green-300" : "bg-transparent"}`}>{date.getDate()}</p>
  );
        }
       
      )
      }

          
      </div>
    

    </div>
  );
};

export default Calendar;

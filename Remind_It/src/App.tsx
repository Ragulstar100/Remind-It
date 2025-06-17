import { useState,useEffect } from 'react'
import './App.css'
import { Todo } from './data/Task';
import DB from './db/supabase';
import Calendar from './ui/calander';


function App() {


  return (
    <>
     <div className="w-screen h-screen flex items-center justify-center bg-blue-400">
      <Calendar />
    </div>
    </>
  );
}

export default App;


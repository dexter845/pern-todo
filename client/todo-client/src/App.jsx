import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg';
import InputTask from './components/InputTask';
import ListTasks from './components/ListTasks';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log('hello world')

  return (
    <div className="flex justify-center flex-col w-full p-32 items-center">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-white font-bold tracking-widest text-[80px]">Todo</h1>
      <div className="my-4">
        <InputTask placeholder="Enter A Task..."/>
        <ListTasks/>
      </div>
    </div>
  )
}

export default App;

import { useState } from 'react'
import './App.css'
import { exampleThread } from './assets/exampleData/data'
import clsx from 'clsx'


//types
export type Message = {
  content: string,
  person: string,
  me: boolean
}
export type Thread = {
  messages: Message[]
}

//go through thread, post too the right 
const ListThread = () => {
  const [thread, setThread] = useState(exampleThread)

  return (
    <div className="flex justify-center font-[inter] font-normal text-sm" >
      <div className="w-8/10 flex flex-col">
        {thread.messages.map((currentMessage, idx) => {
          return (
            <div className={clsx('flex place-items-end', currentMessage.me ? 'flex-row' : 'flex-row-reverse')}>

              <span className={clsx('rounded-md w-1/2', currentMessage.me ? 'bg-meBlue text-right ml-auto w-auto max-w-3/4' : 'bg-notmeGray mr-auto text-left w-auto max-w-3/4')}>
                <div className='p-2'>{currentMessage.content}</div>
              </span>

              <span className={clsx(currentMessage.me ? 'pl-4' : 'pr-4')}>
                <div className='text-center text-gray-400'>{currentMessage.person}</div>
                <img className='flex place-items-start' src={'../public/profilepics/' + currentMessage.person + '.png'} />

              </span>


            </div>
          )
        })}
      </div>
    </div >
  )
}

function App() {

  return (
    <>
      <div>
        <div className='font-[inter] font-normal text-xl'>Message Thread</div>
        <ListThread />
      </div>
    </>
  )
}

export default App

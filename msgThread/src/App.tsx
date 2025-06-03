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
  const checkRounding = (idx: number, isMe: boolean): string => {
    let roundedArg = ''
    if (thread.messages[idx + 1]) {
      if (thread.messages[idx + 1].me == isMe) {
        roundedArg += 'rounded-t-md '
        if (isMe) {
          roundedArg += ' rounded-bl-md'
        } else {
          roundedArg += ' rounded-br-md'

        }
      }
    }
    if (thread.messages[idx - 1]) {

      if (thread.messages[idx - 1].me == isMe) {
        roundedArg += 'rounded-b-md'
        if (isMe) {
          roundedArg += ' rounded-tl-md'
        } else {
          roundedArg += ' rounded-tr-md'

        }
      }
    }
    if (!roundedArg) {
      roundedArg = 'rounded-md'
    }
    return roundedArg
  }
  const checkPrev = (idx: number): boolean => {
    if (thread.messages[idx - 1]) {
      return (thread.messages[idx - 1].me == thread.messages[idx].me)
    }
    return false
  }
  return (
    <div className="flex justify-center font-[inter] font-normal text-sm" >
      <div className="w-8/10 flex flex-col">
        {thread.messages.map((currentMessage, idx) => {
          return (
            <div className={clsx('flex place-items-end', currentMessage.me ? 'flex-row' : 'flex-row-reverse')}>
              {/* if next message is me no bottom rounding, if previous message is me no top, */}
              <span className={clsx(checkRounding(idx, currentMessage.me), currentMessage.me ? 'bg-meBlue text-right ml-auto w-auto max-w-3/4' : 'bg-notmeGray mr-auto text-left w-auto max-w-3/4')}>
                <div className='p-2'>{currentMessage.content}</div>
              </span>

              {!checkPrev(idx) ? (
                < span className={clsx(currentMessage.me ? 'pl-4' : 'pr-4')}>
                  <div className='text-center text-gray-400'>{currentMessage.person}</div>

                  <img className='place-items-start' src={'../public/profilepics/' + currentMessage.person + '.png'} />

                </span>)
                : (
                  <span className={clsx('opacity-0', currentMessage.me ? 'pl-4' : 'pr-4')}><img className=' place-items-start' src={'../public/profilepics/' + currentMessage.person + '.png'} />
                  </span>
                )
              }


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
        <div className='font-[inter] font-normal text-xl p-4'>Message Thread</div>
        <ListThread />
      </div>
    </>
  )
}

export default App

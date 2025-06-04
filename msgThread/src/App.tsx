import { useState } from 'react'
import './App.css'
import { exampleThread } from './assets/exampleData/data'
import clsx from 'clsx'
import rawExPost from './assets/exampleData/posts.json'
//type
type Post = {
  GroupName: string,
  TimeSincePost: string,
  imageName: string,
  description: string,
  likes: string,
  commentNumber: string,
  Name: string
}
const exPost: Post = rawExPost

const ListPost = () => {
  //console.log(exPost);
  const profilePic_url = "../public/profilepics/" + exPost.Name + ".png"
  const image_url = "../public/profilepics/" + exPost.imageName
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-3/4 place-content-center'>
        <div className='pt-2 flex font-[inter] justify-center font-normal'>post.json</div>
        <div className='font-[Inter] font-light text-3xl p-4'>Post</div>
        <div className='text-gray-400 pl-15'>Post</div>
        <div className='flex flex-row p-4'>
          <div className='flex flex-row'>
            <div>
              <img className='object-scale-down h-8' src={profilePic_url} />
            </div>
            <div>
              <div className='flex flex-col pl-3 text-notmeGray font-light'>
                <div className='text-notmeGray font-light'><span className='text-black font-normal'>{exPost.Name}</span> in {exPost.GroupName}</div>
                <div>{exPost.TimeSincePost} min ago</div>
              </div>

              <div className='pl-3 flex justify-center'><img src={image_url} /></div>
              <div className='pl-3 pt-3 font-light'>{exPost.description}</div>
              <div className='flex flex-row items-center text-sm pt-2'>
                <img className='h-3 pl-3 justify-center' src='../public/profilepics/heart.png' />
                <div className='pl-2 '>{exPost.likes} likes</div>
                <img className='h-3 pl-3 justify-center' src='../public/profilepics/chatIcon.png' />
                <div className='pl-2 '>{exPost.commentNumber} Comments</div>

              </div>
            </div>
          </div>
        </div>
      </div></div >

  )
}

function App() {

  return (
    <>
      <div>

        <ListPost />
      </div>
    </>
  )
}

export default App

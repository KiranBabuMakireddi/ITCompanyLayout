import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data=useLoaderData();
  // const [data,setData]=useState([]);
  // useEffect(()=>{

  //   fetch('https://api.github.com/users/KiranBabuMakireddi')
  //   .then(response=>response.json())
  //   .then(data => {
  //     setData(data)
  //   })

  // },[])
  return (
    <div className="flex h-80 w-full justify-around items-center bg-orange-600 bg-opacity-55 shadow-2xl p-6 rounded-lg">
      <div className="text-white bg-gray-400 text-xl font-semibold shadow-2xl flex flex-col justify-center items-stretch p-2 m-2 rounded-2xl">
        <p className='text-center'>GitHub Followers: <span className="text-black">{data.followers}</span></p>
        <a href='https://github.com/KiranBabuMakireddi' target='_blank' className='shadow-2xl p-2 m-2 bg-green-500 rounded-2xl'>Github Profle Link</a>
        <a href='https://github.com/KiranBabuMakireddi?tab=repositories' target='_blank' className='shadow-2xl p-2 m-2 rounded-2xl bg-green-500'>Github Repositories</a>
      </div>
      <div>
        <div className='flex flex-col justify-center items-center text-white'>
          <h1 className='font-bold'>GitHub Avatar</h1>
        </div>
        <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={data.avatar_url} alt="profile" className="h-52 w-52 object-cover" />
        </div>
      </div>
    </div>

  )
}

export default Github


export const GithubInfoApiLoader=async()=>{
  const response=fetch('https://api.github.com/users/KiranBabuMakireddi');
  return (await response).json();
}
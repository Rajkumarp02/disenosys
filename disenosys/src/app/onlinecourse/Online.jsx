import React from 'react'

const Online = () => {
  return (
<div className='container mx-auto'>
<div id="login" class="w-64 h-80 bg-sky-50 rounded shadow flex flex-col justify-between p-3">  
    <a href="#" class="border border-sky-500 bg-sky-50 hover:bg-sky-100 rounded text-sky-500 p-2 font-bold flex flex-row gap-3 justify-center">
        <span>Log in with</span>
        <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" class="w-6 h-6 fill-current">
            <path d="M100,10.71V89.29A10.73,10.73,0,0,1,89.29,100H69.81V64.85H81.46L83.68,50.3H69.85V40.85c0-4,1.94-7.85,8.15-7.85h6.27V20.65a76.54,76.54,0,0,0-11.2-1c-11.42,0-18.88,7-18.88,19.57V50.3H41.49V64.85h12.7V100H10.71A10.73,10.73,0,0,1,0,89.29V10.71A10.73,10.73,0,0,1,10.71,0H89.29A10.73,10.73,0,0,1,100,10.71Z" class="">
            </path>
        </svg>    
    </a>   
    <span class="text-center text-sm font-bold  text-sky-500 opacity-50">or</span>        
    <form class="text-sky-500" action="" method="post">
        <label class="text-xs font-bold after:content-['*']" for="email">Mail </label>     
        <input class="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500" type="email" required=""/>   
        <label class="text-xs font-bold after:content-['*']" for="password">Password  </label>
        <input class="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500" type="password" required=""/>
        <a href="#" class="block text-right text-xs text-sky-500 text-right mb-4">Forgot Password?</a>
        <button class="w-full rounded bg-sky-500 text-sky-50 p-2 text-center font-bold hover:bg-sky-400">Log In</button>
    </form>
</div>
</div>
  )
}

export default Online
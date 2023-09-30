import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div>
    <video width="600" height="400" controls autoplay="autoplay" muted >
        <source src="public\video\sample-vid.mp4" type="video/mp4" />
    </video>
    </div>
    <div>
    <img src="https://imgsrv2.voi.id/YibSTAWDWcdlbwqX1kk8x0LhxxFLT-ZxeISzxG_Dt78/rs:fill/w:600/h:314/g:sm/wm:1:nowe:0:0:1/bG9jYWw6Ly8vcHVibGlzaGVycy8zMTA0OTMvMjAyMzA5MTQwNzA2LW1haW4uY3JvcHBlZF8xNjk0NjQ5OTcxLmpwZWc.jpg" alt="titanium"></img>
    <p className=' mx-10'>iPhone 15 Pro with titanium</p>
    <p className='mx-10'>Ad. Apple India</p>
    {/* <img src='https://www.freeiconspng.com/uploads/apple-icon-4.png' alt="iphone "/> */}
<button className='bg-cyan-500 px-2 py-1 rounded-lg mx-10 my-2 '>Learn More</button>
    

    </div>
    </div>
   
    </>

  )
}

export default Hero
import React from "react"
import MediaQuery from "react-responsive"

const Card = (props) => {
  return (
    <>
    <MediaQuery minWidth={720}>
    <div className=" my-4 mx-4">
      <div>
      <a href="/"> <img src={props.image} alt="tmkoc" className="w-64 h-32 rounded-lg my-1"></img> </a>
      </div>
      <div className="flex">
        <div>
          <img src={props.icon} alt="sony liv" className="w-7 my-1"/>
        </div>
      <div className="mx-2 ">
      <p>{props.title}</p>
      <p className="brightness-50">{props.channel}</p>
      <p className="brightness-50 font-thin">{props.views} Views . {props.uploadTime}</p>
      </div>
      </div>
    </div>

    </MediaQuery>

    <MediaQuery maxWidth={720}>
    <div className=" my-4 ">
      <div className="flex-col ">
      <a href="/"> <img src={props.image} alt="tmkoc" className=" rounded-lg my-1 h-56 w-60 mx-16"></img> </a>
      </div>
      <div className="">
        <div>
          <img src={props.icon} alt="sony liv" className="w-7 my-1 mx-16"/>
        </div>
      <div className="mx-16 ">
      <p>{props.title}</p>
      <p className="brightness-50">{props.channel}</p>
      <p className="brightness-50 font-thin">{props.views} Views . {props.uploadTime}</p>
      </div>
      </div>
    </div>
    </MediaQuery>

    
    </>
    
  )
}

export default Card
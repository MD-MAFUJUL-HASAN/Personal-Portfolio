import React from 'react'

export default function Preloader(props) {
  return (
       <div id={props.load ? "preloader" : "preloader-none"}></div>
  )
}

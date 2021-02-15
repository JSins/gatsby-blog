import React from "react"
import { MdPlayCircleOutline } from "react-icons/md"
import { MdPauseCircleOutline } from "react-icons/md"

let audiofile
let position
let duration
let progressbar
let percentposition
let newposition
let playing = false
let playbutton
let pausebutton

function getfile() {
  audiofile = document.getElementById("theaudio")
  playbutton = document.getElementById("playbutton")
  pausebutton = document.getElementById("pausebutton")
}

function audioplay() {
  getfile()
  audiofile.play()
  playbutton.style.display = "none"
  pausebutton.style.display = "block"
  playing = true
}

function audiopause() {
  getfile()
  audiofile.pause()
  playbutton.style.display = "block"
  pausebutton.style.display = "none"
  playing = false
}

function getduration() {
  getfile()
  duration = audiofile.duration
}

function getcurrentposition() {
  getfile()
  position = audiofile.currentTime
}

function timer() {
  getfile()
  getcurrentposition()
  getduration()
  percentposition = (position / duration) * 100
  console.log(percentposition)
  progressbar = document.getElementById("progressbar")
  progressbar.value = percentposition
}

function setposition() {
  getfile()
  audiofile.pause()
  progressbar = document.getElementById("progressbar")
  getduration()
  newposition = (duration / 100) * progressbar.value
  audiofile.currentTime = newposition
  if (playing === true) {
    audioplay()
  }
}

const Audioplayer = props => {
  return (
    <div className="audioplayer">
      <button id="playbutton" onClick={audioplay}>
        <MdPlayCircleOutline />
      </button>
      <button id="pausebutton" onClick={audiopause} style={{ display: "none" }}>
        <MdPauseCircleOutline />
      </button>
      <input type="range" id="progressbar" onChange={setposition}></input>
      <audio onTimeUpdate={timer} id="theaudio" preload="auto">
        <source src={props.file}></source>
      </audio>
    </div>
  )
}

export default Audioplayer

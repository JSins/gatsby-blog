import React from "react"
import { MdPlayArrow } from "react-icons/md"
import { MdPause } from "react-icons/md"

let audiofile
let position
let positiontime
let duration
let durationtime
let progressbar
let percentposition
let newposition
let playing = false
let playbutton
let pausebutton
let showtcurrenttime
let showduration

function getfile() {
  audiofile = document.getElementById("theaudio")
  playbutton = document.getElementById("playbutton")
  pausebutton = document.getElementById("pausebutton")
  showtcurrenttime = document.getElementById("showcurrenttime")
  showduration = document.getElementById("showduration")
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
  durationtime = new Date(duration * 1000).toISOString().substr(15, 4)
  showduration.innerHTML = durationtime
}

function getcurrentposition() {
  getfile()
  position = audiofile.currentTime
  positiontime = new Date(position * 1000).toISOString().substr(15, 4)
  showtcurrenttime.innerHTML = positiontime
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
        <MdPlayArrow />
      </button>
      <button id="pausebutton" onClick={audiopause} style={{ display: "none" }}>
        <MdPause />
      </button>
      <div className="playerinfo">
        <div id="showcurrenttime" className="showtime">
          0:00
        </div>
        <input type="range" id="progressbar" onChange={setposition}></input>
        <div id="showduration" className="showtime">
          3:00
        </div>
      </div>
      <audio onTimeUpdate={timer} id="theaudio" preload="auto">
        <source src={props.file}></source>
      </audio>
    </div>
  )
}

export default Audioplayer

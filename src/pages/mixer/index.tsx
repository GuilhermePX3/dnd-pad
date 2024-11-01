import React, { useState } from "react"

import ReactPlayer from "react-player"
import { IconButton, MixerContainer, Wraper } from "./styles"
import { MdLoop, MdPause, MdPlayArrow } from "react-icons/md"
import { SiLoopback } from "react-icons/si"
interface MixerProps {
    url: string
    name:string
}

function Mixer(props: MixerProps) {
    const [play, setPlay] = useState(false)
    const [loop, setLoop] = useState(false)
    const [volume, setVolume] = useState(1)

    function TogglePlay() {
        setPlay(!play)
    }

    function ToggleLoop() {
        setLoop(!loop)
    }

    function ChangeVolume(e: React.ChangeEvent<HTMLInputElement>) {
        setVolume(parseInt(e.target.value) / 100)
    }

    function onReady(p: ReactPlayer) {}

    return (
        <MixerContainer>
            <div>
                <IconButton onClick={TogglePlay}>
                    {play ? <MdPause /> : <MdPlayArrow />}
                </IconButton>
                <span style={{ margin: 4 }} />
                <IconButton onClick={ToggleLoop}>
                    {loop ? <MdLoop /> : <SiLoopback color="lightgrey" />}
                </IconButton>
            </div>

            <div>
                <p>{props.name}</p>
            </div>

            <input type="range" onChange={ChangeVolume} />
            <div style={{ display: "none" }}>
                <ReactPlayer
                    loop={loop}
                    playing={play}
                    volume={volume}
                    url={props.url}
                    onEnded={TogglePlay}
                />
            </div>
        </MixerContainer>
    )
}

export default Mixer

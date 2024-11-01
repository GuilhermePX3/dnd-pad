import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { GlobalStyles } from "./shared/globalstyles"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
        <p>Supported:</p>
        <p>
            including file paths, YouTube, Facebook, Twitch, SoundCloud,
            Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura
        </p>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

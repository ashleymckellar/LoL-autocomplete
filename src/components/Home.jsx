import { useContext } from "react"
import { Context } from "../context/ContextProvider"
import '../css/home.css'


export default function Home() {

    const {spriteImageUrl} = useContext(Context)

    return (
        <div className="home-container">
            <h1>Welcome to the League of Legends Guide</h1>
            <img src={spriteImageUrl}/>
            <p>
                League of Legends is a popular online multiplayer game where players
                compete in team-based battles. Each champion has unique abilities and
                playstyles that contribute to the strategic depth of the game.
            </p>
            <p>
                Explore our list of champions to learn more about their skills, lore, and
                strategies. Head to our Champions page to view all champions and discover their
                abilities in detail.
            </p>
        </div>
    )
}
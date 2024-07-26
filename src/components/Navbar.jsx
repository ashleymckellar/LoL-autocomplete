import { useNavigate } from 'react-router-dom'
import leagueLogo from '../assets/LoL_Logo_Flat_GOLD.png'
import '../css/navbar.css'

function Navbar() {

    const navigate = useNavigate()

    function handleClick(e) {
        const { name } = e.target
        if (name === 'Home') {
            navigate('/')
        }
        if (name === 'Champions') {
            navigate('/champions')
        }
        if (name === 'Search') {
            navigate('/search')
        }
    
    }

    return (
        <nav className='nav-container'>
            <img className='nav-league-logo' src={leagueLogo} alt="league-logo" />
            <div>
                <button className='nav-btn' name='Home' onClick={handleClick}>Home</button>
                <button className='nav-btn' name='Champions' onClick={handleClick}>Champions</button>
                <button className='nav-btn' name='Search' onClick={handleClick}>Search</button>
            </div>
        </nav>
    )
}

export default Navbar
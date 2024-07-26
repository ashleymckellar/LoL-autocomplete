import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Champion(props) {

    const navigate = useNavigate()

    const { id, name, image } = props

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModal = () => {
        setIsModalOpen(prev => !prev)
    }


    const handleNavigate = () => {
        navigate(`/champions/${id}`)
    }

    return (
        <div className="champion"
            onMouseEnter={handleModal}
            onMouseLeave={handleModal}
        >
            <img
                alt={name}
                className="champion-image"
                src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${image.full}`}
            />
            <div className={!isModalOpen ? 'overlay-off': 'overlay-on'}></div>
            <div className={!isModalOpen ? 'modal-off': 'modal-on'}>
                <button 
                    className="modal-btn"
                    onClick={handleNavigate}
                    >{name}</button>
            </div>
        </div>
    )
}
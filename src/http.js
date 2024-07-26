import axios from 'axios'

export const getLeagueInfo = async () => {
    try {
        const res = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json`)
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}

export const getSingleLeagueChampion = async (champId) => {
    try {
        const res = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion/${champId}.json`)
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}
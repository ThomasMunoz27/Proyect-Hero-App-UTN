import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { useNavigate, useParams } from "react-router-dom"
import { heroesData } from "../../../data/heroes"
import styles from "./HeroPage.module.css"
import { Button } from "react-bootstrap"

export const HeroPage = () => {

    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(-1)
    }

    const [hero, setHero] = useState<IHeroes | null>(null)

    const {id} = useParams()
    const getHeroById = ()=>{
        const result = heroesData.find((hero) => hero.id === id)
        result ? setHero(result) : setHero(null)
    }

    useEffect(()=>{
        getHeroById()
    },[])
  return (
    <>
    {hero && <div className={styles.containerHeroPage}>
        
            <div className={styles.containerImgHeroPage}>
                <img src={`/assets/heroes/${id}.jpg`} alt="" />
            </div>
        
            <div>
                <h3>{hero.superhero}</h3>
                <ul>
                    <li><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li><b>Editora:</b> {hero.publisher}</li>
                    <li><b>Primera aparición:</b> {hero.first_appearance}</li>
                </ul>
                <Button variant="primary" onClick={handleNavigate}>Regresar</Button>
            </div>
        </div>}
    
    </>
  )
}

import { useEffect, useState } from "react"
import { ListHeroes } from "../../UI/ListHeroes/ListHeroes"
import { heroesData } from "../../../data/heroes"
import { IHeroes } from "../../../types/IHeroes"

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([])

    const handleGetHeroesDc = ()=>{
        const result = heroesData.filter((hero)=> hero.publisher === "Marvel Comics")
        setHeroes(result)
    }

    useEffect(()=>{
        handleGetHeroesDc()
    },[])
  return <ListHeroes heroes={heroes} title="Heroes de Marvel Comics" />
}

import { useEffect, useState } from "react"
import { useForm } from "../../../hooks/useForm"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes"
import { Form, InputGroup } from "react-bootstrap"
import { CardHero } from "../../UI/CardHero/CardHero"
import styles from "./search.module.css"

export const Search = () => {
    const {values, handleChange}= useForm({
        search: "",
    })

    const {search} = values
    const [heroes, setHeroes] = useState<IHeroes[]>([])
    useEffect(()=>{
        const result = heroesData.filter((hero)=> hero.superhero.toLowerCase().trim().includes(search))
        setHeroes(result)
    },[search])
  return (
    <div className={styles.containerSearch}>
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>Ingrese Heroe</InputGroup.Text>    
                <Form.Control onChange={handleChange} type="text" name="search"/>
            </InputGroup>
        </div>
        <div className={styles.containerListHeroes}>
            {
                heroes.length > 0 ? (
                    <>
                        {
                            heroes.map((hero)=>(
                            <div key={hero.id} style={{width: "80%"}}>
                                <CardHero hero={hero} />
                            </div>
                        ))
                    }
                    </>
                ) : <div>
                    <h2>No Coincide la busqueda</h2>
                </div>
            }
        </div>

    </div>
  )
}

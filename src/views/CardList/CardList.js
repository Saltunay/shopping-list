import Card from "../../components/Card/Card"
import './CardList.css'
import {useSelector} from "react-redux"

const CardList = () => {
    const categories = useSelector((state) => state.categories.categories)
    return(
        <div className="card-list">
            {categories.map((category) => {
                return(
                    <Card cardProps={category} />
                )
            })}
        </div>      
    )
}
export default CardList
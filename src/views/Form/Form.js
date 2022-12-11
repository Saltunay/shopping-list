import "./Form.css"
import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {addData} from "../../store/categoriesSlice"

const Form = () => {
    const categories = useSelector((state) => state.categories.categories)
    const{register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    const quantityProps = {
        type: "text",
        name: "quantity",
        id: "quantity",
        placeholder: "Enter quantity"
    }

    const nameProps = {
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Enter product name"
    }

    const onSubmit = (data) => {
        dispatch(addData(data))
    }

    return(
        <div
            className="form-container"
        >
            <h5>Add Item to Shopping List</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select
                    name="category"
                    id="category"
                    {...register("category")}
                >
                    {categories.map((option) => {
                        return(
                            <option 
                                value={`${option.title}`}
                            >
                                {option.title}
                            </option>
                        )
                    })}
                </select>
                <input 
                    type={`${quantityProps.type}`} 
                    name={`${quantityProps.name}`} 
                    id={`${quantityProps.id}`}
                    placeholder={`${quantityProps.placeholder}`}
                    {...register(`${quantityProps.name}`)}
                />
                <input 
                    type={`${nameProps.type}`} 
                    name={`${nameProps.name}`} 
                    id={`${nameProps.id}`}
                    placeholder={`${nameProps.placeholder}`}
                    {...register(`${nameProps.name}`)}
                />
                <button
                    type="submit"
                >
                    Add Item
                </button>
            </form>
            
        </div>
    )
}

export default Form
import {createSlice} from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [
            {
                id: 1,
                title: "Fruits",
                cssClass: "black",
                data: []
            },
            {
                id: 2,
                title: "Breakfast",
                cssClass: "white",
                data: []
            },
            {
                id: 3,
                title: "Fast & Food",
                cssClass: "gray",
                data: []
            },
            {
                id: 4,
                title: "Seafood",
                cssClass: "gray",
                data: []
            },
            {
                id: 5,
                title: "Electronics",
                cssClass: "gray",
                data: []
            },
            {
                id: 6,
                title: "Home Cleaning",
                cssClass: "gray",
                data: []
            }
        ]
    },
    reducers: {
        getCategories: (state) => {
            return state.categories
        },

        addData: (state, action) => {
            state.categories.forEach((item) => {
                if (item.title.toLowerCase() === action.payload.category.toLowerCase()) {
                    item.data = [...item.data, action.payload]
                }
            })
        }
    }
})

export const {getCategories, addData} = categoriesSlice.actions
export default categoriesSlice.reducer
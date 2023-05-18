const GET_RECIPES = "recipes/GET_ALL"
const GET_ONE = "recipes/GET_ONE"
const CREATE_RECIPE = "recipes/CREATE"
const EDIT_RECIPE = "recipes/EDIT"
const DELETE_RECIPE = "recipes/DELETE"

export const getAllRecipes = (recipes) => {
    return {
        type: GET_RECIPES,
        payload: recipes
    }
}
export const getOneRecipe = (recipe) => {
    return {
        type: GET_ONE,
        payload: recipe
    }
}
export const createRecipe = (details) => {
    return {
        type: CREATE_RECIPE,
        payload: details
    }
}
export const editRecipe = (details) => {
    return {
        type: EDIT_RECIPE,
        details
    }
}

export const deleteRecipe = (recipeId) => {
    return {
        type: DELETE_RECIPE,
        recipeId
    }
}

export const getAllRecipesThunk = () => async (dispatch) => {
    const response = await fetch("/api/recipes")
    if (response.ok) {
        const data = await response.json()
        dispatch(getAllRecipes(data))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const getOneRecipeThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/recipes/${id}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(getOneRecipe(data))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const createRecipeThunk = (details) => async (dispatch) => {
    const response = await fetch("/api/recipes/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            details
        ),
    });
    if (response.ok) {
        const data = await response.json()
        console.log("--create thunk data--", data);
        dispatch(createRecipe(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const editOneRecipeThunk = (info) => async (dispatch) => {
    const { item, recipe } = info
    console.log('details in Edit Thunk', recipe);
    const response = await fetch(`/api/recipes/${recipe.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            item
        ),
    });
    if (response.ok) {
        const data = await response.json();
        console.log("----- data in edit thunk---", data);
        dispatch(editRecipe(data));
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}
export const deleteRecipeThunk = (recipeId) => async (dispatch) => {
    const response = await fetch(`/api/recipes/${recipeId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if (response.ok) {
        dispatch(deleteRecipe(recipeId));
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}



const initialState = {
    recipes: {}
}

const RecipeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_RECIPES: {
            newState = { ...state }
            newState.recipes = { ...action.payload }
            return newState
        }
        case GET_ONE: {
            newState = { ...state }
            newState.recipes = { ...action.payload }
            return newState
        }
        case CREATE_RECIPE: {
            newState = { ...state, recipes: { ...state.recipes } }
            console.log("this is to be looked at", action.payload);
            newState.recipes[action.payload.id] = action.payload
            return newState
        }
        case DELETE_RECIPE: {
            newState = { ...state }
            delete newState.recipes[action.recipeId]
            return newState
        }
        case EDIT_RECIPE: {
            newState = { ...state, recipes: { ...state.recipes } }
            newState.recipes[action.details.id] = action.details
            return newState
        }
        default:
            return state
    }
}

export default RecipeReducer
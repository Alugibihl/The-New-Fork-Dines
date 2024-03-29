const GET_INGREDIENT = "ingredients/GET_ALL"
const GET_ONE = "ingredients/GET_ONE"
const CREATE_INGREDIENT = "ingredients/CREATE"
const EDIT_INGREDIENT = "ingredients/EDIT"
const DELETE_INGREDIENT = "ingredients/DELETE"
const GET_USER_INGREDIENTS = "/ingredients/CURRENT_USER"

export const getAllIngredients = (ingredients) => {
    return {
        type: GET_INGREDIENT,
        payload: ingredients
    }
}

export const getOneIngredient = (ingredient) => {
    return {
        type: GET_ONE,
        payload: ingredient,
    };
};

export const editIngredient = (details) => {
    return {
        type: EDIT_INGREDIENT,
        details,
    };
};

export const createIngredient = (details) => {
    return {
        type: CREATE_INGREDIENT,
        payload: details
    }
}
export const getIngredients = (details) => {
    return {
        type: GET_USER_INGREDIENTS,
        payload: details
    }
}

export const deleteIngredient = (ingredientId) => {
    return {
        type: DELETE_INGREDIENT,
        ingredientId
    }
}

export const getAllIngredientsThunk = () => async (dispatch) => {
    const response = await fetch("/api/ingredients")
    if (response.ok) {
        const data = await response.json()
        dispatch(getAllIngredients(data))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const getOneIngredientThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/ingredients/${id}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(getOneIngredient(data))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const createIngredientThunk = (details) => async (dispatch) => {
    const response = await fetch("/api/ingredients/new", {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: details
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(createIngredient(data))
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

export const getIngredientsByUser = () => async (dispatch) => {
    const response = await fetch("/api/ingredients/current")
    if (response.ok) {
        const data = await response.json()
        dispatch(getIngredients(data))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const editOneIngredientThunk = (info) => async (dispatch) => {
    const { formData, ingredient } = info
    const response = await fetch(`/api/ingredients/${ingredient.id}`, {
        method: "PUT",
        body: formData
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(editIngredient(data));
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
export const deleteIngredientThunk = (ingredientId) => async (dispatch) => {
    const response = await fetch(`/api/ingredients/${ingredientId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if (response.ok) {
        dispatch(deleteIngredient(ingredientId));
        return ingredientId
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}


const initialState = {
    ingredients: {}
}

const IngredientReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_INGREDIENT: {
            newState = { ...state, ingredients: { ...action.payload } };
            return newState;
        }
        case GET_ONE: {
            newState = { ...state, ingredient: { ...action.payload } };
            return newState;
        }
        case CREATE_INGREDIENT: {
            newState = {
                ...state,
                ingredients: { ...state.ingredients, [action.payload.id]: action.payload },
            };
            return newState;
        }
        case DELETE_INGREDIENT: {
            newState = { ...state, ingredients: { ...state.ingredients } };
            delete newState.ingredients[action.ingredientId];
            return newState;
        }
        case EDIT_INGREDIENT: {
            const { id, ...ingredientData } = action.details;
            const updatedIngredient = {
                ...state.ingredients[id],
                ...ingredientData,
            };
            const updatedState = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [id]: updatedIngredient,
                },
            };
            return updatedState;
        }
        case GET_USER_INGREDIENTS: {
            newState = { ...state, ingredients: { ...action.payload } };
            return newState;
        }
        default:
            return state;
    }
};

export default IngredientReducer

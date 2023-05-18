import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { createRecipeThunk, getAllRecipesThunk } from "../../../store/recipes";

const CreateRecipeModal = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const choices = useSelector((state) => state.recipes.recipes.categories)
    const [details, setDetails] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])
    const [categoryId, setCategoryId] = useState("")
    const [name, setName] = useState("")
    const currentUser = useSelector((state) => state.session.user)
    const { closeModal } = useModal()

    useEffect(() => {
        dispatch(getAllRecipesThunk())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (details.length >= 20) {
            const item = {
                'details': details,
                'name': name,
                'user_id': currentUser.id,
                'image': image,
                'category_id': categoryId,
            }
            const data = await dispatch(createRecipeThunk(item));
            if (data) {
                closeModal();
                history.push(`/recipes/${data.recipe.id}`)
            }
        } else {
            setErrors([
                "Recipe must be at least 20 characters.",
            ]);
        }
    };
    return (
        <div className="modal-background">
            <div className="modal-form">
                <div >
                    <h1
                        className="modal-title "
                    >Add a Recipe</h1>
                </div>
                <form
                    className="form-styling"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div
                        className="modal-error-container"
                    >
                        {errors.map((error, idx) => (
                            <div
                                key={idx}
                                className="modal-errors"
                            >{error}</div>
                        ))}
                    </div>
                    <div className="form-data">
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder={`Please share a recipe you love.`}
                            required
                        />
                        <label>
                            Place a picture of your recipe here!
                            <input
                                type="url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="url"
                                required
                            />
                        </label>
                        <label>
                            Please Enter the name of your dish.
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Bone Soup"
                            />
                        </label>
                        <label className="category" for="cuisine">Please Specify your cuisine classification</label>
                        <br />
                        <select
                            value={categoryId}
                            id="cuisine"
                            onChange={(e) => setCategoryId(e.target.value)}
                            required
                        >
                            <option>Select One</option>
                            {choices?.map((choice) => (
                                <option key={choice.id} value={choice.id}>{choice.name}</option>
                            ))}
                        </select>


                    </div>
                    <div className="modal-buttons">
                        <button className="red-button" onClick={closeModal}>Cancel</button>
                        <button className="green-button" type="submit">Create Recipe</button>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default CreateRecipeModal

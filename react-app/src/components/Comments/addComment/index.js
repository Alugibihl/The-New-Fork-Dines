import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createaCommentThunk, getAllCommentsThunk } from "../../../store/comments"


const CreateCommentForm = ({ recipe }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const [errors, setErrors] = useState([])
    const [details, setDetails] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (details.trim().length >= 3 && details.trim().length <= 500) {
            const info = {
                "details": details,
                "user_id": currentUser.id,
                "recipe_id": recipe.id
            }
            setDetails("")
            setErrors([])
            await dispatch(createaCommentThunk(info))
            await dispatch(getAllCommentsThunk(recipe.id))
        } else {
            setErrors([
                "Comments must be between 3 and 500 characters.",
            ]);
        }
    };

    return (
        <div >
            <div>
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="form-styling"
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
                        <label>
                            Leave your comment Below
                            <textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder={"Add Comment..."}
                                required
                            />
                        </label>
                    </div>
                    <div className="modal-buttons">
                        <button className="red-button" onClick={() => setDetails("")}>Clear</button>
                        <button className="green-button" type="submit">Add Comment</button>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default CreateCommentForm

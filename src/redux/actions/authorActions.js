import { getAuthors } from "../../api/authorApi"
import { LOAD_AUTHORS_SUCCESS } from "../types"

export function loadAuthorSuccess(authors) {
	return {
		type: LOAD_AUTHORS_SUCCESS,
		authors
	}
}

export function loadAuthors() {
	return function (dispatch) {
		console.log("thinking");
		return getAuthors().then(authors => {
			dispatch(loadAuthorSuccess(authors))
		}).catch(error => {
			throw error
		})
	}
}

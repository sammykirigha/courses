import { handleError, handleResponse } from "./apiUtils";

const baseUrl = 'http://localhost:3000/authors/';

export function getAuthors() {
	return fetch(baseUrl).then(handleResponse).catch(handleError)
	
}

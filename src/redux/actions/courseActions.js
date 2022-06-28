import { CREATE_COURSE } from "../types"

export default function createCourse(course){
	return {
		type: CREATE_COURSE,
        course
	}
}
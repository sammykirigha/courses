import { getCourses } from "../../api/courseApi"
import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../types"

export default function createCourse(course){
	return {
		type: CREATE_COURSE,
        course
	}
}

export function loadCoursesSuccess(courses) {
	return {
		type: LOAD_COURSES_SUCCESS,
		courses
	}
}

export function loadCourses() {
	return function (dispatch) {
		return getCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses))
		}).catch(error => {
			throw error
		})
	}
}
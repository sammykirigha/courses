import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const courses = {
	title: '',
	name: ''
}
const CoursesPage = () => {
	const [course, setCourse] = useState(courses)

	// const state = useSelector((state) => state.courses)
	// console.log(state);

	const handleChange = (e) => {
		setCourse((curCourse) => {
			return {
				...curCourse,
				[e.target.id]: e.target.value
			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(course);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text" id='title' onChange={handleChange} value={course.title} />
				<input type="text" id='name' onChange={handleChange} value={course.name} />
				<input type="submit" value="Save"  />
			</form>
		</div>
	)
}

export default CoursesPage;
import React, { useState } from "react";
import createCourse from "../../redux/actions/courseActions";
import { useDispatch } from "react-redux";

const courses = {
    title: "",
    name: "",
};

const CourseForm = () => {
    const [course, setCourse] = useState(courses);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCourse((curCourse) => {
            return {
                ...curCourse,
                [e.target.id]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(course));
        setCourse(courses);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input
                type="text"
                id="title"
                onChange={handleChange}
                value={course.title}
            />
            <input
                type="text"
                id="name"
                onChange={handleChange}
                value={course.name}
            />
            <input type="submit" value="Save" />
        </form>
    );
};

export default CourseForm;

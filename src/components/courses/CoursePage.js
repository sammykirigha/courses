import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createCourse, { loadCourses } from "../../redux/actions/courseActions";

const courses = {
    title: "",
    name: "",
};
const CoursesPage = () => {
    const [course, setCourse] = useState(courses);
    const dispatch = useDispatch();

    const state = useSelector((state) => state.courses);
    console.log(state);

    useEffect(() => {
        dispatch(loadCourses());
        console.log("loading data");
    }, []);

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
        <div>
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
            {state.map((course, i) => {
                return (
                    <div key={i}>
                        <h2>{course.title}</h2>
                        <p>{course.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CoursesPage;

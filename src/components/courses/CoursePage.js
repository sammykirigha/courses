import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions";
import  { loadCourses } from "../../redux/actions/courseActions";
import CourseForm from "./CourseForm";
import CourseList from "./CoursesList";


const CoursesPage = () => {
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const coursesData = state.courses;
    const authorData = state.authors;

    const courses = coursesData.map((course) => {
        return {
            ...course,
            authorName: authorData.find(a => a.id === course.authorId ? a.name : course.authorId)
        }
    })

    console.log(courses);

    useEffect(() => {
        dispatch(loadCourses());
        dispatch(loadAuthors())
    }, []);

  
    return (
        <div>
           <CourseForm />
            <CourseList courses={coursesData} />
            {/* {state.map((course, i) => {
                return (
                    <div key={i}>
                        <h2>{course.title}</h2>
                        <p>{course.name}</p>
                    </div>
                );
            })} */}
        </div>
    );
};

export default CoursesPage;

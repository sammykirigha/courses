import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const styles = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '20px'
 }

const CourseList = ({ courses }) => {
    return (
        <>
            <table>
                <thead>
                    <tr style={styles}>
                        <th />
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => {
                        return (
                            <tr key={course.id} style={styles}>
                                <td>
                                    <a className="" href="#">
                                        Watch
                                    </a>
                                </td>
                                <td>
                                    <Link to={"/course/" + course.slug}>
                                        {course.title}
                                    </Link>
                                </td>
                                <td>{course.authorName}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
	course: PropTypes.object.isRequired,
	authorName: PropTypes.string.isRequired,
}

export default CourseList;

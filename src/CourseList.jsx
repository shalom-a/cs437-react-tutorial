const CourseList = ({courses})=>{
    return <div>
        {Object.entries(courses).map((course, i) => <p key={i}>{course[1].term} CS {course[1].number}: {course[1].title}</p>)}
    </div>
}
export default CourseList
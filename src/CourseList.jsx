import './CourseList.css';
import Course from './Course.jsx'

const CourseList = ({courses, selected, toggleSelected})=>{

    return <div className='cards'>
        {Object.entries(courses).map((course, i) => 
            <Course i={i} course={course} selected={selected} toggleSelected={toggleSelected}/>
            )}
    </div>
}
export default CourseList
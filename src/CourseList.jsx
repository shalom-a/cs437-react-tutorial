import './CourseList.css';
import Course from './Course.jsx'

const CourseList = ({courses, selected, toggleSelected, profile})=>{

    return <div className='cards'>
        {Object.entries(courses).map((course, i) => 
            <Course i={i} course={course} selected={selected} toggleSelected={toggleSelected} profile={profile}/>
            )}
    </div>
}
export default CourseList
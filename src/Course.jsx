import { hasConflict } from "./Course"
import './CourseList.css'
import { Link } from 'react-router-dom'

const Course=({i, course, selected, toggleSelected, profile})=>{
    const Disabled = hasConflict(course, selected) && !selected.includes(course);

    const isSelected = selected.includes(course)
    //const style={backgroundColor: isSelected? 'lemonchiffon': Disabled? 'grey' : 'white' }

    return(
        <div key={i} className={`card${selected.includes(course[1]) ? '-selected' : ''}`} 
                id={Disabled? 'disabled': 'nope'}
                onClick={() => (Disabled && isSelected)? null: toggleSelected(course[1])}>
                <div className="card-top">
                    <h1>{course[1].term} CS {course[1].number}</h1>
                    <p>{course[1].title}</p>
                </div>
                <div className="card-bottom">
                <p>{course[1].meets}</p> 
                </div>
                {profile?.isAdmin && <p><Link to={`/edit/${course[1].term}/${i}`}>Edit Course</Link></p>}
            </div>
    )
}
export default Course
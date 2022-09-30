import './CourseList.css';

const CourseList = ({courses})=>{
    return <div className='cards'>
        {Object.entries(courses).map((course, i) => 
        <div key={i} className="card">
            <div className="card-top">
                <h1>{course[1].term} CS {course[1].number}</h1>
                <p>{course[1].title}</p>
            </div>
            <div className="card-bottom">
               <p>{course[1].meets}</p> 
            </div>
        </div>)}
    </div>
}
export default CourseList
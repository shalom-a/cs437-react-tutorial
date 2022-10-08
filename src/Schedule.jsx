
const Schedule = ({selected}) =>{
    return (
        <div>
            {
                selected.length === 0
                ? <h2>No courses selected</h2>
                : selected.map(courses => (
                    <div className="card">
                        <div className="card-top">
                            <h1>{courses.term} CS {courses.number}</h1>
                            <p>{courses.title}</p>
                        </div>
                        <div className="card-bottom">
                        <p>{courses.meets}</p> 
                        </div>
                    </div>
                ))
          }

        </div>
        
    )
}

export default Schedule;

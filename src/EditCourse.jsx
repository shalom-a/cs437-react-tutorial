import { BrowserRouter, Route, Routes} from "react-router-dom";
import EditCourseForm from './EditCourseForm'
import CourseList from "./CourseList";

const EditCourse = ({courses, selected, toggleSelected, profile}) =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CourseList profile={profile} courses={courses} selected={selected} toggleSelected={toggleSelected}/>}/>
            <Route path="/edit/:term/:id" element={<EditCourseForm courses={courses}/>}/>
        </Routes>
    </BrowserRouter>)
}
export default EditCourse;
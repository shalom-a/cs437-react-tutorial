import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import CourseList from './CourseList';
import {useJsonQuery} from './utilities/fetch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Modal from './Modal';
import Schedule from './Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditCourse from './EditCourse';

const selectedCourses = {}

const Chooser = ({setQuarter}) => {
  return (
    <div>
      <button onClick={()=>setQuarter('Fall')}>Fall</button>
      <button onClick={()=>setQuarter('Winter')}>Winter</button>
      <button onClick={()=>setQuarter('Spring')}>Spring</button>
    </div>
    
  );
};

const Main = () => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    console.log(item)
    setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item])
    
  }

  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [quarter, setQuarter] = useState('Fall');
  const changeQuarter=(qrtr)=>{
    if (qrtr != quarter){
      setQuarter(qrtr)
    }
      
  }

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  let newdata = Object.values(data.courses).filter((course)=> course.term == quarter)
  console.log(selected)
  return (
  <>
    <Banner title={data.title}/>
    <div className='main-buttons'>
      <Chooser setQuarter={changeQuarter}/>
      <button className="btn btn-outline-dark m-2 p-2 ms-auto" onClick={openModal}>Course Plan</button>
    </div>
    <Modal open={open} close={closeModal}>
      <Schedule selected={selected}/>
    </Modal>
    <EditCourse courses={newdata} selected={selected} toggleSelected={toggleSelected}/>
  </>)
}

const queryClient = new QueryClient()

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main/>
      </div>
    </QueryClientProvider>
  );
};
{/* <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p> */}
export default App;

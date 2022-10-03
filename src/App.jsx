import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import CourseList from './CourseList';
import {useJsonQuery} from './utilities/fetch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
  <>
    <Banner title={data.title}/>
    <CourseList courses={data.courses}/>
  </>)
}

const queryClient = new QueryClient()

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <div>

          <Main/>
        </div>
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

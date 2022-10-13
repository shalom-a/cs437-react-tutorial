//import { useDbUpdate } from './utilities/firebase';
import { useFormData } from './utilities/useFormData';
import { useNavigate, useParams } from 'react-router-dom';

const validateUserData = (key, val) => {
  switch (key) {
    case 'title': 
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return /^\w+@\w+[.]\w+/.test(val) ? '' : 'must contain name@domain.top-level-domain';
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
};

const CourseEditor = ({courses}) => {
    console.log(useParams())
    const {term} = useParams().term
    const { id } = useParams().id
    const [state, change] = useFormData(validateUserData, courses[id])
    const submit = (evt) => {
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Meeting Times" state={state} change={change} />
      <ButtonBar />
    </form>
  )
};

export default CourseEditor;
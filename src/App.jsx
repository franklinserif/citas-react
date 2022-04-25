import { useContext } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';
import { PatientsContext } from './context/PatientsProvider';

const App = () => {
  const { patients, dispatch, TYPE, patient, setPatient } = useContext(PatientsContext);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          createPatient={(newPatient) => {
            dispatch({ type: TYPE.CREATE, payload: newPatient });
            setPatient({});
          }}
          patient={patient}
          updatePatient={(editPatient) => dispatch({ type: TYPE.UPDATE, payload: editPatient })}
        />
        <PatientList patients={patients} setPatient={setPatient} />
      </div>
    </div>
  );
};
export default App;

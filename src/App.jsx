import { useContext } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';
import { PatientsContext } from './context/PatientsProvider';

const App = () => {
  const { patients, setPatients } = useContext(PatientsContext);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form setPatients={setPatients} />
        <PatientList patients={patients} />
      </div>
    </div>
  );
};
export default App;

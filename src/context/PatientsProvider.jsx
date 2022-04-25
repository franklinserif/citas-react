import { createContext, useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import patientReducer, { TYPE } from './PatientsReducer';

export const PatientsContext = createContext({});

const PatientsProvider = ({ children }) => {
  const [patients, dispatch] = useReducer(
    patientReducer,
    JSON.parse(localStorage.getItem('patientsList')) || []
  );
  const [patient, setPatient] = useState({
    id: '',
    name: '',
    owner: '',
    email: '',
    discharged: '',
    symptom: '',
  });

  useEffect(() => {
    try {
      localStorage.setItem('patientsList', JSON.stringify(patients));
    } catch (error) {
      localStorage.removeItem('patientsList');
    }
  }, [patients]);

  return (
    <PatientsContext.Provider value={{ patients, dispatch, TYPE, patient, setPatient }}>
      {children}
    </PatientsContext.Provider>
  );
};

PatientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatientsProvider;

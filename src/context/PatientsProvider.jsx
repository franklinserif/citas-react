import { createContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import patientReducer, { TYPE } from './PatientsReducer';

export const PatientsContext = createContext({});

const PatientsProvider = ({ children }) => {
  const [patients, dispatch] = useReducer(patientReducer, []);
  const [patient, setPatient] = useState({
    id: '',
    name: '',
    owner: '',
    email: '',
    discharged: '',
    symptom: '',
  });

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

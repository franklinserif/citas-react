import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PatientsContext = createContext({});

const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <PatientsContext.Provider value={{ patients, setPatients, patient, setPatient }}>
      {children}
    </PatientsContext.Provider>
  );
};

PatientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatientsProvider;

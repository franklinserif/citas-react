import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PatientsContext } from '../context/PatientsProvider';

const Patient = ({ patient }) => {
  const { setPatient, dispatch, TYPE } = useContext(PatientsContext);
  const { name, owner, email, discharged, symptom } = patient;

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case"> {owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:
        <span className="font-normal normal-case"> {email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:
        <span className="font-normal normal-case"> {discharged}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case"> {symptom}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={() => setPatient(patient)}
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 transition-all text-white font-bold uppercase rounded-md"
        >
          Editar
        </button>{' '}
        <button
          type="button"
          onClick={() => dispatch({ type: TYPE.DELETE, payload: patient?.id })}
          className="py-2 px-10 bg-red-500 hover:bg-red-700 transition-all text-white font-bold uppercase rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.string,
    email: PropTypes.string,
    discharged: PropTypes.string,
    symptom: PropTypes.string,
  }),
};

Patient.defaultProps = {
  patient: {},
};

export default Patient;

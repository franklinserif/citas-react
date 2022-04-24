import PropTypes from 'prop-types';
import Patient from './Patient';

const PatientList = ({ patients }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administrar tus
        <span className="text-indigo-600 font-bold"> Pacientes</span>
      </p>
      {patients.map((patient) => (
        <Patient patient={patient} key={Date.now()} />
      ))}
    </div>
  );
};

PatientList.propTypes = {
  patients: PropTypes.node.isRequired,
};

export default PatientList;

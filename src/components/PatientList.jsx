import PropTypes from 'prop-types';
import Patient from './Patient';

const PatientList = ({ patients = [] }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length !== 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administrar tus
            <span className="text-indigo-600 font-bold"> Pacientes</span>
          </p>
          {patients.map((patient) => (
            <Patient patient={patient} key={patient.id} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregar pacientes
            <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

PatientList.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      owner: PropTypes.string,
      email: PropTypes.string,
      discharged: PropTypes.string,
      symptom: PropTypes.string,
    })
  ),
};

PatientList.defaultProps = {
  patients: [],
};

export default PatientList;

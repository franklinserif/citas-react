import PropTypes from 'prop-types';

const Patient = ({ patient }) => {
  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case"> Franklin</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:
        <span className="font-normal normal-case"> Franklinserif@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:
        <span className="font-normal normal-case"> 10/04/12</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque at, molestiae quidem
          inventore vero vel dolore facere cupiditate consequuntur ea impedit, voluptatum earum
          accusantium? Esse deserunt alias accusamus totam debitis!
        </span>
      </p>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    discharged: PropTypes.string.isRequired,
    symptom: PropTypes.string.isRequired,
  }).isRequired,
};

export default Patient;

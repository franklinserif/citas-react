import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import Input from './Input';
import generateId from '../Helpers/GenerateId';
import DateInput from './DateInput';
import TextArea from './TextArea';

const Form = ({ createPatient, patient, updatePatient }) => {
  const [formState, setFormState] = useState({
    name: '',
    owner: '',
    email: '',
    discharged: '',
    symptom: '',
    id: '',
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (patient?.id) {
      setFormState(patient);
    }
  }, [patient]);

  const handleChange = ({ name, value }) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, owner, email, discharged, symptom } = formState;

    if ([name, owner, email, discharged, symptom].includes('')) {
      setError(true);
      return null;
    }

    if (patient?.id) {
      updatePatient({ ...formState, id: patient.id });
    } else {
      setError(false);
      createPatient({ ...formState, id: generateId() });
    }

    setFormState({
      name: '',
      owner: '',
      email: '',
      discharged: '',
      symptom: '',
    });
    return null;
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y<span className="text-indigo-600 font-bold text-lg"> administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg px-10 py-10 mb-10">
        {error && <Error>Todos los campos son olbigatorios</Error>}
        <Input
          type="text"
          name="name"
          placeholder="Nombre de la mascota"
          onChange={handleChange}
          label="Nombre Mascota"
          value={formState.name}
        />
        <Input
          type="text"
          placeholder="Nombre del propietario"
          onChange={handleChange}
          name="owner"
          label=" Nombre Propietario"
          value={formState.owner}
        />
        <Input
          type="email"
          placeholder="Email contacto propietario"
          onChange={handleChange}
          name="email"
          label=" email"
          value={formState.email}
        />
        <DateInput
          name="discharged"
          label="Alta"
          onChange={handleChange}
          value={formState.discharged}
        />

        <TextArea
          name="symptom"
          label="Sintomas"
          onChange={handleChange}
          placeholder="Describe los sintamas"
          value={formState.symptom}
        />
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patient?.id ? 'Editar paciente' : 'Agregar paciente'}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  createPatient: PropTypes.func.isRequired,
  patient: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.string,
    email: PropTypes.string,
    discharged: PropTypes.string,
    symptom: PropTypes.string,
  }).isRequired,
  updatePatient: PropTypes.func.isRequired,
};

export default Form;

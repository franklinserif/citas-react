import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import generateId from '../Helpers/GenerateId';

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
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="name"
            type="text"
            placeholder="Nombre de la mascota"
            value={formState.name}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            name="owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={formState.owner}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto propietario"
            value={formState.email}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            name="discharged"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={formState.discharged}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            name="symptom"
            placeholder="Describe los sintamas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={formState.symptom}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
              }))
            }
          />
        </div>
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

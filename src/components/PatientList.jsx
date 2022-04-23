import Patient from './Patient';

const PatientList = () => (
  <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Administrar tus
      <span className="text-indigo-600 font-bold"> Pacientes</span>
    </p>
    <Patient />
    <Patient />
    <Patient />
    <Patient />
    <Patient />
  </div>
);

export default PatientList;

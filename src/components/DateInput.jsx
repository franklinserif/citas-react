import ProptTypes from 'prop-types';

const DateInput = ({ name, label, onChange, value }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        type="date"
        value={value}
        onChange={(event) => {
          onChange(event.target);
        }}
      />
    </div>
  );
};

DateInput.propTypes = {
  name: ProptTypes.string.isRequired,
  label: ProptTypes.string.isRequired,
  onChange: ProptTypes.func.isRequired,
  value: ProptTypes.string.isRequired,
};

export default DateInput;

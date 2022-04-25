import PropTypes from 'prop-types';

const Input = ({ type, placeholder, onChange, label, name, value }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
        {label}
      </label>
      <input
        id={name}
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.target);
        }}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['email', 'text']).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;

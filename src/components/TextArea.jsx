import PropTypes from 'prop-types';

const TextArea = ({ name, label, onChange, placeholder, value }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={value}
        onChange={(event) => {
          onChange(event.target);
        }}
      />
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;

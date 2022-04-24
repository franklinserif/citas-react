import PropTypes from 'prop-types';

const Error = ({ children }) => {
  return (
    <div className="bg-red-400 text-white text-center mb-3 rounded-md p-2 uppercase">
      {children}
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;

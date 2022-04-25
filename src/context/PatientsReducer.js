export const TYPE = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  GET: 'GET',
  DELETE: 'DELETE',
};

export default function patientReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPE.CREATE: {
      return [...state, payload];
    }
    case TYPE.UPDATE: {
      const newState = state.map((patient) => (patient.id === payload.id ? payload : patient));
      return newState;
    }
    case TYPE.DELETE: {
      const newState = state.filter((patient) => patient.id !== payload);
      return newState;
    }
    default:
      return state;
  }
}

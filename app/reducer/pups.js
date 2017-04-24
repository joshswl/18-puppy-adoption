import _ from 'lodash';

export default function pups(state = [], action) {
  switch (action.type) {
    case 'PUP@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, 'id');
    case 'PUP@FINDONE_COMPLETE':
    case 'PUP@CREATE_COMPLETE':
    case 'PUP@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    case 'PUP@DESTROY_COMPLETE':
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
}

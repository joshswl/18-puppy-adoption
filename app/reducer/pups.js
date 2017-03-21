import Lodash from 'lodash';

export default function pups(state = [], action) {
  switch (action.type) {
    case 'PUP@FINDALL_COMPLETE':
      return Lodash.unionBy(action.data, state, '_id');
    case 'PUP@FINDONE_COMPLETE':
    case 'PUP@CREATE_COMPLETE':
    case 'PUP@UPDATE_COMPLETE':
      return Lodash.unionBy([action.data], state, '_id');
    default:
      state;
  }
}

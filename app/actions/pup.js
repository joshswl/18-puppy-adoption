const apiURL = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';

export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  return dispatch => fetch(apiURL)
    .then(r => r.json())
    .then(pups => dispatch(findAllComplete(pups)));
}

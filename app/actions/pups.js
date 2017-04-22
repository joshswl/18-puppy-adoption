const apiURL = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';
const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function parseJson(r) {
  return r.json();
}

export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  return dispatch => fetch(apiURL)
    .then(response => response.json())
    .then(pups => dispatch(findAllComplete(pups)));
}

export function findOneComplete(data = {}) {
  return {
    type: 'PUPPY@ONE_COMPLETE',
    data,
  };
}

export function findOne(id) {
  return dispatch => fetch(apiURL / id)
  .then(r => r.json())
  .then(puppy => dispatch(findOneComplete(puppy)));
}

export function createComplete(data = []) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data,
  };
}

export function create(formData) {
  return dispatch => fetch(apiURL, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  }).then(parseJson)
    .then((puppy) => {
      dispatch(createComplete(puppy));
    });
}

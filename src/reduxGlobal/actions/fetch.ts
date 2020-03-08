import axios from 'axios';

function determine(type: string, data: object) {
  return {
    type,
    data
  };
}

function fetch(type: string, url: string, callback: Function) {
  return (dispatch: Function) => {
    axios
      .get(url)
      .then(response => {
        dispatch(determine(type, response.data));
        if (typeof callback === 'function') callback();
      })
      .catch(e => {
        if (typeof callback === 'function') callback();
        return;
      });
  };
}

function fetchQuery(type: string, url: string, options: object) {
  return (dispatch: Function) =>
    axios
      .post(url, options)
      .then(response => {
        dispatch(determine(type, response.data));
      })
      .catch(e => {
        return;
      });
}

export { fetch, fetchQuery, determine };

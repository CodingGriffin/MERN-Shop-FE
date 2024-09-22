import
  axios
from 'axios';

export const get = async (url, headers = {}, body = {}) => {
  return await axios.get(
    url,
    {
      headers: headers,
      params: body
    }
  );
}

export const post = async (url, data, headers = {}, options = {}) => {
  const requestOptions = {
    headers: headers,
    ...options,
  };

  return await axios.post(
    url,
    data,
    requestOptions,
  );
}

export const put = async (url, data, headers = {}) => {
  return await axios.put(
    url,
    data,
    {
      headers: headers,
    }
  );
}

export const patch = async (url, data, headers = {}) => {
  return await axios.patch(
    url,
    data,
    {
      headers: headers,
    }
  );
}

export const deleteCall = async (url, data, headers = {}) => {
  return await axios.delete(
    url,
    {
      headers: headers,
      data,
    }
  );
}

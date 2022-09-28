import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function getSymbols(token) {

  const symbolsURL = `${API_URL}/symbols`;
  const headers = {

    'authorization': token
  }
  const response = await axios.get(symbolsURL, {headers});

  return response.data;
}

export async function getSymbol(symbol, token) {

  const symbolsURL = `${API_URL}/symbols/${symbol}`;
  const headers = {

    'authorization': token
  }
  const response = await axios.get(symbolsURL, {headers});

  return response.data;
}

export async function updateSymbol(symbol, token) {

  const symbolsURL = `${API_URL}/symbols/${symbol.symbol}`;
  const headers = {

    'authorization': token
  }
  const response = await axios.patch(symbolsURL, symbol, {headers});

  return response.data;
}

export async function syncSymbols(token) {

  const symbolsURL = `${API_URL}/symbols/sync`;
  const headers = {

    'authorization': token
  }
  const response = await axios.post(symbolsURL, {}, {headers});

  return response.data;
}

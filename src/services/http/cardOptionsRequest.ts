import fetchApi, { defaultHeaders } from 'utils/fetchApi';
import { CardOptionsResponse, ErrorResponse } from 'interfaces/http';

export const fetchCardOptions = () =>
  fetchApi<CardOptionsResponse | ErrorResponse>('/data/cardOptions.json', {
    method: 'GET',
    headers: {
      ...defaultHeaders,
    },
  });

import { HttpResponse, http } from 'msw';
import { getHomeResponse } from './fixtures';
import { getMainApiUrl } from '../axios';

const restHandlers = [http.get(getMainApiUrl('/home'), () => HttpResponse.json(getHomeResponse))];

export default restHandlers;

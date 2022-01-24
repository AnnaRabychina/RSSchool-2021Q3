/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { MAX_CARS_PER_PAGE, MAX_WINNERS_PER_PAGE } from '../options/options';

const baseUrl = 'http://127.0.0.1:3000';

export enum Path {
  garage = '/garage',
  winners = '/winners',
  engine = '/engine',
}

export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IBodyCar {
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface ISwitchEngine {
  success: boolean
}

export interface IGetData {
  items: ICar[] | IWinner[];
  count: string | null;
}

export const getCars = async (
  page?: number,
  limit: number = MAX_CARS_PER_PAGE
): Promise<IGetData> => {
  const response: Response = await fetch(`${baseUrl}${Path.garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count')
  };
};

export const getCar = async (id: number): Promise<ICar> => (await fetch(`${baseUrl}${Path.garage}/${id}`)).json();

export const updateCar = async (id: number, body: IBodyCar): Promise<ICar> => (
  await fetch(`${baseUrl}${Path.garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
).json();

export const createCar = async (body: IBodyCar): Promise<Response> => fetch(`${baseUrl}${Path.garage}`, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  }
});

export const deleteCar = async (id: number): Promise<{}> => (await fetch(`${baseUrl}${Path.garage}/${id}`, { method: 'DELETE' })).json();

export const startEngine = async (id: number): Promise<IEngine> => (await fetch(`${baseUrl}${Path.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

export const stopEngine = async (id: number): Promise<IEngine> => (await fetch(`${baseUrl}${Path.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

export const switchEngine = async (id: number): Promise<ISwitchEngine> => (await fetch(`${baseUrl}${Path.engine}?id=${id}&status=drive`, { method: 'PATCH' })).json();

export const getWinners = async (
  page?: number,
  limit: number = MAX_WINNERS_PER_PAGE
): Promise<IGetData> => {
  const response: Response = await fetch(`${baseUrl}${Path.winners}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count')
  };
};

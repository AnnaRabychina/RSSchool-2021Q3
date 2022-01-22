const baseUrl = 'http://127.0.0.1:3000';

export const enum Path {
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

export interface IGetData {
  items: ICar[] | IWinner[];
  count: string | null;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export const getCars = async (page?: number, limit: number = 7): Promise<IGetData> => {
  const response: Response = await fetch(`${baseUrl}${Path.garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<ICar> => (await fetch(`${baseUrl}${Path.garage}/${id}`)).json();

export const updateCar = async (id: number, body: IBodyCar) =>
  (
    await fetch(`${baseUrl}${Path.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const createCar = async (body: IBodyCar) =>
  await fetch(`${baseUrl}${Path.garage}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const deleteCar = async (id: number) =>
  (await fetch(`${baseUrl}${Path.garage}/${id}`, { method: 'DELETE' })).json();

export const getWinners = async (page?: number, limit: number = 10): Promise<IGetData> => {
  const response: Response = await fetch(`${baseUrl}${Path.winners}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

const baseUrl = 'http://127.0.0.1:3000';

export const enum Path {
  garage = '/garage',
  winners = '/winners',
  engine = '/engine'
}

export const getCars = async (page: number, limit: number = 7) => {
  const response: Response = await fetch(`${baseUrl}${Path.garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<void> => {
   (await fetch(`${Path.garage}/${id}`)).json();
}

export interface ICar {
  name: string,
  color: string,
  id: number
}


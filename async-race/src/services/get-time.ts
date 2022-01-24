import { startEngine } from '../api/api';

export const getTime = async (id: number): Promise<number> => {
  const { velocity, distance } = await startEngine((id));
  const time = Math.round(distance / velocity);
  return time;
};

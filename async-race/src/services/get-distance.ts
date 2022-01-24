export const getDistance = (id: number): number => {
  const distance = (document.querySelector('.garage') as HTMLElement).clientWidth
  - 1.5 * (document.querySelector(`[data-car ='${id}']`) as HTMLElement).clientWidth
  - (document.querySelector(`[data-start ='${id}']`) as HTMLElement).clientWidth;
  return distance;
};

export function moveCar(id: number, distance: number, duration: number): number {
  let start = 0;
  let animationId: number;
  const car = document.querySelector(`[data-car ='${id}']`) as HTMLElement;
  function step(timestamp: number) {
    if (!start) {
      start = timestamp;
    }

    const progress = timestamp - start;
    const timePassed = Math.round(progress * (distance / duration));

    const count = Math.min(timePassed, distance);
    car.style.transform = `translateX(${count}px)`;

    if (timePassed < distance) {
      animationId = window.requestAnimationFrame(step);
    }
  }
  animationId = window.requestAnimationFrame(step);

  return animationId;
}

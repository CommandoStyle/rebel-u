import gsap from 'gsap';

const bookedCover = () => {

const randomX = random(1, 10);
const randomY = random(1, 10);
//const randomDelay = random(0, 1);
const randomAngle = random(-10, 10);

const cans = gsap.utils.toArray('.booked__cover');
cans.forEach(can => {
  gsap.set(can, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });

  moveX(can, 1);
  moveY(can, -1);
  rotate(can, 1);
});

function rotate(target, direction) {
  
  gsap.to(target, {
    duration: () => gsap.utils.random(5, 10),
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, {
    duration: () => gsap.utils.random(3, 5),
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, {
    duration: () => gsap.utils.random(3, 5),
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

}

export default bookedCover;
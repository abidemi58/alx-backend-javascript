export function taskFirst () {
=======
export function taskFirst() {
>>>>>>> fc33a8e2141d6f3d01c83cc19871806b184aaeb3
  const task = 'I prefer const when I can.';
  return task;
}

<<<<<<< HEAD
export function getLast () {
  return 'is okay';
}

export function taskNext () {
=======
export function getLast() {
  return ' is okay';
}

export function taskNext() {
>>>>>>> fc33a8e2141d6f3d01c83cc19871806b184aaeb3
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

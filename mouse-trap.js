// Global variables
let lastCircle;
let box;

function createCircle(event) {
  // Create a circle element
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = 'white';
  circle.style.left = `${event.clientX}px`;
  circle.style.top = `${event.clientY}px`;

  // Store the last circle
  lastCircle = circle;

  // Append the circle to the body
  document.body.appendChild(circle);
}

function moveCircle(event) {
  if (!lastCircle) return;

  lastCircle.style.left = `${event.clientX}px`;
  lastCircle.style.top = `${event.clientY}px`;

  // Check if circle is inside the box
  const circleRect = lastCircle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  if (circleRect.top >= boxRect.top && circleRect.right <= boxRect.right &&
    circleRect.bottom <= boxRect.bottom && circleRect.left >= boxRect.left) {
    lastCircle.style.backgroundColor = 'var(--purple)';
  }
}

function setBox() {
  // Create the box element
  box = document.createElement('div');
  box.classList.add('box');

  // Set the box position to the center of the page
  box.style.left = `50%`;
  box.style.top = `50%`;
  box.style.transform = `translate(-50%, -50%)`;

  // Append the box to the body
  document.body.appendChild(box);
}

// Add event listeners
document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

// Set the box on page load
window.onload = setBox;

export {createCircle,moveCircle,setBox};
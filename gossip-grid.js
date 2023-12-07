import { gossips } from './data.js';

const rangeTypes = ['width', 'fontSize', 'background'];

function createGossipCard(content) {
  const gossip = document.createElement('div');
  gossip.className = 'gossip';
  gossip.innerHTML = content;
  return gossip;
}

function handleRangeChange(event) {
  const targetType = event.target.id;
  const newValue = event.target.value;

  const gossips = document.querySelectorAll('.gossip');
  gossips.forEach(gossip => {
    switch (targetType) {
      case 'width':
        gossip.style.width = `${newValue}px`;
        break;
      case 'fontSize':
        gossip.style.fontSize = `${newValue}px`;
        break;
      case 'background':
        gossip.style.backgroundColor = `hsl(280, 50%, ${newValue}%)`;
        break;
    }
  });
}

function addGross(goss) {
  goss.forEach(elem => {
    const gossipCard = createGossipCard(elem);
    document.body.appendChild(gossipCard);
  });
}

export function grid() {
  const allChange = document.createElement('div');
  allChange.className = 'ranges';

  for (const type of rangeTypes) {
    const rangeInput = document.createElement('input');
    rangeInput.className = 'range';
    rangeInput.id = type;
    rangeInput.type = 'range';
    rangeInput.min = type === 'width' ? 200 : 20;
    rangeInput.max = type === 'width' ? 800 : 40;

    // Attach event listener
    rangeInput.addEventListener('input', handleRangeChange);

    // Append to ranges container
    allChange.appendChild(rangeInput);
  }

  document.body.appendChild(allChange);

  const shareForm = document.createElement('form');
  shareForm.className = 'gossip';
  shareForm.innerHTML = `<textarea placeholder="Got a gossip to share?"></textarea>`;

  const shareButton = document.createElement('button');
  shareButton.textContent = 'Share gossip!';
  shareForm.appendChild(shareButton);

  document.body.appendChild(shareForm);

  shareButton.addEventListener('click', function () {
    const val = document.querySelector('.gossip textarea').value;
    const newGossip = createGossipCard(val);
    document.body.insertAdjacentElement('afterbegin', newGossip);
    document.querySelector('.gossip textarea').value = '';
    event.preventDefault();
  });

  addGross(gossips);

  window.addEventListener('resize', () => {
    const gossips = document.querySelectorAll('.gossip');
    gossips.forEach(gossip => {
      const width = document.getElementById('width').value;
      gossip.style.width = `${width}px`;
    });
  });
}

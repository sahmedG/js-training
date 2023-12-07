function build(numberOfBricks) {
    let brickCounter = 0;
  
    const interval = setInterval(() => {
      brickCounter++;
  
      const newBrick = document.createElement('div');
      newBrick.id = `brick-${brickCounter}`;
  
      if (brickCounter % 3 === 2) {
        newBrick.dataset.foundation = true;
      }
  
      document.getElementById('tower').appendChild(newBrick);
  
      if (brickCounter === numberOfBricks) {
        clearInterval(interval);
      }
    }, 100);
  }
  
  function repair(...brickIds) {
    for (const brickId of brickIds) {
      const brick = document.getElementById(brickId);
  
      if (brick.dataset.foundation === 'true') {
        brick.dataset.repaired = 'in progress';
      } else {
        brick.dataset.repaired = true;
      }
    }
  }
  
  function destroy() {
    const bricks = document.querySelectorAll('#tower div');
    const lastBrick = bricks[bricks.length - 1];
    lastBrick.parentNode.removeChild(lastBrick);
  }
  
  // Add click event listeners to the emojis
  document.getElementById('repair-emoji').addEventListener('click', () => {
    // Get the selected brick IDs
    const selectedBricks = document.querySelectorAll('.selected');
    const brickIds = [...selectedBricks].map(brick => brick.id);
  
    repair(...brickIds);
  });
  
  document.getElementById('destroy-emoji').addEventListener('click', destroy);
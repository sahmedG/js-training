export function pick(event) {
    const hue = Math.round(event.clientX / window.innerWidth * 360);

    const luminosity = Math.round((window.innerHeight - event.clientY) / window.innerHeight * 100);

    document.body.style.backgroundColor = `hsl(${hue}, 50%, ${luminosity}%)`;

    const hslElement = document.querySelector('.hsl');
    hslElement.textContent = `hsl(${hue}, 50%, ${luminosity}%)`;

    const hueElement = document.querySelector('.hue');
    hueElement.textContent = `Hue: ${hue}`;
  
    const luminosityElement = document.querySelector('.luminosity');
    luminosityElement.textContent = `Luminosity: ${luminosity}`;
  
    const axisX = document.getElementById('axisX');
    axisX.setAttribute('x1', 0);
    axisX.setAttribute('x2', window.innerWidth);
  
    const axisY = document.getElementById('axisY');
    axisY.setAttribute('y1', 0);
    axisY.setAttribute('y2', window.innerHeight);

    document.body.addEventListener('click', () => {
      navigator.clipboard.writeText(hslElement.textContent);
    });
  }

  document.body.addEventListener('mousemove', pick);
  
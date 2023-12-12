function interpolation({ step, start, end, callback, duration }) {
    const totalPoints = step + 1;
    const distanceInterval = (end - start) / step;
    const timeInterval = duration / step;
  
    function interpolatePoints() {
      let currentDistance = start;
  
      for (let i = 0; i < step; i++) {
        const currentPoint = [currentDistance, callback(currentDistance)];
        setTimeout(() => {
          callback(currentPoint);
        }, i * timeInterval);
  
        currentDistance += distanceInterval;
      }
    }
  
    interpolatePoints();
  }

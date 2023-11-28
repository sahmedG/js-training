function sums(number) {
    if (number < 2){
        return [];
    };
    const result = [];
    function generatePartitions(target, currentPartition) {
      if (target === 0) {
        result.push([...currentPartition]);
        return;
      }
  
      for (let i = 1; i <= target; i++) {
        currentPartition.push(i);
        generatePartitions(target - i, currentPartition);
        currentPartition.pop();
      }
    }
    generatePartitions(number, []);
    const uniquePartitions = Array.from(new Set(result.map(partition => partition.sort().join(','))))
      .map(partitionString => partitionString.split(',').map(Number));
    uniquePartitions.sort((a, b) => a[0] - b[0] || a.length - b.length);
    uniquePartitions.pop()
    return uniquePartitions;
  }
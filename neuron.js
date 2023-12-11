function neuron(data) {
    const result = {};
  
    for (const item of data) {
      const [type, rest] = item.split(': ');
      const [questionOrder, response] = rest.split(' - Response: ');
  
      const key = questionOrder.toLowerCase().replace(/ /g, '_');
      const category = type.toLowerCase();
  
      if (!result[category]) {
        result[category] = {};
      }
  
      if (!result[category][key]) {
        result[category][key] = {
          [type.toLowerCase()]: questionOrder,
          responses: [],
        };
      }
  
      result[category][key].responses.push(response);
    }
  
    return result;
  }
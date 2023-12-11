function flags(commands) {
    const result = {
      alias: { h: 'help' },
      description: '',
    };
  
    if (!commands.help) {
      result.description = Object.entries(commands)
        .filter(([key]) => key !== 'help')
        .map(([key, value]) => `-${key[0]}, --${key}: ${value}`)
        .join('\n');
    } else {
      const helpFlags = Array.isArray(commands.help) ? commands.help : [];
  
      helpFlags.forEach((flag) => {
        const alias = flag[0];
        const command = flag.slice(1);
        const description = commands[command] || '';
  
        result.alias[alias] = command;
        result.description += `-${alias}, --${command}: ${description}\n`;
      });
    }
  
    return result;
  }
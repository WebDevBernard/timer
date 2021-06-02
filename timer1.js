const times = process.argv.slice(2);
const alarm = (times) => {
  for (const num of times) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000);
    }
  }
};
alarm(times);
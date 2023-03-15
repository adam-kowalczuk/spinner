process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner2 = (action) => {
  const animation = "|/-\\|/-\\|";
  let timer = 100;
  for (const char of animation) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   ${action}`);
    }, timer);
    timer += 200;
  }
};

spinner2("Thinking...");




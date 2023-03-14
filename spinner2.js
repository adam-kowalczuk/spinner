process.stdout.write('hello from spinner2.js... \rheyyy\n');

const animation = "|/-\\|/-\\|";
let timer = 100;
for (const char of animation) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer);
  timer += 200;
}




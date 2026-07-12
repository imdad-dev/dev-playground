
const readline = require('readline');

// history needs to live outside any function, so it persists across calls
const history = [];

const commands = {
  help: () => 'Available commands: help, whoami, date, clear, about, skills, projects, contact, github, resume, echo, history, sudo, exit',
  whoami: () => 'imdad',
  date: () => new Date().toString(),
  clear: () => {
    process.stdout.write('\x1Bc');// unicharacter to clear the output
    return '';
  },

  about: () =>
    'Imdad — Backend / MERN stack developer.\n' +
    'B.Tech CSE @ Assam University (Central), Silchar.',

  skills: () =>
    'Backend: Node.js, Express, MongoDB, REST APIs, JWT Auth\n' +
    'Frontend: React, Vite, Tailwind CSS',

  projects: () =>
    '- Blogify (Node/Express/MongoDB blogging platform)\n' +
    '- URL Shortener (link analytics)\n' +
    '- SkillPath (React learning roadmap)',

  contact: () => 'GitHub: github.com/imdad-dev',

  github: () => 'https://github.com/imdad-dev',

  resume: () => 'Resume link coming soon',

  // args = everything typed after "echo"
  echo: (args) => args.join(' '),

  history: () => history.map((h, i) => `  ${i + 1}  ${h}`).join('\n'),

  // args[0] is the word right after "sudo"
  sudo: (args) => {
    if (args[0] === 'hire-me') return 'Permission granted. Initiating hiring sequence... ✅';
    return 'Sorry, imdad is not allowed to sudo that.';
  },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'imdad@dev-cli:~$ ',
});

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();

  if (input === 'exit') {
    rl.close();
    return;
  }

  if (input) history.push(input); // record every non-empty command

  const [cmd, ...args] = input.split(' ');
  const handler = commands[cmd];

  if (handler) {
    const output = handler(args);
    if (output) console.log(output);
  } else if (input) {
    console.log(`command not found: ${cmd}`);
  }

  rl.prompt();
});

rl.on('close', () => {
  console.log('\nSession ended.');
  process.exit(0);
});
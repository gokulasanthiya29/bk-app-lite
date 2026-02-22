function greet(name) {
  return `Hello, ${name || 'World'}!`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet(process.argv[2]));
}

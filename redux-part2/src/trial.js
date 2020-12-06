function suma() {
  return 6;
}

const sumb = suma;
const sumc = () => suma();

console.log(sumb());
console.log(sumc());

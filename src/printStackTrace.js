
// ----------------------------------------------------------------------------
export function printStackTrace() {
  const error = new Error();
  const stack = error.stack
    .split('\n')
    .slice(2)
    .map((line) => line.replace(/\s+at\s+/, ''))
    .join('\n');
  console.log(stack);
}


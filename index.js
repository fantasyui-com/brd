import outspoken from '../outspoken';

export default function program(options) {

  console.log(`I'll be performing maintenance on ${options.repository}...`)

  const program = outspoken({
    source: fs.readFileSync('./README.md').toString(),
    options
  });

  try {

    program.run()
      .then((output) => {
        return doAsyncOperation3();
      })
      .catch((err) => {
        // Re-throw the error as a higher-level error.
        // We will include the message from the lower-level
        // error as part of the error message for this error.
        throw new Error('Higher-level error. ' + err.message);
      })
      .catch((err) => {
        // In here we will get the higher-level error.
      })

  } catch (e) {

    console.error(`try/catch(${e})`);

  }

}

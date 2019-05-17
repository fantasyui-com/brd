import outspoken from '../outspoken';

export default async function program(options) {

  console.log(`I'll be performing maintenance on ${options.repository}...`)

  const program = outspoken({
    source: fs.readFileSync('./README.md').toString(),
    options
  });


  try {

    const response = await program.run()

  } catch (e) {
    console.info(e);

    if (e instanceof program.RequirementsError) {
        // statements to handle RequirementsError exceptions
      } else if (e instanceof program.CompileError) {
        // statements to handle CompileError exceptions
      } else if (e instanceof program.ServeError) {
        // statements to handle ServeError exceptions
      } else {
        // statements to handle any unspecified exceptions
        console.error(e);; // pass exception object to error handler
      }
  }

}

/* It acts like backend, it also supports middleware function.
For example, you can parse JSON payloads, validate input,
interact with databases, or perform any other server-side operations.
*/

export default (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
  } else {
    res
      .status(200)
      .json({ message: "Welcome, Everyone in Demo Next js Project!" });
  }
};

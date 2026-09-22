export function rootController(_req, res) {
  res.status(200).json({
    name: 'node-javascript',
    message: 'Node.js JavaScript application is running.',
  });
}

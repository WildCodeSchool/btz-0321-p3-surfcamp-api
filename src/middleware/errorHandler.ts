export default function errorHandler(err: any, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).send(err.stack);
}

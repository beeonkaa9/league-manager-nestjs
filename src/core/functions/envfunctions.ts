//converts port to number for env
export function portToNumber(port: string): number {
  const portAsNumber = parseInt(port, 10);
  return portAsNumber;
}

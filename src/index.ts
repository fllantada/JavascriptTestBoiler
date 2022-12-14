export default function Challenge(x: number): string {
  const seconds = getSeconds(x);
  const minutes = getMinutes(x);
  const hours = getHours(x);

  if (hours && minutes && seconds) {
    return `${hours}${minutes}`;
  }

  return `${hours}${minutes}${seconds}`;
}

function getSeconds(x: number): string {
  const seconds = x % 60;
  return seconds ? `${seconds}s` : "";
}

function getMinutes(x: number): string {
  /*  if (Math.floor(x / 3600) > 0) {
    const minutes = Math.ceil((x % 3600) / 60);
    return minutes ? `${minutes}m` : "";
  } */
  const minutes = Math.floor((x / 60) % 60);

  return minutes ? `${minutes}m` : "";
}

function getHours(x: number): string {
  const hours = Math.floor(x / 3600);

  return hours ? `${hours}h` : "";
}

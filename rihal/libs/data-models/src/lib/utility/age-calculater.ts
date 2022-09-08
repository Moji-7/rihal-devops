export const ageCalculetor = (birthdate: Date): number => {
  const timeDiff = Math.abs(Date.now() - birthdate.getTime());
  const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  return age;
};

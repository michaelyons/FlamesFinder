export const cleanLocationImage = imgResponse => {
  const url = URL.createObjectURL(imgResponse);
  return url;
};

export const getImageUrl = (path) => {
  const newPath = new URL(`./assets/`, import.meta.url).href;
  return `${newPath}${path}`;
};

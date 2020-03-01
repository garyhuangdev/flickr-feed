export const authorConvert = author => {
  return author.split('"')[1];
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

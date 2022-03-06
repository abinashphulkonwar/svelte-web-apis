const toBlob = async (file = [[]], opts = {}) => {
  // @ts-ignore
  return new Blob(file, opts);
};

export default toBlob;

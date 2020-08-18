module.exports = {
  ...jest.requireActual('react-dom'),
  createPortal: (element) => element,
};

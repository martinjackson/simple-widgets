const eventStub = value => ({
  stopPropagation: () => {},
  preventDefault: () => {},
  persist: () => {},
  target: {
    value,
    checked: value,
  },
  ...value,
});

export default eventStub;

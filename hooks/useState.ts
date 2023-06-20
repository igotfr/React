function useState<T>(initVal: T) {
  let _val = initVal;
  const state = () => _val;
  const setValue = (newVal: T) => { _val = newVal }

  return [state, setValue]
}

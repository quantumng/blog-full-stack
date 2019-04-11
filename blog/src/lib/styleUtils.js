export const v = (pxValue) => {
  const ratio = 7.5
  if (Array.isArray(pxValue)) {
      pxValue = pxValue[0];
  }
  pxValue = parseInt(pxValue)
  return pxValue / ratio + 'vw';
}

export function updateContrast() {
  return {
    type: '@contrast/CHANGE_CONTRAST',
    payload: { contrast: true },
  };
}

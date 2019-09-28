export function updateBalance(amount) {
  return {
    type: '@user/UPDATE_BALANCE',
    payload: { amount },
  };
}

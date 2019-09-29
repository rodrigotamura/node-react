import produce from 'immer';

const INITIAL_STATE = {
  contrast: false,
};

export default function contrast(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contrast/CHANGE_CONTRAST': {
        draft.contrast = !state.contrast;
        break;
      }
      default:
    }
  });
}

/* 1628791935

f6p3u1 */

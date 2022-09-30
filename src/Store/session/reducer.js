import { sets } from '~/assets/data/sets.data';

const INITIAL_STATE = {
    set: sets[0],
    sceneIndex: 0,
    sceneEffect: { active: false, effect: undefined },
    night: false,
    pixelated: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'set_scene_set': {
            // if set changes -> reset sceneEffect ( active: false, effect: undefined )
            const sceneEffect = action.payload.set !== state.set ? INITIAL_STATE.sceneEffect : state.sceneEffect;
            return { ...state, set: action.payload.set, sceneIndex: action.payload.sceneIndex, sceneEffect };
        }
        case 'set_scene_effect': {
            // same effect → active: false, effect: undefined
            // different effect → active: true, effect: newEffect
            const newSceneEffect =
                action.payload.effect !== state.sceneEffect.effect
                    ? {
                          ...state.sceneEffect,
                          active: true,
                          effect: action.payload.effect,
                      }
                    : {
                          ...state.sceneEffect,
                          active: !state.sceneEffect.active,
                          effect: undefined,
                      };

            return { ...state, sceneEffect: newSceneEffect };
        }
        case 'set_scene_night': {
            return { ...state, night: !state.night };
        }
        case 'set_scene_pixel': {
            return { ...state, pixelated: !state.pixelated };
        }

        default:
            throw new Error('Invalid Actions');
    }
}

export { INITIAL_STATE };
export default reducer;

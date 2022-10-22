import { effects, playlistsBase } from '~/assets/data/audios.data';
import { sets } from '~/assets/data/sets.data';

const randomNumber = Math.floor(Math.random() * playlistsBase.chill.length);
const INITIAL_STATE = {
    set: sets[0],
    sceneIndex: 0,
    sceneEffect: { active: false, effect: undefined },
    night: false,
    pixelated: false,
    effects: effects,
    customTracks: playlistsBase,
    current_track: playlistsBase.chill[randomNumber],
    playing: false,
    level: 0.5,
    playlist: 'chill',
    history_pointer: 0,
    history_tracks: [playlistsBase.chill[randomNumber]],
};

function reducer(state, action) {
    switch (action.type) {
        case 'set_scene_set': {
            // if set changes -> reset sceneEffect ( active: false, effect: undefined )
            const sceneEffect = action.payload.set !== state.set ? INITIAL_STATE.sceneEffect : state.sceneEffect;
            //  if set changes -> reset all effects noise
            const newEffects = state.effects;
            if (action.payload.set !== state.set) {
                newEffects.forEach((e) => {
                    delete e.level;
                    delete e.active;
                });
            }
            return {
                ...state,
                set: action.payload.set,
                sceneIndex: action.payload.sceneIndex,
                sceneEffect,
                effects: newEffects,
            };
        }
        case 'set_scene_effect': {
            // different effect → active: true, effect: newEffect
            // same effect → active: false, effect: undefined

            let newSceneEffect;
            // if variable 'active' not undefined (is true or false)
            // -> action change set when update effect volume
            if (typeof action.payload.active !== 'undefined') {
                newSceneEffect = {
                    ...state.sceneEffect,
                    active: action.payload.active,
                    effect: action.payload.active ? action.payload.effect : undefined,
                    //set to undefined if that effect not active
                };
            } else
                newSceneEffect =
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
        case 'play_pause_effect': {
            const index = state.effects.findIndex((e) => e.type === action.payload.type);
            if (index === -1) return { ...state };

            const newEffects = [...state.effects];
            const effect = newEffects[index];
            effect.active = !effect.active;
            effect.level = effect.level ?? 0.5;
            newEffects[index] = effect; //replace new effect

            return { ...state, effects: newEffects };
        }
        case 'set_effect_volume': {
            // get index of effect in list effects
            const index = state.effects.findIndex((e) => e.type === action.payload.effect.type);
            if (index === -1) return { ...state };

            const newEffects = [...state.effects];
            const effect = newEffects[index];
            effect.level = action.payload.level ?? 0;
            effect.active = effect.level !== 0; // true if level = 1-100
            newEffects[index] = effect; //replace new effect
            return { ...state, effects: newEffects };
        }
        case 'set_mix_mode': {
            const newEffects = [...state.effects];
            if (state.mix_mode) {
                const effectsOfScene = state.set.effects;
                newEffects.forEach((e) => {
                    e.active = effectsOfScene.includes(e.type) ? e.active : false;
                    e.level = effectsOfScene.includes(e.type) ? e.level : 0;
                });
            }

            return { ...state, mix_mode: !state.mix_mode, effects: newEffects };
        }
        case 'play_pause_audio': {
            return { ...state, playing: !state.playing };
        }
        case 'update_custom_tracks': {
            return { ...state, customTracks: action.payload.customTracks };
        }
        case 'next_track': {
            //history_tracks = [1st song, ], pointer = 1 -> next new track
            const history_pointer = state.history_pointer + 1;
            const history_tracks = [...state.history_tracks];
            const currentListTracks = state.customTracks[state.playlist];
            let newTrack;

            if (history_pointer === state.history_tracks.length) {
                let randomNumber = Math.floor(Math.random() * currentListTracks.length);
                newTrack = currentListTracks[randomNumber];
                // check history to avoid duplicate track when next new track
                while (
                    newTrack.url === state.current_track.url ||
                    !!history_tracks
                        .slice(2 - currentListTracks.length, -1)
                        .map((e) => e.url)
                        .includes(newTrack.url)
                ) {
                    randomNumber = Math.floor(Math.random() * currentListTracks.length);
                    newTrack = currentListTracks[randomNumber];
                }
                history_tracks.push(newTrack);
            } else {
                newTrack = history_tracks[history_pointer];
            }
            return { ...state, current_track: newTrack, history_pointer, history_tracks, playing: true };
        }
        case 'prev_track': {
            let newTrack;
            let history_pointer = state.history_pointer;
            // let newTrack =  state.history_tracks[history_pointer];
            if (state.history_pointer === 0) {
                newTrack = state.current_track;
            } else {
                history_pointer--;
                newTrack = state.history_tracks[history_pointer];
            }

            return { ...state, current_track: newTrack, history_pointer };
        }
        case 'set_audio_volume': {
            return { ...state, level: action.payload.level };
        }
        case 'set_playlist': {
            const newPlaylist = action.payload.type;
            const random = Math.floor(Math.random() * state.customTracks[newPlaylist].length);
            const newTrack = state.customTracks[newPlaylist][random];
            const history_tracks = [newTrack];
            const history_pointer = 0;
            // reset history, pointer
            return {
                ...state,
                playlist: action.payload.type,
                history_tracks,
                history_pointer,
                current_track: newTrack,
            };
        }
        default:
            throw new Error('Invalid Actions');
    }
}

export { INITIAL_STATE };
export default reducer;

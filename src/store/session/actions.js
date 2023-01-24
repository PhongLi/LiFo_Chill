const setSceneAndSet = (payload) => ({
    type: 'set_scene_set',
    payload,
});

const setSceneEffect = (payload) => ({
    type: 'set_scene_effect',
    payload,
});

const setSceneNight = (payload) => ({
    type: 'set_scene_night',
    payload,
});
const setScenePixel = (payload) => ({
    type: 'set_scene_pixel',
    payload,
});

const playAndPauseEffect = (payload) => ({
    type: 'play_pause_effect',
    payload,
});
const setEffectVolume = (payload) => ({
    type: 'set_effect_volume',
    payload,
});
const setMixMode = (payload) => ({
    type: 'set_mix_mode',
    payload,
});

const playAndPauseAudio = (payload) => ({
    type: 'play_pause_audio',
    payload,
});

const forceUpdateCustomTracks = (payload) => ({
    type: 'update_custom_tracks',
    payload,
});
const nextTrack = (payload) => ({
    type: 'next_track',
    payload,
});
const previousTrack = (payload) => ({
    type: 'prev_track',
    payload,
});
const setAudioVolume = (payload) => ({
    type: 'set_audio_volume',
    payload,
});
const setPlaylist = (payload) => ({
    type: 'set_playlist',
    payload,
});

const setDraggableModals = (payload) => ({
    type: 'set_draggable_modals',
    payload,
});

const setTemplate = (payload) => ({
    type: 'set_template',
    payload,
});
const muteUnmuteAll = (payload) => ({
    type: 'mute_audio',
    payload,
});
export {
    forceUpdateCustomTracks,
    setSceneAndSet,
    playAndPauseEffect,
    playAndPauseAudio,
    setSceneEffect,
    setSceneNight,
    setScenePixel,
    setEffectVolume,
    setMixMode,
    nextTrack,
    previousTrack,
    setAudioVolume,
    setPlaylist,
    setDraggableModals,
    setTemplate,
    muteUnmuteAll,
};

const setSceneAndSet = (payload) => ({
    type: 'set_scene_set',
    payload,
});

const playAndPauseEffect = (payload) => ({
    type: 'play_pause_effect',
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
export { setSceneAndSet, playAndPauseEffect, setSceneEffect, setSceneNight, setScenePixel };

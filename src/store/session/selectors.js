export const getScene = (state) => {
    return state.set.scenes[state.sceneIndex];
};
export const getSet = (state) => {
    return state.set;
};
export const nightMode = (state) => {
    return state.night;
};

export const pixelMode = (state) => {
    return state.pixelated;
};
export const getSceneSource = (state) => {
    const currentScene = state.set.scenes[state.sceneIndex];
    const variants = Object.keys(currentScene.variants);

    const hasEffectUrl = variants.includes(state.sceneEffect.effect);
    const hasNightVersion = !!variants.find((variant) => variant.includes('night'));
    const hasPixelVersion = !!variants.find((variant) => variant.includes('pixel'));

    const effect = state.sceneEffect.effect;
    const name = state.sceneEffect.active && hasEffectUrl ? effect : 'default';
    const night_name = state.night ? name + '_night' : 'default';
    const pixel_name = state.pixelated ? name + '_pixel' : 'default';

    if (hasNightVersion && state.night) {
        return currentScene.variants[night_name] ?? currentScene.variants['default'];
    } else if (hasPixelVersion && state.pixelated) {
        return currentScene.variants[pixel_name] ?? currentScene.variants['default'];
    } else {
        return currentScene.variants[name];
    }
    // effect is active & current scene has this effect
};

export const getPlayerEffects = (state) => {
    return state.effects;
};

export const getMixMode = (state) => {
    return state.mix_mode;
};

export const getCurrentTrack = (state) => {
    return state.current_track;
};

export const getPlayingStatus = (state) => {
    return state.playing;
};

export const getAudioLevel = (state) => {
    return state.level;
};

export const getPlayerPlaylist = (state) => {
    return state.playlist;
};

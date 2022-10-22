import {
    cityIcon,
    cityActive,
    rainCityIcon,
    rainCityActive,
    fireplaceIcon,
    fireplaceActive,
    campfireIcon,
    campfireActiveIcon,
    forestIcon,
    forestActive,
    rainForestIcon,
    rainForestActive,
    wavesIcon,
    wavesActive,
    fanIcon,
    fanActive,
    stormIcon,
    stormActive,
    riverIcon,
    riverActive,
    birdIcon,
    birdActive,
    peopleIcon,
    peopleActive,
    windIcon,
    windActive,
    oceanIcon,
    oceanActive,
    snowIcon,
    snowActive,
    keyboardIcon,
    keyboardActive,
    spaceIcon,
    spaceActive,
    underwaterActive,
    underwaterIcon,
} from '~/assets/icons';

const effects = {
    fire: [campfireIcon, campfireActiveIcon],
    forest: [forestIcon, forestActive],
    rain_forest: [rainForestIcon, rainForestActive],
    waves: [wavesIcon, wavesActive],
    fan: [fanIcon, fanActive],
    city: [cityIcon, cityActive],
    storm: [stormIcon, stormActive],
    river: [riverIcon, riverActive],
    birds: [birdIcon, birdActive],
    people: [peopleIcon, peopleActive],
    wind: [windIcon, windActive],
    ocean: [oceanIcon, oceanActive],
    snow: [snowIcon, snowActive],
    keyboard: [keyboardIcon, keyboardActive],
    space: [spaceIcon, spaceActive],
    underwater: [underwaterIcon, underwaterActive],
    fireplace: [fireplaceIcon, fireplaceActive],
    rain_street: [rainCityIcon, rainCityActive],
};

export const getEffectIcon = (type, isActive = false) => {
    return effects[type][isActive ? 1 : 0];
};
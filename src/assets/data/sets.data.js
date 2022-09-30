import {
    cafeThumb,
    forestThumb,
    summerThumb,
    vanThumb,
    oceanThumb,
    chillVibes,
    lofi_desk,
    cottage,
    bookCafe,
    kyoto,
    dreamingScene,
    honoluluPW,
} from '~/assets/thumbnails';

import { scenes } from './scenes.data';

export const sets = [
  
    {
        _id: 'book_cafe',
        thumbnail: bookCafe,
        name: 'Book Cafe',
        scenes: [scenes.bookCafeOut, scenes.bookCafeIn],
        effects: ['city', 'rain_street', 'keyboard'],
        premium: false,
    },
    

    {
        _id: 'dreaming',
        thumbnail: dreamingScene,
        name: 'Am I Dreaming?',
        scenes: [scenes.space, scenes.underwater],
        effects: ['keyboard', 'space', 'underwater'],
        premium: false,
    },
    {
        _id: 'kyoto',
        thumbnail: kyoto,
        name: 'Kyoto',
        scenes: [scenes.kyotoStreet, scenes.kyotoPark],
        effects: ['city', 'birds', 'river'],
        premium: false,
    },
    {
        _id: 'honolulu',
        thumbnail: honoluluPW,
        name: 'Honolulu',
        scenes: [scenes.honoluluIn, scenes.honoluluOut],
        effects: ['keyboard', 'storm', 'ocean'],
        premium: false,
    },
    {
        _id: 'chill_vibes',
        thumbnail: chillVibes,
        name: 'Chill Vibes',
        scenes: [scenes.lrBedRoom, scenes.lrLivingRoom],
        effects: ['city', 'rain_street', 'fireplace'],
        premium: false,
    },
    {
        _id: 'cottage',
        thumbnail: cottage,
        premium: false,
        name: 'Northern Lights',
        scenes: [scenes.cottageIn, scenes.cottageOut],
        effects: ['snow', 'keyboard', 'fireplace'],
    },
    {
        _id: 'desk_lofi',
        thumbnail: lofi_desk,
        name: 'Lofi Desk',
        scenes: [scenes.deskCity, scenes.deskBeach, scenes.deskSnow],
        effects: ['city', 'waves', 'snow'],
        premium: false,
    },
    {
        _id: 'forest_house',
        thumbnail: forestThumb,
        name: 'Forest House',
        scenes: [scenes.forestInside, scenes.forestOutside],
        effects: ['rain_forest', 'birds', 'river'],
        premium: false,
    },
    {
        _id: 'ocean_tale',
        thumbnail: oceanThumb,
        name: 'Ocean Tales',
        scenes: [scenes.oceanInside, scenes.oceanOutside],
        effects: ['ocean', 'wind', 'storm'],
        premium: false,
    },
    {
        _id: 'lofi_cafe',
        thumbnail: cafeThumb,
        name: 'Lofi cafè',
        scenes: [scenes.cafeInside, scenes.cafeOutside],
        effects: ['city', 'rain_street', 'people', 'rain_window'],
        premium: false,
    },
    {
        _id: 'van_life',
        thumbnail: vanThumb,
        name: 'Van Life',
        scenes: [scenes.vanInside, scenes.vanOutside],
        effects: ['fire', 'forest', 'rain_forest'],
        premium: false,
    },

    {
        _id: 'summer_days',
        thumbnail: summerThumb,
        name: 'Summer Days',
        scenes: [scenes.summerInside, scenes.summerOutside],
        effects: ['storm', 'fan', 'waves'],
        premium: false,
    },
];

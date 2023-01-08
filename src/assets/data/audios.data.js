const effects = [
    {
        type: 'fire',
        name: 'Campfire',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/campfire.mp3',
    },
    {
        type: 'forest',
        name: 'Forest',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/forest_night.mp3',
    },
    {
        type: 'rain_forest',
        name: 'Forest Rain',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_forest.mp3',
    },
    {
        type: 'waves',
        name: 'Waves',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/waves.mp3',
    },
    {
        type: 'fan',
        name: 'Fan',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/fan.mp3',
    },
    {
        type: 'city',
        name: 'City traffic',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/city_traffic.mp3',
    },
    {
        type: 'storm',
        name: 'Summer Storm',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/summer_storm.mp3',
    },
    {
        type: 'rain_street',
        name: 'City Rain',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_city.mp3',
    },
    {
        type: 'river',
        name: 'River',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/river.mp3',
    },
    {
        type: 'birds',
        name: 'Bird Chirping',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/birds.mp3',
    },
    {
        type: 'people',
        name: 'People Talking',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/people_talk_inside.mp3',
    },
    {
        type: 'wind',
        name: 'Wind',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/wind.mp3',
    },
    {
        type: 'ocean',
        name: 'Ocean',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/ocean.mp3',
    },
    {
        type: 'fireplace',
        name: 'Fireplace',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/fireplace.mp3',
    },
    {
        type: 'snow',
        name: 'Blizzard',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/snow.mp3',
    },
    {
        type: 'keyboard',
        name: 'Keyboard',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/keyboard.mp3',
    },
    {
        type: 'underwater',
        name: 'Underwater',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/underwater.mp3',
    },
    {
        type: 'space',
        name: 'Deep Space',
        url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/deepspace.mp3',
    },
    // {
    //     type: 'train_rain',
    //     name: 'Window Rain',
    //     url: 'https://lofi-new.s3.us-east-2.amazonaws.com/Window+rain.mp3',
    // },
    // {
    //     type: 'train_noise',
    //     name: 'Train',
    //     url: 'https://lofi-new.s3.us-east-2.amazonaws.com/train.mp3',
    // },
];
const playlistsBase = {
    chill: [
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_1.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_2.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_3.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_4.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_5.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_6.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_7.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_8.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_9.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_10.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_11.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_12.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_13.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_14.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_15.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_16.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_17.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_18.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_19.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_20.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_21.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_22.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_23.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_24.mp3',
        },
    ],
    jazzy: [
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_1.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_2.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_3.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_4.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_5.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_6.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_7.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_8.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_9.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_10.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_11.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_12.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_13.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_14.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_15.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_16.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_17.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_18.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_19.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_20.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_21.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_22.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_23.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_24.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/jazzy/jazzy_25.mp3',
        },
    ],
    sleepy: [
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_1.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_2.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_3.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_4.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_4.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_5.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_6.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_7.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_8.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_9.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_10.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_11.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_12.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_13.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_14.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_15.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_16.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_17.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_18.mp3',
        },
        {
            url: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/sleepy/sleepy_19.mp3',
        },
    ],
};
const alarms = [
    'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Digital.mp3',
    'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Easy+Tone.mp3',
    'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Piano.mp3',
    'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Ringtone.mp3',
    'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Soft.mp3',
];
export { playlistsBase, effects, alarms };

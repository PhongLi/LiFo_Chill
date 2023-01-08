import axios from 'axios';
import { playlistsBase } from '~/assets/data/audios.data';

export const fetchCustomTracks = async () => {
    try {
        const res1 = await axios.get(
            "https://sheets.googleapis.com/v4/spreadsheets/1LHdX1CrJQct6f6t1Cx8IxvtdLUjwd5kG0yPH9R0saRY/values/'sheet1'!A2:F1000?key=AIzaSyCo3Wls8gIK0QuoUW3LlO4tbZD6DSxqe6g",
        );
        const res2 = await axios.get(
            "https://sheets.googleapis.com/v4/spreadsheets/1LHdX1CrJQct6f6t1Cx8IxvtdLUjwd5kG0yPH9R0saRY/values/'tracce%20da%20escludere'!b1:z3?key=AIzaSyCo3Wls8gIK0QuoUW3LlO4tbZD6DSxqe6g",
        );

        const tracksRaw = res1.data.values;
        const exclude = res2.data.values;

        // toFixed :number to string
        const customTracks = {
            chill: playlistsBase.chill.filter((e, i) => !exclude[0].includes((i + 1).toFixed(0))),
            jazzy: playlistsBase.jazzy.filter((e, i) => !exclude[1].includes((i + 1).toFixed(0))),
            sleepy: playlistsBase.sleepy.filter((e, i) => !exclude[2].includes((i + 1).toFixed(0))),
        };
        // console.log('customTracks', customTracks);
        tracksRaw.forEach((e) => {
            if (e[4].toUpperCase() === 'TRUE') {
                const obj = {
                    title: e[0],
                    url: e[3],
                    social_link: e[2],
                };
                if (['jazzy', 'sleepy', 'chill'].includes(e[1])) {
                    customTracks[e[1]].push(obj);
                }
            }
        });
        return customTracks;
    } catch (error) {
        console.log(error);
    }
};

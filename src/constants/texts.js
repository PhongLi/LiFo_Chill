import { profileIcon, faqIcon, feedback, infos, infoIcon, playlist, settingIcon, contactIcon } from '~/assets/icons';

export const Titles = [
    {
        title1: 'Your calm, digital space to study,',
        title2: '',
        msg: 'Welcome to lofi.co. Let us show you around!',
    },
    {
        title1: 'The Perfect Playlist',
        title2: 'With One Click',
        msg: 'Hit play and get into the zone instantly. No ads. No distracting lyrics.',
        msg2: '3 Stations to suit your mood: chill, jazzy or sleepy.',
    },
    {
        title1: 'Craft Your Focus Environment',
        title2: '',
        msg: 'Would you rather get it done in the cafe, or escape to the beach? Lofi.co gives you both with interactive artworks. ',
        msg2: 'Basic users can access 2 artworks, while premium users have exclusive access to a growing library of 13+ illustrations.',
    },
    {
        title1: 'Cut Out Distractions',
        title2: 'With Peaceful Sounds',
        msg: 'Drown out even the noisiest neighbour with soothing background sounds. Each artwork comes with adjustable sounds like rain, waves or birds. Some sounds change the scene’s visuals.',
        msg2: 'Basic users get 3 sound effects. Premium users can mix and match 20+ sounds. ',
    },

    {
        title1: 'The Focus Zone (Premium)',
        msg: 'Deadline coming up? The Focus Zone lets you stay on track by gathering the best focus tools in one place - away from your distracting smartphone.',
        msg2: '- Pomodoro timer: get more done in less time (without burning out)<br/>- Notepad: never let a thought disappear<br/>- Time logger: track your progress<br/>- To-do list: always know what to do next',
    },
];

export const ABOUT_US = {
    about1: 'As (mostly) students, we understand how difficult it is to just sit at your desk and focus. Especially when you have to set your music, timer and notes from three different devices or websites, while getting bombarded with ads, maybe of yet another productivity tool. We made lofi.co as a way to help you fix this and finally have a personal, calm digital space to work, study or just unwind. With a growing library of 20+ original interactive illustrations, 15+ calming ambient sounds and powerful but still easy-to-use tools like our timer with time-tracked tasks, we are now building what aims to be the go to platform for everyone working at their computer, with the goal of making productivity less stressful.',

    about2: 'We are constantly improving, make sure to follow our socials to stay updated!',
};

export const MENU_ITEMS = [
    {
        id: 0,
        title: 'User settings',
        icon: profileIcon,
    },
    {
        id: 1,
        title: 'Login/Sign up',
        icon: profileIcon,
        modal: 'Login',
    },
    {
        id: 2,
        title: 'General settings',
        icon: settingIcon,
    },
    {
        id: 3,
        title: 'Contact us',
        icon: contactIcon,
        to: '/contact',
    },
    {
        id: 4,
        title: 'How it works',
        icon: infos,
        modal: 'Tutorial',
    },
    {
        id: 5,
        title: 'FAQ',
        icon: faqIcon,
        to: '/faq',
    },
    {
        id: 6,
        title: 'Music',
        icon: playlist,
        to: '/music',
    },
    {
        id: 7,
        title: 'About us',
        icon: infoIcon,
        modal: 'AboutUs',
    },
    {
        id: 8,
        title: 'Share feedback',
        icon: feedback,
        action: () => window.open('https://airtable.com/shrDWZLVdKhXg4uiA', '__bank'),
    },
];

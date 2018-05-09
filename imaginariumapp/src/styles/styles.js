import WebFont from 'webfontloader';

export function Fonts () {
    return (
        WebFont.load({
            google: {
                families: ['CrimsonText', 'Lato']
            }
        })
    );
};

export function Colors () {
    return (
        {
            gold: 'rgb(208,168,10)',
            orange: 'rgb(254,134,55)',
            blueGray: 'rgb(44,48,54)'
        }
    );
}


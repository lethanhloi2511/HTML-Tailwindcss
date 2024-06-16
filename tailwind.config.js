/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],

    theme: {
        extend: {
            screens: {
                ssm: '375px',

                sml: '425px',

                smm: '500px',

                sm: '640px',

                md: '768px',

                lg: '1024px',

                xl: '1280px',

                '2xl': '1440px',

                '3xl': '1536px',
            },
            fontFamily: {
                Kaushan: ['Kaushan Script', 'cursive'],
                Montserrat: ['Montserrat', 'sans-serif'],
                Roboto: ['Roboto', 'sans-serif'],
            },
            textColor: {
                skin: {
                    title: 'var(--title-color)',
                    text: 'var(--title-text-color)',
                    textColor: 'var(--text-color)',
                    primary: 'var(--primary-color)',
                    second: 'var(--secondary-color)',
                    third: 'var(--third-color)',
                    arrow: 'var(--arrow-color)',
                },
            },

            backgroundColor: {
                skin: {
                    primary: 'var(--primary-color)',
                    second: 'var(--secondary-color)',
                    third: 'var(--third-color)',
                    lineHeaders: 'var(--line-secondary)',
                    linePrimary: 'var(--line-primary)',
                    lineSecond: 'var(--line-secondary)',
                },
            },
            borderColor: {
                skin: {
                    second: 'var(--secondary-color)',
                },
            },
            colors: {
                'gray-rgba': 'rgba(255, 255, 255, 0.15)',
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                slideDown: 'slideDown .8s linear',
            },
            inset: {
                '-0.5rem': '-0.5rem',
                '-10px': '-10px',
                '-20px': '-20px',
                '5px': '5px',
                '20px': '20px',
                '210px': '210px',
                '300px': '300px',
                '500px': '500px',
                '25%': '25%',
                '400%': '400%',
            },
        },
    },
    plugins: [],
};

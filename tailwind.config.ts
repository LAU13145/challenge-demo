import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0097AE',
        secondary: '#F9B036',
        third: '#FEC82F',

        green_400: '#E6F3F5',
        green_300: '#D9ECEF',
        green_200: '#B0D8DE',
        green_100: '#008296',

        green000: '#007587',
        green100: '#006878',
        green200: '#006271',
        green300: '#004E5A',
        green400: '#003A44',
        green500: '#002E35',

        greyscale_500: '#F9FAFB',
        greyscale_400: '#F0F1F2',
        greyscale_300: '#E9EAEC',
        greyscale_200: '#D1D3D8',
        greyscale_100: '#6B7280',

        greyscale000: '#606773',
        greyscale100: '#565B66',
        greyscale200: '#505660',
        greyscale300: '#40444D',
        greyscale400: '#30333A',
        greyscale500: '#25282D',

        success_100: '#2A5329',
        success_200: '#214020',
        success_300: '#EFF8EF',
        success_400: '#E7F4E6',
        success_500: '#CDE9CC',

        success000: '#386E37',
        success100: '#468A44',
        success200: '#4A9349',
        success300: '#54A652',
        success400: '#5DB85B',
        success500: '#2CA99E',

        error_100: '#B41B1A',
        error_200: '#C81E1D',
        error_300: '#EEB9B9',
        error_400: '#F7DDDD',
        error_500: '#FEF1F1',

        error000: '#A01817',
        error100: '#961716',
        error200: '#781211',
        error300: '#5A0D0D',
        error400: '#460B0A',

        warning_050: '#FEF7EB',
        warning_100: '#FDE7C1',
        warning_200: '#FCDBA3',
        warning_300: '#FBCA78',
        warning_400: '#FAC05E',
        warning_500: '#F9B036',
        warning_600: '#E3A031',
        warning_700: '#B17D26',
        warning_800: '#89611E',
        warning_900: '#694A17',

        blue_400: '#E6EDF3',
        blue_300: '#DAE4ED',
        blue_200: '#B2C7D9',
        blue_100: '#054B85',

        blue000: '#054478',
        blue100: '#043C6A',
        blue200: '#043864',
        blue300: '#032D50',
        blue400: '#032D50',
        blue500: '#021A2F',

        white: '#FFFFFF',
      },
      backgroundImage: {
        'landing-background': "url('Nubes.svg')",
      },
    },
  },
  plugins: [],
}
export default config

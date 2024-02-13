import { League_Spartan } from 'next/font/google';
import localFont from 'next/font/local'

export const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    variable: "--font-league-spartan",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const rethink = localFont({
    src: [
        {
            path: './fonts/RethinkSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/RethinkSans-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/RethinkSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/RethinkSans-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/RethinkSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/RethinkSans-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
    weight: "400 500 600 700 800",
    variable: '--font-rethink',
    style: 'normal italic',
    display: 'swap',
})
// Development projects
import covidtrackerImg from './images/development/covid.png'
import weatherApp from './images/development/weather.png'

//Design Projects
import maragogiApp from './images/design/maragogiAPP.gif'
import tideTime from './images/design/tidetime.png'

//Illustration Projects
import codingSVG from '../../assets/coding.svg'

export const frontEnd = [
    {
        title:'COVID19 TRACKER',
        desc:'COVID19 Tracker from every Country.',
        img: covidtrackerImg,

        moreInfo:'Created wicth ReactJS and ChartJS',
        link:'https://cov19-tracker-reactjs.netlify.app/'
    },
    {
        title:'Weather App',
        desc:'City Weather App',
        img: weatherApp,

        moreInfo:'Created with ReactJS and Axios',
        link:'https://kind-weather-app.netlify.app/'
    },
    
]

export const design = [
    {
        title:'City App',
        img: maragogiApp,
        
        desc: 'Designed a City App with Tide time',
    },

    {
        title:'Tide Time App',
        img: tideTime,

        desc: 'Tide time App'
    }

]


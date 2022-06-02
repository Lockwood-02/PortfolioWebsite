import { DiJava } from 'react-icons/di'
import { TbBrandHtml5 } from 'react-icons/tb'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandJavascript } from 'react-icons/tb'

export default [
    {
        title: 'Java',
        description: 'Most of my time coding has been spent in Java. I have taken courses over the fundamentals such as algorithms and more.',
        icon: <DiJava className='w-full h-full'></DiJava>
    },

    {
        title: 'HTML',
        description: 'I have been learning HTML for over a year now and I continue to learn something new everyday. Most of my projects are made in HTML.',
        icon: <TbBrandHtml5 className='w-full h-full'></TbBrandHtml5>
    },

    {
        title: 'CSS',
        description: 'I have about as much experience in CSS as I do HTML as they go hand in hand. I use it mainly to style the webiste I build in my freetime.',
        icon: <TbBrandCss3 className='w-full h-full'></TbBrandCss3>
    },

    {
        title: 'JavaScript',
        description: "I like to incorporate as much JavaScript as I can into all of my website based projects as it allows more intricate details to the work you are doing.",
        icon: <TbBrandJavascript className='w-full h-full'></TbBrandJavascript>
    }
]
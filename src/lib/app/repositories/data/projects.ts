const json: Array<ProjectItem> = [
    {
        type: 'side project',
        title: 'The Daily Smark',
        url: 'https://www.thedailysmark.com/',
        image: '/img/projects/thedailysmark.png',
        description: "I wanted to build a product aggregating publicly available news and podcasts focused on professional wrestling. I was able to pull into multiple sources of wrestling news, videos, and podcasts that helped create a one-stop shop for wrestling content.",
        skills: ['css', 'html', 'js', 'svelte', 'mysql', 'laravel', 'swift'],
        areas: ['backend', 'frontend', 'api', 'ios']
    },
    {
        type: 'side project',
        title: 'Tonight Wrestling',
        url: 'https://www.tonightwrestling.com/',
        image: '/img/projects/tonightwrestling.png',
        description: 'Looking for a next challenge, I knew there must be a way to display upcoming live events and TV shows for pro wrestling. With some elbow grease, I built a website that gathers all this data in one package.',
        skills: ['css', 'html', 'js', 'svelte', 'mysql', 'laravel'],
        areas: ['backend', 'frontend', 'api']
    },
];

export default json;
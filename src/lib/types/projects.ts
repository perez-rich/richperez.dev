type Skill = 'laravel' | 'php' | 'mysql' | 'html' | 'css' | 'js' | 'vue' | 'react' | 'svelte' | 'swift';
type Area = 'frontend' | 'backend' | 'api' | 'ios';

interface ProjectItem {
    type: 'client' | 'side project'
    title: string
    url: string
    image: string,
    description: string,
    skills: Array<Skill>,
    areas: Array<Area>
};

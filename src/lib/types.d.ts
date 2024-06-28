type Skill = 'laravel' | 'php' | 'mysql' | 'html' | 'css' | 'js' | 'vue' | 'react' | 'svelte' | 'swift';
type Area = 'frontend' | 'backend' | 'api' | 'ios';

interface ProjectItem {
    type: 'simple' | 'featured',
    title: string,
    url: string,
    image: string,
    skills: Array<Skill>,
    areas: Array<Area>
};

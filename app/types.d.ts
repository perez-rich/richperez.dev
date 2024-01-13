type Skill = 'laravel' | 'php' | 'mysql' | 'html' | 'css' | 'javascript';
type Area = 'frontend' | 'backend' | 'api';

interface ProjectItem {
    type: 'simple' | 'featured',
    title: string,
    url: string,
    image: string,
    skills: Array<Skill>,
    areas: Array<Area>
};

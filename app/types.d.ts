type Skill = 'laravel' | 'php' | 'mysql' | 'html' | 'css' | 'javascript';
type Area = 'frontend' | 'backend' | 'rest';

interface Project {
    type: 'simple' | 'featured',
    title: string,
    url: string,
    description: string,
    image: string,
    skills: Array<Skill>,
    areas: Array<Area>
};

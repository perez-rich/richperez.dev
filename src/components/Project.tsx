import Image from 'next/image';
import Badge from './ui/Badge';
import { Heading } from './ui/Heading';

interface ProjectProps {
    project: ProjectItem
}

export default function Project({ project }: ProjectProps) {
    return <>
        <Heading label={project.title} />
        <a href={project.url} target="_blank">
            <Image className="aspect-auto" src={project.image} alt={`Screenshot of ${project.title} project`} width="400" height="150" />
        </a>
        <div className="flex flex-col gap-2 rounded-sm bg-black p-2">
            <strong className="text-sm">Skills</strong>
            <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => <Badge key={skill} label={skill} />)}
            </div>
        </div>
        <div className="flex flex-col gap-2 rounded-sm bg-black p-2">
            <strong className="text-sm">Areas</strong>
            <div className="flex flex-wrap gap-2">
                {project.areas.map(area => <Badge key={area} label={area} />)}
            </div>
        </div>
    </>;
}

import Image from 'next/image';
import Badge from './ui/Badge';
import { Heading } from './ui/Heading';

interface ProjectProps {
    project: Project
}

export default function Project({ project }: ProjectProps) {
    return <>
        <Heading label={project.title} />
        <Image className="aspect-auto" src={project.image} alt={`Screenshot of ${project.title} project`} width="400" height="150" />
        <div className="flex flex-col gap-2 rounded-sm bg-black p-2">
            <strong className="text-sm">Skills</strong>
            <div className="flex flex-wrap items-center gap-2">
                {project.skills.map(skill => <Badge label={skill} />)}
            </div>
        </div>
    </>;
}

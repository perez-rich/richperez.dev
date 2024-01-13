import { all } from "@/src/repositories/projects";
import Project from "@/src/components/Project";
import PageHeading from "@/src/components/ui/PageHeading";

export default function Projects() {
    return (
      <section className="flex flex-col gap-4">
        <div className="py-10">
          <PageHeading label="Projects" />
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {all().map(project => {
            return <li key={project.title}>
              <Project project={project} />
            </li>
          })}
        </ol>
      </section>
    )
}

import projects from "./data/projects"

export const featured = () => {
    // TODO: When ready replace with proper API/Database call
    return projects.filter((p) => p.type == 'featured');
};

export const all = () => {
    // TODO: When ready replace with proper API/Database call
    return projects;
}

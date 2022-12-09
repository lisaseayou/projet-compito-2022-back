export const GET_ALL_PROJECTS = `
    query AllProjects {
        allProjects {
            createdAt
            description
            id
            name
        }
}
`;
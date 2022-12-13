export const REGISTER = `
    mutation register($data: AddUserInput!) {
        register(data: $data) {
            name
            email
            roles
            url
            description
            twitter
            github
            linkedin
        }
    }
`;
export const GET_ALL_USERS = `
    query allUsers {
    allUsers {
            id
            name
            email
        }
    }
`;

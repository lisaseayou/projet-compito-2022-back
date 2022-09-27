import { registerEnumType } from 'type-graphql';

enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
}

registerEnumType(Role, {
    name: 'Role',
    description: 'The basic roles',
});

export default Role;

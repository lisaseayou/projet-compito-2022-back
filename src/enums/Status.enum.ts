import { registerEnumType } from 'type-graphql';

enum Status {
    TO_DO = "à faire",
    IN_PROGRESS = "en cours",
    FINISH = "terminé"
}

registerEnumType(Status, {
    name: 'Status',
    description: 'The task status',
});

export default Status;

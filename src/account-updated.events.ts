export class AccountUpdatedEvent {
    constructor(
        public readonly userId: string,
        public readonly name: string,
    ) {}

    toString() {
        return JSON.stringify({
            userId: this.userId,
            name: this.name,
        });
    }
}

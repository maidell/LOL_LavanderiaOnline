import { Clothing } from "./clothing.model";

export class Order {
    id: number = 0;
    time: number = 0;
    status: string = 'Em Aberto';
    value: number = 0;
    closeDate: Date = new Date();
    openDate: Date = new Date();
    clothings: Clothing[] = [];

    constructor(time: number, value: number) {
        this.id = Math.floor(Math.random() * 1000) + 1;
        this.time = time;
        this.value = value;

    }
    addClothing(clothing: Clothing) {
        this.clothings.push(clothing);
    }
    setStatusOrder(status: string) {
        this.status = status;
    }
}

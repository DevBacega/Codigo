import IPayment from "./IPayment";


export default class ContextSelectPayment {

    private payment: IPayment;

    constructor(paymentType: IPayment) {
        this.payment = paymentType;
    }

    public setPayment(paymentType: IPayment) {
        this.payment = paymentType;
    }

    public makeThePayment(amount: number): void {
        this.payment.pay(amount);
    }
}
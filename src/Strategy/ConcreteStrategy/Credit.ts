import IPayment from '../IPayment';

export default class Credit implements IPayment {

    private creditTax = 0.10;
    
   public pay(amount: number) {
        console.log('Você escolheu credito, então tem uma taxa de 10%');
        const totalAmount = amount + (amount * this.creditTax);
        console.log('Seu Total é de: ', totalAmount);
    }
}
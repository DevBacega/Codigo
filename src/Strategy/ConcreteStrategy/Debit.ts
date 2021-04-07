import IPayment from '../IPayment';

export default class Debit implements IPayment {

   public pay(amount: number) {
        console.log('Você escolheu Debito, então o valor é o mesmo!');
        console.log('Seu Total é de: ', amount);
    }
}
import IPayment from '../IPayment';

export default class Cash implements IPayment {

    private cashDiscount = 0.10;

   public pay(amount: number) {
        console.log('Você escolheu avista em dinheiro, então vocÊ ganhou um desconto de 10%!');
        const totalAmount = amount - (amount * this.cashDiscount);
        console.log('Seu Total é de: ', totalAmount);
    }
}
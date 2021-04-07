export default class BadPayment {

    public payWithCredit (amount: number) {
        console.log('Você escolheu credito, então tem uma taxa de 10%');
        const totalAmount = amount + (amount * 0.10);
        console.log('Seu Total é de: ', totalAmount);
    }

    public payWithDebit (amount: number){
        console.log('Você escolheu Debito, então o valor é o mesmo!');
        console.log('Seu Total é de: ', amount);
    }

    public payWithCash (amount: number){
        console.log('Você escolheu avista em dinheiro, então vocÊ ganhou um desconto de 10%!');
        const totalAmount = amount - (amount * 0.10);
        console.log('Seu Total é de: ', totalAmount);
    }

}
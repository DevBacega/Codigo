import BadPayment from "./BadExemple/BadPayment";
import Cash from "./ConcreteStrategy/Cash";
import Credit from "./ConcreteStrategy/Credit";
import Debit from "./ConcreteStrategy/Debit";
import ContextSelectPayment from "./Context"

const MakePayment = (amount: number = 500) => {
   const context = new ContextSelectPayment(new Credit());
   console.log('Efetuando Pagamento');
   context.makeThePayment(amount);
   console.log('Pagamento Efetuado com sucesso');
}

export const MakeBadPayment = () => {
    const badPayment = new BadPayment();
    console.log('Efetuando Pagamento');
    badPayment.payWithCash(500);
   console.log('Pagamento Efetuado com sucesso');
}

export default MakePayment;
import { loadStripe } from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q2RQq03jbXLGs9a0SDKMqri6rxwUSlbxp4D3kzNW4KbGswQ6uwdnL7mGIfovP0r6cAtJfgTJwFGNsRBRI1zJWso00ZzecVoSm');

const CheckoutForm = () => {
  
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if(stripe) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement)
      });
  
      if(error){
        console.log(error);
        return
      }
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[500px] bg-orange-600'>
      <CardElement />
      <button>Pay</button>
    </form>
  );
};

function CardForm() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

    </>
  )
}

export default CardForm;

import { loadStripe } from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import Loader from './Loader';
import { useContext, useState } from 'react';
import { useTransaction } from '../../hooks/useTransaction';
import { AuthContext } from '../context/AuthContext';

const stripePromise = loadStripe('pk_test_51Q2RQq03jbXLGs9a0SDKMqri6rxwUSlbxp4D3kzNW4KbGswQ6uwdnL7mGIfovP0r6cAtJfgTJwFGNsRBRI1zJWso00ZzecVoSm');

interface CheckoutPops {
  amount: number,
  description: string;
  currency: string;
  course_id: string;
  handleSuccess: ()=>void;
};
const CheckoutForm = ({amount, description, currency, course_id, handleSuccess}:CheckoutPops) => {
  
  const { user } = useContext(AuthContext);

  const { attachPaymentMethod, createTransaction } = useTransaction();
  const [submit, setSubmit] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handlePay = async(id_payment_method: string) => {
    if(user?.id){
      const payload = {
        amount: amount,
        description: description,
        payment_method_id: id_payment_method,
        currency: currency,
        customer_id: user.id,
        return_url: "https://google.com",
        course_id
      };
      const transaction = await createTransaction(payload);
      if ("success" in transaction) {
        handleSuccess();
        setSubmit(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Transaction faild",
          text: JSON.stringify(transaction.detail.message)
        });
        setSubmit(false);
      }

    }

  };

  const handleAttachPaymentMethod = async (id_method: string) => {
    if(user) {
      const attach = await attachPaymentMethod({
        payment_method_id: id_method,
        customer_id: user.id,
      });
      if ("success" in attach) {
        handlePay(attach.payload.id);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error ataching the payment method",
          text: JSON.stringify(attach.detail.message)
        });
        setSubmit(false);
      }
    }
  };

  const handleSubmit = async(e: SubmitEvent) => {
    e.preventDefault();
    
    setSubmit(true);

    if(stripe) {
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement)
      });
  
      if(error){
        Swal.fire({
            icon: "error",
            title: `${error.code}`,
            text: `${error.message}`
        });
        setSubmit(false);
        return
      }
      handleAttachPaymentMethod(paymentMethod.id);
    }

  };

  return (
    <form onSubmit={handleSubmit} className=''>
      <CardElement />
      
      {
        submit ? (
          <div className='mt-7 w-[50px] m-auto'>
            <Loader classes='border-blue-500' />
          </div>

        ) : (
          <button
            className='p-2 mt-7 w-full bg-blue-500 text-white hover:bg-blue-400 hover:text-white rounded p-1'
          >
            Pay
          </button>
        )
      }
      
    </form>
  );
};


interface CardProps {
  amount: number,
  description: string,
  currency: string;
  course_id: string;
  handleSuccess: ()=>void;
}
function CardForm({amount, description, currency, course_id, handleSuccess}:CardProps) {

  return (
    <div>
      <p className='text-2xl font-semibold text-center'>
        Make the payment
      </p>
      <div className='mt-10'>
        <p className='my-6 font-semibold'>Card Payment</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            amount={amount}
            description={description}
            currency={currency}
            course_id={course_id}
            handleSuccess={handleSuccess}
          />
        </Elements>
      </div>

    </div>
  )
}

export default CardForm;

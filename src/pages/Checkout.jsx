import OrderDetails from '@/components/OrderDetails'
import PaymentForm from '@/components/PaymentForm'
import React from 'react'

const Checkout = () => {
  return (
    <div>
      <div className='container mx-auto p-7'>
        <h1 className='text-2xl font-bold'>Checkout</h1>
        <div className='flex justify-start items-start gap-4 mt-4'>
          <PaymentForm/>
          <OrderDetails/>
        </div>
      </div>
    </div>
  )
}

export default Checkout
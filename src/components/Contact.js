import React from 'react'
import GooglePayButton from '@google-pay/button-react'
export default function Contact() {
  return (
    <div><GooglePayButton
    environment="TEST"
    paymentRequest={{
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Only',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '1.00',
        currencyCode: 'INR',
        countryCode: 'India',
      },
    }}
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }}
  /></div>
  )
}

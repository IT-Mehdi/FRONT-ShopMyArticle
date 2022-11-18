import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AXcTRDeJ9rEJ1qB7kyZStKJTi9sWpxI474fG2oOK84PTBXMvh0N19sBzTxOTMUaxK9qvE3Ukks6VbOdk",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "45.00",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
export default Paypal;

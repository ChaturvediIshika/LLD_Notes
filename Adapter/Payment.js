// TARGET — what client expects
class OldPaymentMethod {
  makePayment(amount) {
    throw new Error('makePayment() must be implemented')
  }
}

// ADAPTEE — new gateway with different interface
// completely independent — no relationship to OldPaymentMethod
class NewPaymentGateway {
  processPayment(amt) {
    console.log(`✅ Payment of ₹${amt} done via new gateway`)
  }
}

// ADAPTER — extends target, wraps adaptee
class PaymentAdapter extends OldPaymentMethod {
  constructor() {
    super()
    this.newGateway = new NewPaymentGateway()  // wraps adaptee
  }

  makePayment(amount) {
    // translates makePayment() → processPayment()
    this.newGateway.processPayment(amount)
  }
}

// CLIENT — only knows OldPaymentMethod interface
const client = new PaymentAdapter()
client.makePayment(200)
// ✅ Payment of ₹200 done via new gateway
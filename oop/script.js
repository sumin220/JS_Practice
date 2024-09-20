class PaymentGateway{
    constructor() {
        this.connect();
    }
    connect() {
        //경제 제공업체에 연결
        // ..
    }
    pay(amount) {
        // ..
    }
    refund(amount) {
        // ..
    }
}

class Paypal extends PaymentGateway {
    pay(amount) {
        // 페이팔 전용 로직
    }
    refund(amount) {
        // 페이팔 전용 로직
    }

    connect() {
        // 페이팔 전용 로직
    }
}

class Visa extends PaymentGateway {
    pay(amount) {
        // VISA 전용 로직
    }

    refund(amount) {
        // VISA 전용 로직
    }

    connect() {
        // VISA 전용 로직
    }
}
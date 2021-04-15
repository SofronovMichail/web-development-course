var Сashbox = {
  amount: 0,
  operationHistory: [],
  validation: function (findings) {
    if (
      typeof findings.amount !== 'number' ||
      typeof findings.info !== 'string'
    ) {
      console.error(
        'Проверьте правильность введенных данных и введите их заново!!'
      );
    }
  },
  addPayment: function (payment) {
    this.validation(payment);
    if (payment.amount <= 0) {
      return 'amount not affected';
    }
    this.recordHistory(payment, 'платеж на');
    this.amount += payment.amount;
    return 'cashbox amount = ' + this.amount;
  },
  refundPayment: function (refund) {
    this.validation(refund);
    if (this.amount - refund.amount <= 0) {
      return 'cashbox amount not affected';
    }
    this.recordHistory(refund, 'возврат');
    this.amount -= refund.amount;
    return 'cashbox amount = ' + this.amount;
  },
  recordHistory: function (findings, operation) {
    var overallDate = new Date();
    var recordDate = {
      day: overallDate.getDate(),
      month: overallDate.getMonth() + 1,
      year: overallDate.getFullYear(),
      hours: overallDate.getHours(),
      minutes: overallDate.getMinutes(),
    };
    this.operationHistory.push({
      amount: findings.amount,
      info: findings.info,
      operation: operation,
      date: `${recordDate.day}.${recordDate.month}.${recordDate.year} ${recordDate.hours}:${recordDate.minutes}`,
    });
  },
  showHistory: function () {
    this.operationHistory.forEach(function (item, i) {
      console.log(
        `${i + 1}. ${item.date} - ${item.operation} ${
          item.amount
        } руб, операция: ${item.info}`
      );
    });
  },
  // TODO: вернуть в строчном формате историю операций (пример):
  // 1. 21.03.2021 18:45 - платеж на 200 руб, операция: Оплата штрафа
  // 2. 22.04.2021 10:20 - возврат 10 руб, операция: Оплата ЖКХ
};

// Сashbox.addPayment({ amount: -10, info: "Оплата штрафа" }); // show error (console), amount not affected
// Сashbox.addPayment({ amount: 10, info: "Оплата ЖКХ" }); // cashbox amount = 10

// Сashbox.refundPayment({ amount: 10, info: "Возврат клиенту" }); // cashbox amount = 0
// Сashbox.refundPayment({ amount: 10, info: "Возврат клиенту" }); // cashbox amount not affected (warning)

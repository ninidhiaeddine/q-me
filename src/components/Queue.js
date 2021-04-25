class Queue {
  constructor(branchId, name, approximateTimeOfService, QrCode) {
    this.branchId = branchId;
    this.name = name;
    this.approximateTimeOfService = approximateTimeOfService;
    this.QrCode = QrCode;
  }
}
export default Queue;

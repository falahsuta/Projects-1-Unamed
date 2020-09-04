Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    this.toLocaleString("default", { month: "short" }) +
    "/" +
    this.getFullYear()
  );
};

Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

Date.prototype.getTimeInfo = function () {
  return "LastSync: " + this.today() + " @ " + this.timeNow();
};

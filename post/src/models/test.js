// // const enumVAL = require("./tag-allowed-value");

// // console.log(enumVAL);
// "2020-08-06T12:49:33.944Z".getMonth();
// const now = new Date();

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

// console.log(now.getTimeInfo());

const a = new Date("2020-08-06T12:49:33.944Z");
console.log(a.getTimeInfo());

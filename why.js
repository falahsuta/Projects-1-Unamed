// const content = `Canadian Prime Minister Justin Trudeau spoke at a VIP-laden press event in Toronto to announce plans for a new neighborhood in the city to be built “from the internet up.” The big reveal was the builder: Sidewalk Labs, a subsidiary of Alphabet, the parent company of Google. The mood was festive, optimistic. Schoolchildren were on hand with Lego models of future cityscapes, which Trudeau, flanked by Eric Schmidt, Alphabet’s then–executive chairman, and John Tory, the Toronto mayor, explored in a flawlessly staged photo op.
//       The prime minister spoke in earnest tones. Quayside, as the 12-acre waterfront project had been christened, would be “a testbed for new technologies,” he said, “that will help us build smarter, greener, more inclusive cities.” Not one to shy away from wholesome platitudes, he added, “The future, just like this community, will be interconnected.”
//       Then Schmidt rose to the lectern and said that Google founders Larry Page and Sergey Brin had long opined about “all of these things that we could do if someone would just give us a city and put us in charge.” Chuckles reverberated through the crowd.`;
// console.log(content.length);

// const theEmail = "falah@gmail.com";
// console.log(theEmail.indexOf("@"));
// console.log(theEmail.slice(0, theEmail.indexOf("@")));

// const splitData = (arr) => {
//   let split = Math.floor(arr.length / 3);

//   return [arr.slice(0, split), arr.slice(split, arr.length)];
// };

// console.log(splitData(yourArray));
// console.log(yourArray.slice(0, 3));
// console.log(yourArray.slice(3, yourArray.length));
// console.log(arrayFirstHalf);
// console.log(arraySecondHalf);

// const items = [1, 2, 3];

// const splitData = (arr) => {
//   let split = Math.floor(arr.length / 2);
//   // let a =
//   //   arr.length % 2 === 1
//   //     ? [arr.slice(0, split + 1), arr.slice(split + 1, arr.length)]
//   return [arr.slice(0, split), arr.slice(split, arr.length)];
//   // return a;
// };
const splitData = (arr) => {
  let split = Math.floor(arr.length / 2);

  return [arr.slice(0, split), arr.slice(split, arr.length)];
};
let yourArray = [1, 2, 3, 4, 5, 6, 7, 8];

// var newArr = []; // will contain the sub-arrays of 10 elements each
// var arraySize = 3;
// for (var i = 0; i < Math.ceil(yourArray.length / arraySize); i++) {
//   newArr.push(yourArray.slice(i * arraySize, i * arraySize + arraySize));
// }
// var left = [],
// right = [];
// console.log(newArr);
// newArr.map((element, index));

const [list, chuckSize] = [[1, 2, 3, 4, 5], 3];
const utils = (list, chuckSize) => {
  const _ = new Array(Math.ceil(list.length / chuckSize))
    .fill()
    .map((_, i) => list.slice(i * chuckSize, i * chuckSize + chuckSize));

  return [
    _.filter((a, i) => i % 2 === 0).flat(),
    _.filter((a, i) => i % 2 === 1).flat(),
  ];
};

const [left, right] = utils(list, chuckSize);
console.log(left, right);

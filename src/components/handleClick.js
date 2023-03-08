function handleClick() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt("Type a number");
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}

export default handleClick;
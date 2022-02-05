// The Rules of the Game
// A recursive function needs a base case that will trigger an end to our function calls and prevent a stack overflow
// So the recurse case will eventually stop once the base case has been met
// The function need to have at least to return conditions one for the base case, the other for the recursive case. If not we will get undefined as our return

let counter = 0;

function CallAgain() {
  if (counter > 0) return "its done";

  counter++;
 return CallAgain();
}

console.log(CallAgain());

// =======================
// =======================

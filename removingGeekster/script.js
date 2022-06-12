var list = ["geek", "geekster", "geeky"];
var remove;
function checkAndRemoveAnIndex(list) {
  for (let i = 0; i < list.length; i++) {
    //to find the index of the geekster
    if (list[i] === "geekster") {
        // printing the index number of geekster 
      console.log(`geekster is present in the index no --> ${i}`);
      // removing the word geekster using splice method 
      list.splice(i, 1);
      console.log(
        "After removing geekster from the list the remaining items are "
      );
      // printing the remaining items of the array
      console.log(list);
    }
  }
}

checkAndRemoveAnIndex(list);

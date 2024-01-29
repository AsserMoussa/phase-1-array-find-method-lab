const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
 // console.log (record[result]);
  let i;
function win(element, index, array){
    if (record[result] === "W") {
        i = record.year;
        return true;
      }
}

function superbowlWin(record){
    const found = record.find((object) => object.result === "W" );
    
    /*if(found == true){
        return found.year;
    }
    else{
        return found;
    }*/


    if (found === undefined){
        return found;
    }
    else {
        return found.year;
    }
    
}
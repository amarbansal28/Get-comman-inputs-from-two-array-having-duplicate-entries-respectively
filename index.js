// input1 [1,2,3,1] input2 [3,5,9,2]
// o/p [1,5,9]

function uniqArr(inp1,inp2){
	inp1 = [...new Set(inp1)];
  inp2 = [...new Set(inp2)];
  let lenInp1 = inp1.length;
  let lenInp2 = inp2.length;
  let arr = [];
  for(let i =0; i < lenInp1; i++){
			if(inp2.indexOf(inp1[i]) == -1 ) {
      		arr.push(inp1[i]);
      }
  }
  for(let i =0; i < lenInp2; i++){
			if(inp1.indexOf(inp2[i]) == -1 ) {
      		arr.push(inp2[i]);
      }  		
  }
  return arr;
}

console.log(uniqArr([1,2,3,1],[3,5,9,2]))

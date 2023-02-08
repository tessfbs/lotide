let args = process.argv.slice(2);



const obfuscate = function(args){
  let string = args.toString();
  let replaced = [];
  for(let i = 0; i < string.length; i++){
    replaced[i] = string[i];
    if(string[i] === "a"){
      replaced[i] = "4";
    }if (string[i] === "e"){
      replaced[i] = "3";
    }if (string[i] === "o"){
      replaced[i] = "0";
    }if (string[i] === "l"){
      replaced[i] = "1";
    } 
    
  }
  return replaced.join('')
}

console.log(obfuscate(args));
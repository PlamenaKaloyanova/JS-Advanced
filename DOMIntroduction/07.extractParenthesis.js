function extract(content) {
let costElement=document.getElementById(content);

let pattern=/\(([^(]+)\)/g;
let matches=costElement.textContent.matchAll(pattern);
let result=[]
for(const match of matches){
    result.push(match[1])
}

return result.join('; ');

}

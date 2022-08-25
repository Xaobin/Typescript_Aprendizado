//union type

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 }); 

//==========
function showUserRole(role:boolean | string){
 if (typeof role==="boolean")   {
     return "Usuário não aprovado";
 }
 return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Cavani"));

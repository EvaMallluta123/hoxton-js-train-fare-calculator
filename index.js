
let age=Number(prompt("How old are you?"))
let distanc= Number(prompt("How far are you travelling (in km)?"))
const priceperkm=0.21
let price= distanc*priceperkm
if (age<18){
   const discount1=0.2
     price = price-price*discount1
    console.log("You are under 18 years old, so you gain discound and your price is: " +"£" +price  )

}else if (age>65){
    const discount2=0.4
      price=price-price*discount2
     console.log("You are over 65 years old, so you gain discound and your price is: " +"£" +price  )
 
 } else {
    console.log("Your price is: "+"£" + price)
 }
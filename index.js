const Main_obj = {
    band_names:["blondie","genesis", "inxs" ,"journey","madonna","metallica","poison","queen","toto" ,"utwo"]
};
        // Elements
const game_section=document.querySelector("#game_section")
const current_word1=document.querySelector("#current_word1")
const current_img=document.querySelector("#current_img")
const startbtn=document.querySelector("#startbtn")

        // svg
const line1=document.querySelector("#line1")
const line2=document.querySelector("#line2")
const line3=document.querySelector("#line3")
const line4=document.querySelector("#line4")
const body=document.querySelector("#body")
const head=document.querySelector("#head")
const arm1=document.querySelector("#arm1")
const arm2=document.querySelector("#arm2")
const leg1=document.querySelector("#leg1")
const leg2=document.querySelector("#leg2")

        // svg
        // Elements


    //---current-word----

    //---current-word----



        //fun
function img_change(img_name){
    if (img_name=="blondie") {
        current_img.src="imges/blondie.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="genesis") {
        current_img.src="imges/genesis.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="inxs") {
        current_img.src="imges/inxs.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="journey") {
        current_img.src="imges/journey.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="madonna") {
        current_img.src="imges/madonna.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="metallica") {
        current_img.src="imges/metallica.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="poison") {
        current_img.src="imges/poison.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="queen") {
        current_img.src="imges/queen.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="toto") {
        current_img.src="imges/toto.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }else if (img_name=="utwo") {
        current_img.src="imges/u2.jpg"
        current_word1.innerHTML=`word is: ${img_name}`
    }

}
function display_none(el) {
    if(el.classList.contains("d-none")==false){
        el.classList.add("d-none")
        ;
        
    }
    
}
        // fun



    numOFword=0
    let word=Main_obj.band_names[numOFword]
    let current_arr=[]
    for(i in word){
        current_arr.push("_")
    console.log(word,current_arr);
}
let guessed_words=0
let wrongg_keys_arr=[]
let numOFges=10
document.addEventListener("keypress",(event)=>{
        
        
        
        display_none(current_img)
        display_none(current_word1)
if(current_arr.join("")!==word){
    if(word.indexOf(event.key)>=0){

        let indexOfkey=word.indexOf(event.key)
        current_arr.splice(indexOfkey,1,event.key)

        let word_without_first_leterr_arr=[...word]
        word_without_first_leterr_arr.splice(indexOfkey,1,"_")
        let word_without_first_leterr=word_without_first_leterr_arr.join("")

        if(word_without_first_leterr.indexOf(event.key)>=0){
            let indexOfkey=word_without_first_leterr.indexOf(event.key)
            current_arr.splice(indexOfkey,1,event.key)
        }


    }else{
        if(wrongg_keys_arr.includes(event.key)==false){
            wrongg_keys_arr.push(event.key)
        }else{
            current_word1.classList.toggle("d-none")
            current_word1.innerHTML=`You have already entered this letter `
            return NaN
        }
        numOFges-=1
        switch(numOFges){
            case 9:
                line1.classList.remove("d-none")
            break
            case 8:line2.classList.remove("d-none")
            break
            case 7:line4.classList.remove("d-none")
            break
            case 6:line3.classList.remove("d-none")
            break
            case 5:head.classList.remove("d-none")
            break
            case 4:body.classList.remove("d-none")
            break
            case 3:arm1.classList.remove("d-none")
            break
            case 2:arm2.classList.remove("d-none")
            break
            case 1:leg1.classList.remove("d-none")
            break
            case 0:leg2.classList.remove("d-none")
            break
        }

   }
    let current_word=current_arr.join(" ")
game_section.innerHTML=`
<p>word class :musicians name</p>
<p>current word</p>
<p id="current_w">${current_word}</p>
<p>Number of guesses remaining</p>
<p id="numOFges">${numOFges}</p>
<p>letters olrady guessed</p>
<p >${wrongg_keys_arr.join(" ")}</p>
`
}
if(word==current_arr.join("")){
        game_section.innerHTML=`
        <p>You win</p>
        <p>Press eny key to continue</p>
     `
     current_img.classList.toggle("d-none")
     current_word1.classList.toggle("d-none")
     img_change(word)
     numOFword+=1
     word=Main_obj.band_names[numOFword]
     current_arr=[]
     numOFges=10
     wrongg_keys_arr=[]
     display_none(line1)
     display_none(line2)
     display_none(line3)
     display_none(line4)
     display_none(head)
     display_none(body)
     display_none(arm1)
     display_none(arm2)
     display_none(leg1)
     display_none(leg2)
     for(i in word){
        current_arr.push("_")
    }
    guessed_words+=1
}
if(numOFges==0){
    game_section.innerHTML=`
        <p>You luse(</p>
        <p>Press eny key to continue</p>
     `
     current_img.classList.toggle("d-none")
     current_word1.classList.toggle("d-none")
     img_change(word)
     numOFword+=1
     word=Main_obj.band_names[numOFword]
     current_arr=[]
     numOFges=10
     wrongg_keys_arr=[]
     display_none(line1)
     display_none(line2)
     display_none(line3)
     display_none(line4)
     display_none(head)
     display_none(body)
     display_none(arm1)
     display_none(arm2)
     display_none(leg1)
     display_none(leg2)
     for(i in word){
        current_arr.push("_")
    }
     
}
if(numOFword==10){
    if(guessed_words>4){
        game_section.innerHTML=`
        <p>You win the game</p>
        <p>You guessed  ${guessed_words} words</p>
        <p>Congratulations by Mahooo</p>
     `
    }else{
        game_section.innerHTML=`
        <p>You luse the game</p>
        <p>You guessed  ${guessed_words} words</p>
        <p>Try again</p>
     `
    }
}


    
    
   

})

// if(word==current_arr.join("")){
//     game_section.innerHTML=`
//         <p>You win</p>
//         <p>Press eny key to continue</p>
//      `
//      current_img.classList.toggle("d-none")
//      current_word1.classList.toggle("d-none")
//      img_change(word)
//      numOFword+=1
//      return null
// }
// if(word==current_arr.join("")){
//     game_section.innerHTML=`
//         <p>You win</p>
//         <p>Press eny key to continue</p>
//      `
//      current_img.classList.toggle("d-none")
//      current_word1.classList.toggle("d-none")
//      img_change(word)
//      numOFword+=1

//      return null
// }
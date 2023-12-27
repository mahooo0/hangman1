const Main_obj = {
    band_names:["blondie","genesis", "inxs" ,"journey","madonna","metallica","poison","queen","toto" ,"utwo"]
};
        // Elements
const game_section=document.querySelector("#game_section")
const current_word1=document.querySelector("#current_word1")
const current_img=document.querySelector("#current_img")
const startbtn=document.querySelector("#startbtn")
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



    numOFword=5
    let word=Main_obj.band_names[numOFword]
    let current_arr=[]
    for(i in word){
        current_arr.push("_")
    console.log(word,current_arr);
}



document.addEventListener("keypress",(event)=>{
        let numOFges=10
        //----ques----
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


    }
    let current_word=current_arr.join(" ")
game_section.innerHTML=`
<p>current word</p>
<p id="current_w">${current_word}</p>
<p>Number of guesses remaining</p>
<p id="numOFges">10</p>
<p>letters olrady guessed</p>
<p >a f s g s </p>
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
     for(i in word){
        current_arr.push("_")
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
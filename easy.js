let Keypress= document.querySelector('#key-press');
let Inputs= document.querySelector('input'); 
let Wins = document.querySelector('#wins'); 
let Losses = document.querySelector('#losses');
let Men =  document.querySelector('.men');
let Description = document.querySelector('#description');
let Body = document.querySelector('body');
let Corrections =document.querySelector('#Word-corrections');
let Words;
let Trys = document.querySelector('#trys');



//Stores the Players W
let Scores = JSON.parse(localStorage.getItem('wins1')) || {
        wins:0,
        lose:0

};
Wins.innerHTML = `<span class= 'wins'>Wins:${Scores.wins}</span>`;
Losses.innerHTML = `<span class= 'losses'>Losses:${Scores.lose}</span>`;
let Wordsarray = ['BRIGHT','BITTER','BAGGY','CAREFUL','CLEAN','CLOUDY','COSUMABLE','DISAGREEABLE ','ENTERTAINING','EXPANSIVE'];
//Chooses Random Words
function RandomWords(){
    let Random = Math.random();
    if(Random >= 0 && Random < 0.1){
        Words = Wordsarray[0];
        Description.innerHTML += 'Giving out or reflecting a lot of light; shining';
        console.log(Words);
    }else if(Random >= 0.1 && Random < 0.2){
        Words = Wordsarray[1];
        Description.innerHTML += "-  a taste sensation that is peculiarly sharp or acrid ";
        console.log(Words);
    }else if(Random >= 0.2 && Random < 0.3){
        Words = Wordsarray[2];
        Description.innerHTML += "Lose or hanging ";
        console.log(Words);
    }else if(Random >= 0.3 && Random < 0.4){
        Words = Wordsarray[3];
        Description.innerHTML += "Anxious to protect or avoid potential danger or mishaps. ";
        console.log(Words);
    }else if(Random >= 0.4 && Random < 0.5){
        Words = Wordsarray[4];
        Description.innerHTML += "Dirt free, unmarked, or have been washed ";
        console.log(Words);
    }else if(Random >= 0.5 && Random < 0.6){
        Words = Wordsarray[5];
        Description.innerHTML += "covered by clouds ";
        console.log(Words);
    }else if(Random >= 0.6 && Random < 0.7){
        Words = Wordsarray[6];
        Description.innerHTML += "a thing fit to be eaten ";
        console.log(Words);
    }else if(Random >= 0.7 && Random < 0.8){
        Words = Wordsarray[7];
        Description.innerHTML += "Having a disposition that is not pleasant or agreeable; disagreeable behavior or remarks";
        console.log(Words);
    }else if(Random >= 0.8 && Random < 0.9){
        Words = Wordsarray[8];
        Description.innerHTML += "A movie that is enjoyable and amusing ";
        console.log(Words);
    }else if(Random >= 0.9 && Random < 1){
        Words = Wordsarray[9];
        Description.innerHTML += "having the ability to expand";
        console.log(Words);
    }
}
//Calling the RandomWords Function
    RandomWords();
///Stores the values of the users inputs Wrong or Right    
    let num = {
       character: Words.charAt(-1),
       number :''
    };
    let count = 0;
    //Stores the users number of Incorrect answers 
    let Wrongs ={
        wrongs:0,
        trys:7
    };
    Trys.innerHTML += Wrongs.trys;
 
    const dashes ={
        Dash:``,
        OnscreenKeyboard:``
    };
    let r = 0;
    //Displays the input element Multiply times on the web and is the center of were allthe Web functionalities happend 
    function Looping(){
        for(let i = 0; i < Words.length;i++){
      
            // A variable that displays multiply input element    
               
                   dashes.Dash=`
                   <input class="letter${i}"  type="text" oninput="
                   let Letter= document.querySelector('.letter${i}'); 
                   let number = 0;
                     console.log(Letter.value);
                     if(event.data.toUpperCase() === Words.charAt(${i})){
                         console.log('correct');
                         
                      }else if(event.data !== Words.charAt(${i}) && event.data.toUpperCase() !== null){  
                          console.log(event);
                          incorrect();
                          
                      }  
                      if(event.data.toUpperCase() === Words.charAt(${i})){
                         num.character += event.data;
                         
                       }else if(event.data.toUpperCase() !== Words.charAt(${i})  && event.data.toUpperCase() !== null){
                         num.number += '1';
                         Correction(Words.charAt(${i}) , num.number);
                       }
                       
                       Results(num ,event.data);
                        
                   " maxlength= "1"  onkeyup = "
                   let Letter= document.querySelector('.letter${i + 1}');
                   
                   if(event.key.length === 1 && event.key.toUpperCase() === Words.charAt(${i})){
                     Letter.focus();
                 }
                 
                  " onfocus="
                    let classname = event.srcElement.className;
                    keyboard(classname);
                    console.log(classname);
                    
                  " >
                `,
                 dashes.OnscreenKeyboard = function(y){
                    let Letter= document.querySelector(`.letter${i}`);
                    if(Letter.focus == false){
                       console.log('false')   ;
                    }else{
                        
                        Letter.value += y;
                    }
                    
                   
                    
                 };
    
               let Letterss= document.querySelector(`#letter${Words.length}`);

               
               Keypress.innerHTML += `${dashes.Dash}`;
               
       
           }
    }
    
    Looping();
    
    function keyboard(name){
    
        let LetterA = document.querySelectorAll('.alphabets div');
        let LetterB = document.querySelector('.letterB');
        let classes = name;
        
        let x = classes.charAt(6);
        classes = name.slice(0,6);
        let Lettersss = document.querySelector('.' + classes + x);
        console.log(Lettersss.value);
        Lettersss.addEventListener("keyup" ,function(){
            
            /*Lettersss =  document.querySelector('.' + classes + (x - 1));
            if(event.key === 'Backspace' && Lettersss.value !== Words.charAt(x)){
                Lettersss =  document.querySelector('.' + classes + (x - 1));
                Lettersss.focus();
               
                
            }*/
        })
           
     
    }
    
    
    
//Displays Results 
    function Results(nums ,Events){
        let results = '';
        let winorlose = document.querySelector('.results');
        if(nums.character.length === Words.length){            
            results = 'win';
              
        }else if(nums.number === '1111111'){ 
            results ='lose';    
        }

        if(results === 'win' && Events !== null){
            Scores.wins += 1;
            winorlose.innerHTML += `
            <div class="win">
              <p>Well Done!!! You Win</p><br>
              <a href=""><button>Next</button></a>
            </div>
            `;
        }else if(results === 'lose' && Events !== null){
            Scores.lose += 1;
            winorlose.innerHTML += `
            <div class="loss">
            <p class="answer">Answer: ${Words}</p><br>
               <p>You Lose!!!</p><br>
               <a href=""><button>Next</button></a>
            </div>
            
            `;
        }
        console.log(nums);
        localStorage.setItem('wins1' ,JSON.stringify(Scores));
        
    }
  
    //Displays Body parts depending on Incorrect answers
    function incorrect(){
    //BODY PARTS
        const Head = document.querySelector('.head'); 
        const Body = document.querySelector('.body');
        const RightHand = document.querySelector('.right-hand');
        const LeftHand = document.querySelector('.left-hand');
        const RightLeg = document.querySelector('.right-leg');
        const LeftLeg = document.querySelector('.left-leg');
        Wrongs.wrongs += 1;
        
        if(Wrongs.wrongs === 1 && Wrongs.wrongs < 7){
          Head.style["display"] = 'block';
          console.log('wrong');
          Wrongs.trys -= 1;
        }else if(Wrongs.wrongs === 2 && Wrongs.wrongs < 7 ){
          Body.style["display"] = 'block';
          console.log('wrong');
          Wrongs.trys -= 1;
        }else if(Wrongs.wrongs === 3 && Wrongs.wrongs < 7 ){
          RightHand.style["display"] = 'block';
          console.log('wrong');
          Wrongs.trys -= 1;
        }else if(Wrongs.wrongs === 4 && Wrongs.wrongs < 7){
          LeftHand.style["display"] = 'block';
          console.log('wrong');
          Wrongs.trys -= 1;
        }else if(Wrongs.wrongs === 5 && Wrongs.wrongs < 7){
          RightLeg.style["display"] = 'block';
          console.log('wrong');
          Wrongs.trys -= 1;
        }else if(Wrongs.wrongs === 6 && Wrongs.wrongs < 7){
          LeftLeg.style["display"] = 'block';
          console.log('You Lose');
          console.log('wrong');
          Wrongs.trys -= 1;
        }else if(Wrongs.wrongs > 6 && Wrongs.wrongs < 7){
            console.log('you lose');
            Scores.lose += 1;
            Body.innerHTML = 'You lose';
            Wrongs.trys -= 1;
        }else if(Wrongs.wrongs <= 0 && Wrongs.wrongs <= 7){
            
        }
        console.log(Wrongs);
        Trys.innerHTML = `<p>${Wrongs.trys}</p>`;
      
    }
    
    function Correction(correction ,num){
       if(num.length <= 3 && Corrections){
        Corrections.innerHTML += correction;
       }else{
           Corrections.innerHTML += '';
       }
    }
    
 (function(){
     let o = document.querySelector('.letter0');
     o.focus();
 }())

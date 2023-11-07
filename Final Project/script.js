const list = [
    "apple",
    "banana",
    "carrot",
    "dragonfruit",
    "eggplant",
    "fig",
    "grapefruit",
    "honeydew",
    "igloo",
    "jellyfish",
    "kangaroo",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "pineapple",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "vanilla",
    "watermelon",
    "zucchini"
];
  
word = list[Math.floor(Math.random() * list.length)];

let s = []
let us=""
let tries = 5
let wordbank = ""
for (let i = 0; i < word.length; i++) {
    s.push("_ ")
    us = us + s[i]
  }


document.getElementById("word").innerHTML = us;
document.getElementById("tries").innerHTML = "Tries: "+tries.toString()

function iGuess() {

    if (us.includes("_") && tries != 0)
    {
        let guess = document.getElementById("entry").value.split()

        if (word.includes(guess[0])){
            if(!wordbank.includes(guess[0]))
            {
                wordbank = wordbank + guess[0]
            }
            
            for (let i = 0; i < word.length; i++) {
                if (word[i] == guess[0])
                {
                    s[i] = guess[0]
                }
            }
            us=""
            for (let i = 0; i < word.length; i++) {
                us = us + s[i]
            }
            document.getElementById("word").innerHTML = us;
        
        }
        else
        {
            if(!wordbank.includes(guess[0]))
            {
                wordbank = wordbank + guess[0]
                tries = tries - 1
            }

            if(tries == 5)
            {
                document.getElementById("mainimg").src = "0 Attempts.png"
            }
            else
            {
                if(tries == 4)
                {
                    document.getElementById("mainimg").src = "1 Attempt.png"
                }
                else
                {
                    if(tries == 3)
                    {
                        document.getElementById("mainimg").src = "2 Attempts.png"
                    }
                    else
                    {
                        if(tries == 2)
                        {
                            document.getElementById("mainimg").src = "3 Attempts.png"
                        }
                        else
                        {
                            if(tries == 1)
                            {
                                document.getElementById("mainimg").src = "4 Attempts.png"
                            }
                            else
                            {       
                                if(tries == 0)
                                {
                                    document.getElementById("mainimg").src = "5 Attempts.png"
                                }
                            }
                        }
                    }
                }
            }
            document.getElementById("tries").innerHTML = "Tries: "+tries.toString()
            document.getElementById("entry").value=""
        }
    }
    
    
    if(tries == 0)
    {
        alert("You lose!")
        document.getElementById("submit").onclick = null
    }
    if(!(us.includes("_")))
    {
        alert("You win!")
        document.getElementById("submit").onclick = null
    }

    document.getElementById("bank").innerHTML = wordbank

}


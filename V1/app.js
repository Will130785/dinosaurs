//IIFE to create Dinosaur objects
//TODO: Create Dino objects and methods
let createDinos = (function() {

    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact, img) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.img = img;
    }

    //Methods - Add to Dino prototype
    //Compare Method 1 - Compare human and dino height
    Dino.prototype.compareMethod1 = function(human) {

        //Convert height to inches and declare dif variable
        const heightInInches = (human.feet * 12.000) + human.inches;
        let dif;
        if(heightInInches > this.height) {
            dif = heightInInches - this.height;
            return `You are ${heightInInches} inches tall. that is ${dif} taller than a ${this.species}`;
        } else if(heightInInches < this.height) {
            dif = this.height - heightInInches;
            return `You are ${heightInInches} inches tall. that is ${dif} shorter than a ${this.species}`;
        } else {
            return `You are ${heightInInches} inches tall. You are exactly the same height as a ${this.species}`;
        };
    };

    //Compare Method 2 - Compare human and dino diet
    Dino.prototype.compareMethod2 = function(human) {
        
        if(this.diet === human.diet) {
            return `You have the same diet as ${this.species}`;
        } else {
            return `You are a ${human.diet} and that is different to a ${this.species}`;
        };
    };

    //Compare Method 3 - Compare human and Dino weight
    Dino.prototype.compareMethod3 = function(human) {
        
        let dif;
        if(this.weight < human.weight) {
            dif = human.weight - this.weight;
            return `You weigh ${human.weight} lbs which is ${dif} lbs heavier than ${this.species}`;
        } else if(this.weight > human.weight) {
            dif = this.weight - human.weight;
            return `You weigh ${human.weight} lbs which is ${dif} lbs lighter than ${this.species}`;
        } else {
            return `You weigh ${human.weight} lbs which is exactly the same as ${this.species}`;
        };
           
    };

    //Method to randomise Dino fact
    Dino.prototype.randomFact = function(human) {
        //Store return value for each comparision method
        const compFact1 = this.compareMethod1(human);
        const compFact2 = this.compareMethod2(human);
        const compFact3 = this.compareMethod3(human);

        //Create array of facts
        const factArray = [
            `The ${this.species} weighs ${this.weight} lbs`,
            `The ${this.species} is ${this.height} feet tall`,
            `${this.species}'s are generally ${this.diet}s`,
            `${this.species} were native to ${this.where}`,
            `${this.species} roamed the earth during the ${this.when} period`,
            this.fact,
            compFact1,
            compFact2,
            compFact3
            ];

        //Generate random index
        const randIndex = Math.floor(Math.random() * factArray.length);

        //Return fact at the random index
        return factArray[randIndex];

    }

    // Create Dino Objects
    const Triceratops = new Dino("Triceratops", 13000, 114, "herbavor", "North America", "Late Cretateous", "First discovered in 1889 by Othniel Charles Marsh", "./images/triceratops.png");
    const tRex = new Dino("Tyrannosauras Rex", 11905, 144, "carnivor", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.", "./images/tyrannosaurus.png");
    const Anklyosaurus = new Dino("Anklyosaurous", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.", "./images/anklyosaurus.png");
    const Brachiosaurus = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "An asteroid was named 9954 Brachiosaurus in 1991.", "./images/brachiosaurus.png");
    const Stegosaurus = new Dino("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines.", "./images/stegosaurus.png");
    const Elasmosaurus = new Dino("Elasmosaurus", 16000, 59, "carnivor", "North America", "Late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.", "./images/elasmosaurus.png");
    const Pterandon = new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.", "./images/pteranodon.png");
    const Pigeon = new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs.", "./images/pigeon.png");
       

    //Return Dino objects
    return {
        Triceratops,
        tRex,
        Anklyosaurus,
        Brachiosaurus,
        Stegosaurus,
        Elasmosaurus,
        Pterandon,
        Pigeon
       };
})();


// IIFE for obtaining human data and generating grid
const humanData = (function getData() {
    //Grab DOM elements
    const btn = document.getElementById("btn");
    const nameInput = document.getElementById("name");
    const feetInput = document.getElementById("feet");
    const inchInput = document.getElementById("inches");
    const weightInput = document.getElementById("weight");
    const dietInput = document.getElementById("diet");
    const dinoCompare = document.getElementById("dino-compare");
    const grid = document.getElementById("grid");

    //Add event listener to compare button
    btn.addEventListener("click", () => {

        //Create human object with form data and convert to right data types
        const human = {
            name: nameInput.value,
            weight: Number(weightInput.value),
            feet: Number(feetInput.value),
            inches: Number(inchInput.value),
            diet: dietInput.value.toLowerCase(),
            img: "./images/human.png",
            //Method to shuffle cards
            shuffle:  array => {
                //Set current index to the end of array and declare tempryValue and randomIndex variables
                let currentIndex = array.length, temporaryValue, randomIndex;

                //While the currentIndex is greater than 0 continue to loop backwards through the array
                while (currentIndex !== 0) {
                    //Create a random index
                    randomIndex = Math.floor(Math.random() * array.length);
                    //At each iteration minus 1 from the current index
                    currentIndex -= 1;
                    //Set temporyValue to the value of the current index
                    temporaryValue = array[currentIndex];

                    //Swap the item at the current index with the item at the random index
                    array[currentIndex] = array[randomIndex];
                    //Set the item at random index to the value of temporyValue
                    array[randomIndex] = temporaryValue;
               
                };
   
                //Once the shuffle has run I want to check that the human card is in the center and if its not I want to place it there
                if(array[4] !== human) {
                    //If the human card is not in the central location, declare a tempValue variable
                    let tempValue; 
                    //Loop through the whole array
                    for(let i = 0; i < array.length; i++) {
                        //Keep looping until the human card is found
                        if(array[i] === human) {
                            //set tempArray to the value of the card currently in the central position
                            tempValue = array[4];
                            //Set the card at the central position to the card at the current index (The human card)
                            array[4] = array[i];
                            //Set the current index to the tempValue
                            array[i] = tempValue;
                        };
     
                    };
                };
   
                //Return the shuffled array now with the human card in the center
                return array;
            }
           
        };

        //Create dinosaur array
        const dinoArray = [
            createDinos.Triceratops,
            createDinos.tRex,
            createDinos.Anklyosaurus,
            createDinos.Brachiosaurus,
            human,
            createDinos.Stegosaurus,
            createDinos.Elasmosaurus,
            createDinos.Pterandon,
            createDinos.Pigeon
        ];


        //TODO: Call shuffle method to create random order of cards
        const shuffled = human.shuffle(dinoArray);

        //Loop through array and save the result of calling the randomFact method to a variable
        shuffled.forEach(item => {
            let randomFact;
            //Check the card isnt the human card and call the rendomFact method
            if(item !== human) {
                randomFact = item.randomFact(human);
            };

            //Create elements and append html to DOM with the results of the random fact method
            //Create div element
            const div = document.createElement("div");
            //Give element class name
            div.classList.add("grid-item");
            //Create innerHTML for div and check if dino or pigeon
            if(item.species === "Pigeon") {
                div.innerHTML = `
                <img src=${item.img} alt="Picture">
                <h3>${item.species ? item.species : item.name}</h3>
                <p>${item.fact}</p>
            `;
            } else {
                div.innerHTML = `
                <img src=${item.img} alt="Picture">
                <h3>${item.species ? item.species : item.name}</h3>
                <p>${item.species ? randomFact : ``}</p>
            `;
            }

            //Append to the DOM
            grid.appendChild(div);
        });

        //Remove form from screen and show grid
        dinoCompare.style.display = "none";
        grid.style.height = "100vh";

    });
})();
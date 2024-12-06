let inputBox, outputBox, submitButton, retryButton;
let step = "1st";
let hasPlayedSound = false


function preload(){
  
  soundFormats ("mp3","ogg");
  
  geda = loadSound ("Chicken-Nugget-Singing-Gedagedigedagedago.mp3");
  megalovania = loadSound ("Toby Fox - Megalovania.mp3") ;
}

function setup() {
  createCanvas(400, 200);
  textSize(16);

  // Create an input box
  inputBox = createInput();
  inputBox.position(20, 50);

  // Create a submit button
  submitButton = createButton('Submit');
  submitButton.position(inputBox.x + inputBox.width + 10, 50);
  submitButton.mousePressed(handleSubmit);

  // Create an output box
  outputBox = createDiv('');
  outputBox.position(20, 100);

  // Create a retry button (initially hidden)
  retryButton = createButton('Retry');
  retryButton.position(width / 2 - 40, height / 2 + 20); // Center position
  retryButton.mousePressed(resetGame);
  retryButton.hide(); // Hide it initially
}


function draw() {
  
  
  
  if (step === "game-brag") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 1---Bragging", width / 2, height / 2 - 20);
    textSize()
    text("Yes, truly I am awesome!", width / 2, height / 2 - 80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }

  if (step === "game-platupus_waste") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 2---A waste of time", width / 2, height / 2 - 20);
    text("That was such a waste of my time!!!", width / 2, height / 2 - 20);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }
  
  if (step === "game-platupus_getout") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 3---Agent P", width / 2, height / 2 - 20);
    text("Agent P doesn't have time yet, please try again later.", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }
  
  if (step === "game-platupus_patient") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 4---Just wait!", width / 2, height / 2 - 20);
    text("Bro can't you just be patient for a while?", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }
  
  
   if (step === "game-greetings_goodboy") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 5---Good Boy", width / 2, height / 2 - 20);
    text("What a good boy you are!", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }
  
   if (step === "game-greetings_furious") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 6---Shut Up!", width / 2, height / 2 - 20);
    text("Bro can't you SHUT UP for a while??!!", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }
  
  if (step === "game-bye") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 7---Farewell", width / 2, height / 2 - 20);
    text("Welp, bye...", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return; 
  }
  
   if (step === "game-geda_sing") {
    background(255);
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 8---Dancing chicken nugget", width / 2, height / 2 - 20);
    text("*singing*  gedagedigedagedago.....", width / 2, height / 2 - 80);

    if (!hasPlayedSound) {  
      geda.play();  // Play sound only once
      hasPlayedSound = true; 
    }

    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return;
  }

  
  if (step === "game-geda_random_letters") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending 9--- Random letters", width / 2, height / 2 - 20);
    textSize(10)
    text("So you're playing with me again...gedagedigedagedago is just random letters...", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return;
  }
  
  
  if (step === "game-help") {
    background(255); 
    fill(0); // Black text color
    textAlign(CENTER, CENTER);
    text("Ending HELP", width / 2, height / 2 - 20);
    textSize(10)
    text("You need help? just go to https://sites.google.com/view/help-for-poor-people-by-perry", width / 2, height / 2 -80);
    inputBox.hide();
    outputBox.hide();
    submitButton.hide();
    retryButton.show();
    return;
  }
  
  // Default screen
  background(220);
  text('Enter something below and click submit:', 20, 30);
}

  

function handleSubmit() {
  // Get the value from the input box
  const userInput = inputBox.value().toLowerCase(); // Convert to lowercase for case-insensitive comparison

  // Conditional responses
    if (userInput === 'hello' && step === "1st") {
      outputBox.html('hi???');
      step = "greetings";
      
  } else if (userInput === "hello" && step === "greetings") {/////greeting/////////////
      outputBox.html ('do not say that again, okay?')
      step = "greetings_question"
    
  } else if (userInput === "okay" && step === "greetings_question") {
      step = "game-greetings_goodboy"    
     
  } else if (userInput === "hello" && step === "greetings_question") {
      step = "game-greetings_furious"   
    
  } else if (userInput === 'p5' && step === "1st") {//////////P5//////////////////////
      outputBox.html('Yes, truly I am awesome!');
      step = "game-brag"; // Trigger ending screen
    
    
  }else if (userInput === 'platupus' && step === "1st") {/////////////////////Platupus//
    outputBox.html('Wait, you want to call the creator???');
    step = "platupus_ask" 
    
    
  }else if (userInput === "yes" && step === "platupus_ask"){
    outputBox.html('Okay, please wait.')
    step = "platupus_wait"
    
    
  }else if (userInput === "no" && step === "platupus_ask"){
    step = "game-platupus_waste"
   
    
  }else if (userInput === "wait" && step === "platupus_wait"){
    step = "game-platupus_getout"
    
    
  }else if (userInput === "don't wait" && step ==="platupus_wait"){
    step= "game-platupus_patient"
    
  }else if (userInput === 'bye' && step === "1st") {////////////Bye/////////////
      step = "game-bye";
  
    
  }else if (userInput=== "gedagedigedagedago" && step === "1st"){//gedagedigedagedago///
      outputBox.html("what is THAT? give me some key words.")
      step = "geda_ask"
    
  }else if(userInput === "chicken nugget"||userInput ===  "nugget" ||userInput ===   "roblox" && step === "geda_ask"){
      step = "game-geda_sing"
    
  }else if(!(userInput === "chicken nugget"||userInput === "nugget" || userInput === "roblox") && step === "geda_ask"){
      step = "game-geda_random_letters"
    
  }else if (userInput === "help"){
    step = "game-help"
    
  } else { 
      outputBox.html(`You entered: ${userInput}`);
  }
}

function resetGame() {
  // Reset the game state
  step = "1st";
  textSize(16);
  // Show input/output and hide retry button
  inputBox.show();
  outputBox.show();
  submitButton.show();
  retryButton.hide();

  // Clear the input and output boxes
  inputBox.value('');
  outputBox.html('');
}

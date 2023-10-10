function preload(){
    bg = loadImage("../media/images/whiteHouseLibrary.png");
    blackSquare = loadImage("../media/images/malevichBlackSquare.jpg");
    lumberjack = loadImage("../media/images/malevichLumberjack.jpg");
    comp8 = loadImage("../media/images/kandinskyComp8.jpg");
    kanCircles = loadImage("../media/images/kandinskyCircles.png");

    paintings = [blackSquare, lumberjack, comp8, kanCircles];
}

function increment() {
    if (paintingIndex < 3)
        paintingIndex++;
    else
        paintingIndex = 0;
  }

function setup(){
    createCanvas(1280, 720)
    paintingIndex = 0;
    setInterval(increment, 2000);
}

function draw(){
    background(bg);
    // Detects if mouse is over painting
    if (mouseX >= 5 && mouseX <= 133){
        if(mouseY >= 22 && mouseY <= 280){
            rect(200, 100, 200, 100);
            text("My favorite artists are Kazimir Malevich and Wassily Kandinsky! Here are some of their works.", 210,120,180,80);
            push();
                imageMode(CENTER);
                image(paintings[paintingIndex],width/2 + width/4, height/2);
                paintings[paintingIndex].resize(500,0);
            pop();
        }
    }
    // Detects if mouse is over leftmost front facing bookshelf

    if(mouseX >= 305 && mouseX <= 400){
        if (mouseY >= 174 && mouseY <= 435){
            rect(450, 174, 200, 220);
            text("As of recent, I've been getting back into writing and reading again. My most recent, personal project has to be the SCP article I'm writing, although I'm considering starting it over completely.\n\nWhat about you? If you're reading anything good, or planning on writing something, leave it in the guest book."
            , 460, 194, 180, 200);
            let link = createA("https://milknolactose.123guestbook.com/", "Guest Book");
            link.position(windowWidth/2 + 100, 25);
        }   
    }

    // Detects if mouse is over mirror

    if(mouseX >= 745 && mouseX <= 845){
        if(mouseY >= 190 && mouseY <= 400){
            let link = createA("../index.html", "Homepage");
            link.position(windowWidth/2 - 100, 25);
        }
    }

    if(mouseX >= 0 && mouseX <= 170){
        if(mouseY >= 470 && mouseY <= 720){
            push();
                noStroke();
                fill(0,0,0,0)
                rect(0, 470, 170, 250);
            pop();
        }
    }

}

function mouseClicked(){
    if(mouseX >= 0 && mouseX <= 170){
        if(mouseY >= 470 && mouseY <= 720){
            window.open("https://www.youtube.com/watch?v=L_LUpnjgPso");
        }
    }
}
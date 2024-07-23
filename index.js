let balls = 30;
let currentFlee = 0;
let fleeChance = randomFlee(75,100);

console.log("Wild DARUMAKA appeared!");
updateDOM("Wild DARUMAKA appeared!");

async function update() {
    // console.log(`SAFARI BALLS Left: ${balls}`);
    // console.log("What will You throw?");
    // console.log("[1] BALL");
    // console.log("[2] BAIT");
    // console.log("[3] ROCK");
    // console.log("[4] RUN");

    updateDOM(`
            SAFARI BALLS Left: ${balls}<br>
            What will You throw?<br>
            <ul>
                <li><a href="#" onclick="ball()">BALL</a></li>
                <li><a href="#" onclick="bait()">BAIT</a></li>
                <li><a href="#" onclick="rock()">ROCK</a></li>
                <li><a href="#" onclick="run()">RUN</a></li>
            </ul>
        `);
}

async function chooseOption(option) {
    console.log(option);
    switch(option) {
        case "1":
            console.log("You used SAFARI BALL!");
            balls--;
            await ball(ranNum(3));
            break;
        case "2":
            update();
            break;
        case "3":
            update();
            break;
        case "4":
            console.log("Got away safely!");
            break;
        default:
            console.log("Please choose an integer 1-4");
            update();
            break;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ranNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

function randomFlee(min, max) {
    const t = Math.floor(Math.random() * (max - min) ) + min;
    console.log(`DEBUG: ranFlee - ${t}`);
    return t;
}

async function ball(amt) {
    const shakes = ["*shakes once*", "*shakes twice*", "*shakes three times*"];
    console.log(amt);
    for (let i = 0; i < amt; i++) {
        console.log(shakes[i]);
        await delay(1500);
    }

    attemptCatch();

    if (currentFlee >= fleeChance) {
        console.log("Wild DARUMAKA fled!");
        updateDOM("Wild DARUMAKA fled! Play again?");
        currentFlee = 0;
    } else {
        update();
    }
}

function updateDOM(str) {
    const text = document.getElementById("text");
    text.innerHTML = str;
}

function attemptCatch() {
    currentFlee+= randomFlee(25,50);
    console.log(`DEBUG: currentFlee - ${currentFlee}`);
}
// ==========================================
// SPACEXPLORER - GAME DATA
// ==========================================

const planets = [
    {
        name: "Earth",
        description: "Your home planet. Begin your space exploration journey.",
        cost: 0,
        discovery: "Earth is currently the only known planet to support life."
    },
    {
        name: "Mars",
        description: "Investigate the red planet and search for evidence of ancient water.",
        cost: 10,
        discovery: "Mars has geological evidence of ancient rivers and lakes."
    },
    {
        name: "Saturn",
        description: "Study the giant planet and its spectacular ring system.",
        cost: 12,
        discovery: "Saturn's rings consist mainly of ice and rocky particles."
    },
    {
        name: "Moon",
        description: "Investigate lunar craters and the Moon's surface.",
        cost: 8,
        discovery: "The Moon's surface preserves impact craters from its long history."
    },
    {
        name: "Neptune",
        description: "Explore a distant ice giant with extremely fast winds.",
        cost: 15,
        discovery: "Neptune has some of the fastest winds measured in the solar system."
    },
    {
        name: "Asteroid Belt",
        description: "Study rocky objects orbiting between Mars and Jupiter.",
        cost: 10,
        discovery: "The main asteroid belt lies between Mars and Jupiter."
    },
    {
        name: "Kepler",
        description: "Investigate worlds discovered beyond our solar system.",
        cost: 18,
        discovery: "The Kepler space telescope helped discover thousands of exoplanet candidates."
    },
    {
        name: "Europa",
        description: "Investigate the icy moon of Jupiter and its hidden ocean.",
        cost: 18,
        discovery: "Europa is thought to have a salty ocean beneath its icy crust."
    },
    {
        name: "Exoplanet",
        description: "Study a planet orbiting a star beyond our solar system.",
        cost: 20,
        discovery: "Exoplanets help scientists understand how planetary systems form."
    },
    {
        name: "Final Zone",
        description: "Complete your final scientific exploration challenge.",
        cost: 25,
        discovery: "You have completed all ten SpaceXplorer missions!"
    }
];

// ==========================================
// SCIENCE QUESTION BANK
// ==========================================

const questionBank = [
    {
        q: "A planet moves closer to the Sun. What generally happens to its orbital speed?",
        options: ["It increases", "It decreases", "It becomes zero"],
        answer: 0,
        explanation: "A planet generally moves faster when it is closer to the Sun, due to conservation of angular momentum."
    },
    {
        q: "If a planet's distance from the Sun doubles, how does the solar energy received per unit area change?",
        options: ["It doubles", "It becomes one-fourth", "It becomes half"],
        answer: 1,
        explanation: "The inverse-square law means that doubling the distance reduces the intensity to one-fourth."
    },
    {
        q: "Why do astronauts appear weightless inside the International Space Station?",
        options: [
            "There is no gravity in space",
            "They and the station are in continuous free fall",
            "The station has no mass"
        ],
        answer: 1,
        explanation: "Earth's gravity still acts on the station. Astronauts appear weightless because they are falling around Earth together."
    },
    {
        q: "Which principle allows a rocket to move forward by expelling gas backward?",
        options: [
            "Newton's third law",
            "Archimedes' principle",
            "Reflection of light"
        ],
        answer: 0,
        explanation: "Newton's third law states that every action has an equal and opposite reaction."
    },
    {
        q: "Why are lunar craters preserved for a very long time?",
        options: [
            "The Moon has thick clouds",
            "It has almost no atmosphere or weather",
            "The Moon has oceans"
        ],
        answer: 1,
        explanation: "The Moon has almost no atmosphere, liquid water or weather to significantly erode its craters."
    },
    {
        q: "A planet takes 8 Earth years to orbit the Sun. Approximately how far is it from the Sun in AU?",
        options: ["2 AU", "4 AU", "8 AU"],
        answer: 1,
        explanation: "Kepler's third law gives T² = a³. For T = 8 years, a³ = 64, so a = 4 AU."
    },
    {
        q: "Why has Mars lost much of its early atmosphere?",
        options: [
            "It has weaker gravity and lost atmospheric gases over time",
            "It is closer to the Sun than Earth",
            "It has too many oceans"
        ],
        answer: 0,
        explanation: "Mars has weaker gravity than Earth and lost much of its early atmosphere over geological time."
    },
    {
        q: "Which observation can provide evidence of gases in an exoplanet's atmosphere?",
        options: [
            "Its colour in one photograph",
            "Spectral changes in starlight during a transit",
            "Its name"
        ],
        answer: 1,
        explanation: "Transit spectroscopy can reveal atmospheric gases by analysing how the planet's atmosphere absorbs starlight."
    },
    {
        q: "Why do we see nearly the same side of the Moon from Earth?",
        options: [
            "The Moon does not rotate",
            "Its rotation period equals its orbital period",
            "Earth blocks the other side"
        ],
        answer: 1,
        explanation: "The Moon is tidally locked: its rotation period and orbital period are approximately equal."
    },
    {
        q: "A spacecraft is travelling in a vacuum. What happens if its engines are switched off?",
        options: [
            "It immediately stops",
            "It continues moving unless a net force changes its motion",
            "It falls straight down"
        ],
        answer: 1,
        explanation: "Newton's first law says an object continues in uniform motion unless acted on by a net external force."
    },
    {
        q: "Which planet has the shortest year in our solar system?",
        options: ["Mercury", "Earth", "Neptune"],
        answer: 0,
        explanation: "Mercury is closest to the Sun and completes an orbit in about 88 Earth days."
    },
    {
        q: "Why can radio telescopes detect objects that optical telescopes may not observe clearly?",
        options: [
            "They detect radio waves rather than visible light",
            "They work only underwater",
            "They create their own stars"
        ],
        answer: 0,
        explanation: "Radio telescopes detect radio wavelengths, revealing information that visible-light observations cannot provide."
    },
    {
        q: "A planet has twice Earth's mass but the same radius. What is its surface gravity compared with Earth's?",
        options: ["Half", "Twice", "Four times"],
        answer: 1,
        explanation: "Surface gravity is proportional to mass when radius is unchanged: g = GM/R²."
    },
    {
        q: "What causes the phases of the Moon?",
        options: [
            "Earth's shadow every night",
            "Different portions of its sunlit half being visible from Earth",
            "The Moon changing shape"
        ],
        answer: 1,
        explanation: "We see different portions of the Moon's illuminated half as it orbits Earth."
    },
    {
        q: "Why is Venus hotter than Mercury despite being farther from the Sun?",
        options: [
            "Venus has an intense greenhouse effect",
            "Venus is larger than the Sun",
            "Mercury has oceans"
        ],
        answer: 0,
        explanation: "Venus's dense carbon dioxide atmosphere traps heat through an extreme greenhouse effect."
    },
    {
        q: "What does a redshift in the spectrum of a distant galaxy usually indicate?",
        options: [
            "Its light has shifted towards longer wavelengths",
            "It has stopped emitting light",
            "It is becoming a planet"
        ],
        answer: 0,
        explanation: "Redshift means light has shifted towards longer wavelengths. For distant galaxies, this is commonly associated with cosmic expansion."
    },
    {
        q: "A satellite moves to a higher circular orbit around Earth. What happens to its orbital period?",
        options: [
            "It becomes longer",
            "It becomes shorter",
            "It stays exactly the same"
        ],
        answer: 0,
        explanation: "Higher circular orbits have larger orbital periods, according to Kepler's third law."
    },
    {
        q: "Which technique detects an exoplanet by measuring a star's tiny back-and-forth motion?",
        options: [
            "Radial velocity method",
            "Ocean mapping",
            "Seismic imaging"
        ],
        answer: 0,
        explanation: "A planet's gravity makes its star wobble. Scientists detect this using shifts in the star's spectrum."
    },
    {
        q: "Why do comets develop tails when they approach the Sun?",
        options: [
            "Solar heating releases gas and dust",
            "They catch fire like wood",
            "They absorb the Moon"
        ],
        answer: 0,
        explanation: "Sunlight heats comet ice, releasing gas and dust that form tails pushed by sunlight and solar wind."
    },
    {
        q: "If a spacecraft doubles its speed, how does its kinetic energy change?",
        options: ["It doubles", "It triples", "It becomes four times"],
        answer: 2,
        explanation: "Kinetic energy = 1/2 mv². Doubling speed makes kinetic energy four times greater."
    },
    {
        q: "What is the approximate escape velocity from Earth's surface?",
        options: ["1.1 km/s", "11.2 km/s", "112 km/s"],
        answer: 1,
        explanation: "Earth's escape velocity is approximately 11.2 kilometres per second, ignoring atmospheric drag."
    },
    {
        q: "Why are space telescopes useful for observing certain wavelengths?",
        options: [
            "Earth's atmosphere absorbs or distorts some wavelengths",
            "Space has more oxygen",
            "Stars are closer in space"
        ],
        answer: 0,
        explanation: "Earth's atmosphere blocks or distorts some electromagnetic wavelengths, so space telescopes can observe them more clearly."
    },
    {
        q: "What is the main source of energy in the Sun?",
        options: [
            "Chemical burning",
            "Nuclear fusion",
            "Friction with planets"
        ],
        answer: 1,
        explanation: "The Sun releases energy by fusing hydrogen nuclei into helium in its core."
    },
    {
        q: "Two objects are dropped in a vacuum near Earth. One is heavier. Which reaches the ground first?",
        options: [
            "The heavier object",
            "The lighter object",
            "Both fall with the same acceleration"
        ],
        answer: 2,
        explanation: "In a vacuum, objects fall with the same gravitational acceleration regardless of mass."
    },
    {
        q: "What does the habitable zone around a star describe?",
        options: [
            "A region where liquid water could potentially exist on a planet's surface",
            "A region with no gravity",
            "A region where stars are born"
        ],
        answer: 0,
        explanation: "The habitable zone is the range of distances where conditions could allow liquid water on a planet's surface."
    },
    {
        q: "Why do scientists use spectroscopy to study stars?",
        options: [
            "To determine chemical elements and physical properties",
            "To measure the star's sound",
            "To change its temperature"
        ],
        answer: 0,
        explanation: "Spectral lines reveal elements, temperature, motion and other properties."
    },
    {
        q: "What happens to the gravitational force between two objects if their separation doubles?",
        options: [
            "It becomes half",
            "It becomes one-fourth",
            "It becomes four times"
        ],
        answer: 1,
        explanation: "Newton's law of gravitation follows an inverse-square relationship."
    },
    {
        q: "Why is Jupiter's Great Red Spot scientifically interesting?",
        options: [
            "It is a long-lasting giant storm",
            "It is a solid mountain",
            "It is a new moon"
        ],
        answer: 0,
        explanation: "The Great Red Spot is a huge atmospheric storm that has been observed for centuries."
    },
    {
        q: "A star's light dips regularly when a planet passes in front of it. Which method is being used?",
        options: [
            "Transit method",
            "Radar mapping",
            "Direct drilling"
        ],
        answer: 0,
        explanation: "The transit method detects periodic decreases in a star's brightness caused by a planet passing in front."
    },
    {
        q: "What is the main purpose of a heat shield on a returning spacecraft?",
        options: [
            "Protect it from intense heating during atmospheric entry",
            "Increase its speed",
            "Generate oxygen"
        ],
        answer: 0,
        explanation: "A heat shield protects a spacecraft from intense heating during atmospheric re-entry."
    }
];

// ==========================================
// GAME VARIABLES
// ==========================================

let selectedPlanet = 0;
let currentPlanet = 0;

let completed = [];
let unlocked = [0, 1];

let fuel = 100;
let energy = 100;
let oxygen = 100;
let score = 0;

let activeQuestions = [];
let questionIndex = 0;
let questionLocked = false;
let usedQuestionIndexes = [];

const $ = (id) => document.getElementById(id);

// ==========================================
// RANDOM QUESTION SELECTION
// ==========================================

function getRandomQuestions() {
    if (questionBank.length - usedQuestionIndexes.length < 5) {
        usedQuestionIndexes = [];
    }

    const available = questionBank
        .map((question, index) => index)
        .filter(index => !usedQuestionIndexes.includes(index));

    for (let i = available.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [available[i], available[j]] = [available[j], available[i]];
    }

    const selected = available.slice(0, 5);

    usedQuestionIndexes.push(...selected);

    return selected.map(index => questionBank[index]);
}

// ==========================================
// UPDATE GAME INFORMATION
// ==========================================

function updateStats() {
    $("fuel").textContent = fuel;
    $("energy").textContent = energy;
    $("oxygen").textContent = oxygen;
    $("score").textContent = score;

    $("progressText").textContent = completed.length + " / 10";

    $("progressBar").style.width =
        (completed.length / 10 * 100) + "%";

    if (completed.length === 10) {
        $("missionName").textContent = "All Missions Complete!";
        $("missionDescription").textContent =
            "Congratulations, Commander! You explored the galaxy.";
    } else {
        const nextMission = planets[completed.length];

        $("missionName").textContent =
            "Mission " + (completed.length + 1) + ": " + nextMission.name;

        $("missionDescription").textContent =
            nextMission.description;
    }
}

function showMessage(message) {
    $("message").textContent = message;
}

function addLog(message) {
    const p = document.createElement("p");
    p.textContent = "✦ " + message;
    $("discoveryLog").prepend(p);
}

// ==========================================
// GALAXY MAP
// ==========================================

function renderPlanets() {
    document.querySelectorAll(".planet").forEach(button => {
        const index = Number(button.dataset.planet);
        const isUnlocked = unlocked.includes(index);

        button.classList.toggle("locked", !isUnlocked);
        button.classList.toggle("selected", selectedPlanet === index);

        button.disabled = !isUnlocked;

        if (!isUnlocked) {
            button.innerHTML =
                "🔒<small>" + planets[index].name + "</small>";
        } else {
            const emojis = [
                "🌍", "🔴", "🪐", "🌕", "🧊",
                "☄️", "🟣", "🌊", "🌌", "👾"
            ];

            button.innerHTML =
                emojis[index] +
                "<small>" + planets[index].name + "</small>";
        }
    });
}

function selectPlanet(index) {
    if (!unlocked.includes(index)) {
        showMessage("This planet is locked. Complete earlier missions first.");
        return;
    }

    selectedPlanet = index;

    $("selectedName").textContent = planets[index].name;
    $("selectedDescription").textContent =
        planets[index].description;

    if (completed.includes(index)) {
        $("planetStatus").textContent = "Status: Explored";
    } else if (index === currentPlanet) {
        $("planetStatus").textContent = "Status: Current location";
    } else {
        $("planetStatus").textContent = "Status: Available";
    }

    renderPlanets();

    showMessage("Destination selected: " + planets[index].name);
}

// ==========================================
// SPACESHIP TRAVEL
// ==========================================

function travel() {
    if (selectedPlanet === currentPlanet) {
        showMessage("You are already at this destination.");
        return;
    }

    if (activeQuestions.length > 0) {
        showMessage("Complete your current mission before travelling.");
        return;
    }

    const planet = planets[selectedPlanet];

    if (fuel < planet.cost || energy < 5 || oxygen < 5) {
        showMessage("Not enough resources for this journey!");
        return;
    }

    fuel -= planet.cost;
    energy -= 5;
    oxygen -= 5;

    currentPlanet = selectedPlanet;

    const destination = document.querySelector(
        '[data-planet="' + currentPlanet + '"]'
    );

    $("spaceship").style.left =
        destination.style.getPropertyValue("--x");

    $("spaceship").style.top =
        destination.style.getPropertyValue("--y");

    $("shipStatus").textContent =
        "Travel complete. Current location: " + planet.name;

    $("planetStatus").textContent =
        completed.includes(currentPlanet)
            ? "Status: Explored"
            : "Status: Current location";

    updateStats();

    showMessage("Welcome to " + planet.name + "!");
    addLog("Spaceship arrived at " + planet.name + ".");
}

// ==========================================
// START MISSION
// ==========================================

function scanPlanet() {
    if (currentPlanet !== selectedPlanet) {
        showMessage("Travel to the selected planet before starting its mission.");
        return;
    }

    if (completed.includes(currentPlanet)) {
        showMessage("This planet has already been explored!");
        return;
    }

    if (activeQuestions.length > 0) {
        showMessage("Complete your current challenge first.");
        return;
    }

    activeQuestions = getRandomQuestions();
    questionIndex = 0;

    $("puzzlePanel").classList.remove("hidden");
    $("nextButton").classList.add("hidden");

    $("puzzleTitle").textContent =
        "MISSION CHALLENGE: " + planets[currentPlanet].name;

    addLog("Mission started at " + planets[currentPlanet].name + ".");

    showQuestion();

    $("puzzlePanel").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {
    questionLocked = false;

    const q = activeQuestions[questionIndex];

    $("questionCounter").textContent =
        "Question " + (questionIndex + 1) + " of 5";

    $("puzzleQuestion").textContent = q.q;

    $("puzzleFeedback").textContent = "";

    $("nextButton").classList.add("hidden");

    $("difficultyLabel").textContent =
        questionIndex < 2 ? "ADVANCED" :
        questionIndex < 4 ? "EXPERT" : "MASTER";

    const options = $("puzzleOptions");
    options.replaceChildren();

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option";
        button.textContent = option;

        button.addEventListener("click", () => {
            answerPuzzle(index);
        });

        options.appendChild(button);
    });
}

// ==========================================
// CHECK ANSWER
// ==========================================

function answerPuzzle(choice) {
    if (questionLocked) return;

    const q = activeQuestions[questionIndex];

    const optionButtons =
        document.querySelectorAll("#puzzleOptions button");

    if (choice === q.answer) {
        questionLocked = true;

        score += 20;

        optionButtons.forEach(button => {
            button.disabled = true;
        });

        $("puzzleFeedback").textContent =
            "✓ Correct! " + q.explanation;

        if (questionIndex === 4) {
            $("nextButton").textContent = "Complete Mission 🏆";
        } else {
            $("nextButton").textContent = "Next Question →";
        }

        $("nextButton").classList.remove("hidden");

        updateStats();

    } else {
        $("puzzleFeedback").textContent =
            "✗ Incorrect! Try again. Hint: " + q.explanation;
    }
}

// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {
    if (!questionLocked) return;

    if (questionIndex < 4) {
        questionIndex++;
        showQuestion();
    } else {
        completeMission();
    }
}

// ==========================================
// COMPLETE MISSION
// ==========================================

function completeMission() {
    const planet = planets[currentPlanet];

    completed.push(currentPlanet);

    fuel = Math.min(100, fuel + 15);
    energy = Math.min(100, energy + 10);
    oxygen = Math.min(100, oxygen + 10);

    if (currentPlanet < 9) {
        const nextPlanet = currentPlanet + 1;

        if (!unlocked.includes(nextPlanet)) {
            unlocked.push(nextPlanet);
        }
    }

    $("puzzleFeedback").textContent =
        "🏆 MISSION COMPLETE! Discovery: " + planet.discovery;

    $("planetStatus").textContent = "Status: Explored";
    $("shipStatus").textContent = "Mission completed successfully!";

    addLog("Mission completed: " + planet.name);
    addLog("Discovery: " + planet.discovery);

    activeQuestions = [];
    questionIndex = 0;
    questionLocked = false;

    $("puzzleOptions").replaceChildren();
    $("nextButton").classList.add("hidden");

    if (completed.length === 10) {
        $("puzzleQuestion").textContent =
            "You have successfully completed all 10 missions!";

        showMessage("GALAXY COMPLETE! You are a Space Explorer!");

    } else {
        $("puzzleQuestion").textContent =
            "Excellent work, Commander! Your next destination is unlocked.";

        showMessage("Mission completed! Next planet unlocked.");
    }

    updateStats();
    renderPlanets();
}

// ==========================================
// BUTTON EVENTS
// ==========================================

document.querySelectorAll(".planet").forEach(button => {
    button.addEventListener("click", () => {
        selectPlanet(Number(button.dataset.planet));
    });
});

$("travelButton").addEventListener("click", travel);
$("scanButton").addEventListener("click", scanPlanet);
$("nextButton").addEventListener("click", nextQuestion);

// ==========================================
// START GAME
// ==========================================

renderPlanets();
selectPlanet(0);
updateStats();

$("spaceship").style.left = "50%";
$("spaceship").style.top = "18%";

addLog("Mission Control online.");
addLog("Spaceship ready for exploration.");
addLog("Earth exploration mission available.");

console.log("SpaceXplorer loaded successfully!");
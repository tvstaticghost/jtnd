/* Character creation class */

class CharacterCreation {
    //fix this class --need to figure out the additional attributes
    constructor(name, classType) {
        this.name = name;
        this.class = classType;
    }
}

//class that generates a random dnd scenerio
class StoryCreation {

   constructor(dungeonSize, dungeonHistory, partyGoal, dungeonComplication) {
        this.dungeonSize = dungeonSize;
        this.dungeonHistory = dungeonHistory;
        this.partyGoal = partyGoal;
        this.dungeonComplication = dungeonComplication;
   }

    selectMonsters() {
        let monsterList = ['Aberration', 'Small/Large Beast', 'Swarm Beast', 'Celestial', 
                    'Construct', 'Dragon', 'Elemental', 'Fey', 'Fiend',
                    'Giant', 'Humanoid', 'Monstrosity', 'Ooze', 'Plant', 'Undead', 
                    'Pick a monster that fits your theme']

        let humanoidList = ['Dwarf', 'Elf', 'Gnoll', 'Gnome', 'Goblinoid', 'Grimlick', 
                            'Human', 'Shapechanger', 'Kobold', 'Lizardfolk', 'Mermen', 'Orc', 'Sahuagin']

        let fiendList = ['Demon', 'Devil']

        let elementalList = ['Water Elemental', 'Fire Elemental', 'Earth Elemental', 'Air Elemental']

        let dungeonMonsters = []

        if (this.dungeonSize === 'small') {
            let numberOfMonsters = randomNumber(2, 4);

            for (let i = 0; i < numberOfMonsters; i++) {
                let randomIndex = randomNumber(0, monsterList.length - 1);
                let monsterSelection = monsterList[randomIndex];

                if (monsterSelection === 'Humanoid') {
                    let myIndex = randomNumber(0, humanoidList.length - 1)
                    dungeonMonsters.push(humanoidList[myIndex])
                }
                else if (monsterSelection === 'Elemental') {
                    let myIndex = randomNumber(0, elementalList.length - 1)
                    dungeonMonsters.push(elementalList[myIndex])
                }
                else if (monsterSelection === 'Fiend') {
                    let myIndex = randomNumber(0, fiendList.length - 1)
                    dungeonMonsters.push(fiendList[myIndex])
                }
                else {
                    dungeonMonsters.push(monsterSelection);
                }
            }
            return dungeonMonsters;
        }
        else {
            let numberOfMonsters = randomNumber(4, 6);

            for (let i = 0; i < numberOfMonsters; i++) {
                let randomIndex = randomNumber(0, monsterList.length - 1);
                let monsterSelection = monsterList[randomIndex];

                if (monsterSelection === 'Humanoid') {
                    let myIndex = randomNumber(0, humanoidList.length - 1)
                    dungeonMonsters.push(humanoidList[myIndex])
                }
                else if (monsterSelection === 'Elemental') {
                    let myIndex = randomNumber(0, elementalList.length - 1)
                    dungeonMonsters.push(elementalList[myIndex])
                }
                else if (monsterSelection === 'Fiend') {
                    let myIndex = randomNumber(0, fiendList.length - 1)
                    dungeonMonsters.push(fiendList[myIndex])
                }
                else {
                    dungeonMonsters.push(monsterSelection);
                }
            }
            return dungeonMonsters;
        }
    }

    selectDungeonHistory() {
        
        if (this.dungeonHistory >= 1 && this.dungeonHistory < 5) {
            return 'Dungeon still used for original purpose';
        }
        else if (this.dungeonHistory >= 5 && this.dungeonHistory < 9) {
            return 'Dungeon is no longer used for original purpose';
        }
        else {
            return 'Natural location such as a cave or wilderness';
        }
    }

    selectPartyGoal() {
        const denizen = ['Kill creature\'s within', 'Drive out creatures within', 
                        'Capture a resident of the dungeon', 'Restore a resident to the dungeon'];

        const item = ['Recover an item', 'Return an item'];

        const ritual = ['Halt a ritual', 'Advance or initiate a ritual']

        if (this.partyGoal === 1) {
            let randomValue = randomNumber(0, 3);
            return denizen[randomValue];
        }
        else if (this.partyGoal === 2) {
            let randomValue = randomNumber(0, 1);
            return item[randomValue];
        }
        else if (this.partyGoal === 3) {
            return 'Rescue an NPC';
        }
        else if (this.partyGoal === 4) {
            let randomValue = randomNumber(0, 1);
            return ritual[randomValue];
        }
        else if (this.partyGoal === 5) {
            return 'Gather/gain information for a larger goal';
        }
        else {
            return 'Passing through the dungeon to another location';
        }
    }

    selectionDungeonComplication() {
        const complicationList = ['Goal is barred by', 'NPC', 'Hostile monsters block the way (monsters and others)', 
                                'Linear route or route with limited options of navigation']
        const barred = ['a monster or enemy with a', 'an obstacle that requires a particular key', 
                        'a missing unique puzzle clue', 'by unique magic', 'code, pass phrase, or ritual needed', 
                        'by a death trap', 'magical ward', 'otherwise impassable hazard']
        const barredMonster = ['special weakness', 'special want/need']
        const barredPuzzle = ['that can be found within the dungeon ', 'that must be searched for in another location']

        const npc = ['requires an item to pass (item or other)', 'is needed to obtain goal']

        if (this.dungeonComplication === 0) {
            let secondValue = randomNumber(0, barred.length - 1);
            if (secondValue === 0) {
                let thirdValue = randomNumber(0, barredMonster.length - 1);
                return `${complicationList[this.dungeonComplication]} ${barred[secondValue]} ${barredMonster[thirdValue]}`;
            }
            else if (secondValue === 2) {
                let thirdValue = randomNumber(0, 11);
                if (thirdValue >= 0 && thirdValue < 11) {
                    return `Goal is barred by unique puzzle that can be found within dungeon`;
                }
                else {
                    return `Goal is barred by unique puzzle that must be searched for in another location`
                }
            }
            else {
                return `${complicationList[this.dungeonComplication]} ${barred[secondValue]}`;
            }
        }
        else if (this.dungeonComplication === 1) {
            let secondValue = randomNumber(0, npc.length - 1);
            return `${complicationList[this.dungeonComplication]} ${npc[secondValue]}`;
        }

        else if (this.dungeonComplication === 2) {
            return complicationList[this.dungeonComplication];
        }

        else if (this.dungeonComplication === 3) {
            return complicationList[this.dungeonComplication]
        }

    }

    //FIX THIS FUNCTION --need to specify what solution goes to what complication
    selectDungeonSolution(situation) {
        const itemSolution = ['Map to item', 'Dungeon NPC has information on item location', 
                        'Collect scattered pieces', 'Defeat enemy with item', 'Locate item']
        
        const npcSolution = ['Fulfill wishes/wants/needs of NPC', 'Impersonate or collect NPC']

        const monsterSolution = ['Defeat monster', 'Bypass monster']

        const otherSolution = ['Acquire vehicle', 'Acquire tool:', 'Acquire ally', 'Acquire special ability/spell', 
                                'General creative problem solving', 'Riddle/puzzle']
        const toolList = ['Codex', 'Spell', 'Tome', 'Artisan tool', 'Other device']

        if (situation.toLowerCase().includes('monster')) {
            let secondValue = randomNumber(0, monsterSolution.length - 1);
            return monsterSolution[secondValue];
        }
        else if (situation.toLowerCase().includes('npc') && !situation.toLowerCase().includes('item')) {
            let secondValue = randomNumber(0, npcSolution.length - 1);
            return npcSolution[secondValue];
        }
        else if (situation.toLowerCase().includes('item')) {
            let secondValue = randomNumber(0, itemSolution.length - 1);
            return itemSolution[secondValue];
        }
        else if (situation.toLowerCase().includes('key')) {
            return 'Locate key';
        }
        else if (situation.toLowerCase().includes('puzzle') && situation.toLowerCase().includes('within')) {
            return 'Find puzzle clue within the dungeon'
        }
        else if (situation.toLowerCase().includes('puzzle')) {
            return 'Find puzzle clue in another location'
        }
        else {
            let secondValue = randomNumber(0, otherSolution.length - 1);
            if (secondValue === 1) {
                let thirdValue = randomNumber(0, toolList.length - 1);
                return `${otherSolution[secondValue]} ${toolList[thirdValue]}`;
            }
            else {
                return otherSolution[secondValue];
            }
        }
    }

    //fix this function to return data in a more organized manner
    selectMonsterAttacks(monsterList) {

        const schoolList = ['Abjuration', 'Conjuration', 'Illusion', 'Evocation', 'Enchantment', 'Necromancy', 'Transmutation'];
        const saveList = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Chr'];
        const addedDamage = ['Save for half damage', 'No save'];
        const conditionStatus = ['Save to avoid on hit', 'No save on hit'];
        const damageTypes = ['Cold', 'Fire', 'Radiant', 'Necrotic', 'Acid', 'Poison', 
                            'Lightning', 'Force', 'Thunder', 'Psychic'];

        let numOfAttacks = [];
        let listAttributes = [];

        for (let i = 0; i < monsterList.length; i++) {
            let numberOfAttacks = randomNumber(1, 6);
            let numberOfRolls = 0;
            let individualAttribute = [];
            let elementalUsed = false;

            if (numberOfAttacks === 1) {
                numberOfRolls = 1;
            }
            else if (numberOfAttacks >= 2 && numberOfAttacks < 6) {
                numberOfRolls = 2;
            }
            else {
                numberOfRolls = 3;
            }

            for (let j = 0; j < numberOfRolls; j++) {
                let secondValue = randomNumber(1, 5);

                if (secondValue === 1) {
                    let schoolRoll = randomNumber(0, 6);
                    let nextRoll = randomNumber(1, 2);

                    individualAttribute.push(`Magic`);
                    individualAttribute.push(schoolList[schoolRoll]);

                    if (nextRoll === 1) {
                        individualAttribute.push('Attack');
                    }
                    else {
                        let thirdValue = randomNumber(0, 5);
                        individualAttribute.push(`Save: ${saveList[thirdValue]}`);
                    }
                }

                else {
                    let nextRoll = randomNumber(0, 1);
                    let thirdRoll = randomNumber(0, )

                    if (nextRoll === 0) {
                        let nextDamageRoll = randomNumber(1, 8);
                        individualAttribute.push(`Ranged`);
                        if (nextDamageRoll >= 1 && nextDamageRoll < 3) {
                            individualAttribute.push('Slashing');
                        }
                        else if (nextDamageRoll >= 3 && nextDamageRoll < 5) {
                            individualAttribute.push('Bludgeoning');
                        }
                        else {
                            individualAttribute.push('Piercing');
                        }
                    }
                    else {
                        let nextDamageRoll = randomNumber(1, 6);
                        individualAttribute.push(`Melee`);
                        if (nextDamageRoll >= 1 && nextDamageRoll < 3) {
                            individualAttribute.push('Slashing');
                        }
                        else if (nextDamageRoll >= 3 && nextDamageRoll < 5) {
                            individualAttribute.push('Bludgeoning');
                        }
                        else {
                            individualAttribute.push('Piercing');
                        }
                    }

                    if (monsterList[i].includes('Fire') && elementalUsed === false) {
                        individualAttribute.push(`Damage Type: Fire`);
                    }
                    else if (monsterList[i].includes('Water') && elementalUsed === false) {
                        individualAttribute.push(`Damage Type: Cold`);
                    }
                    else if (monsterList[i].includes('Earth') && elementalUsed === false) {
                        individualAttribute.push(`Damage Type: Force`);
                    }
                    else if (monsterList[i].includes('Air') && elementalUsed === false) {
                        individualAttribute.push(`Damage Type: Lightning`);
                    }

                    else {
                        let extraDamage = randomNumber(0, 5);

                        if (extraDamage === 5) {
                            let addedDamangeRoll = randomNumber(0, addedDamage.length - 1);
                            let conditionStatusRoll = randomNumber(0, conditionStatus.length - 1);
                            let damageTypeRoll = randomNumber(0, damageTypes.length - 1);

                            individualAttribute.push('Added damage: ' + addedDamage[addedDamangeRoll]);
                            individualAttribute.push('Condition status: ' + conditionStatus[conditionStatusRoll]);
                            individualAttribute.push('Damage Type: ' + damageTypes[damageTypeRoll]);
                        }
                    }
                }
            }
            listAttributes.push(individualAttribute);
        }
        return listAttributes;
    }
}

//returns a number between the min(inclusive) and the max(inclusive)
function randomNumber(min, max) {
    max += 1
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}

function addFrameHover() {
    const frames = document.getElementsByClassName('frame__container');

    for (let i = 0; i < frames.length; i++) {
        frames[i].addEventListener('mouseover', () => {
            scaleUp(frames[i])
        })

        frames[i].addEventListener('mouseout', () => {
            scaleDown(frames[i])
        })
    }
}


function scaleUp(unit) {
    unit.classList.add('frame__hover');
}

function scaleDown(unit) {
    unit.classList.remove('frame__hover');
}


function addSwordDecorations() {
    const navLink = document.getElementsByClassName('nav__listitem');

    for (let i = 0; i < navLink.length; i++) {
        const img = document.createElement('img');
        navLink[i].addEventListener('mouseover', () => {
            navLink[i].appendChild(img);
            img.src = 'assets/icons8-sword-32.png';
            img.classList.add('sword__add');
        })

        navLink[i].addEventListener('mouseout', () => {
            navLink[i].removeChild(img)
        })
    }
}

function darkMode() {
    const darkModeBtn = document.getElementById('darkmode');

    darkModeBtn.addEventListener('click', () => {
        if (darkModeBtn.getAttribute('src') != 'assets/sun (1).svg') {
            darkModeBtn.setAttribute('src', 'assets/sun (1).svg');
        }
        else {
            darkModeBtn.setAttribute('src', 'assets/moon.svg');
        }
    })
}

function createStoryFromClass(){
    const dungeonBtns = document.getElementsByClassName('dungeon__btn');

    for (let i = 0; i < dungeonBtns.length; i++) {
        dungeonBtns[i].addEventListener('click', () => {
            if (dungeonBtns[i].classList.contains('option__selected')) {
                for (let j = 0; j < dungeonBtns.length; j++) {
                    if (dungeonBtns[j] != dungeonBtns[i] && dungeonBtns[j].classList.contains('option__selected')) {
                        dungeonBtns[i].classList.remove('option__selected');
                    }
                }
            }
            else {
                dungeonBtns[i].classList.add('option__selected');
                for (let j = 0; j < dungeonBtns.length; j++) {
                    if (dungeonBtns[j] != dungeonBtns[i]) {
                        dungeonBtns[j].classList.remove('option__selected');
                    }
                }
            }
        });
    }
}

function generateMonsterList() {
    const generateBtn = document.getElementById('generateBtn');
    const monsterListContainer = document.getElementById('monsterListContainer');
    const dungeonHistoryContainer = document.getElementById('dungeonHistoryContainer');
    const partyGoalContainer = document.getElementById('partyGoalContainer');
    const dungeonComplicationContainer = document.getElementById('dungeonComplicationContainer');
    const dungeonSolutionContainer = document.getElementById('dungeonSolutionContainer');
    const testContainer = document.getElementById('testContainer');

    generateBtn.addEventListener('click', () => {
        let selectedValue = getDungeonSelector()
        let dungeonHistory = renderDungeonHistory()
        let thePartyGoal = randomNumber(1, 6);
        let theDungeonComplication = randomNumber(0, 3);
        let myStory = new StoryCreation(selectedValue, dungeonHistory, thePartyGoal, theDungeonComplication)
        let myMonsterList = myStory.selectMonsters()
        let myDungeonHistory = myStory.selectDungeonHistory()
        let myPartyGoal = myStory.selectPartyGoal()
        let myDungeonComplication = myStory.selectionDungeonComplication()
        let myDungeonSolution = myStory.selectDungeonSolution(myDungeonComplication)
        let myMonsterAttacks = myStory.selectMonsterAttacks(myMonsterList);

        clearOutput();
        monsterListContainer.innerHTML += `<h2 class="list__color monster__title">Monster List:</h2>`
        for (let i = 0; i < myMonsterList.length; i++) {
            if ((i === 2 || i === 4) && i === myMonsterList.length - 1) {
                monsterListContainer.innerHTML += `<div class="monster__wrapper odd__element"> 
                                                   <p class="monster__name">${myMonsterList[i]}</p>
                                                   <p class="monster__subheading">Attack Type:</p>
                                                   <p>${myMonsterAttacks[i]}</p>
                                                   </div>`
            }
            else {
                monsterListContainer.innerHTML += `<div class="monster__wrapper"> 
                                                   <p class="monster__name">${myMonsterList[i]}</p>
                                                   <p class="monster__subheading">Attack Type:</p>
                                                   <p>${myMonsterAttacks[i]}</p>
                                                   </div>`
            }
        }
        dungeonHistoryContainer.innerHTML += `<h2 class="list__color">Dungeon History:</h2>`
        dungeonHistoryContainer.innerHTML += `<p>${myDungeonHistory}</p>`

        partyGoalContainer.innerHTML += `<h2 class="list__color">Party Goal:</h2>`
        partyGoalContainer.innerHTML += `<p>${myPartyGoal}</p>`

        dungeonComplicationContainer.innerHTML += `<h2 class="list__color">Dungeon Complication:</h2>`
        dungeonComplicationContainer.innerHTML += `<p>${myDungeonComplication}</p>`

        dungeonSolutionContainer.innerHTML += `<h2 class="list__color">Dungeon Solution:</h2>`
        dungeonSolutionContainer.innerHTML += `<p>${myDungeonSolution}</p>`

        addAnimation(monsterListContainer);
        addAnimation(dungeonHistoryContainer);
        addAnimation(partyGoalContainer);
        addAnimation(dungeonComplicationContainer);
        addAnimation(dungeonSolutionContainer);
    })
}

function getDungeonSelector() {
    const dungeonBtns = document.getElementsByClassName('dungeon__btn');

    let selectedValue = ''
    for (let i = 0; i < dungeonBtns.length; i++) {
        if (dungeonBtns[i].classList.contains('option__selected')) {
            selectedValue = dungeonBtns[i].textContent.toLowerCase().split(' ')
        }
    }
    return selectedValue[0]
}

function clearOutput() {
    const containerList = [document.getElementById('monsterListContainer'), 
    document.getElementById('dungeonHistoryContainer'), document.getElementById('partyGoalContainer'), 
    document.getElementById('dungeonComplicationContainer'), document.getElementById('dungeonSolutionContainer')];
    
    for (let i = 0; i < containerList.length; i++) {
        containerList[i].textContent = '';
        containerList[i].classList.remove('add__animation');
    }
}

function addAnimation(container) {
    container.classList.add('add__animation')
}

function renderDungeonHistory() {
    let randomValue = randomNumber(1, 10);
    return randomValue;
}

if (window.location.href.includes('story.html')) {
    generateMonsterList() 
}
createStoryFromClass();
darkMode();
addSwordDecorations();
addFrameHover();
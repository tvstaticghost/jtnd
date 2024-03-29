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

        let hasMagic = false
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
                    hasMagic = true
                    let schoolRoll = randomNumber(0, 6);
                    let nextRoll = randomNumber(1, 2);
                    let myAttackStyle = '';

                    myAttackStyle += `Attack Type ${j + 1}: Magic - `;
                    myAttackStyle += `School: ${schoolList[schoolRoll]} `;

                    if (nextRoll === 1) {
                        myAttackStyle += `(Attack) <br>`;
                    }
                    else {
                        let thirdValue = randomNumber(0, 5);
                        myAttackStyle += `(Save: ${saveList[thirdValue]}) <br>`;
                    }
                    individualAttribute.push(myAttackStyle);
                }

                else {
                    let nextRoll = randomNumber(0, 1);
                    let myAttackStyle = '';

                    if (nextRoll === 0) {
                        let nextDamageRoll = randomNumber(1, 8);
                        myAttackStyle += `Attack Type ${j + 1}: Ranged `;
                        if (nextDamageRoll >= 1 && nextDamageRoll < 3) {
                            myAttackStyle += `(Slashing) <br>`;
                        }
                        else if (nextDamageRoll >= 3 && nextDamageRoll < 5) {
                            myAttackStyle += `(Bludgeoning) <br>`;
                        }
                        else {
                            myAttackStyle += `(Piercing) <br>`;
                        }
                    }
                    else {
                        let nextDamageRoll = randomNumber(1, 6);
                        myAttackStyle += `Attack Type ${j + 1}: Melee `;
                                            
                        if (nextDamageRoll >= 1 && nextDamageRoll < 3) {
                            myAttackStyle += `(Slashing) <br>`;
                        } else if (nextDamageRoll >= 3 && nextDamageRoll < 5) {
                            myAttackStyle += `(Bludgeoning) <br>`;
                        } else {
                            myAttackStyle += `(Piercing) <br>`;
                        }
                    }

                    if (monsterList[i].includes('Fire') && elementalUsed === false) {
                        myAttackStyle += `Damage Type: Fire <br>`;
                    }
                    else if (monsterList[i].includes('Water') && elementalUsed === false) {
                        myAttackStyle += `Damage Type: Cold <br>`;
                    }
                    else if (monsterList[i].includes('Earth') && elementalUsed === false) {
                        myAttackStyle += `Damage Type: Force <br>`;
                    }
                    else if (monsterList[i].includes('Air') && elementalUsed === false) {
                        myAttackStyle += `Damage Type: Lightning <br>`;
                    }

                    else {
                        let extraDamage = randomNumber(0, 5);

                        if (extraDamage === 5) {
                            let addedDamangeRoll = randomNumber(0, addedDamage.length - 1);
                            let conditionStatusRoll = randomNumber(0, conditionStatus.length - 1);
                            let damageTypeRoll = randomNumber(0, damageTypes.length - 1);

                            myAttackStyle += `Added damage: ${addedDamage[addedDamangeRoll]} <br>`;
                            myAttackStyle += `Condition status: ${conditionStatus[conditionStatusRoll]} <br>`;
                            myAttackStyle += `Damage Type: ${damageTypes[damageTypeRoll]} <br>`;
                        }
                    }
                    individualAttribute.push(myAttackStyle);
                }
            }
            listAttributes.push(individualAttribute);
        }

        if (!hasMagic) {
            console.log('No Magic!')
            let listItemToChange = randomNumber(0, listAttributes.length - 1);

            let selectedList = listAttributes[listItemToChange]

            let nextValue = randomNumber(0, selectedList.length - 1);

            let schoolRoll = randomNumber(0, 6);
            let nextRoll = randomNumber(1, 2);
            let lastString = '';

            if (nextRoll === 1) {
                lastString += `(Attack) <br>`;
            }
            else {
                let thirdValue = randomNumber(0, 5);
                lastString += `(Save: ${saveList[thirdValue]}) <br>`;
            }

            selectedList[nextValue] = `Attack Type ${selectedList[nextValue][12]}: Magic - School: ${schoolList[schoolRoll]} ${lastString}`;
        }
        console.log(listAttributes)
        return listAttributes;
    }

    monsterResistances(monsterList, unique) {
        let resistanceList = []

        for (let i = 0; i < monsterList.length; i++) {
            let resistanceRolls = 0
            let resistanceSubList = []

            if (unique === 'unique') {
                resistanceRolls = randomNumber(1, 6);
            }
            else {
                resistanceRolls = randomNumber(1, 8);
            }

            let amountOfRolls = 0;

            if (resistanceRolls === 1) {
                amountOfRolls = 0;
            }
            else if (resistanceRolls === 2) {
                amountOfRolls = 1;
            }
            else if (resistanceRolls >= 3 && resistanceRolls < 6) {
                amountOfRolls = 2;
            }
            else if (resistanceRolls === 6) {
                amountOfRolls = 3;
            }
            else if (resistanceRolls === 7) {
                amountOfRolls = 4;
            }
            else {
                amountOfRolls = 5;
            }
            
            if (monsterList[i].includes('Fire')) {
                resistanceSubList.push('Fire');
                amountOfRolls--;
            }
            else if (monsterList[i].includes('Water')) {
                resistanceSubList.push('Cold');
                amountOfRolls--;
            }
            else if (monsterList[i].includes('Earth')) {
                resistanceSubList.push('Force');
                amountOfRolls--;
            }
            else if (monsterList[i].includes('Air')) {
                resistanceSubList.push('Lightning');
                amountOfRolls--;
            }

            while (resistanceSubList.length < amountOfRolls) {
                let resistanceRoll = buildResistanceList()
                if (!resistanceSubList.includes(resistanceRoll)) {
                    resistanceSubList.push(resistanceRoll);
                }
            }

            if (resistanceSubList.length === 0) {
                resistanceList.push('None');
            }
            else {
                resistanceList.push(resistanceSubList)
            }
        }
        return resistanceList;
    }

    monsterVulnerabilities(monsterList, weak, monsterTypes) {
        let vulnerabilityList = []
        console.log(monsterTypes)

        for (let i = 0; i < monsterList.length; i++) {
            let vulnerabilityRolls = 0
            let vulnerabilitySubList = []
            let currentResistanceList = monsterTypes[i];

            if (weak === 'weak') {
                vulnerabilityRolls = randomNumber(1, 6);
            }
            else {
                vulnerabilityRolls = randomNumber(1, 8);
            }

            let amountOfRolls = 0;

            if (vulnerabilityRolls === 1) {
                amountOfRolls = 0;
            }
            else if (vulnerabilityRolls === 2) {
                amountOfRolls = 1;
            }
            else if (vulnerabilityRolls >= 3 && vulnerabilityRolls < 7) {
                amountOfRolls = 2;
            }
            else {
                amountOfRolls = 3;
            }

            if (monsterList[i].includes('Fire')) {
                vulnerabilitySubList.push('Cold');
                amountOfRolls--;
            }
            else if (monsterList[i].includes('Water')) {
                vulnerabilitySubList.push('Lightning');
                amountOfRolls--;
            }
            else if (monsterList[i].includes('Earth')) {
                vulnerabilitySubList.push('Fire');
                amountOfRolls--;
            }
            else if (monsterList[i].includes('Air')) {
                vulnerabilitySubList.push('Force');
                amountOfRolls--;
            }

            while (vulnerabilitySubList.length < amountOfRolls) {
                let vulnerabilityRoll = buildVulnerabilityList();
                if (!vulnerabilitySubList.includes(vulnerabilityRoll) && !currentResistanceList.includes(vulnerabilityRoll)) {
                    vulnerabilitySubList.push(vulnerabilityRoll);
                }
            }

            if (vulnerabilitySubList.length === 0) {
                vulnerabilityList.push('None');
            }
            else {
                vulnerabilityList.push(vulnerabilitySubList)
            }
        }
        return vulnerabilityList;
    }
        
}


class RoomGeneration {

    numberOfRolls = randomNumber(1, 8);

    constructor(roomCount) {
        this.roomCount = roomCount;
    }

    getLightLevel() {
        let diceRoll = randomNumber(1, 6);
        let lightLevel = '';

        if (diceRoll >= 1 && diceRoll < 5) {
            lightLevel = 'Average';
        }
        else if (diceRoll === 5) {
            lightLevel = 'Dark';
        }
        else {
            lightLevel = 'Bright';
        }

        return lightLevel;
    }

    decideRoomType() {

        if (this.numberOfRolls === 1) {
            this.emptyRoom();
        }
        else if (this.numberOfRolls >= 2 && this.numberOfRolls < 6) {
            let secondRoll = randomNumber(1, 3);
            if (secondRoll === 1) {
                this.combatRoom();
            }
            else if (secondRoll === 2) {
                this.explorationRoom();
            }
            else {
                this.socialRoom();
            }
        }
        else if (this.numberOfRolls >= 6 && this.numberOfRolls < 8) {
            let possibilities = [this.combatRoom, this.explorationRoom, this.socialRoom];
            for (let i = 0; i < 2; i++) {
                let secondRoll = randomNumber(0, possibilities.length - 1);
                possibilities[secondRoll]();
                possibilities.splice(secondRoll, 1);
            }
        }
        else if (this.numberOfRolls === 8) {
            this.combatRoom();
            this.explorationRoom();
            this.socialRoom();
        }
    }

    emptyRoom() {
        console.log('empty room');
    }

    combatRoom() {
        console.log('combat');
    }

    explorationRoom() {
        console.log('exploration');
    }

    socialRoom() {
        console.log('social');
    }
}

function buildResistanceList() {
    const diceRoll = randomNumber(1, 100);

    if (diceRoll >= 1 && diceRoll < 13) {
        return 'Piercing'
    }
    else if (diceRoll >= 13 && diceRoll < 25) {
        return 'Slashing'
    }
    else if (diceRoll >= 25 && diceRoll < 36) {
        return 'Bludgeoning'
    }
    else if (diceRoll >= 36 && diceRoll < 41) {
        return 'Cold'
    }
    else if (diceRoll >= 41 && diceRoll < 46) {
        return 'Radiant'
    }
    else if (diceRoll >= 46 && diceRoll < 51) {
        return 'Acid'
    }
    else if (diceRoll >= 51 && diceRoll < 56) {
        return 'Poison'
    }
    else if (diceRoll >= 56 && diceRoll < 61) {
        return 'Lightning'
    }
    else if (diceRoll >= 61 && diceRoll < 66) {
        return 'Force'
    }
    else if (diceRoll >= 66 && diceRoll < 71) {
        return 'Thunder'
    }
    else if (diceRoll >= 71 && diceRoll < 76) {
        return 'Physic'
    }
    else if (diceRoll >= 76 && diceRoll < 86) {
        return 'Fire'
    }
    else if (diceRoll >= 86 && diceRoll < 91) {
        return 'Necrotic'
    }
    else if (diceRoll >= 91 && diceRoll < 96) {
        return 'Magical'
    }
    else {
        return 'Physical'
    }
}

function buildVulnerabilityList() {
    const diceRoll = randomNumber(1, 100);

    if (diceRoll >= 1 && diceRoll < 8) {
        return 'Piercing'
    }
    else if (diceRoll >= 8 && diceRoll < 15) {
        return 'Slashing'
    }
    else if (diceRoll >= 15 && diceRoll < 22) {
        return 'Bludgeoning'
    }
    else if (diceRoll >= 23 && diceRoll < 29) {
        return 'Cold'
    }
    else if (diceRoll >= 29 && diceRoll < 36) {
        return 'Radiant'
    }
    else if (diceRoll >= 36 && diceRoll < 44) {
        return 'Acid'
    }
    else if (diceRoll >= 44 && diceRoll < 51) {
        return 'Poison'
    }
    else if (diceRoll >= 51 && diceRoll < 58) {
        return 'Lightning'
    }
    else if (diceRoll >= 58 && diceRoll < 65) {
        return 'Force'
    }
    else if (diceRoll >= 65 && diceRoll < 72) {
        return 'Thunder'
    }
    else if (diceRoll >= 72 && diceRoll < 80) {
        return 'Physic'
    }
    else if (diceRoll >= 80 && diceRoll < 86) {
        return 'Fire'
    }
    else if (diceRoll >= 86 && diceRoll < 88) {
        return 'Necrotic'
    }
    else if (diceRoll === 88) {
        return 'Special'
    }
    else if (diceRoll === 89) {
        return 'Magic/Magic weapons'
    }
    else if (diceRoll >= 90 && diceRoll < 100) {
        return 'Silvered'
    }
    else {
        return 'Physical'
    }
}

class RoomLayout {

    constructor(roomRoll) {
        this.roomRoll = roomRoll;
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
    const desc = document.getElementsByClassName('desc');
    const image = document.getElementsByClassName('frame__image');

    for (let i = 0; i < frames.length; i++) {
        frames[i].addEventListener('mouseover', () => {
            scaleUp(frames[i], desc[i], image[i]);
        })

        frames[i].addEventListener('mouseout', () => {
            scaleDown(frames[i], desc[i], image[i]);
        })
    }
}


function scaleUp(unit, text, image) {
    unit.classList.add('frame__hover');
    text.classList.add('hover__desc');
    image.classList.add('frame__image__hover');
}

function scaleDown(unit, text, image) {
    unit.classList.remove('frame__hover');
    text.classList.remove('hover__desc');
    image.classList.remove('frame__image__hover');
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
    const resistanceBtns = document.getElementsByClassName('resistance__btn');
    const vulnerabilityBtns = document.getElementsByClassName('vulnerability__btn');

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

    for (let i = 0; i < resistanceBtns.length; i++) {
        resistanceBtns[i].addEventListener('click', () => {
            if (resistanceBtns[i].classList.contains('resistance__selected')) {
                for (let j = 0; j < resistanceBtns.length; j++) {
                    if (resistanceBtns[j] != resistanceBtns[i] && resistanceBtns[j].classList.contains('option__selected')) {
                        resistanceBtns[i].classList.remove('resistance__selected');
                    }
                }
            }
            else {
                resistanceBtns[i].classList.add('resistance__selected');
                for (let j = 0; j < resistanceBtns.length; j++) {
                    if (resistanceBtns[j] != resistanceBtns[i]) {
                        resistanceBtns[j].classList.remove('resistance__selected');
                    }
                }
            }
        });
    }

    for (let i = 0; i < vulnerabilityBtns.length; i++) {
        vulnerabilityBtns[i].addEventListener('click', () => {
            if (vulnerabilityBtns[i].classList.contains('vulernability__selected')) {
                for (let j = 0; j < vulnerabilityBtns.length; j++) {
                    if (vulnerabilityBtns[j] != vulnerabilityBtns[i] && vulnerabilityBtns[j].classList.contains('option__selected')) {
                        vulnerabilityBtns[i].classList.remove('vulnerability__selected');
                    }
                }
            }
            else {
                vulnerabilityBtns[i].classList.add('vulnerability__selected');
                for (let j = 0; j < vulnerabilityBtns.length; j++) {
                    if (vulnerabilityBtns[j] != vulnerabilityBtns[i]) {
                        vulnerabilityBtns[j].classList.remove('vulnerability__selected');
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
    const monsterTypeContainer = document.getElementById('monsterTypesContainer');
    const monsterVulnerabilityContainer = document.getElementById('monsterVulnerabilityContainer');

    generateBtn.addEventListener('click', () => {
        let selectedValue = getDungeonSelector()
        let resistanceValue = getUniqueSelector()
        let vulnerabilityValue = getVulnerabilitySelector()
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
        let myMonsterTypes = myStory.monsterResistances(myMonsterList, resistanceValue);
        let myMonsterVulnerabilities = myStory.monsterVulnerabilities(myMonsterList, vulnerabilityValue, myMonsterTypes);

        clearOutput();
        monsterListContainer.innerHTML += `<h2 class="list__color monster__title">Monster List:</h2>`
        for (let i = 0; i < myMonsterList.length; i++) {
            if ((i === 2 || i === 4) && i === myMonsterList.length - 1) {
                monsterListContainer.innerHTML += `<div class="monster__wrapper odd__element"> 
                                                   <p class="monster__name">${myMonsterList[i]}</p>
                                                   <p>${myMonsterAttacks[i]}</p>
                                                   </div>`
            }
            else {
                monsterListContainer.innerHTML += `<div class="monster__wrapper"> 
                                                   <p class="monster__name">${myMonsterList[i]}</p>
                                                   <p>${myMonsterAttacks[i]}</p>
                                                   </div>`
            }
        }

        monsterTypeContainer.innerHTML += `<h2 class="list__color monster__title">Monster Resistances:</h2>`
        for (let i = 0; i < myMonsterTypes.length; i++) {
            if ((i === 2 || i === 4) && i === myMonsterTypes.length - 1) {
                monsterTypeContainer.innerHTML += `<div class="monster__wrapper odd__element"> 
                                                    <p class="monster__name">${myMonsterList[i]}</p>
                                                    <p>${myMonsterTypes[i]}</p>
                                                    </div>`
            }
            else {
                monsterTypeContainer.innerHTML += `<div class="monster__wrapper"> 
                                                   <p class="monster__name">${myMonsterList[i]}</p>
                                                   <p>${myMonsterTypes[i]}</p>
                                                   </div>`
            }
        }

        monsterVulnerabilityContainer.innerHTML += `<h2 class="list__color monster__title">Monster Vulnerabilities:</h2>`;
        for (let i = 0; i < myMonsterVulnerabilities.length; i++) {
            if ((i === 2 || i === 4) && i === myMonsterVulnerabilities.length - 1) {
                monsterVulnerabilityContainer.innerHTML += `<div class="monster__wrapper odd__element"> 
                                                    <p class="monster__name">${myMonsterList[i]}</p>
                                                    <p>${myMonsterVulnerabilities[i]}</p>
                                                    </div>`
            }
            else {
                monsterVulnerabilityContainer.innerHTML += `<div class="monster__wrapper"> 
                                                   <p class="monster__name">${myMonsterList[i]}</p>
                                                   <p>${myMonsterVulnerabilities[i]}</p>
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
        addAnimation(monsterTypeContainer);
        addAnimation(monsterVulnerabilityContainer);
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

function getUniqueSelector() {
    const resistanceBtns = document.getElementsByClassName('resistance__btns');

    let selectedValue = ''
    for (let i = 0; i < resistanceBtns.length; i++) {
        if (resistanceBtns[i].classList.contains('resistance__selected')) {
            selectedValue = resistanceBtns[i].textContent.toLowerCase().split(' ')
        }
    }
    return selectedValue[0]
}

function getVulnerabilitySelector() {
    const vulnerabilityBtns = document.getElementsByClassName('vulnerability__btns');

    let selectedValue = ''
    for (let i = 0; i < vulnerabilityBtns.length; i++) {
        if (vulnerabilityBtns[i].classList.contains('vulnerability__selected')) {
            vulnerabilityValue = vulnerabilityBtns[i].textContent.toLowerCase().split(' ')
        }
    }
    return selectedValue[0]
}

function clearOutput() {
    const containerList = [document.getElementById('monsterListContainer'), 
    document.getElementById('dungeonHistoryContainer'), document.getElementById('partyGoalContainer'), 
    document.getElementById('dungeonComplicationContainer'), document.getElementById('dungeonSolutionContainer'), 
    document.getElementById('monsterTypesContainer'), document.getElementById('monsterVulnerabilityContainer')];
    
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

let test_call = new RoomGeneration(1);
console.log(test_call.numberOfRolls);
test_call.decideRoomType();
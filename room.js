class RoomLayout {

    constructor(roomRoll) {
        this.roomRoll = roomRoll;
    }

    generateRooms() {
        const roomOutput = document.getElementById('roomOutput');
        clearRoomContainer(roomOutput);
        for (let i = 0; i < this.roomRoll; i++) {
            roomOutput.innerHTML += '1'; 
        }
    }

    combatRoom() {
        let combatRoomAttributes = {
            difficulty: '',
            groupComp: '',
            unitComp: '',
            awareness: '',
            enemyGoal: '',
            terrain: ''
        };

        const difficultyOptions = ['Easy', 'Medium', 'Hard', 'Deadly'];
        const groupCompOptions = ['Mob', 'Equal number to party', 'Big strong'];
        const unitCompOptions = ['Single attack type', 'Multiple attack type', 'Two types', 'Three types'];
        const awarenessOptions = ['Waiting in ambush', 'Passive', 'Distracted', 'Asleep', 'On guard', 'On patrol'];
        const enemyGoalOptions = ['Guarding another npc', 'Guarding an area', 'Defending its home/drive pcs off', 'Hungry', 'Vengeance', 
                            'Steal an item', 'Take a PC', 'Take/kill an NPC', 'Complete a ritual', 'Distract', 'Delay for re-enforcements', 'Weaken', 'Subdue', 'Psychopathic'];
        const terrainOptions = ['Empty/open room', 'Terrain feature', 'Trap', 'Hazard', 'Lever, pulley, obvious object interaction', 'High platforms', 'Stairs'];

        const difficultyRoll = randomNumber(1, 20);
        const groupRoll = randomNumber(0, 2);
        const unitRoll = randomNumber(1, 6);
        const awarenessRoll = randomNumber(0, 5);
        const enemyRoll = randomNumber(0, 13);
        const terrainRoll = randomNumber(0, 6);

        if (difficultyRoll >= 1 && difficultyRoll < 9) {
            combatRoomAttributes.difficulty = difficultyOptions[0];
        }
        else if (difficultyRoll >= 9 && difficultyRoll < 17) {
            combatRoomAttributes.difficulty = difficultyOptions[1];
        }
        else if (difficultyRoll >= 17 && difficultyRoll < 20) {
            combatRoomAttributes.difficulty = difficultyOptions[2];
        }
        else {
            combatRoomAttributes.difficulty = difficultyOptions[3];
        }
        
        combatRoomAttributes.groupComp = groupCompOptions[groupRoll];

        if (unitRoll >= 1 && unitRoll < 3) {
            combatRoomAttributes.unitComp = unitCompOptions[0];
        }
        else if (unitRoll >= 3 && unitRoll < 5) {
            combatRoomAttributes.unitComp = unitCompOptions[1];
        }
        else {
            let secondRoll = randomNumber(0, 1);
            if (secondRoll === 0) {
                combatRoomAttributes.unitComp = unitCompOptions[2];
            }
            else {
                combatRoomAttributes.unitComp = unitCompOptions[3];
            }
        }
        combatRoomAttributes.awareness = awarenessOptions[awarenessRoll];
        combatRoomAttributes.enemyGoal = enemyGoalOptions[enemyRoll];
        combatRoomAttributes.terrain = terrainOptions[terrainRoll];

        return combatRoomAttributes;
    }

    explorationRoom() {
        console.log('fixme')
    }

    socialRoom() {
        let socialRoomAttributes = {
            creatureType: '',
            challenge: '',
            goal: ''
        };

        const creatureTypeOptions = ['Creature combatant type', 'New creature type', 'Animate object', 'Small beast', 'Medium beast', 'Large beast'];
        const challengeOptions = ['None - easy access to information or goal progression', 'Limited - Communication barrier or otherwise such as language', 'Challenging - reluctant, guarded, unwilling without provocation - ', 
                                'Specified - only willing to talk to certain types - '];
        const challengeSubOptions = ['Afraid', 'Deceitful', 'Proud', 'Untrusting', 'Angry', 'Confused', 'Injured', 'Wants a trade or bargain', 'Presents a puzzle', 'Ulterior motive'];
        const specfiedSubOptions = ['Allies', 'Allied race type', 'Master', 'Members/of proper social standing', 'Particular class'];
        const goalOptions = ['Bypass dungeon challenges', 'Locate object inside of dungeon', 'Avoid combat', 'Gain an advantage in the dungeon - '];
        const goalSubOptions = ['Knowledge or enemy weaknesses/strengths', 'Knowledge of traps or hazards', 'Knowledge of dungeon denizen\'s goals'];

        const creatureTypeRoll = randomNumber(1, 6);
        const challengeRoll = randomNumber(0, 3);
        const goalRoll = randomNumber(0, 3);

        if (creatureTypeRoll >= 1 && creatureTypeRoll < 4) {
            socialRoomAttributes.creatureType = creatureTypeOptions[0];
        }
        else if (creatureTypeRoll === 4) {
            socialRoomAttributes.creatureType = creatureTypeOptions[1];
        }
        else if (creatureTypeRoll === 5) {
            socialRoomAttributes.creatureType = creatureTypeOptions[2];
        }

        else {
            let secondRoll = randomNumber(1, 10);
            if (secondRoll >= 1 && secondRoll < 8) {
                socialRoomAttributes.creatureType = creatureTypeOptions[3];
            }
            else if (secondRoll >= 8 && secondRoll < 10) {
                socialRoomAttributes.creatureType = creatureTypeOptions[4];
            }
            else {
                socialRoomAttributes.creatureType = creatureTypeOptions[5];
            }
        }
        return socialRoomAttributes;
    }
}

function renderRooms() {
    const roomBtn = document.getElementById('roomBtn');
    let roomNumber = document.getElementById('rooms');

    roomBtn.addEventListener('click', () => {
        const room = new RoomLayout(roomNumber.value);
        room.generateRooms();
        console.log(room.combatRoom())
        console.log()
    })
}

function clearRoomContainer(roomOutput) {
    roomOutput.innerHTML = '';
}

renderRooms();

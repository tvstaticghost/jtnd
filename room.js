class RoomLayout {

    constructor(roomRoll) {
        this.roomRoll = roomRoll;
    }

    generateRooms() {
        const roomOutput = document.getElementById('roomOutput');
        clearRoomContainer(roomOutput);

        for (let i = 0; i < this.roomRoll; i++) {
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p1 = document.createElement('p');

            roomOutput.appendChild(div)
            div.classList.add('individual__room');
            div.appendChild(h2);

            h2.classList.add('monster__title');
            h2.classList.add('list__color');
            h2.innerHTML = `Room ${i + 1}`;

            div.appendChild(p1);
            p1.classList.add('room__text');

            let roomRoll = randomNumber(1, 8);

            if (roomRoll === 1) {
                p1.innerHTML = `Empty Room`
            }
            else if (roomRoll >= 2 && roomRoll < 6) {
                let roomOptions = ['Combat', 'Exploration', 'Social']
                let nextRoll = randomNumber(0, roomOptions.length - 1);

                p1.innerHTML += `${roomOptions[nextRoll]} Room <br>`;
            }
            else if (roomRoll >= 6 && roomRoll < 8) {
                const finalRoll = randomNumber(0, 2);
                if(finalRoll === 0) {
                    p1.innerHTML = `Combat Room <br>
                                    Exploration Room`
                }
                else if (finalRoll === 1) {
                    p1.innerHTML = `Combat Room <br>
                                    Social Room`
                }
                else if (finalRoll === 2) {
                    p1.innerHTML = `Exploration Room <br>
                                    Social Room`
                }
            }
            else {
                p1.innerHTML = `Combat Room <br>`
                p1.innerHTML += `Exploration Room <br>`
                p1.innerHTML += `Social Room <br>`
            }
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
        const groupRoll = randomNumber(0, groupCompOptions.length - 1);
        const unitRoll = randomNumber(1, 6);
        const awarenessRoll = randomNumber(0, awarenessOptions.length - 1);
        const enemyRoll = randomNumber(0, enemyGoalOptions.length - 1);
        const terrainRoll = randomNumber(0, terrainOptions.length - 1);

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
        const challengeRoll = randomNumber(0, challengeOptions.length - 1);
        const goalRoll = randomNumber(0, goalOptions.length - 1);

        //sets the creatureType value
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

        //Sets the challenge value 
        if (challengeRoll === 1) {
            socialRoomAttributes.challenge = challengeOptions[0];
        }

        else if (challengeRoll === 2) {
            socialRoomAttributes.challenge = challengeOptions[1];
        }

        else if (challengeRoll === 3) {
            socialRoomAttributes.challenge = challengeOptions[2];

            let nextRoll = randomNumber(0, challengeSubOptions.length - 1);
            socialRoomAttributes.challenge += challengeSubOptions[nextRoll];
        }
        else {
            socialRoomAttributes.challenge = challengeOptions[3];

            let nextRoll = randomNumber(0, specfiedSubOptions.length - 1);
            socialRoomAttributes.challenge += specfiedSubOptions[nextRoll];
        }

        //Sets goal value
        if (goalRoll === 1) {
            socialRoomAttributes.goal = goalOptions[0];
        }
        else if (goalRoll === 2) {
            socialRoomAttributes.goal = goalOptions[1];
        }
        else if (goalRoll === 3) {
            socialRoomAttributes.goal = goalOptions[2];
        }
        else {
            socialRoomAttributes.goal = goalOptions[3];

            let secondRoll = randomNumber(0, goalSubOptions.length - 1);
            socialRoomAttributes.goal += goalSubOptions[secondRoll];
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
    })
}

function clearRoomContainer(roomOutput) {
    roomOutput.innerHTML = '';
}

renderRooms();

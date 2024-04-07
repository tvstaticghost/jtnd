class RoomLayout {

    constructor(roomRoll) {
        this.roomRoll = roomRoll;
    }

    generateRooms() {
        const roomOutput = document.getElementById('roomOutput');
        for (let i = 0; i < this.roomRoll; i++) {
            roomOutput.innerHTML += '1'; 
        }
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

renderRooms();
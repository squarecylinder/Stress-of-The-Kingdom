let npc;

function NPC(npcType, gold){
    this.npcType = npcType;
    this.gold = gold;

}

let NPCManager = {
    setNPC: function(npcType) {
        switch (npcType) {
            case "Josh":
                npc = new NPC(npcType, 50);
                break;
            case "Amber":
                npc = new NPC(npcType, 75);
                break;
            case "Jalen":
                npc = new NPC(npcType, 100);
                break;
        }
        let getArena = document.querySelector(".arena");
        switch (npcType) {
            case "Josh":
                getArena.innerHTML = `<div><p>Hi i'm josh, what can I do for ya? <br> <button class="btn-dialog">Rumors?</button> <button class="btn-dialog">Where is town?</button></p></div>`;
                break;
            case "Amber":
                getArena.innerHTML = `<div><p>Hey there sweetie, would you like to buy some sweets? <br><button class="btn-dialog">Cheese Cake</button> <button class="btn-dialog">Apple Pie</button> <button class="btn-dialog">Do you have any meat?</button> </p></div>`;
                break;
            case "Jalen":
                getArena.innerHTML = `<div><p>Are you looking for some weapons? <br> <button class="btn-dialog">Ranged</button> <button class="btn-dialog">Two Handed</button> <button class="btn-dialog">Any armor?</button> </p></div>`;
                break;
        }

    }
}
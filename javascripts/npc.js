let npc;

function NPC(npcType){
    this.npcType = npcType

}

let NPCManager = {
    setNPC: function(npcType) {
        switch (npcType) {
            case "Josh":
                npc = new NPC(npcType);
                break;
            case "Amber":
                npc = new NPC(npcType);
                break;
            case "Jalen":
                npc = new NPC(npcType);
                break;
        }
    }
}
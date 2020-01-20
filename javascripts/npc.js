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
                getArena.innerHTML = `<div><p>Hi i'm josh, what can I do for ya? <br> <button class="btn-dialog" onclick="NPCManager.NPCdialog('rumors')">Rumors?</button> <button class="btn-dialog" onclick="NPCManager.NPCdialog('town')">Where is town?</button></p></div>`;
                break;
            case "Amber":
                getArena.innerHTML = `<div><p>Hey there sweetie, would you like to buy some sweets? <br><button class="btn-dialog" onclick="NPCManager.NPCdialog('cheesecake')">Cheese Cake Cost: 150G</button> <button class="btn-dialog" onclick="NPCManager.NPCdialog('applepie')">Apple Pie Cost: 250G</button> <button class="btn-dialog" onclick="NPCManager.NPCdialog('meat')">Do you have any meat?</button> </p></div>`;
                break;
            case "Jalen":
                getArena.innerHTML = `<div><p>Are you looking for some weapons? <br> <button class="btn-dialog" onclick="NPCManager.NPCdialog('ranged')">Ranged WIP</button> <button class="btn-dialog" onclick="NPCManager.NPCdialog('twohand')">Two Handed WIP</button> <button class="btn-dialog" onclick="NPCManager.NPCdialog('armor')">Any armor? WIP</button> </p></div>`;
                break;
        }
    },
    NPCdialog : function(dialogType) {
        let getArena = document.querySelector(".arena");
        let getPlayerHealth = document.querySelector(".health-player");
        let getPlayerGold = document.querySelector(".gold-player");
        let getPlayerXP = document.querySelector(".xp-player");
        switch (dialogType){
            case "rumors":
                getArena.innerHTML = `<div><p>"Rumors huh? Well there seems to be a secret tunnel around the forest that leads to a treasure trove. I heard it was guarded by either some bandits or a monster. Just a rumor though, and I wouldn't waste my energy on it personally."<button class="btn-dialog" onclick="TalkManager.TalkEvent()">Thanks!</button></p></div>`;
                break;
            case "town":
                getArena.innerHTML = `<div><p>"Oh, you want to go to town? Its to the north for about two miles. I can take you up there if you want?" <button class="btn-dialog">Yes please! WIP</button> <button class="btn-dialog" onclick="TalkManager.TalkEvent()">Not right now</button></p></div>`;
                break;
            case "cheesecake":
                if (player.gold >= 150 ){
                player.health = player.health + 50;
                player.gold = player.gold - 150;
                npc.gold = npc.gold + 150;
                getArena.innerHTML = `<div><p>Wow thats amazing! Health increased by 50! "Thank you! Come back anytime!"<button class="btn-dialog" onclick="TalkManager.TalkEvent()">Thank you!</button></p></div> `;
                getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
                else {
                    getArena.innerHTML = '<div><p>"Come back when you have enough cash darling."</p></div>'
                }
                break;
            case "applepie":
                if (player.gold >= 250 ){
                player.health = player.health + 100;
                player.gold = player.gold - 250;
                npc.gold = npc.gold + 250;
                getArena.innerHTML = `<div><p>A wave of euphoria rushes over you. You don't know what was in that pie but you feel way better than before. Health increased by 100!<button class="btn-dialog" onclick="TalkManager.TalkEvent()">Thank you!</button></p></div>`;
                getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
            else {
                getArena.innerHTML = '<div><p>"Come back when you have enough cash darling."</p></div>'
            }
                break;
            case "meat":
                if (npc.gold >= 1000) {
                    player.health = player.health + 300;
                    player.xp = player.xp + 100;
                    getArena.innerHTML = '<div><p>"I have Dragon meat, since you have spent so much with me, here take it!"</p><p>You have never tasted anything like this. You feel like you can take on the whole horde by yourself! Health increased by 300! XP increased by 100!</p></div>'
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getPlayerXP.innerHTML = "XP: " + player.xp;
                }
                else {
                    getArena.innerHTML = '<div><p>"Well, its definitely going to cost ya. I doubt you could afford it." This is a secret, if you can figure it out I would be pretty impressed.</p></div>';
                }
                break;
        }
    }
}
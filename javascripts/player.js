var player;

function Player(classType, health, mana, xp, strength, dexterity, gold) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.xp = xp;
    this.strength = strength;
    this.dexterity = dexterity;
    this.gold = gold;
}
let PlayerManager = {
    setClass: function(classType) {
    switch (classType) {
        case "Warrior":
            player = new Player(classType, 200, 0, 0, 150, 100, 50, 0);
            break;
        case "Rogue":
            player = new Player(classType, 100, 0, 0, 160, 150, 200, 0);
            break;
        case "Mage":
            player = new Player(classType, 80, 200, 0, 50, 200, 50, 0);
            break;
        case "Hunter":
            player = new Player(classType, 200, 0, 0, 120, 200, 100, 0);
            break;
                        }
    let getActions = document.querySelector(".actions");
    getActions.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + '<div class="classType">' + classType + '</div>'+'</h3><p class="health-player">Health: ' + player.health + '</p><p class="mana-player">Mana: ' + player.mana + '</p><p class="strength-player">Strength: ' + player.strength + '</p><p class="dexterity-player">Dexterity: ' + player.dexterity + '</p><p class="gold-player">Gold: ' + player.gold + '</p></div>' + '<div><button class="btn-search" onclick="EventManager.StartEncounter()">Search</button><button class="btn-rest" onclick="EventManager.RestEvent()">Rest</button><button class="btn-fight" onclick="EventManager.setFightEvent()">Fight</button><button class="btn-talk" onclick="TalkManager.TalkEvent()">Talk</button><button class="btn-reset" onclick="PlayerManager.setClass(player.classType)">Reset Button</button>';
                        }
}
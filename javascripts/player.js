var player;

function Player(classType, health, mana, xp, strength, dexterity, gold, level) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.xp = xp;
    this.strength = strength;
    this.dexterity = dexterity;
    this.gold = gold;
    this.level = level;
}
let PlayerManager = {
    setClass: function(classType) {
    switch (classType) {
        case "Warrior":
            player = new Player(classType, 200, 0, 0, 150, 100, 50, 0, 1);
            break;
        case "Rogue":
            player = new Player(classType, 100, 0, 0, 160, 150, 200, 0, 1);
            break;
        case "Mage":
            player = new Player(classType, 80, 200, 0, 50, 200, 50, 0, 1);
            break;
        case "Hunter":
            player = new Player(classType, 200, 0, 0, 120, 200, 100, 0, 1);
            break;
                        }
    let getActions = document.querySelector(".actions");
    getActions.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + '<div class="classType">' + classType + '</div>'+'</h3><p class="health-player">Health: ' + player.health + '</p><p class="mana-player">Mana: ' + player.mana + '</p><p class="strength-player">Strength: ' + player.strength + '</p><p class="dexterity-player">Dexterity: ' + player.dexterity + '</p><p class="gold-player">Gold: ' + player.gold + '</p><p class="xp-player">XP: ' + player.xp + '</p><p class="level-player">Level: ' + player.level + '</p></div>' + '<div><button class="btn-search" onclick="EventManager.StartEncounter()">Search</button><button class="btn-rest" onclick="EventManager.RestEvent()">Rest</button><button class="btn-fight" onclick="EventManager.setFightEvent()">Fight</button><button class="btn-talk" onclick="TalkManager.TalkEvent()">Talk</button><button class="btn-lvlup" onclick="PlayerManager.LevelUp()">Level Up!</button><br><button class="btn-reset" onclick="PlayerManager.setClass(player.classType)">Reset Button</button>';
                        },
    LevelUp : function() {
        let getEnemy = document.querySelector(".enemy");
        getEnemy.style.visibility = 'hidden';
        let getArena = document.querySelector(".arena");
        let getPlayerXP = document.querySelector(".xp-player");
        let getPlayerLevel = document.querySelector("level-player");
        if (player.xp >= 100) {
            if (player.mana <= 0) {
                player.health = player.health + 50;
                player.strength = player.strength + 50;
                player.dexterity = player.dexterity + 50;
                player.gold = player.gold + 75;
                player.level = player.level + 1;
                player.xp = player.xp = 0;
                getArena.innerHTML = `<div><p>You leveled up!<br>Level: ` + player.level + `!<br>Health: ` + player.health + `!<br>Strength: ` + player.strength + `!<br>Dexterity: ` + player.dexterity + `!<br>Gold: ` + player.gold + `!<br> Keep Going!</p></div>`;
                getPlayerXP.innerHTML = 'XP: ' + player.xp;
                getPlayerLevel.innerHTML = 'Level: ' + player.level;
            }
            else {
            player.health = player.health + 50;
            player.mana = player.mana + 50;
            player.strength = player.strength + 50;
            player.dexterity = player.dexterity + 50;
            player.gold = player.gold + 75;
            player.level = player.level + 1;
            player.xp = player.xp = 0;
            getArena.innerHTML = `<div><p>You leveled up!<br>Level: ` + player.level + `!<br>Health: ` + player.health + `!<br>Mana: ` + player.mana  + `!<br>Strength: ` + player.strength + `!<br>Dexterity: ` + player.dexterity + `!<br>Gold: ` + player.gold + `!<br> Keep Going!</p></div>`;
            getPlayerXP.innerHTML = 'XP: ' + player.xp;
            getPlayerLevel.innerHTML = 'Level: ' + player.level;
            }
        }
        else {
            getArena.innerHTML = `<div><p>It looks like you don't have enough xp to level up! Try again later. ` + player.xp + `/100 to level!</p></div>`;
        }
    }
}
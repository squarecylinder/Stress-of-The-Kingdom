let event;

function Event(eventType, positive, negative, neutral){
    this.eventType = eventType;
    this.positive = positive;
    this.negative = negative;
    this.neutral = negative;

}

let EventManager = {
    StartEncounter: function() {
        let getEnemy = document.querySelector(".enemy");
        getEnemy.style.visibility = 'hidden';
        let getPlayerHealth = document.querySelector(".health-player");
        let getPlayerGold = document.querySelector(".gold-player");
        let getPlayerDexterity = document.querySelector(".dexterity-player");
        let getPlayerStrength = document.querySelector(".strength-player");
        let getArena = document.querySelector(".arena");
        let positive = new Event("Positive", 1, 0, 0);
        let negative = new Event("Negative", 0, 1, 0);
        let neutral = new Event("Nuetral", 0, 0, 1);
        let chooseRandomEncounter = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEncounter) {
            case 0:
                event = positive;
                break;
            case 1: 
                event = negative;
                break;
            case 2:
                event = neutral;
                break;
            
        }
        
        if (event.eventType == "Negative") {
            let randNegative = Math.floor(Math.random() * Math.floor(3));
            switch (randNegative) {
                case 0:
                    player.health = player.health - 15;
                    getArena.innerHTML = '<div><p>You fell on a rock. Your leg is bleeding now. Good going. Your health decreased by 15!</p></div>';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    break;
                case 1:
                    player.gold = player.gold - 15;
                    getArena.innerHTML = '<div><p>Your past has caught up to you. You owe some people money! You pay them 15 gold!</p></div>';
                    getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                    break;
                case 2:
                    player.strength = player.strength - 5;
                    getArena.innerHTML = '<div><p>You helped some travelers with the turned over caravan. They were very greatful, but your arms are sore now.<br> No good deed goes unpunished. Your strength decreased by 5!</p></div>';
                    getPlayerStrength.innerHTML = 'Strength: ' + player.strength;
                    break;
            }
        }
        else if (event.eventType == "Positive") {
            let randPositive = Math.floor(Math.random() * Math.floor(3))
            switch (randPositive) {
                case 0:
                    player.health = player.health + 15;
                    getArena.innerHTML = '<div><p>You came across a merchant selling goods. He noticed you were having a rough journey and decided to give you <br> a fruit pie! Your health increased by 15!</p></div>';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    break;
                case 1:
                    player.gold = player.gold + 25;
                    getArena.innerHTML = '<div><p>A destroyed caravan. You find 25 pieces of gold!</p></div>';
                    getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                    break;
                case 2:
                    player.dexterity = player.dexterity + 5;
                    getArena.innerHTML = '<div><p>A boulder comes rushing down from the mountain side, you do not know what compelled you to move so quickly,<br> but you make it out of harms way. Your dexterity increased by 5!</p></div>';
                    getPlayerDexterity.innerHTML = 'Dexterity: ' + player.dexterity;
                    break; 
            }
        }
        else {
            let randNeutral = Math.floor(Math.random() * Math.floor(3))
            switch (randNeutral) {
                case 0:
                    getArena.innerHTML = "<div><p>You didn't find anything worth writing home about.</p></div>";
                    break;
                case 1:
                    getArena.innerHTML = "<div><p>A nice sunny day is exactly what you needed, you didn't find anything though.</p></div>";
                    break;
                case 2:
                    getArena.innerHTML = "<div><p>You should never search a forest alone. You didn't run into anything, so it worked out this time</p></div>";
                    break;
            }
        }
        
        
    },
    RestEvent: function() {
        let getEnemy = document.querySelector(".enemy");
        getEnemy.style.visibility = 'hidden';
        let getPlayerHealth = document.querySelector(".health-player");
        let getPlayerGold = document.querySelector(".gold-player");
        let getPlayerDexterity = document.querySelector(".dexterity-player");
        let getPlayerStrength = document.querySelector(".strength-player");
        let getArena = document.querySelector(".arena");
        let randomRest = Math.floor(Math.random() * Math.floor(4));
        switch (randomRest) {
            case 0:
                player.health = player.health + 20;
                getArena.innerHTML = '<div><p>After a good rest, you feel your life force is stronger than before! Health increased by 20!</p></div>';
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                break;
            case 1:
                player.strength = player.strength + 10;
                getArena.innerHTML = '<div><p>After a good rest, you feel your muscles are not as sore as before! Strength increased by 10!</p></div>';
                getPlayerStrength.innerHTML = 'Strength: ' + player.strength;
                break;
            case 2:
                player.dexterity = player.dexterity + 10;
                getArena.innerHTML = '<div><p>After a good rest, your reflexes feel as sharp as ever! Dexterity increased by 10!</p></div>';
                getPlayerDexterity.innerHTML = 'Dexterity: ' + player.dexterity;
                break;
            case 3:
                player.gold = player.gold + 5;
                getArena.innerHTML = '<div><p>After a good rest, you see a shimmering in a bush, you investigate and find 5 gold!</p></div>';
                getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                break;
        }
    },
    setFightEvent: function() {
        let getArena = document.querySelector(".arena");  
        let getEnemy = document.querySelector(".enemy");
        let goblin = new Enemy("Goblin", 100, 0, 20, 50, 100, 100);
        let troll = new Enemy("Troll", 200, 0, 40, 50, 80, 150);
        let thuuxenk = new Enemy("Thuuxenk", 300, 300, 300, 300, 300, 300) 
        let chooseRandomEnemy= Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = goblin;
                getArena.innerHTML = '<div><p>You are fighting a ' + enemy.enemyType + '<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
                break;
            case 1:
                enemy = troll;
                getArena.innerHTML = '<div><p>You are fighting a ' + enemy.enemyType + '<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
                break;
            case 2:
                enemy = thuuxenk;
                getArena.innerHTML = '<div><p>You are fighting a ' + enemy.enemyType + '<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
                break;
        }
        getEnemy.innerHTML = '<img src="img/avatar-enemy/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="img-enemy"><div><h3 class="type-enemy">' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p class="mana-enemy">Mana: ' + enemy.mana + '</P><p class="dexterity-enemy>Dexterity :' + enemy.dexterity + '</p></div>';
    },
    FightEvent: function() {
        let getEnemy = document.querySelector(".enemy");
        getEnemy.style.visibility = 'visible';
        let getArena = document.querySelector(".arena");
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getPlayerGold = document.querySelector(".gold-player");
        let getPlayerXP = document.querySelector(".xp-player");
        let getPlayerDexterity = player.dexterity;
        let getEnemyDexterity = enemy.dexterity;
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.dexterity / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamager = calcBaseDamage + offsetDamage;
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.dexterity / 6) / 2) + 1 ;
            let attackValues = [calcOutputDamager, numberOfHits];
            return attackValues;
        }
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.dexterity / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10))
            let calcOutputDamager = calcBaseDamage + offsetDamage;
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.dexterity / 6) / 2) + 1 ;
            let attackValues = [calcOutputDamager, numberOfHits];
            return attackValues;
        }
        if (player.health > 0){
        if (getPlayerDexterity >= getEnemyDexterity) {
            let PlayerAttackValues = playerAttack();
            let totalDamage = PlayerAttackValues[0] * PlayerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            getArena.innerHTML = '<div><p>You hit the ' + enemy.enemyType + ' for ' + PlayerAttackValues[0] + ' damage ' + PlayerAttackValues[1] + ' times!<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
            if (enemy.health <= 0) {
                player.gold = player.gold + enemy.gold;
                player.xp = player.xp + enemy.xp;
                getArena.innerHTML = '<div<p>After a hard fought battle, you won. You also looted the ' + enemy.enemyType + ' and it had ' + enemy.gold + ' gold!<br>Gained ' + enemy.xp + ' XP!</p></div>';
                getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerXP.innerHTML = 'XP: ' + player.xp;
             } else {
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                getArena.innerHTML = '<div><p>The ' + enemy.enemyType + ' hit you for ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' times!<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                if (player.health <= 0) {
                    player.xp = player.xp + (enemy.xp / 2);
                    getArena.innerHTML ='<div><p>After a gruelling battle, you lost. Maybe you should rest before fighting again.<br>Gained ' + enemy.xp + '!';
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerXP.innerHTML = 'XP: ' + player.xp;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
             } 
            } else if (getEnemyDexterity >= getPlayerDexterity) {
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                getArena.innerHTML = '<div><p>The ' + enemy.enemyType + 'hit you for ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' times!<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
                if (player.health <= 0) {
                    player.xp = player.xp + (enemy.xp / 2);
                    getArena.innerHTML ='<div><p>After a gruelling battle, you lost. Maybe you should rest before fighting again.<br>Gained ' + enemy.xp + '!';
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerXP.innerHTML = 'XP: ' + player.xp;
            } else {
                let PlayerAttackValues = playerAttack();
                let totalDamage = PlayerAttackValues[0] * PlayerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                getArena.innerHTML = '<div><p>You hit the ' + enemy.enemyType + ' for ' + PlayerAttackValues[0] + ' damage ' + PlayerAttackValues[1] + ' times!<button class="btn-attack" onclick="EventManager.FightEvent()">Attack!</button></p></div>';
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                if (enemy.health <= 0) {
                    player.gold = player.gold + enemy.gold;
                    player.xp = player.xp + enemy.xp;
                    getArena.innerHTML = '<div<p>After a hard fought battle, you won. You also looted the ' + enemy.enemyType + ' and it had ' + enemy.gold + ' gold!<br>Gained ' + enemy.xp + ' XP!</p></div>';
                    getPlayerGold.innerHTML = 'Gold: ' + player.gold;
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerXP.innerHTML = 'XP: ' + player.xp;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }

             }
            }
            else {
                getArena.innerHTML = '<div><p>You are in absolutely no condition to fight. Rest up and come back when you are stronger.</p></div>';
            }
            },
}
let TalkManager = {
    TalkEvent: function() {
        let getArena = document.querySelector(".arena");
        let getEnemy = document.querySelector(".enemy");
        getEnemy.style.visibility = 'hidden';
        getArena.innerHTML = '<div><p>You can see a few people by a camp fire. As they see you, they introduce themselves. <br> Who would you like to speak to? <button class="btn-NPC" onclick="NPCManager.setNPC(`Josh`)">Josh</button> <button  class="btn-NPC" onclick="NPCManager.setNPC(`Amber`)">Amber</button> <button  class="btn-NPC" onclick="NPCManager.setNPC(`Jalen`)">Jalen</button></p></div>';
    
    }
}



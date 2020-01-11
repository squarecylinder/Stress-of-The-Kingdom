let GameManager = {
    setGameStart: function(classType) {
        this.StartGame();

    },
    StartGame: function() {
        let getInterface = document.querySelector(".interface");
        let getGameStart = document.querySelector(".gamestart");
        let getActions = document.querySelector(".actions");
        getGameStart.innerHTML = '<div></div>';
        getActions.style.visibility = "hidden";
        getInterface.style.visibility = "visible";
        getInterface.innerHTML = '<div><img src="img/assets/GUI.png" alt="Main GUI"></div><div class="text-block-stats"><h1>Stats: </h1></div><div><button class="btn-classpick" onclick="GameManager.setClassPick()">Pick a class!</button></div>';

        },
    setClassPick: function(classType) {
        let getClassPick = document.querySelector(".btn-classpick");
        getClassPick.style.visibility = "hidden";
        let getActions = document.querySelector(".actions");
        getActions.style.visibility = "visible";
        getActions.innerHTML = '<a href="#" class="CPWarrior" onclick="PlayerManager.setClass(`Warrior`)"><img src="img/avatar-player/warrior.jpg" alt="warrior"><div><h3>Warrior</h3></div></a><a href="#" class="CPRogue" onclick="PlayerManager.setClass(`Rogue`)"><img src="img/avatar-player/rogue.jpg" alt="rogue"><div><h3>Rogue</h3></div></a><a href="#" class="CPMage" onclick="PlayerManager.setClass(`Mage`)"><img src="img/avatar-player/mage.jpg" alt="mage"><div><h3>Mage</h3></div></a><a href="#" class="CPHunter" onclick="PlayerManager.setClass(`Hunter`)"><img src="img/avatar-player/hunter.jpg" alt="hunter"><div><h3>Hunter</h3></div></a>';

    },
    resetplayer : function () {
        let getActions = document.querySelector(".actions")
    }
}


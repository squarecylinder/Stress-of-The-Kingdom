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
        getInterface.innerHTML = '<div><button class="btn-classpick" onclick="GameManager.setClassPick()">Pick a class!</button></div>';
        },
    setClassPick: function(classType) {
        let getClassPick = document.querySelector(".btn-classpick");
        getClassPick.style.visibility = "hidden";
        let getActions = document.querySelector(".actions");
        getActions.style.visibility = "visible";
        getActions.innerHTML = '';

    },
    resetplayer : function () {
        let getActions = document.querySelector(".actions")
    }
}


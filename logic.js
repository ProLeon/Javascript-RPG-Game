console.log("Hello");

$(document).ready(function(){
    //declare some of my variables
    let sOptSlot1 = false;
    let sOptSlot2 = false;
    let sPlayerSlot = false;
    let traveling = false;
    let fighting = false;
    let doneTyping = true;
    let enemiesTurn = false;
    let enemy = "";
    let playerDead = false;
    let enemiesDefeated = 0;
    //set the optional class stats
    classMelee = {
        name: "",
        health: 100,
        meleeDmg: 10,
        rangedDmg: 2,
        spellDmg: 2,
        shoutDmg: 4,
        compliments: [
            "a cute smile",
            "a great personality",
            "a nice beard",
            "a really cool name"
        ]
    }
    classRanged = {
        name: "",
        health: 100,
        meleeDmg: 4,
        rangedDmg: 10,
        spellDmg: 2,
        shoutDmg: 6,
        compliments: [
            "a great set of knives",
            "a sweet hoodie on",
            "a beatiful pet dog",
            "a great smelling cologne"
        ]
    }
    classCaster = {
        name:"",
        health: 100,
        meleeDmg: 2,
        rangedDmg: 6,
        spellDmg: 10,
        shoutDmg: 8,
        compliments: [
            "a powerful left hook",
            "a excellent set of spellbooks",
            "a beatiful pet cat",
            "a fresh and new perspective on life"
        ]
    }
    //list of potential enemies
    //=============================================

    enemies = [
        highwayman = {
            name: "Highwayman",
            health: 80,
            defense: .4,
            attack: 10,
            weapon: "bow"
        },
        mudCrab = {
            name: "Mud Crab",
            health: 45,
            defense: .4,
            attack: 8,
            weapon: "pincers"
        },
        forsworn = {
            name: "Forsworn",
            health: 65,
            defense: .4,
            attack: 12,
            weapon: "stave"
        },
        bigBadBoss = {
            name: "Mighty Frost Drake",
            health: 150,
            defense: .4,
            attack: 17,
            weapon: "Giant Talon"
        }
    ]
    //placeholder for enemy currently fighting
    enemyFighting = {
        name: "",
        health: 0,
        defense: 0,
        attack: 0,
        weapon: ""        
    }
    //placeholder for the class the player has locked into
    player = {
        name: "",
        health: 0,
        meleeDmg:0,
        rangedDmg:0,
        spellDmg: 0,
        shoutDmg: 0,
        compliments:[]
    }
    //lock in players class / stat
    let setClass = function(){
        if (sPlayerSlot){
            name = prompt("What would you like to name your hero");
            player.name = name;
            player.health = classRanged.health;
            player.meleeDmg = classRanged.meleeDmg;
            player.rangedDmg = classRanged.rangedDmg;
            player.spellDmg = classRanged.spellDmg;
            player.shoutDmg = classRanged.shoutDmg;
            player.compliments = classRanged.compliments
            //set the state of the heros action
            //=====================================================
            traveling = true;
            fighting = false;
            //style everything after stats have been locked in
            //======================================================
            $("#optSlot2").css("border", "")
            $("#optSlot1").css("border", "")
            $("#playerSlot").css("border", "")
            $("#playerSlot").empty();
            $("#optSlot1").empty();
            $("#optSlot2").empty();
            $("#classTextWarrior").html("health: " + player.health);
            $("#classTextRanger").html("Class: " + " Ranger");
            $("#classTextSpellCaster").html("You are feeling confident");
            styleActionBarText("You are traveling a dusty path");
            $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath1.jpg'/>");
            $("#playerBar").html("YOUR HERO - A quick and versatile ranger named: " + name);
            $("#playerSlot").append("<img style='width:100%; height:100%' src='assets/images/ranged.jpg'/>");
        }
        if (sOptSlot1){
            name = prompt("What would you like to name your hero");
            player.name = name;
            player.health = classMelee.health;
            player.meleeDmg = classMelee.meleeDmg;
            player.rangedDmg = classMelee.rangedDmg;
            player.spellDmg = classMelee.spellDmg;
            player.shoutDmg = classMelee.shoutDmg;
            player.compliments = classMelee.compliments;
            //set the state of the heros action
            //=====================================================
            traveling = true;
            fighting = false;
            //style everything after stats have been locked in
            //======================================================
            $("#optSlot2").css("border", "")
            $("#optSlot1").css("border", "")
            $("#playerSlot").css("border", "")
            $("#playerSlot").empty();
            $("#optSlot1").empty();
            $("#optSlot2").empty();
            $("#classTextWarrior").html("health: " + player.health);
            styleActionBarText("You are traveling a dusty path");
            $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath1.jpg'/>");
            $("#classTextRanger").html("Class: " + " Warrior");
            $("#classTextSpellCaster").html("You are feeling confident");
            $("#playerBar").html("YOUR HERO - A stout and honorable warrior named: " + name);
            $("#playerSlot").append("<img style='width:100%; height:100%' src='assets/images/melee.jpg'/>");
        }
        if (sOptSlot2){
            name = prompt("What would you like to name your hero");
            player.name = name;
            player.health = classCaster.health;
            player.meleeDmg = classCaster.meleeDmg;
            player.rangedDmg = classCaster.rangedDmg;
            player.spellDmg = classCaster.spellDmg;
            player.shoutDmg = classCaster.shoutDmg;
            player.compliments = classCaster.compliments;
            //set the state of the heros action
            //=====================================================
            traveling = true;
            fighting = false;
            //style everything after stats have been locked in
            //======================================================
            $("#optSlot2").css("border", "")
            $("#optSlot1").css("border", "")
            $("#playerSlot").css("border", "")
            $("#playerSlot").empty();
            $("#optSlot1").empty();
            $("#optSlot2").empty();
            $("#classTextWarrior").html("health: " + player.health);
            styleActionBarText("You are traveling a dusty path");
            $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath1.jpg'/>");
            $("#classTextRanger").html("Class: " + " Spell Caster");
            $("#classTextSpellCaster").html("You are feeling confident");
            $("#playerBar").html("YOUR HERO - A intelligent and overconfident caster named: " + name);
            $("#playerSlot").append("<img style='width:100%; height:100%' src='assets/images/caster.jpg'/>");
        }
    }
    //================================================================================================================
    //Adding a border around each slot for selecting a character only if the mouse hovers over it and a current character hasnt been chosen
    //================================================================================================================
    
    $("#playerSlot").mouseover(function() {
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false){
        $("#playerSlot").css("border", "6px solid white")
        }
    });
    $("#playerSlot").mouseout(function() {
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false){
        $("#playerSlot").css("border", "")
        }
    });
    //=======================================================
    $("#optSlot1").mouseover(function() {
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false){
        $("#optSlot1").css("border", "6px solid white")
        }
    });
    $("#optSlot1").mouseout(function() {
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false){
        $("#optSlot1").css("border", "")
        }
    });
    //=======================================================
    $("#optSlot2").mouseover(function() {
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false){
        $("#optSlot2").css("border", "6px solid white")
        }
    });
    $("#optSlot2").mouseout(function() {
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false){
        $("#optSlot2").css("border", "")
        }
    });
    //================================================================================================================
    //adding border around an area you are traveling
    //================================================================================================================
    $("#enemySlot").mouseover(function() {
        if(traveling === true){
        $("#enemySlot").css("border", "4px solid green")
        }else{
            $("#enemySlot").css("border", "4px solid red")
        }
    });
    $("#enemySlot").mouseout(function() {
        $("#enemySlot").css("border", "")
    });
    //======================================================================================================================================
    //Set the player that you have chosen ------ if a class has been selected already the code in the click handler functions will never run
    //======================================================================================================================================         
    $("#imgOptSlot1").on("click", function(){
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false)
        {
            sOptSlot1 = true;
            setClass();
        }
    });
    $("#imgOptSlot2").on("click", function(){
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false)
        {
            sOptSlot2 = true;
            setClass();
        }
    });
    $("#imgPlayerSlot").on("click", function(){
        if(sOptSlot1 === false && sOptSlot2 === false && sPlayerSlot === false)
        {
            sPlayerSlot = true;
            setClass();
        }
    });
    //======================================================================================================================================
    $("#enemySlot").on("click", function(){
        ////Code thats ran only if you are traveling and not currently in combat
        if(traveling == true && doneTyping == true)
        {
            chance = Math.floor(Math.random() * 21);
            console.log(chance);
            //chance to run into enemy or not
            if(enemiesDefeated < 10){
                if(chance < 5 && chance >= 0){
                    setEnemyStats(0);
                    $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/highwayman.png'/>");
                    styleActionBarText("You have ran into a highwayman what do you want do")
                }
                else if(chance <= 10 && chance >= 5 ){
                    setEnemyStats(1);
                    $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/mudCrab.jpg'/>");
                    styleActionBarText("You have ran into a Mud Crab what do you want do")
                }else if(chance <= 15 && chance >= 11 ){
                    setEnemyStats(2);
                    $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/forsworn.jpg'/>");
                    styleActionBarText("You have ran into a Forsworn what do you want do")
                }    
                else{
                    nextPath = Math.floor(Math.random() * 2);
                    if(nextPath == 0)$("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath1.jpg'/>");
                    if(nextPath == 1)$("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath2.jpg'/>");
                    if(nextPath == 2)$("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath3.jpg'/>");
                    styleActionBarText("You followed the path and found nothing, continue on");
                    console.log(nextPath);
                }
            }else{
                fighting = true;
                traveling = false;
                setEnemyStats(3);
                $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dragon.jpg'/>");
                styleActionBarText("You have ran into the final boss the mighty frost drake!!!!!!")
            }
            ////Code thats ran only if you are in combat
            console.log(enemy);
        }
    });
    //function to set enemies stats
    setEnemyStats = function(j){
        fighting = true;
        traveling = false;
        $("#attackBar").append("<button id='chicken' type='button' class='btn btn-secondary' style='margin-left:6px; width:110px;z-index: 1' value=attack>Attack</button>")
        $("#attackBar").append("<button type='button' class='btn btn-secondary' style='margin-left:6px; width:110px;z-index: 1' value=shootBow>Shoot bow</button>")
        $("#attackBar").append("<button type='button' class='btn btn-secondary' style='margin-left:6px; width:110px;z-index: 1' value=castShout>Cast Shout</button>")
        $("#attackBar").append("<button type='button' class='btn btn-secondary' style='margin-left:6px; width:110px;z-index: 1' value=castSpell>Cast Spell</button>")
        $("#attackBar").append("<button type='button' class='btn btn-secondary' style='margin-left:6px; width:110px;z-index: 1' value=compliment>Compliment</button>")
        $("#enemyStatsBar").append(enemyFighting.name + " health remaining " + enemyFighting.health);
        enemyFighting.health = enemies[j].health;
        enemyFighting.defense = enemies[j].defense;
        enemyFighting.name = enemies[j].name;
        enemyFighting.weapon = enemies[j].weapon;
        enemyFighting.attack = enemies[j].attack;
        updateStats();
    };
    //execute attacks based on buttons you clicked
    //==============================================
    $('#attackBar').on('click', 'button', function(){
        value = $(this).attr("value");
        if (value == 'attack'){
            if(doneTyping == true && enemiesTurn == false && playerDead == false){
                attackFun();
                enemiesTurn = true;
                console.log(enemyFighting);
                console.log(enemies);


            }
            updateStats();
        }
        if (value == 'shootBow'){
            if(doneTyping == true && enemiesTurn == false && playerDead == false){
                shootBowFun();
                enemiesTurn = true;


            }
            updateStats();
        }
        if (value == 'castShout'){
            if(doneTyping == true && enemiesTurn == false && playerDead == false){
                castShoutFun();
                enemiesTurn = true;


            }
            updateStats();
        }
        if (value == 'castSpell'){
            if(doneTyping == true && enemiesTurn == false && playerDead == false){
                castSpellFun();
                enemiesTurn = true;


            }
            updateStats();
        }
        if (value == 'compliment'){
            if(doneTyping == true && enemiesTurn == false && playerDead == false){
                complimentFun();
                enemiesTurn = true;

            }
            updateStats();
        }
    });
    //attack functions
    //===============================================
    attackFun = function(){
        damageDealt = (player.meleeDmg * 3) + Math.floor(Math.random() * 5);
        enemyFighting.health = enemyFighting.health - Math.floor((damageDealt * enemyFighting.defense));
        styleActionBarText("You attacked " + enemyFighting.name + " with your mighty sword dealing " + Math.floor((damageDealt * enemyFighting.defense)) + " damage");
        enemiesAttack();

    }
    shootBowFun = function(){
        damageDealt = (player.rangedDmg * 3) + Math.floor(Math.random() * 5);
        enemyFighting.health = enemyFighting.health - Math.floor((damageDealt * enemyFighting.defense));
        styleActionBarText("You attacked " + enemyFighting.name + " with a swift shot from your bow dealing " + Math.floor((damageDealt * enemyFighting.defense)) + " damage");
        enemiesAttack();

    }
    castShoutFun = function(){
        damageDealt = (player.shoutDmg * 3) + Math.floor(Math.random() * 5);
        enemyFighting.health = enemyFighting.health - Math.floor((damageDealt * enemyFighting.defense));
        styleActionBarText("You attacked " + enemyFighting.name + " with a hearty Fus Ro Dah dealing " + Math.floor((damageDealt * enemyFighting.defense)) + " damage");
        enemiesAttack();

    }
    castSpellFun = function(){
        damageDealt = (player.spellDmg * 3) + Math.floor(Math.random() * 5);
        enemyFighting.health = enemyFighting.health - Math.floor((damageDealt * enemyFighting.defense));
        styleActionBarText("You attacked " + enemyFighting.name + " with a really hot fireball spell dealing " + Math.floor((damageDealt * enemyFighting.defense)) + " damage");
        enemiesAttack();

    }
    complimentFun = function(){
        randomCompliment = Math.floor(Math.random()*4);
        defenseRemoved = .8;
        enemyFighting.defense = enemyFighting.defense + defenseRemoved;
        styleActionBarText("You told " + enemyFighting.name + " that they have " + player.compliments[randomCompliment] + " - they are confused and their defense has dropped");
        enemiesAttack();
    }
    //Update Stats function - Updates all the stats after each turn
    updateStats = function(){
        if(player.health <= 0){
            player.health = 0;
        }
        if(enemyFighting.health <= 0){
            enemyFighting.health = 0;
        }
        $("#classTextWarrior").html("health: " + player.health);
        $("#classTextRanger").html("Status: " + "alive");
        $("#classTextSpellCaster").html("You are feeling confident");
        $("#enemyStatsBar").html(enemyFighting.name + " health Remaining: " + enemyFighting.health);
    }
    //this is the code for the enemies turn on attacking
    function enemiesAttack() {        
        setTimeout(function() {
            if(enemyFighting.health > 0){
                damageDealt = enemyFighting.attack + Math.floor(Math.random() * 5);
                player.health = player.health - damageDealt;
                styleActionBarText(enemyFighting.name + " attacked you with their " + enemyFighting.weapon + " dealing " + damageDealt + " damage");
                enemiesTurn = false;
                updateStats();
            };
            setTimeout(function() {
                whoDied();    
            }, 2000);
        }, 4500);
    }
    //this function checks if you died or the enemy died
    function whoDied(){
        if (player.health <= 0){
            player.health = 0;
            playerDead = true;
            styleActionBarText("You have fallen in battle against " + enemyFighting.name + " how unfortunate -- Game Resetting Soon");
            setTimeout(function(){
                location.reload();
            }, 6000);
        }
        if (enemyFighting.health <= 0){
            if(enemyFighting.name == "Mighty Frost Drake"){
                styleActionBarText("You have defeated the mighty " + enemyFighting.name + " congrats you beat the game -- restarting game ");
                setTimeout(function(){
                    location.reload();
                }, 8000);
            }else{
                styleActionBarText("You have defeated the not so mighty " + enemyFighting.name + " you've gained 30 health, good work! -- Returning to path...");
                setTimeout(function(){
                    player.health += 30;
                    enemiesDefeated += 1;
                    fighting = false;
                    traveling = true;
                    enemiesTurn = false;
                    $("#enemyStatsBar").html("");
                    $("#attackBar").html("");
                    $("#enemySlot").html("<img id='imgtEnemySlot' style='width:100%; height:100%' src='assets/images/dustyPath1.jpg'/>");
                    styleActionBarText("You are traveling a dusty path");
                    updateStats();
                }, 4200);
            };
        }
    }
    //style the action bar to display text at a certain speed, makes text less abrupt and draws attention to your action
    //==============================================
    function actionBarSetTimeout(char,addedTime) {        
        setTimeout(function() {
            $("#actionBar").append(char);
            textInside = $("#actionBar").html();
            if (textInside == textToProcess){doneTyping = true;}
        }, addedTime);
    }
    //===============================================
    let styleActionBarText = function(text){
        addedTime = 0;
        textToProcess = text;
        doneTyping = false;
        $("#actionBar").html("");
        for(i = 0; i < textToProcess.length; i++){
            addedTime += 28;
            actionBarSetTimeout(textToProcess[i],addedTime);
        }
        
        
    }
});



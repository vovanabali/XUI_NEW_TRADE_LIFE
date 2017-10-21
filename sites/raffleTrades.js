var serchSkis = "★ ST Karambit | Slaughter (Minimal Wear),★ Specialist Gloves | Crimson Kimono (Battle-Scarred),P90 | Emerald Dragon (Factory New),★ ST Flip Knife | Damascus Steel (Field-Tested),★ Sport Gloves | Superconductor (Battle-Scarred),★ ST Karambit,★ StatTrak™ Flip Knife,★ Huntsman Knife | Crimson Web (Battle-Scarred),★ Huntsman Knife | Stained (Battle-Scarred),★ Butterfly Knife | Fade (Factory New),★ Driver Gloves | Diamondback (Battle-Scarred),★ ST Bayonet | Tiger Tooth (Factory New),AK-47 | Hydroponic (Minimal Wear),★ Karambit | Forest DDPAT (Minimal Wear),★ Bowie Knife | Crimson Web (Battle-Scarred),★ Shadow Daggers | Night (Battle-Scarred),★ Bayonet | Rust Coat (Well-Worn),★ Butterfly Knife | Rust Coat (Battle-Scarred),★ Bayonet | Lore (Field-Tested),★ M9 Bayonet | Rust Coat (Well-Worn),★ Bowie Knife | Urban Masked (Minimal Wear),★ Gut Knife | Slaughter (Minimal Wear),★ Falchion Knife | Scorched (Well-Worn),★ M9 Bayonet | Night (Field-Tested),★ Bloodhound Gloves | Charred (Well-Worn),AWP | Lightning Strike (Factory New),★ Gut Knife | Freehand (Field-Tested),★ Falchion Knife | Scorched (Battle-Scarred),★ Bayonet | Night (Field-Tested),★ Falchion Knife | Damascus Steel (Minimal Wear),★ Bloodhound Gloves | Snakebite (Well-Worn),★ Gut Knife | Black Laminate (Field-Tested),★ Butterfly Knife";

var timer;
var isReload = true;
raffle();
function raffle() {
    setTimeout(function () {
        serchSkin();
    }, 100);

    console.log("Check");
    /*timer = setInterval(function (){
     if(allSkins().length != 0){
     serchSkin();
     console.log("Check");
     }
     }, 500);*/
}

//Load all skins
function allSkins() {
    return document.getElementsByClassName("box siteInventory")[0].getElementsByClassName("inventoryItem");
}

function serchSkin() {
    console.log("serchSkin");
    var itemsBots = allSkins();
    var serchSkinsMas = serchSkis.split(",");
    for (var i = 0; i < itemsBots.length; i++) {
        var marcetNameStr = marcetName(itemsBots[i]);
        for (var j = 0; j < serchSkinsMas.length; j++) {
            if (marcetNameStr == serchSkinsMas[j]) {
                console.log("Klick");
                itemsBots[i].click();
                document.getElementsByClassName("trade-button")[0].click();
                isReload = false;
                clearInterval(timer);
                break;
            }
        }
        if (!isReload) {
            break;
        }
    }
    console.log("End serchSkin");
    if (isReload) {
        console.log("RELOAD");
        document.getElementsByClassName("box siteInventory")[0].getElementsByClassName("refresh")[0].click();
        setTimeout(function () {
            raffle();
        }, 3000);
    }
}

function marcetName(item) {
    var tempMarcetName = "";
    var allNames = item.getElementsByClassName("inventoryItemFooter")[0].getElementsByTagName("span");
    for (var i = 0; i < allNames.length; i++) {
        if (i != allNames.length - 1)
            tempMarcetName += allNames[i].innerText + " | ";
        else
            tempMarcetName += allNames[i].innerText;
    }
    var cuality;
    if (item.getElementsByClassName("inventoryItemHeader")[0].getElementsByTagName("span").length !== 0) {
        cuality = item.getElementsByClassName("inventoryItemHeader")[0].getElementsByTagName("span")[0].innerText;
    }
    tempMarcetName += " " + getCurrectCuality(cuality);
    return tempMarcetName;
}

function getCurrectCuality(ex) {
    var currentName = "";
    switch (ex) {
        case "FN":
            currentName = "(Factory New)";
            break;
        case "MW":
            currentName = "(Minimal Wear)";
            break;
        case "FT":
            currentName = "(Field-Tested)";
            break;
        case "WW":
            currentName = "(Well-Worn)";
            break;
        case "BS":
            currentName = "(Battle-Scarred)";
            break;
    }
    return currentName;
}
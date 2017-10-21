//Предметы для TSF
var tradeskinsfastITEMS = "StatTrak™ AK-47 | Vulcan (Factory New),★ Butterfly Knife | Fade (Factory New),★ Bayonet | Autotronic (Minimal Wear),★ Karambit | Case Hardened (Field-Tested),★ M9 Bayonet | Freehand (Factory New),★ M9 Bayonet | Black Laminate (Minimal Wear),StatTrak™ AWP | Hyper Beast (Factory New),★ M9 Bayonet | Black Laminate (Field-Tested),★ Bayonet | Lore (Battle-Scarred),★ StatTrak™ Karambit | Rust Coat (Battle-Scarred),★ Karambit | Ultraviolet (Field-Tested),★ M9 Bayonet | Crimson Web (Field-Tested),★ Butterfly Knife | Damascus Steel (Field-Tested),★ Flip Knife | Tiger Tooth (Factory New),★ Butterfly Knife,★ Butterfly Knife | Blue Steel (Minimal Wear),★ Bayonet,★ Bayonet | Case Hardened (Well-Worn),★ Bayonet | Blue Steel (Minimal Wear),★ M9 Bayonet | Stained (Battle-Scarred),★ Bowie Knife | Damascus Steel (Field-Tested),★ M9 Bayonet | Boreal Forest (Field-Tested),★ Bowie Knife | Blue Steel (Battle-Scarred),★ Bayonet | Stained (Field-Tested),StatTrak™ AK-47 | Neon Revolution (Minimal Wear),★ M9 Bayonet | Forest DDPAT (Field-Tested),★ Bayonet | Rust Coat (Battle-Scarred),★ Butterfly Knife | Forest DDPAT (Field-Tested),★ Butterfly Knife | Urban Masked (Field-Tested),★ Bowie Knife | Stained (Minimal Wear),★ Flip Knife | Case Hardened (Battle-Scarred),★ Bayonet | Ultraviolet (Field-Tested),★ Huntsman Knife | Blue Steel (Field-Tested),Desert Eagle | Blaze (Factory New),★ Flip Knife | Ultraviolet (Field-Tested),★ Huntsman Knife | Blue Steel (Battle-Scarred),★ Shadow Daggers,StatTrak™ USP-S | Kill Confirmed (Well-Worn),AK-47 | Hydroponic (Minimal Wear),★ Falchion Knife | Ultraviolet (Field-Tested),★ Huntsman Knife | Stained (Well-Worn),StatTrak™ M4A4 | Hellfire (Factory New),★ Bowie Knife | Boreal Forest (Field-Tested),★ Gut Knife | Blue Steel (Minimal Wear),StatTrak™ AK-47 | Wasteland Rebel (Field-Tested),★ Shadow Daggers | Stained (Minimal Wear),StatTrak™ AK-47 | Neon Revolution (Field-Tested),StatTrak™ AWP | Redline (Minimal Wear),★ Shadow Daggers | Urban Masked (Well-Worn),★ Gut Knife | Stained (Battle-Scarred),AK-47 | Bloodsport (Factory New),★ Shadow Daggers | Night (Battle-Scarred),★ Shadow Daggers | Stained (Well-Worn),★ Shadow Daggers | Scorched (Battle-Scarred),StatTrak™ M4A1-S | Cyrex (Factory New)";
var filterMin = 50;
var filtefMax = 371;

var loadAllItemsBots;
var reloadInterval;

tradeskinsfast();

function tradeskinsfast() {
    //tradeskinsfastInterval = setInterval(tradeskinsfastCheck,100);
    setInt = setInterval(loadAllSkins, 100);
    //reloadInterval =  setTimeout(function(){reloadInventari();},13000);
}

var startPosition = 0;
var lengthSkins = 50;
var reloadSite = true;
var isFirst = true;

function loadAllSkins() {
    loadAllItemsBots = document.getElementById("botinventory");
    if (loadAllItemsBots.childNodes.length > 1) {
        if (isFirst) {
            botitems.FilterByPrice(filterMin, filtefMax);
            isFirst = false;
        }

        loadAllItemsBots.scrollTop = loadAllItemsBots.scrollHeight;
        price = loadAllItemsBots.childNodes[loadAllItemsBots.childNodes.length - 1].getElementsByClassName("price")[0].innerHTML.split("$")[1] * 1;
        lengthSkins = loadAllItemsBots.childNodes.length;

        //startPosition = loadAllItemsBots.childNodes.length;
        //console.log(price)
        var ok = price - filterMin;
        if (price < filterMin + 10) {
            //alert(price+"   "+ok);
            //setTimeout(function(){reloadInventari();},2000);
            console.log(loadAllItemsBots.childNodes.length);
            clearInterval(setInt);
            startPosition = 0;
            tradeskinsfastCheck();

        }
    }
    //console.log(loadAllItemsBots.childNodes.length);
}

function tradeskinsfastCheck() {
    price = loadAllItemsBots.childNodes[loadAllItemsBots.childNodes.length - 1].getElementsByClassName("price")[0].innerHTML.split("$")[1] * 1;
    console.time('test');
    var items = loadAllItemsBots.getElementsByClassName("item");
    var itemsCheckTSF = tradeskinsfastITEMS.split(",");
    for (var i = 0; i < lengthSkins; i++) {
        for (var j = 0; j < itemsCheckTSF.length; j++) {
            var price = items[i].getElementsByClassName("price")[0].innerText.split("$")[1] * 1;
            var name = items[i].getElementsByClassName("pic")[0].childNodes[0].getAttribute("alt");
            var priceItem = document.getElementById("userbalance").innerHTML * 1;
            //alert(priceItem); && price<priceItem
            if (itemsCheckTSF[j] == name) {
                clearInterval(setInt);
                clearInterval(reloadInterval);
                console.log("Цена = " + price + " Баланс = " + priceItem);
                pickItemTSF(items[i]);
                reloadSite = false;
                break;
            }
        }
    }
    if (reloadSite) {
        //setTimeout(reloadInventari(),11000);
    }
    console.log("Инвентарь проверен");
    console.timeEnd('test');
}


function pickItemTSF(item) {
    //confirmINT = setInterval(checkConfirm,100);
    item.click();
    var tradeButton = document.getElementById("tradebtn");
    tradeButton.click();
    console.log("click");
}

function reloadInventari() {
    isFirst = true;
    tradeskinsfast();
    document.getElementById("botrefresh").click();
    isFirst = true;
    tradeskinsfast();
}
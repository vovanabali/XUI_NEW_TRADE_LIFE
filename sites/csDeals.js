//Предметы для TSF
var csDealsITEMS = "★ Gut Knife | Blue Steel (Well-Worn)";
var filterMin = 50;
var filtefMax = 371;

var loadAllItemsBots;
var reloadInterval;
var setInt;
var price;

setTimeout(csDeals,1000);

function csDeals() {
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
    console.log(loadAllItemsBots.childNodes.length);
    if (loadAllItemsBots.childNodes.length > 5) {
        if (isFirst) {
            botitems.FilterByPrice(filterMin, filtefMax);
            isFirst = false;
        }
        loadAllItemsBots.scrollTop = loadAllItemsBots.scrollHeight;
        price = document.getElementById("botinventory").getElementsByClassName("item")[document.getElementById("botinventory").childNodes.length-5].getElementsByClassName("price")[0].innerHTML.split("$")[0] * 1;
        lengthSkins = loadAllItemsBots.childNodes.length;
        console.log(price);
        //startPosition = loadAllItemsBots.childNodes.length;
        //console.log(price)
        var ok = price - filterMin;
        console.log(ok);
        if (ok < 20 && ok >-1 ) {
            console.log("Пропускаем дальше");
            //alert(price+"   "+ok);
            //setTimeout(function(){reloadInventari();},2000);
            console.log(loadAllItemsBots.childNodes.length);
            clearInterval(setInt);
            startPosition = 0;
            csDealsCheck();

        }
    }
    //console.log(loadAllItemsBots.childNodes.length);
}

function csDealsCheck() {
    price = loadAllItemsBots.childNodes[loadAllItemsBots.childNodes.length - 1].getElementsByClassName("price")[0].innerHTML.split("$")[1] * 1;
    console.time('test');
    var items = loadAllItemsBots.getElementsByClassName("item");
    var itemsCheckTSF = csDealsITEMS.split(",");
    for (var i = 0; i < lengthSkins; i++) {
        for (var j = 0; j < itemsCheckTSF.length; j++) {
            var price = items[i].getElementsByClassName("price")[0].innerText.split("$")[0] * 1;
            var name = items[i].getElementsByClassName("pic")[0].childNodes[0].getAttribute("alt");
            var priceItem = document.getElementById("userbalance").innerHTML * 1;
            //alert(priceItem); && price<priceItem
            if (itemsCheckTSF[j] === name) {
                console.log("PICKKKK");
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
    csDeals();
    document.getElementById("botrefresh").click();
    isFirst = true;
    csDeals();
}
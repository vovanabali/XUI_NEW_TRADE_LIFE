var serhtItem = "★ Karambit | Autotronic (Field-Tested),★ M9 Bayonet | Lore (Field-Tested),★ Bowie Knife | Damascus Steel (Factory New),StatTrak™ AWP | Oni Taiji (Factory New),StatTrak™ AK-47 | The Empress (Minimal Wear),★ StatTrak™ Butterfly Knife | Slaughter (Minimal Wear),★ StatTrak™ Karambit | Freehand (Field-Tested),★ Karambit | Freehand (Factory New),StatTrak™ AK-47 | Fire Serpent (Battle-Scarred),★ Butterfly Knife | Damascus Steel (Factory New),★ StatTrak™ Karambit | Stained (Field-Tested),★ StatTrak™ Butterfly Knife | Crimson Web (Well-Worn),★ Karambit | Lore (Battle-Scarred)";

var idInterval1 = 0;
var idInterval2 = 0;
var ref = true;
var setInt;
var countClickNew = 0;
alert("ХУЙ");
var nick = document.getElementsByClassName("profile__name")[0].innerHTML;
var header = document.getElementsByClassName("header__panel")[0];
header.innerHTML += "<div class='onoffswitch'><input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='myonoffswitch' checked onchange='work(this.checked)'><label class='onoffswitch-label' for='myonoffswitch'><span class='onoffswitch-inner'></span><span class='onoffswitch-switch'></span></label></div>";
if (nick.indexOf("cs.money") < 0) {
    alert("Отсутствует ник");
}
idInterval1 = setInterval(al, 2000);
//idInterval2 = setInterval(refresh, 4500);
var serchItems = serhtItem.split(',');
function al() {
    //Если инвентарь прогрузился
    if (document.getElementById('inventory_user').childNodes.length > 0) {
        if (countClickNew == 0) {
            document.getElementById("bot-sort-list").getElementsByTagName("li")[4].getElementsByTagName("a")[0].click();
            countClickNew++;
            console.log("Новые айтемы");
        }
        //Поиск всех итемов
        var items = document.getElementById('inventory_bot').childNodes;

        //alert(items.length);

        for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < serchItems.length; j++) {
                //Если тем совподает с одним из необходимых
                var overPayFloat;
                if (items[i].getAttribute("ar") != undefined) {
                    overPayFloat = 1;
                } else {
                    overPayFloat = 0
                }

                if (items[i].getAttribute('hash') == serchItems[j] && overPayFloat != 1) {
                    var id = items[i].getAttribute('id');
                    var cost = items[i].getAttribute('cost');
                    clearInterval(idInterval1);
                    clearInterval(idInterval2);
                    pickItem(id);
                    ref = false;
                }
            }
        }
        /*var name = items[items.length-2].getAttribute('hash');
         var cost = items[items.length-2].getAttribute('cost');
         console.log("Проверены все предметы последний предмет: name = "+name+"| |Стоит = "+cost);*/
        //if(ref)refresh();
    }
}

//Проверка автоподбора
function checkAut(idItem) {
    document.getElementById("myonoffswitch").checked = false;
    var count = idItem.split('|').length;
    if (idItem.split('|').length > 1) {
        var temp = idItem.split('|')[0]
        idItem = temp;
    }
    ;
    var isThisItem = 'Нет';
    var itemsToTrade = document.getElementById('offer_inventory_bot').childNodes;
    for (var i = 0; i < itemsToTrade.length; i++) {
        if (itemsToTrade[i].getAttribute('id') == idItem) {
            isThisItem = 'Да';
            break;
        }
        ;
    }
    ;

    var nameItem = document.getElementById(idItem).getAttribute('hash');
    var costItem = document.getElementById(idItem).getAttribute('cost');

    var costIm = document.getElementById('currency_user').innerHTML;
    var costOwerPay = costIm - costItem;

    var overPayFloat;
    var item = document.getElementById(idItem);
    if (item.getAttribute("ar") == 1) {
        overPayFloat = "1";
    } else {
        overPayFloat = "0"
    }

    var nameWindow = "CheckItem+" + nameItem + "+" + costItem + "+" + costOwerPay + "+" + overPayFloat;
    //setTimeout(function(){window.open("http://tryskins.ru/site/skin-search",nameWindow)},1) ;

    //setTimeout(function(){ steamWindow = window.open("http://steamcommunity.com/profiles/76561198086632933/tradeoffers/",'SteamTradeOffers',"location,width=10,height=10,top=0");},1);

    var responseStr = isThisItem + ' , стоит: ' + costItem + '$ Переплата: ' + costOwerPay.toFixed(3) + '$' + ' Кол-во: ' + count;

    var responseDiv = document.getElementById('trade-popup');
    responseDiv.getElementsByClassName('modal__title')[0].innerHTML = responseStr;
    responseDiv.getElementsByClassName('modal__subtitle')[0].innerHTML = nameItem;
    //setTimeout(function(){steamWindow.close();},25000);
}

//Выполняеться если скин найден
function pickItem(idItem) {

    document.getElementById(idItem).click();
    document.getElementById("price-input-min").value = 0;
    //document.getElementById('auto_select').click();
    document.getElementById('trade-btn').click();
    checkAut(idItem);
    //setTimeout(refresh,10000);
}

//Выполнить после того как забрал скин
function refresh() {
    //document.getElementsByClassName("modal__close")[0].click();
    //document.getElementById("refresh_user_inventory").click();
    document.getElementById("refresh_bot_inventory").click();
}
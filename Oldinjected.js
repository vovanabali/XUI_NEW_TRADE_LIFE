
//Список для cs.money
var serhtItem = "★ Karambit | Autotronic (Field-Tested),★ M9 Bayonet | Lore (Field-Tested),★ Bowie Knife | Damascus Steel (Factory New),StatTrak™ AWP | Oni Taiji (Factory New),StatTrak™ AK-47 | The Empress (Minimal Wear),★ StatTrak™ Butterfly Knife | Slaughter (Minimal Wear),★ StatTrak™ Karambit | Freehand (Field-Tested),★ Karambit | Freehand (Factory New),StatTrak™ AK-47 | Fire Serpent (Battle-Scarred),★ Butterfly Knife | Damascus Steel (Factory New),★ StatTrak™ Karambit | Stained (Field-Tested),★ StatTrak™ Butterfly Knife | Crimson Web (Well-Worn),★ Karambit | Lore (Battle-Scarred)";
//Предметы для raffle
var serchSkis = "★ ST Karambit | Slaughter (Minimal Wear),★ Specialist Gloves | Crimson Kimono (Battle-Scarred),P90 | Emerald Dragon (Factory New),★ ST Flip Knife | Damascus Steel (Field-Tested),★ Sport Gloves | Superconductor (Battle-Scarred),★ ST Karambit,★ StatTrak™ Flip Knife,★ Huntsman Knife | Crimson Web (Battle-Scarred),★ Huntsman Knife | Stained (Battle-Scarred),★ Butterfly Knife | Fade (Factory New),★ Driver Gloves | Diamondback (Battle-Scarred),★ ST Bayonet | Tiger Tooth (Factory New),AK-47 | Hydroponic (Minimal Wear),★ Karambit | Forest DDPAT (Minimal Wear),★ Bowie Knife | Crimson Web (Battle-Scarred),★ Shadow Daggers | Night (Battle-Scarred),★ Bayonet | Rust Coat (Well-Worn),★ Butterfly Knife | Rust Coat (Battle-Scarred),★ Bayonet | Lore (Field-Tested),★ M9 Bayonet | Rust Coat (Well-Worn),★ Bowie Knife | Urban Masked (Minimal Wear),★ Gut Knife | Slaughter (Minimal Wear),★ Falchion Knife | Scorched (Well-Worn),★ M9 Bayonet | Night (Field-Tested),★ Bloodhound Gloves | Charred (Well-Worn),AWP | Lightning Strike (Factory New),★ Gut Knife | Freehand (Field-Tested),★ Falchion Knife | Scorched (Battle-Scarred),★ Bayonet | Night (Field-Tested),★ Falchion Knife | Damascus Steel (Minimal Wear),★ Bloodhound Gloves | Snakebite (Well-Worn),★ Gut Knife | Black Laminate (Field-Tested),★ Butterfly Knife";
//Предметы для TSF
var tradeskinsfastITEMS="StatTrak™ AK-47 | Vulcan (Factory New),★ Butterfly Knife | Fade (Factory New),★ Bayonet | Autotronic (Minimal Wear),★ Karambit | Case Hardened (Field-Tested),★ M9 Bayonet | Freehand (Factory New),★ M9 Bayonet | Black Laminate (Minimal Wear),StatTrak™ AWP | Hyper Beast (Factory New),★ M9 Bayonet | Black Laminate (Field-Tested),★ Bayonet | Lore (Battle-Scarred),★ StatTrak™ Karambit | Rust Coat (Battle-Scarred),★ Karambit | Ultraviolet (Field-Tested),★ M9 Bayonet | Crimson Web (Field-Tested),★ Butterfly Knife | Damascus Steel (Field-Tested),★ Flip Knife | Tiger Tooth (Factory New),★ Butterfly Knife,★ Butterfly Knife | Blue Steel (Minimal Wear),★ Bayonet,★ Bayonet | Case Hardened (Well-Worn),★ Bayonet | Blue Steel (Minimal Wear),★ M9 Bayonet | Stained (Battle-Scarred),★ Bowie Knife | Damascus Steel (Field-Tested),★ M9 Bayonet | Boreal Forest (Field-Tested),★ Bowie Knife | Blue Steel (Battle-Scarred),★ Bayonet | Stained (Field-Tested),StatTrak™ AK-47 | Neon Revolution (Minimal Wear),★ M9 Bayonet | Forest DDPAT (Field-Tested),★ Bayonet | Rust Coat (Battle-Scarred),★ Butterfly Knife | Forest DDPAT (Field-Tested),★ Butterfly Knife | Urban Masked (Field-Tested),★ Bowie Knife | Stained (Minimal Wear),★ Flip Knife | Case Hardened (Battle-Scarred),★ Bayonet | Ultraviolet (Field-Tested),★ Huntsman Knife | Blue Steel (Field-Tested),Desert Eagle | Blaze (Factory New),★ Flip Knife | Ultraviolet (Field-Tested),★ Huntsman Knife | Blue Steel (Battle-Scarred),★ Shadow Daggers,StatTrak™ USP-S | Kill Confirmed (Well-Worn),AK-47 | Hydroponic (Minimal Wear),★ Falchion Knife | Ultraviolet (Field-Tested),★ Huntsman Knife | Stained (Well-Worn),StatTrak™ M4A4 | Hellfire (Factory New),★ Bowie Knife | Boreal Forest (Field-Tested),★ Gut Knife | Blue Steel (Minimal Wear),StatTrak™ AK-47 | Wasteland Rebel (Field-Tested),★ Shadow Daggers | Stained (Minimal Wear),StatTrak™ AK-47 | Neon Revolution (Field-Tested),StatTrak™ AWP | Redline (Minimal Wear),★ Shadow Daggers | Urban Masked (Well-Worn),★ Gut Knife | Stained (Battle-Scarred),AK-47 | Bloodsport (Factory New),★ Shadow Daggers | Night (Battle-Scarred),★ Shadow Daggers | Stained (Well-Worn),★ Shadow Daggers | Scorched (Battle-Scarred),StatTrak™ M4A1-S | Cyrex (Factory New)";
var filterMin = 50;
var filtefMax = 371;

var idInterval1 = 0;
var idInterval2 =0;

var idIntervalFromSteam = 0;

var steamWindow;

	if(location.href.indexOf("tryskins")>-1){
		if(window.name.indexOf("CheckItem")>-1){
			setTimeout(function(){soundPlay()},1);
			checkOnTrySkins();
		}
	}

	if(location.href.indexOf("raffletrades")>-1){
		console.log("Is Work");
		raffle();
	}

	if(location.href.indexOf("http://steamcommunity.com")>-1 ){
		if(window.name == "SteamTradeOffers"){
				var reLoad = true;
				var offers = document.getElementsByClassName('tradeoffer');
				if(offers.length>0){
					for (var i = 0; i < offers.length; i++) {
						var nameBot = offers[i].getElementsByClassName('tradeoffer_header')[0].innerHTML;
						var countMyItems;
						try{
							countMyItems = offers[i].childNodes[7].childNodes[7].childNodes[5].getElementsByClassName("trade_item ").length;
						}catch(err){
							countMyItems = 0
						}
						if((nameBot.indexOf("CS.MONEY")>-1) || (countMyItems==0)){
							try {
								reLoad = false;
								var offerID = offers[i].getElementsByClassName('link_overlay')[0].getAttribute("onClick").split("'")[1];
								window.open("https://steamcommunity.com/tradeoffer/"+offerID+"/",'SteamTrade',"location,width=10,height=10,top=0");
								window.close();
								break;
							} catch (err) {
								reLoad = true;
							}
						}
						else {
								reLoad = true;
						}
					}
				}
				else{
					setTimeout(function(){location.reload();},1500);
				}
				if(reLoad){
					setTimeout(function(){location.reload();},1500);
				}
		}
	}


	if(location.href.indexOf("tradeoffer")>-1 ){
		if(window.name.indexOf('SteamTrade')>-1){
			ToggleReady( true );
			try{
				document.getElementsByClassName('btn_green_white_innerfade btn_medium')[0].click();
			}catch(err){}

			ConfirmTradeOffer();
			setTimeout(function(){
				window.close();
			},1500);
		}
	}

	if(location.href.indexOf("tradeskinsfast")>=0){
		//var header = document.getElementById("mainmenu");
		//header.innerHTML += "<li><div class='onoffswitch'><input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='myonoffswitch' checked onchange='work(this.checked)'><label class='onoffswitch-label' for='myonoffswitch'><span class='onoffswitch-inner'></span><span class='onoffswitch-switch'></span></label></div></li>";
		
		
		tradeskinsfast();
	}

	if(location.href == "https://cs.money/ru") {
		var nick = document.getElementsByClassName("profile__name")[0].innerHTML;
		var header = document.getElementsByClassName("header__panel")[0];
		header.innerHTML += "<div class='onoffswitch'><input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='myonoffswitch' checked onchange='work(this.checked)'><label class='onoffswitch-label' for='myonoffswitch'><span class='onoffswitch-inner'></span><span class='onoffswitch-switch'></span></label></div>";
		if(nick.indexOf("cs.money")<0){
			alert("Отсутствует ник");
		}
		idInterval1 = setInterval(al, 2000);
		//idInterval2 = setInterval(refresh, 4500);
	}

//Выполняеться после загрузки страницы
/*function injected_main() {

}*/
var ref = true;
var setInt;
var countClickNew = 0;
function work(check) {
	if(check){
		idInterval1 = setInterval(al, 500);
		ref = true
	}else{
		clearInterval(idInterval1);
		ref = false;
	}
}

var serchItems = serhtItem.split(',');
//Поиск необходимого скина
function al(){
	//Если инвентарь прогрузился 
	if(document.getElementById('inventory_user').childNodes.length > 0){
		if(countClickNew == 0) { document.getElementById("bot-sort-list").getElementsByTagName("li")[4].getElementsByTagName("a")[0].click(); countClickNew++; console.log("Новые айтемы");}
	//Поиск всех итемов
	var items = document.getElementById('inventory_bot').childNodes;

	//alert(items.length);

	for (var i = 0; i < items.length; i++) {
		for (var j = 0; j < serchItems.length; j++) {
			//Если тем совподает с одним из необходимых
				var overPayFloat;
				if(items[i].getAttribute("ar") != undefined){
					overPayFloat = 1;
				}else{
					overPayFloat = 0
				}

			if(items[i].getAttribute('hash')==serchItems[j] && overPayFloat!=1){
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
function checkAut(idItem){
	document.getElementById("myonoffswitch").checked = false;
	var count = idItem.split('|').length;
	if(idItem.split('|').length>1){
		var temp = idItem.split('|')[0]
		idItem = temp;
	};	
	var isThisItem = 'Нет';
	var itemsToTrade = document.getElementById('offer_inventory_bot').childNodes;
	for (var i = 0; i < itemsToTrade.length; i++) {
		if(itemsToTrade[i].getAttribute('id')==idItem) {
			isThisItem = 'Да';
			break;
		};
	};

	var nameItem = document.getElementById(idItem).getAttribute('hash');
	var costItem = document.getElementById(idItem).getAttribute('cost');

	var costIm = document.getElementById('currency_user').innerHTML;
	var costOwerPay = costIm - costItem;

	var overPayFloat;
	var item = document.getElementById(idItem);
		if(item.getAttribute("ar") == 1){
			overPayFloat = "1";
		}else{
			overPayFloat = "0"
		}
		
	var nameWindow = "CheckItem+"+nameItem+"+"+costItem+"+"+costOwerPay+"+"+overPayFloat;
	//setTimeout(function(){window.open("http://tryskins.ru/site/skin-search",nameWindow)},1) ;

	//setTimeout(function(){ steamWindow = window.open("http://steamcommunity.com/profiles/76561198086632933/tradeoffers/",'SteamTradeOffers',"location,width=10,height=10,top=0");},1);

	var responseStr = isThisItem+' , стоит: '+costItem+'$ Переплата: '+costOwerPay.toFixed(3)+'$'+' Кол-во: '+ count;

	var responseDiv = document.getElementById('trade-popup');
	responseDiv.getElementsByClassName('modal__title')[0].innerHTML = responseStr;
	responseDiv.getElementsByClassName('modal__subtitle')[0].innerHTML = nameItem;
	//setTimeout(function(){steamWindow.close();},25000);
}

//Выполняеться если скин найден
function pickItem(idItem){

		document.getElementById(idItem).click();
		document.getElementById("price-input-min").value = 0;
		//document.getElementById('auto_select').click();
		document.getElementById('trade-btn').click();
		checkAut(idItem);
		//setTimeout(refresh,10000);
}

//Выполнить после того как забрал скин
function refresh(){
	//document.getElementsByClassName("modal__close")[0].click();
	//document.getElementById("refresh_user_inventory").click();
	document.getElementById("refresh_bot_inventory").click();
}

function soundPlay(){
	var src = 'https://psv4.userapi.com/c815522/u155818115/audios/45a72ad5c658.mp3?extra=Nr3E8Fhyvy2FpJ-UqywFn5oDpAMle6qVpa8mL2RlJW54qb-2Qx8tXAVvZscsuiDV3cA985iU4wa-3vAKWtbYFnxhx3Nr5idKrEKquJxOK74ZzGBYyUiRIz5dIhpcZAu1-0g0pG8iWP0hqeQ';
	var audio = new Audio(); 
	audio.src = src; 
	audio.autoplay = true; 

	//setTimeout(function(){myWin.close();},4000);
}

function checkOnTrySkins(){

	var itemName = window.name.split('+')[1];
	var countItem = window.name.split('+')[2];
	var overPay =  window.name.split('+')[3]*1;
	var floatOverPay = window.name.split('+')[4]*1;
	var luseMoney = overPay- overPay*0.97;

	document.getElementsByClassName("btn btn-success")[0].innerHTML = "Переплата = "+overPay.toFixed(2)+"$. Потеря =  "+luseMoney.toFixed(2)+"$";

	if(overPay<=10){
		document.getElementById("page-wrapper").style.backgroundColor = "green";
	}else{
		if(overPay<=30){
			document.getElementById("page-wrapper").style.backgroundColor = "yellow";
		}else{
			document.getElementById("page-wrapper").style.backgroundColor = "red";
		}
	}

	if(floatOverPay===1){
		document.getElementById("page-wrapper").style.backgroundColor = "sienna";
	}

	var input = document.getElementById('w0');
	input.value = itemName;

	document.getElementsByName('minutes')[0].value = 5000;
	document.getElementsByTagName('button')[0].click();
	//alert('Название: '+ itemName +' Стоит: '+countItem);
}
var refreshInventory;
var checkTradeConfirmInterval;

var timer;
var isReload = true;
function raffle(){
	setTimeout(function(){
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

function serchSkin(){
	console.log("serchSkin");
	var itemsBots = allSkins();
	var serchSkinsMas = serchSkis.split(",");
	for(var i =0; i<itemsBots.length;i++){
		var marcetNameStr = marcetName(itemsBots[i]);
		for(var j =0; j< serchSkinsMas.length; j++){
			if(marcetNameStr == serchSkinsMas[j]) {
				console.log("Klick");
				itemsBots[i].click();
				document.getElementsByClassName("trade-button")[0].click();
				isReload = false;
				clearInterval(timer);
				break;
			}
		}
		if(!isReload) {
			break; 
		}
	}
	console.log("End serchSkin");
	if (isReload) {
		console.log("RELOAD");
		document.getElementsByClassName("box siteInventory")[0].getElementsByClassName("refresh")[0].click();
		setTimeout(function(){
			raffle();
		}, 3000);
	}
}

function marcetName(item){
	var tempMarcetName = "";
	var allNames = item.getElementsByClassName("inventoryItemFooter")[0].getElementsByTagName("span");
	for(var i = 0; i<allNames.length;i++) {
		if (i!= allNames.length-1)
			tempMarcetName+=allNames[i].innerText+" | ";	
		else
			tempMarcetName+=allNames[i].innerText;
	}
	var cuality;
	if(item.getElementsByClassName("inventoryItemHeader")[0].getElementsByTagName("span").length !== 0) {
		cuality =item.getElementsByClassName("inventoryItemHeader")[0].getElementsByTagName("span")[0].innerText;
	}
	tempMarcetName+=" "+ getCurrectCuality(cuality);
	return tempMarcetName;
}

function getCurrectCuality(ex){
var currentName = "";
switch(ex) {
    	case "FN": currentName = "(Factory New)"; break;
		case "MW": currentName = "(Minimal Wear)"; break;
    	case "FT": currentName = "(Field-Tested)"; break;
    	case "WW": currentName = "(Well-Worn)"; break;
		case "BS": currentName = "(Battle-Scarred)"; break;		          
	}
return currentName;
}

var tradeskinsfastInterval ; 

var price;
var loadAllItemsBots;
var reloadInterval;

function tradeskinsfast(){
	//tradeskinsfastInterval = setInterval(tradeskinsfastCheck,100);
	setInt = setInterval(loadAllSkins,100);
	//reloadInterval =  setTimeout(function(){reloadInventari();},13000);
}

var startPosition = 0;
var lengthSkins = 50;
var reloadSite = true;
var isFirst = true;

function loadAllSkins(){
	loadAllItemsBots = document.getElementById("botinventory");
	if(loadAllItemsBots.childNodes.length>1){
		if(isFirst) {botitems.FilterByPrice(filterMin,filtefMax); isFirst = false;}
		var price = document.getElementById("userbalance").innerHTML*1;

		loadAllItemsBots.scrollTop = loadAllItemsBots.scrollHeight;
		price = loadAllItemsBots.childNodes[loadAllItemsBots.childNodes.length-1].getElementsByClassName("price")[0].innerHTML.split("$")[1]*1;
		lengthSkins = loadAllItemsBots.childNodes.length;
		
		//startPosition = loadAllItemsBots.childNodes.length;
		//console.log(price)
		var ok = price - filterMin;
		if(price < filterMin+10){
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

function tradeskinsfastCheck(){
	price = loadAllItemsBots.childNodes[loadAllItemsBots.childNodes.length-1].getElementsByClassName("price")[0].innerHTML.split("$")[1]*1;
	console.time('test');
	var items = loadAllItemsBots.getElementsByClassName("item");
	var itemsCheckTSF = tradeskinsfastITEMS.split(",");
	for(var i = 0; i<lengthSkins;i++){
		for(var j = 0; j<itemsCheckTSF.length;j++){
			var price = items[i].getElementsByClassName("price")[0].innerText.split("$")[1]*1;
			var name = items[i].getElementsByClassName("pic")[0].childNodes[0].getAttribute("alt");
			var priceItem = document.getElementById("userbalance").innerHTML*1;
			//alert(priceItem); && price<priceItem
			if(itemsCheckTSF[j]==name ){
				clearInterval(setInt);
				clearInterval(reloadInterval);
				console.log("Цена = "+price+" Баланс = "+priceItem);
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
var timerConfitmTSF;
var confirmINT;

function pickItemTSF(item){
	//confirmINT = setInterval(checkConfirm,100);
	item.click();
	var tradeButton = document.getElementById("tradebtn");	
	tradeButton.click();
	console.log("click");
}

/*function checkConfirm(){
	// выбираем нужный элемент
	try{
		var k = document.getElementsByClassName("notifyjs-corner");
		if(k.length>0){
			console.log("Остановленно  и успешно принято!!!");
			var messages = k[0].getElementsByClassName("notifyjs-wrapper notifyjs-hidable")[0].getElementsByClassName("notifyjs-container")[0].childNodes[0].childNodes[1].innerHTML;
			console.log(messages);
			clearInterval(confirmINT);
			if(messages == "Trade completed"){
				setTimeout(reloadInventari,3000);
			}else 
			if(messages == "You declined the offer"){
				setTimeout(reloadInventari,3000);
			}else 
			if(messages == "Не удалось отправить предложение. Ваш инвентарь будет обновлен") location.reload();
			else{
				location.reLoad();
			}
			//else location.reload();
			//location.reload();
		}
	}catch(err){
		console.log(err);
	}
}*/

function reloadInventari(){
	isFirst = true;
	tradeskinsfast();
	document.getElementById("botrefresh").click();
	isFirst = true;
	tradeskinsfast();
}
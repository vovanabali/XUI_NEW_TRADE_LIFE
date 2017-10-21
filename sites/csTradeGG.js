var itemsSerch = "";
var minPrice = 10;
var scroll = setInterval(scrollAllSkins,300);

function scrollAllSkins() {
	var nodes = document.getElementById("box-bot-inventory").childNodes.length;
	if (nodes > 10) {
		var lastItemPrice = document.getElementById("box-bot-inventory").getElementsByClassName("single-item")[document.getElementById("box-bot-inventory").getElementsByClassName("single-item").length-1].innerText.split("$")[1].split(" ")[0] * 1;
		var current = lastItemPrice - minPrice;
		if (current < 15) {
			clearInterval(scroll);
			console.log("Все скины прогружжены. Стоимость последнего = "+lastItemPrice+";");
			serchSkins();
		} else {
			var wrapper = document.getElementById("wrapper-box-bot-inventory");
			wrapper.scrollTop = wrapper.scrollHeight;
		}
	}

}

function serchSkins() {
	console.log("Поиск скина...");
	var itemsCSTRADEGG = document.getElementById("box-bot-inventory").getElementsByClassName("single-item");
	var serchItems = itemsSerch.split(",");
	for (var i = 0; i < itemsCSTRADEGG.length; i++){
	var itemOnSite = itemsCSTRADEGG[i].dataset.name;
		for(var j = 0; j<serchItems.length; j++) {
			if (itemOnSite == serchItems[i]) {
				pickItem(itemsCSTRADEGG[i]);
			}
		}
	}
	console.log("Все скины проверенны");
}


function pickItem(item) {
	item.click();
	console.log("Был выбранн скин: "+item.dataset.name);
	document.getElementById("main-trade-button").click();
}
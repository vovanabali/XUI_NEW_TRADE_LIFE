var url = location.href.split("https://")[1].split("/")[0];
switch (url) {
    case "cs.money": {
        $.get(chrome.extension.getURL('/sites/csMoney.js'),
            function (data) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.innerHTML = data;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        );
        break;
    }
    case "ru.tradeskinsfast.com": {
        $.get(chrome.extension.getURL('/sites/tradeSkinsFast.js'),
            function (data) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.innerHTML = data;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        );
        break;
    }
    case "www.raffletrades.com": {
        $.get(chrome.extension.getURL('/sites/raffleTrades.js'),
            function (data) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.innerHTML = data;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        );
        break;
    }
    case "cstrade.gg": {
        $.get(chrome.extension.getURL('/sites/csTradeGG.js'),
            function (data) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.innerHTML = data;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        );
        break;
    }
    case "ru.cs.deals": {
        $.get(chrome.extension.getURL('/sites/csDeals.js'),
            function (data) {
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.innerHTML = data;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        );
        break;
    }

}
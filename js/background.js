browser.contextMenus.create({
    id: "AEC6128A-8B07-4224-B938-C2AF6FEC2EA6",
    title: "Googleで画像を検索",
    contexts: ["image"],
    icons:{
        "16":"img/icon_16x16.png"
    }
});

browser.contextMenus.onClicked.addListener(function(info,tab) {
    if(info.menuItemId == "AEC6128A-8B07-4224-B938-C2AF6FEC2EA6"){
        var newTabParams = {
            url: "https://www.google.co.jp/searchbyimage?image_url=" + encodeURI(info.srcUrl),
            active: true
        };
    }
    var creating = browser.tabs.create(newTabParams);
}
)
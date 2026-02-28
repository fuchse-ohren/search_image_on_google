browser.contextMenus.create({
    id: "AEC6128A-8B07-4224-B938-C2AF6FEC2EA6",
    title: "GoogleLensで画像検索",
    contexts: ["image"],
    icons:{
        "16":"img/icon_16x16.png"
    }
});

browser.contextMenus.onClicked.addListener(function(info,tab) {
    if(info.menuItemId == "AEC6128A-8B07-4224-B938-C2AF6FEC2EA6"){
		console.log(info)
		console.log(tab)
        var newTabParams = {
            url: "https://lens.google.com/uploadbyurl?url=" + encodeURI(info.srcUrl),
            active: true,
            index: tab.index + 1 // Thanks for theo1996.
        };
    }
    var creating = browser.tabs.create(newTabParams);
}
)


/* 
var image = document.getElementsByTagName("img")[0];

var vcanv = document.createElement("canvas");
var context = vcanv.getContext('2d');
vcanv.width = image.naturalWidth;
vcanv.height = image.naturalHeight;

context.drawImage(image, 0, 0);

var b64 = vcanv.toDataURL("image/png");
var base64Data = b64.split(',')[1];

let boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(7);

console.log(b64)
*/
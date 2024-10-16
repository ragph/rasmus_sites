var advadsCfpQueue = [];
var advadsCfpAd = function (adID) {
    if ('undefined' == typeof advadsProCfp) { advadsCfpQueue.push(adID) } else { advadsProCfp.addElement(adID) }
};
if (typeof advadsGATracking === 'undefined') {
    window.advadsGATracking = {
        delayedAds: {},
        deferedAds: {}
    };
}

var advanced_ads_layer_settings = { "layer_class": "swiss-layer", "placements": [] };

var advanced_ads_sticky_settings = { "check_position_fixed": "", "sticky_class": "swiss-sticky", "placements": [] };

var advanced_ads_cookies = { "cookie_path": "\/", "cookie_domain": "" };
var advadsCfpInfo = { "cfpExpHours": "3", "cfpClickLimit": "3", "cfpBan": "7", "cfpPath": "\/eng", "cfpDomain": "www.swissinfo.ch" };
var swissinfoCommentLike = { "restUrl": "https:\/\/www.swissinfo.ch\/eng\/wp-json\/swissinfo-comment-likes\/v1\/comment-like" };

var winners = ["John D. won $500", "Sarah M. won $1,000", "Mike T. won $750", "Emma L. won $2,000"];
setInterval(function () {
    var winnerFeed = document.getElementById("winner-feed");
    var newWinner = winners[Math.floor(Math.random() * winners.length)];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newWinner));
    winnerFeed.insertBefore(li, winnerFeed.firstChild);
    if (winnerFeed.children.length > 5) {
        winnerFeed.removeChild(winnerFeed.lastChild);
    }
}, 5000); // Add a new winner every 5 seconds
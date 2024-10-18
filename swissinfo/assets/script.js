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

// var advanced_ads_cookies = { "cookie_path": "\/", "cookie_domain": "" };
var advadsCfpInfo = { "cfpExpHours": "3", "cfpClickLimit": "3", "cfpBan": "7", "cfpPath": "\/eng", "cfpDomain": "#" };

// var winners = ["John D. won $500", "Sarah M. won $1,000", "Mike T. won $750", "Emma L. won $2,000"];
// setInterval(function () {
//     var winnerFeed = document.getElementById("winner-feed");
//     var newWinner = winners[Math.floor(Math.random() * winners.length)];
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(newWinner));
//     winnerFeed.insertBefore(li, winnerFeed.firstChild);
//     if (winnerFeed.children.length > 5) {
//         winnerFeed.removeChild(winnerFeed.lastChild);
//     }
// }, 5000); // Add a new winner every 5 seconds


document.addEventListener('DOMContentLoaded', () => {
    let div = document.getElementById('moment1')
    // div.textContent = moment(Date.now()).subtract({days: 0, hours: 6}).format('MMM D, YYYY - hh.mm');
    div.textContent = moment(Date.now()).subtract({days: 0, hours: 6}).format('MMM D, YYYY');

    let div2 = document.getElementById('moment2')
    div2.textContent = moment(Date.now()).subtract({days: 1, hours: 5}).format('MMM D, YYYY');
    
    let div3 = document.getElementById('moment3')
    div3.textContent = moment(Date.now()).subtract({days: 2, hours: 4}).format('MMM D, YYYY');
    
    let div4 = document.getElementById('moment4')
    div4.textContent = moment(Date.now()).subtract({days: 3, hours: 3}).format('MMM D, YYYY');
    
    let div5 = document.getElementById('moment5')
    div5.textContent = moment(Date.now()).subtract({days: 4, hours: 3}).format('MMM D, YYYY');
    
    let div6 = document.getElementById('moment6')
    div6.textContent = moment(Date.now()).subtract({days: 5, hours: 3}).format('MMM D, YYYY');
});

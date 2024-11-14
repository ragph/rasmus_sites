function shareMenuTogglemetaInstance1() {
    let shareButton = document.querySelector('.metaInstance1 .share-menu-button');
    let sharePopover = document.querySelector('.metaInstance1 .share-container');
    if (sharePopover.style.display !== '') {
        sharePopover.style.display = '';
        shareButton.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', shareMenuClickOutHandlermetaInstance1, false);
    } else {
        sharePopover.style.display = 'none';
        shareButton.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', shareMenuClickOutHandlermetaInstance1, false);
    }
}

function shareMenuClickOutHandlermetaInstance1() {
    let shareButton = document.querySelector('.metaInstance1 .share-menu-button');
    let sharePopover = document.querySelector('.metaInstance1 .share-container');
    if (event.target !== sharePopover && !sharePopover.contains(event.target)
        && event.target !== shareButton && !shareButton.contains(event.target)) {
        sharePopover.style.display = 'none';
        shareButton.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', shareMenuClickOutHandlermetaInstance1, false);
    }
}


// sticky navbar
function getAbsoluteHeight(el) {
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}
var isMobile = __tnt.client.platform.android || __tnt.client.platform.iphone || __tnt.client.platform.ios;

!function (t, i, n) { var e, a, s, o, c, d = { init: function () { a = i.getElementById("site-navbar-container"), isMobile ? a.classList.add("affix-sticky") : (e = i.getElementById("main-body-container"), s = getAbsoluteHeight(a), o = !1, c = 0, t.addEventListener("scroll", d.navPosition, !1), t.addEventListener("mousewheel", d.navPosition, !1)) }, navPosition: function () { o || (o = !0, setTimeout(function () { var n = a.getBoundingClientRect(), d = t.pageYOffset || i.documentElement.scrollTop, f = n.top + d; d >= f && d > c ? a.classList.contains("affix") || (c = f, a.classList.add("affix"), a.classList.remove("affix-top"), e.style.marginTop = s + "px") : a.classList.contains("affix-top") || (a.classList.remove("affix"), a.classList.add("affix-top"), e.style.marginTop = "0px"), o = !1 }, 25)) } }; "loading" == i.readyState ? i.addEventListener("DOMContentLoaded", d.init, !1) : d.init() }(window, document, __tnt);
document.addEventListener('DOMContentLoaded', function () {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
        Array.from(document.querySelectorAll('[data-toggle="offcanvas"]')).forEach(function (drawer) {
            drawer.addEventListener("mouseover", function (e) {
                var drawerCls = drawer.dataset.target === 'left' ? 'active-left' : 'active-right';
                document.documentElement.classList.add('drawer-open', drawerCls);
            })
        })
    }
});

// Search Toggle
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('site-search-header'),
        query_input = document.getElementById('site-search-2841699-term'),
        is_open = false;
    let searchToggle = document.getElementById("search-toggle-2841699");
    let searchCancel = document.getElementById("search-cancel-2841699");
    let searchDiv = document.getElementById("site-search-form-2841699");
    let controlsDiv = document.getElementById("user-controls-2841699");
    searchToggle.addEventListener('click', function () {
        controlsDiv.style.display = "none";
        searchDiv.style.display = "flex";
        query_input.focus();
        is_open = true;
    });
    searchCancel.addEventListener('click', function () {
        searchDiv.style.display = "none";
        controlsDiv.style.display = "flex";
        is_open = false;
    });
});

// Sidebar
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.mobile-menu-close').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        document.documentElement.classList.remove('drawer-open', 'active-left', 'active-right');
    })
});

// winners
// var winners = ["John D. won $500", "Sarah M. won $1,000", "Mike T. won $750", "Emma L. won $2,000"];
// setInterval(function () {
//   var winnerFeed = document.getElementById("winner-feed");
//   var newWinner = winners[Math.floor(Math.random() * winners.length)];
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(newWinner));
//   winnerFeed.insertBefore(li, winnerFeed.firstChild);
//   if (winnerFeed.children.length > 5) {
//     winnerFeed.removeChild(winnerFeed.lastChild);
//   }
// }, 5000); // Add a new winner every 5 seconds

// // Simulated current players count
// setInterval(function () {
//   var currentPlayers = document.getElementById("current-players");
//   var players = parseInt(currentPlayers.innerHTML.replace(/,/g, ''));
//   var increase = Math.floor(Math.random() * 100) + 50; // Random increase between 50 and 149
//   players += increase;
//   currentPlayers.innerHTML = players.toLocaleString(); // Adds commas for thousands
// }, 5000); // Update every 5 seconds


// date
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(today);
    // console.log(formattedDate); // Outputs: Oct 30, 2024
    document.getElementById('dateToday1').innerText = formattedDate;
    document.getElementById('dateToday2').innerText = formattedDate;
});

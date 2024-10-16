var advadsCfpQueue = [];
    var advadsCfpAd = function( adID ){
    if ( 'undefined' == typeof advadsProCfp ) { advadsCfpQueue.push( adID ) } else { advadsProCfp.addElement( adID ) }
};
if ( typeof advadsGATracking === 'undefined' ) {
    window.advadsGATracking = {
        delayedAds: {},
        deferedAds: {}
    };
}
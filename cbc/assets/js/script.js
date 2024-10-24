
document.addEventListener('DOMContentLoaded', () => {
        let div = document.getElementById('moment1')
        div.textContent = moment(Date.now()).subtract({days: 0, hours: 6}).format('MMM D, YYYY hh:mm A') + ' EDT | Last Updated: ' + moment(Date.now()).subtract({days: 1, hours: 6}).format('MMM D, YYYY');
});
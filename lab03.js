document.getElementById('kginput').addEventListener('input', function(e) {
    let pounds = e.target.value;
    document.getElementById('poundsoutput').innerHTML = pounds / 2.2046;
    document.getElementById('kilosoutput').innerHTML = pounds;
});
document.getElementById('kmsinput').addEventListener('input', function(a) {
    let miles = a.target.value;
    document.getElementById('milesoutput').innerHTML = miles * 0.62137;
    document.getElementById('kilometeresoutput').innerHTML = miles;
});
document.getElementById('faranheitinput').addEventListener('input', function(u) {
    let celsius = u.target.value;
    document.getElementById('celsiusoutput').innerHTML = (((celsius - 32) * 5) / 9);
    document.getElementById('faranheitoutput').innerHTML = celsius;
});

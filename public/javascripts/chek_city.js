


$("#cityFrom").change(function() {
    var ob = document.getElementById('cityFrom');
    chek(ob);
});

$("#cityTo").change(function() {
    var ob = document.getElementById('cityTo');
    chek(ob);
});


function chek(ob) {
    var request = new XMLHttpRequest();
    request.open('GET', 'chekCity?text='+ob.value, true);
    request.send();
    request.onreadystatechange = function (response) {
        if ( request.responseText == "null"){
            alert('Такого города нет!');
            ob.value = "";
        }
    }
}
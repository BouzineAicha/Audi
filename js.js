
var myRequest = new XMLHttpRequest();
myRequest.open('GET', './json.json');
myRequest.onload = function () {
    var ourData = JSON.parse(myRequest.responseText);
    console.log(ourData);
    var table = '';
    $.each(ourData, function (key, value){
        table += '<tr scope="row">',
        table += '<td>' + value.ID, +'</td>'
        table += '<td>' + value.Désignation,+'</td>'
        table += '<td>' + value.LePrix,+'</td>'
        table += '<td>' + value.Catégorie,+'</td>'
        table += '<td>' + value.Disponibilité,+'</td>'
        table += `<td><li>${ value.Fournisseur.aderess}</li><li>${value.Fournisseur.social} </li></td>`
        table += '</tr>'
    })
        $('#tableay').append(table)
}
myRequest.send();
// var inp = document.getElementById("inp");
// inp.addEventListener("keyup", function(){
//     console.log(inp.value);
//     var totn_string = 'TechOnTheNet';

// })
// $(document).ready(function(){
//     console.log("ready")
//     $("#tableay").dataTable()
   

// })
// $(document).ready(function () {
//     $.getJSON("json.json", function (data) {
//         var table = '';
//         $.each(data, function (key, value){
//             table += '<tr scope="row">',
//             table += '<td>' + value.ID, +'</td>'
//             table += '<td>' + value.Désignation,+'</td>'
//             table += '<td>' + value.LePrix,+'</td>'
//             table += '<td>' + value.Catégorie,+'</td>'
//             table += '<td>' + value.Disponibilité,+'</td>'
//             table += `<td><li>${ value.Fournisseur.aderess}</li><li>${value.Fournisseur.social} </li></td>`
//             table += '</tr>'

//             console.log(value.Prix);
//         });
//         $('#tableay').append(table)
// });

// });


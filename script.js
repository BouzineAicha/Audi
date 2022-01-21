// var myRequest = new XMLHttpRequest();
// myRequest.open("GET", "./script.json");
// myRequest.onload = function () {
  // var data = JSON.parse(myRequest.responseText);
//   console.log(ourData);
//   var table = "";
//   $.each(ourData, function (key, value) {
//     (table += '<tr scope="row">'),
//       (table += '<td><img src="' + value.url + '" width="100px" ></td>');
//     (table += "<td>" + value.ID), +"</td>";
//     (table += "<td>" + value.Désignation), +"</td>";
//     (table += "<td>" + value.LePrix), +"</td>";
//     (table += "<td>" + value.Catégorie), +"</td>";
//     (table += "<td>" + value.Disponibilité), +"</td>";
//     table += `<td><li>${value.Fournisseur.aderess}</li><li>${value.Fournisseur.Rsocial} </li></td>`;
//     table += "</tr>";
//   });
//   $("#tableay").append(table);
// }
var data ;
$(document).ready(function table() {
  $.getJSON("script.json", function (data) {
    var table = '';
    $.each(data, function (key, value) {
      table += '<tr scope="row">',
      table += '<td><img src="' + value.url + '" width="100px" ></td>';
        table += '<td>' + value.ID, +'</td>'
      table += '<td>' + value.Désignation, +'</td>'
      table += '<td>' + value.LePrix, +'</td>'
      table += '<td>' + value.Catégorie, +'</td>'
      table += '<td>' + value.Disponibilité, +'</td>'
      table += `<td><li>${value.Fournisseur.aderess}</li><li>${value.Fournisseur.social} </li></td>`
      table += '</tr>'

      
    });
    $('#tableay').append(table)
  });
 
});

  $(document).ready(function () {
    $("#inp").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#list tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  function sorting(e, dr) {
    var sort = e.parentElement.innerTexet.trim();
    if (dr == "croi") {
      data.sort(function (a, b) {
        if (a[sort].toLowerCase() < b[sort].toLowerCase()) {
          return -1;
        }
      });
    } else
    data.sort(function (a, b) {
        if (a[sort].toLowerCase() > b[sort].toLowerCase()) {
          return -1;
        }
      });
  }

  document.getElementsByTagName("tbody").innerHTML = "";
  var table = '';
      $.each(data, function (key, value) {
        table += '<tr scope="row">',
        table += '<td><img src="' + value.url + '" width="100px" ></td>';
          table += '<td>' + value.ID, +'</td>'
        table += '<td>' + value.Désignation, +'</td>'
        table += '<td>' + value.LePrix, +'</td>'
        table += '<td>' + value.Catégorie, +'</td>'
        table += '<td>' + value.Disponibilité, +'</td>'
        table += `<td><li>${value.Fournisseur.aderess}</li><li>${value.Fournisseur.social} </li></td>`
        table += '</tr>'
  
        
      });
 
  function sorting(e, dr) {
    var sort_tbl = e.parentElement.innerText.trim();
    if (dr == "desc") {
      data.sort(function (a, b) {
       
        return a[sorting] - b[sorting];
      });
    } else if (dr == "dcroi") {
      data.sort(function (a, b) {
        return b[sorting] - a[sorting];
      });
    }
  }
  document.getElementsByTagName("tbody").innerHTML = "";
  
  var table = '';
  $.each(data, function (key, value) {
    table += '<tr scope="row">',
    table += '<td><img src="' + value.url + '" width="100px" ></td>';
      table += '<td>' + value.ID, +'</td>'
    table += '<td>' + value.Désignation, +'</td>'
    table += '<td>' + value.LePrix, +'</td>'
    table += '<td>' + value.Catégorie, +'</td>'
    table += '<td>' + value.Disponibilité, +'</td>'
    table += `<td><li>${value.Fournisseur.aderess}</li><li>${value.Fournisseur.social} </li></td>`
    table += '</tr>'

    
  });

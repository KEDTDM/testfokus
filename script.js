fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = '' + data[i].customername + ' ' + data[i].customertier + ' ' + data[i].customerphone +'' + data[i].totaltransaction + ' ' + data[i].totalamount + ' ' + data[i].totalreward + ' ' + data[i].remainingpoint;
      mainContainer.appendChild(div);
    }
  }
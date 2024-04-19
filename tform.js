document.addEventListener("DOMContentLoaded", function() {
fetch("getAllStations")


    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(station => {
            $('#from,#to').append($('<option>', {
                value: station.st_id, // Lowercase value as an example
                text: station.st_name
            }));
        });
    })
    .catch(error => console.error("Error:", error));



});
$("#to").change(function(){
var from=$("#from").val();
var to=$("#to").val();
var url = "getTrains?" + "from=" + encodeURIComponent(from) + "&to=" + encodeURIComponent(to);
fetch(url)


    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(train => {
            console.log(train);
            $('#Train').append($('<option>', {
                value: train.tno,
                 // Lowercase value as an example
                text:train.tno+" "+ train.tname+" "+train.tsch
            }));
        });
    })
    .catch(error => console.error("Error:", error));



})
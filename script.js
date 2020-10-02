var submit = $("#submit");

var query = "Titanic";
var beginDate = "1912";
var endDate = "1914";

var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=d7bYASqiWzVjLRRbENP2bqfftB2jG7NY"
    + "/articlesearch.json?q=" + query + "&begin_date=" + beginDate + "0101&end_date=" + endDate + "1231";


function queryFunction() {
    $.ajax({
        method: "GET",
        url: queryURL
    }).then(function (response) {
        console.log(response);
    })
}
submit.on("click", function () {
    queryFunction();
})
$("#submit").click(function(){
    event.preventDefault();

    var matchStatus = $(".modal-title");
    var modalBody = $("modal-body");

    var name = $("#name").val().trim();
    var photo = $("#photo").val();
    var item1 = parseInt($("#item1").val());
    var item2 = parseInt($("#item2").val());
    var item3 = parseInt($("#item3").val());
    var item4 = parseInt($("#item4").val());
    var item5 = parseInt($("#item5").val());
    var item6 = parseInt($("#item6").val());
    var item7 = parseInt($("#item7").val());
    var item8 = parseInt($("#item8").val());
    var item9 = parseInt($("#item9").val());
    var item10 = parseInt($("#item10").val());

    var userData = {
        name: name,
        photo: photo,
        scores: [
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            item8,
            item9,
            item10
        ]
    };

    if(
        (name !== "") && (photo !== "") && (!isNaN(item1)) &&
        (!isNaN(item2)) && (!isNaN(item3)) && (!isNaN(item4)) &&
        (!isNaN(item5)) && (!isNaN(item6)) && (!isNaN(item7)) &&
        (!isNaN(item8)) && (!isNaN(item9)) && (!isNaN(item10)) 
    ) {
        var currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", userData, function(data){
            if (data.name !== undefined) {
                matchStatus.html("You match with...");
                modalBody.html("<p>...is " + data.name + "!</p><img src=''" + data.photo + '"height="200">');
                //The data gives you this information when you complete the form
            } else {
                matchStatus.html("Not enough data!");
                modalBody.html("<p>There is not enough information to match you</p>");
               //The message when you don't send enough data
            }

             $(".modal").modal("toggle");
        });
    } else {
        matchStatus.html("Error...");
        modalBody.html("Please answer all the questions in the survey.");
        //When you don't answer all the questions in the survey 
        (".modal").modal("toggle");
    }
});

$("#friend-form").reset();
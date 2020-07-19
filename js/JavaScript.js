//Generates a random whole number where both min and max are inclusive
buildings=[".one",".two",".three",".four",".five",".six",".seven",".eight"]

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//prevents form from refreshing the page
$("#mainF").submit(function (e) {
    e.preventDefault();
});

$("input").on("change", function () {
    //checks if a value has been entered if not assigns a random number 1 to 10
    if (isNaN(parseInt($("#building_1").val())) || $("#building_1").val() > 10) {
        $("#building_1").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_2").val())) || $("#building_2").val() > 10) {
        $("#building_2").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_3").val())) || $("#building_3").val() > 10) {
        $("#building_3").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_4").val())) || $("#building_4").val() > 10) {
        $("#building_4").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_5").val())) || $("#building_5").val() > 10) {
        $("#building_5").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_6").val())) || $("#building_6").val() > 10) {
        $("#building_6").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_7").val())) || $("#building_7").val() > 10) {
        $("#building_7").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#building_8").val())) || $("#building_8").val() > 10) {
        $("#building_8").val(getRandom(1, 10));
    }


    //Populates array with the 6 numbers
    let nums = new Array();
    nums.push(Number($("#building_1").val()));
    nums.push(Number($("#building_2").val()));
    nums.push(Number($("#building_3").val()));
    nums.push(Number($("#building_4").val()));
    nums.push(Number($("#building_5").val()));
    nums.push(Number($("#building_6").val()));
    nums.push(Number($("#building_7").val()));
    nums.push(Number($("#building_8").val()));

    $('.building.one').height(nums[0] * 50);
    $('.building.two').height(nums[1]*50);
    $('.building.three').height(nums[2]*50);
    $('.building.four').height(nums[3]*50);
    $('.building.five').height(nums[4]*50);
    $('.building.six').height(nums[5]*50);
    $('.building.seven').height(nums[6]*50);
    $('.building.eight').height(nums[7]*50);

    let highest = 0
    

    for (let n = 1; n < nums.length; n++) {
        if (nums[n] > highest) {
            highest = nums[n];
            $(`.building${buildings[n]}`).css("background-color", "#2ba727");
        }
        else{
            $(`.building${buildings[n]}`).css("background-color", "#888");
        }
    }
});

$("#btnClear").on("click", function () {
    $("#building_1").val("");
    $("#building_2").val("");
    $("#building_3").val("");
    $("#building_4").val("");
    $("#building_5").val("");
    $("#building_6").val("");
    $("#building_7").val("");
    $("#building_8").val("");
   
});
//Generates a random whole number where both min and max are inclusive
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//prevents form from refreshing the page
$("#mainF").submit(function (e) {
    e.preventDefault();
});

$("#btnStart").on("click", function () {
    //checks if a value has been entered if not assigns a random number 1 to 10
    if (isNaN(parseInt($("#num1").val()))) {
        $("#num1").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#num2").val()))) {
        $("#num2").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#num3").val()))) {
        $("#num3").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#num4").val()))) {
        $("#num4").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#num5").val()))) {
        $("#num5").val(getRandom(1, 10));
    }
    if (isNaN(parseInt($("#num6").val()))) {
        $("#num6").val(getRandom(1, 10));
    }


    //Populates array with the 6 numbers
    let nums = new Array();
    nums.push(Number($("#num1").val()));
    nums.push(Number($("#num2").val()));
    nums.push(Number($("#num3").val()));
    nums.push(Number($("#num4").val()));
    nums.push(Number($("#num5").val()));
    nums.push(Number($("#num6").val()));

    let highest = 0;
    let canSee = 0;
    let seeOut = new Array();

    for (let n = 0; n < nums.length; n++) {
        if (nums[n] > highest) {
            highest = nums[n];
            canSee++;
            seeOut.push(n + 1);
        }
    }

    $("#output").html(`<p class="animate__animated animate__fadeIn">${canSee} buildings can see ----> [ ${seeOut.join(" | ")} ]</p>`);
});

$("#btnClear").on("click", function () {
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");
    $("#num5").val("");
    $("#num6").val("");
    $("#output").text("");
});
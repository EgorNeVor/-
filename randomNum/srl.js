    function generateRandomNumber() {
        let minNumber = parseInt(document.getElementById('minNumber').value);
        let maxNumber = parseInt(document.getElementById('maxNumber').value);
        if (isNaN(minNumber) || isNaN(maxNumber) || parseInt(minNumber) >= parseInt(maxNumber)) {
            $('span').show();
        }
        else{
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        console.log(randomNumber);
        $('#all').hide();
        $('#number').show();
        $('#subm').show();
        document.getElementById("number").innerHTML = randomNumber;
    }
        return false;
        }
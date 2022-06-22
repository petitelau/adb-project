export {HomeView}

const HomeView = (inputEL, formEL, resultContainer, resultLabel, result)=> {

    // validate entry. Only numbers allowed.
    inputEL.oninput = () => {
        inputEL.value = inputEL.value.replace(/[^0-9]/g,'');
    }

    const fetchFn = (val, callback) => {
        fetch('http://localhost:8080/romannumeral?query=' +val)
               .then(response=> response.json().then(data=> 
                        callback(data) ));
    }

    const updateHtml = (data)=> {
        resultContainer.style.display="flex";
        if (data.error) {
            resultLabel.textContent= data.error;
            result.textContent ='';
            return;
        }
        if (data.romanNumber === '') {   // in case of zero or not in range
            resultLabel.textContent="Number can not be converted";
            result.textContent ='';
        }
        else {
            resultLabel.textContent="Your roman numeral is: ";
            result.textContent = data.romanNumber;
        }

    }

    formEL.addEventListener('submit', (e) => {
        e.preventDefault();

        fetchFn(inputEL.value, (data)=> {
            updateHtml(data)
            })
    });


    return {
        fetchFn, updateHtml
    }
}







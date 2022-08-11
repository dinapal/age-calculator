
window.onload = function () {
    const addDate = document.querySelector("#date").innerHTML = new Date().toLocaleDateString()

    const dob = document.querySelector('#dob');
    var result = document.querySelector('#result')


    calculateAge();

}


function calculateAge(){

    const calcBtn = document.getElementById('calculate');

    calcBtn.addEventListener('click', function(){
        const today = new Date().getTime()
        const tempDob = dob.value.split('/').reverse().join('-')
        const dobTime = new Date(tempDob).getTime();
        let calc ; 
        if(today > dobTime){
           calc = new Date(today - dobTime);
        }else{
            alert('Please Enter a Valid Date')
        }

        const tempDate = calc.getDate() + '-' + calc.getMonth() + '-'+ calc.getFullYear();

        const splitDate = tempDate.split('-')
        
        const day = Math.floor(splitDate[0] - 1);
        const month = Math.floor(splitDate[1]);
        const year = Math.floor(splitDate[2] - 1970);

        const resultInfo = `<h2>Your Age is ${year} years ${month} Months ${day} Days<h2>`;

        result.innerHTML = resultInfo;

        const btn = document.createElement('button')
        btn.style.cursor = 'pointer';
        btn.textContent = 'Reset';

        result.append(btn)

        btn.addEventListener('click', function(){
            dob.value = '';
            result.innerHTML = ''
        })

    }) 
}
//Selecting styled range input elements by class and element type input
// Assigning the elements to rangeInput variable
// The first input thumb slider is assigned [0] for rangeInput the second is [1]
const rangeInput = document.querySelectorAll(".range_input input");
priceInput = document.querySelectorAll(".price_input input");


//Selecting the slider and progress elements to alter their style
//Use JS to the colour of the price slider when thumb controls are moved
progress = document.querySelector(".slider .progress");

//Creating price gap of at least 1000 between thumb controls of range sliders
let priceGap = 100;

//Creating an arrow function to create animation on range input sliders
//Will also map values of range input sliders to number fields
rangeInput.forEach(input => {
  input.addEventListener("input", e =>{
    //getting value of two ranges and parsing them to number values
    let minVal = parseInt(rangeInput[0].value)
    let maxVal = parseInt(rangeInput[1].value)

    if(maxVal - minVal < priceGap){
        if(e.target.className === "range_min") {
            //If min slider is active make its value equal to max slider - priceGap
            rangeInput[0].value = maxVal - priceGap;
        }else{
            //If max slider is active make its value equal to min slider + priceGap
            rangeInput[1].value = minVal + priceGap;
        }
    }else{
        //Maps the values of the sliders to the max and min number fields below
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        //This: let percent = (minVal / rangeInput[0].max) * 100
        //Returns the value of minVal as a percentage of its max range
        //Used below to dynamically change styling of slider progress bar as thumb controls are moved
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        console.log(percent)
    }

  });
});

//Same as above but using number fields to change thumb controller position
priceInput.forEach(input => {
  input.addEventListener("input", e =>{
    //getting ranges input values and parsing them as numbers
    let minVal = parseInt(priceInput[0].value)
    let maxVal = parseInt(priceInput[1].value)

      if(maxVal - minVal >= priceGap && maxVal <= 50000){
        if(e.target.className === "input_min") {
            //If min input is active input it can update position and styling of min range slider and progress bar
            rangeInput[0].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        }else{
            //If min input is active input it can update position and styling of min range slider and progress bar
            rangeInput[1].value = minVal;
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    }
  });
});

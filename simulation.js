function heartSizes() {
    document.getElementById("heartSizes").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.dropdownButton')) {
      let dropdowns = document.getElementsByClassName("HeartSizesDropdown");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function GetHeartRateValue(){

    let heartRateInput = document.getElementById("HeartRate").value;
    
    document.querySelector('.heartRate').textContent = heartRateInput;

}

function GetOxInRateValue(){

    let oxygenIntakeRateInput = document.getElementById("OxygenInRate").value;
    
    document.querySelector('.oxygenLevels').textContent = oxygenIntakeRateInput;
    
}

let heart = {
    size: undefined,
}

function SetHeartSize(){

    CurrentDropdownTitle = document.querySelector('#select');

    CurrentHeartSize = CurrentDropdownTitle.options[CurrentDropdownTitle.selectedIndex].value;

    let LiteralHeartSize = "";

    if(CurrentHeartSize == 1){

        heart.size = "Normal";
        LiteralHeartSize = "Small Sized";

    }
    else if(CurrentHeartSize == 2){

        heart.size = "Small";
        LiteralHeartSize = "Normal Sized";

    }
    else if(CurrentHeartSize == 3){

        heart.size = "Big";
        LiteralHeartSize = "Big Sized";

    }

    document.querySelector('.heartSize').textContent = LiteralHeartSize;

}

function SetLungSize(){

    CurrentDropdownTitle = document.querySelector('#select1');

    CurrentLungSize = CurrentDropdownTitle.options[CurrentDropdownTitle.selectedIndex].value;

    let LiteralLungSize = "";

    if(CurrentLungSize == 1){

        LiteralLungSize = "Small Lungs";

    }
    else if(CurrentLungSize == 2){

        LiteralLungSize = "Normal Lungs";

    }
    else if(CurrentLungSize == 3){

        LiteralLungSize = "Large Lungs";

    }

    document.querySelector('.lungSize').textContent = LiteralLungSize;

}

function SetHearthMuscleThickness(){

    CurrentDropdownTitle = document.querySelector('#select2');

    CurrentMuscleThickness = CurrentDropdownTitle.options[CurrentDropdownTitle.selectedIndex].value;

    let LiteralMuscleThickness = "";

    if(CurrentMuscleThickness == 1){

        LiteralMuscleThickness = "Thin Heart Muscle";

    }
    else if(CurrentMuscleThickness == 2){

        LiteralMuscleThickness = "Normal Heart Muscle";

    }
    else if(CurrentMuscleThickness == 3){

        LiteralMuscleThickness = "Thick Heart Muscle";

    }

    document.querySelector('.heartMuscleThickness').textContent = LiteralMuscleThickness;

}

function SetVeinsWallThickness(){

    CurrentDropdownTitle = document.querySelector('#select3');

    CurrentVeinsWallThickness = CurrentDropdownTitle.options[CurrentDropdownTitle.selectedIndex].value;

    let LiteralVeinsWallThickness = "";

    if(CurrentVeinsWallThickness == 1){

        LiteralVeinsWallThickness = "Thin Veins";

    }
    else if(CurrentVeinsWallThickness == 2){

        LiteralVeinsWallThickness = "Normal Veins";

    }
    else if(CurrentVeinsWallThickness == 3){

        LiteralVeinsWallThickness = "Thick Veins";

    }

    document.querySelector('.veinWallThickness').textContent = LiteralVeinsWallThickness;

}
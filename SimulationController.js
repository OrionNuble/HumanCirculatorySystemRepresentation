
window.addEventListener('load', () => {

    const Canvas = document.getElementById('Canvas');
    const Context = Canvas.getContext('2d');

    Canvas.height = window.innerHeight / 1.65;
    Canvas.width = window.innerWidth / 1.65;

    BackGround = new Image();
    BackGround.src = "CirculatorySystemAnimationBackground_HEARTLUNGADDED.png";
    BackGround.onload = function () {

        Context.drawImage(BackGround, 0, 0);

    };

    Brain = new Image();
    Brain.src = 'BrainImageRESIZED.png';
    Brain.onload = function () {

        Context.drawImage(Brain, 10, -50);

    };


    ResetValues();

});

let Body = {

    AdrenalineLevels: 100,
    DopamineLevels: 100,
    AcetylcholineLevels: 100,
    OxygenIntakeLevels: 100,
    StressLevels: 0,
    CaffeineLevels: 0,
    HeartRate: 70,

}

window.addEventListener('resize', () => {

    Canvas.height = window.innerHeight / 1.65;
    Canvas.width = window.innerWidth / 1.65;

});

function UpdateCircularSystem(AdrenalinLevels, DopamineLevels, AcetylcholineLevels, OxygenLevels, StressLevels, CaffeineLevels){

    let HeartRate = 70;
    let BloodPressureLEFT = 120;
    let BloodPressureRIGHT = 80;

    HeartRate = (HeartRate * (parseInt(AdrenalinLevels) + parseInt(DopamineLevels) - parseInt(AcetylcholineLevels)) / 100);
    HeartRate = HeartRate + (HeartRate * 0.05 * (parseInt(StressLevels) + parseInt(CaffeineLevels)));
    HeartRate = HeartRate * (parseInt(OxygenLevels) / 100);

    BloodPressureLEFT = BloodPressureLEFT + (BloodPressureLEFT * 0.02 * parseInt(StressLevels));
    BloodPressureRIGHT = BloodPressureRIGHT + (BloodPressureRIGHT * 0.02 * parseInt(StressLevels));

    console.log(BloodPressureLEFT);
    console.log(BloodPressureRIGHT);

    if(parseInt(CaffeineLevels) > 4){

        BloodPressureLEFT = BloodPressureLEFT + (BloodPressureLEFT * 0.03 * (parseInt(CaffeineLevels) / 4));
        BloodPressureRIGHT = BloodPressureRIGHT + (BloodPressureRIGHT * 0.03 * (parseInt(CaffeineLevels) / 4));

    }
    console.log(BloodPressureLEFT);
    console.log(BloodPressureRIGHT);

    let BloodPressure = BloodPressureLEFT.toString() + '/' + BloodPressureRIGHT.toString();
    console.log(BloodPressure);
    HeartRate = HeartRate.toString();

    document.querySelector('.heartRate').textContent = HeartRate;
    document.querySelector('.bloodPressure').textContent = BloodPressure;

    Body.AdrenalineLevels = AdrenalinLevels;
    Body.DopamineLevels = DopamineLevels;
    Body.AcetylcholineLevels = AcetylcholineLevels;
    Body.OxygenIntakeLevels = OxygenLevels;
    Body.StressLevels = StressLevels;
    Body.CaffeineLevels = CaffeineLevels;
    Body.HeartRate = parseInt(HeartRate);

}

function ResetValues(){

    Body.AdrenalineLevels = 100;
    Body.DopamineLevels = 100;
    Body.AcetylcholineLevels = 100;
    Body.OxygenIntakeLevels = 100;
    Body.StressLevels = 0;
    Body.CaffeineLevels = 0;


    document.querySelector('.AdrenalineLevels').textContent = Body.AdrenalineLevels;
    document.querySelector('.DopamineLevels').textContent = Body.DopamineLevels;
    document.querySelector('.AcetylcholineLevels').textContent = Body.AcetylcholineLevels;
    document.querySelector('.oxygenLevels').textContent = Body.OxygenIntakeLevels;
    document.querySelector('.stressLevels').textContent = Body.StressLevels;
    document.querySelector('.caffeineLevels').textContent = Body.CaffeineLevels;

    UpdateCircularSystem(Body.AdrenalineLevels, Body.DopamineLevels, Body.AcetylcholineLevels, Body.OxygenIntakeLevels, Body.StressLevels, Body.CaffeineLevels);


}

function ApplyHormones(){

    let HormonesSelector = document.querySelector('#HormonesSelector');

    let SelectedHormoneNumber = HormonesSelector.options[HormonesSelector.selectedIndex].value;

    let HormonePercentage = document.getElementById('PercentOfTheNormal').value;

    let SelectedHormone = "";

    if(SelectedHormoneNumber == 1){

        SelectedHormone = "Adrenaline";
        document.querySelector('.AdrenalineLevels').textContent = HormonePercentage;
        Body.AdrenalineLevels = HormonePercentage;

    }
    else if(SelectedHormoneNumber == 2){

        SelectedHormone = "Dopamine";
        document.querySelector('.DopamineLevels').textContent = HormonePercentage;
        Body.DopamineLevels = HormonePercentage;

    }
    else{
        
        SelectedHormone = "Acetylcholine";
        document.querySelector('.AcetylcholineLevels').textContent = HormonePercentage;
        Body.AcetylcholineLevels = HormonePercentage;

    }

    UpdateCircularSystem(Body.AdrenalineLevels, Body.DopamineLevels, Body.AcetylcholineLevels, Body.OxygenIntakeLevels, Body.StressLevels, Body.CaffeineLevels);


}

function ApplyOxygenIntake(){

    let OxygenIntakeRate = document.getElementById('OxygenInRate').value;

    document.querySelector('.oxygenLevels').textContent = OxygenIntakeRate;

    Body.OxygenIntakeLevels = OxygenIntakeRate;

    UpdateCircularSystem(Body.AdrenalineLevels, Body.DopamineLevels, Body.AcetylcholineLevels, Body.OxygenIntakeLevels, Body.StressLevels, Body.CaffeineLevels);

}

function ApplyStress(){

    let StressLevels = document.getElementById('StressLevels').value;

    document.querySelector('.stressLevels').textContent = StressLevels;



    Body.StressLevels = StressLevels;

    UpdateCircularSystem(Body.AdrenalineLevels, Body.DopamineLevels, Body.AcetylcholineLevels, Body.OxygenIntakeLevels, Body.StressLevels, Body.CaffeineLevels);

}

function ApplyCaffeine(){

    let CaffeineLevels = document.getElementById('CaffeineLevels').value;

    document.querySelector('.caffeineLevels').textContent = CaffeineLevels;

    Body.CaffeineLevels = CaffeineLevels;

    UpdateCircularSystem(Body.AdrenalineLevels, Body.DopamineLevels, Body.AcetylcholineLevels, Body.OxygenIntakeLevels, Body.StressLevels, Body.CaffeineLevels);

}
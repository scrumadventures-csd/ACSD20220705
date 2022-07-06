import {getPins} from './PinsService';

var expected_pins_knocked = 2;


var actual_pin = getPins();

if(actual_pin != expected_pins_knocked){
    console.log("Test Failed ")
}else{
    console.log("Test passed")
}
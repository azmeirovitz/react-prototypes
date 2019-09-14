import React, {Component} from 'react';
// import { isMainThread } from 'worker_threads';
import Stopwatch from './stopwatch'; 
// They don't have line 3

class FormatTime extends Component {
    constructor (props) {
        super(props);

        this.timeStyle = {
            display: "inline-block",
            position: "relative",
            left: "50%",
            transform: "translate(-50%)",
            width: "383px"
        }

    }    

render () {

    const {timeStyle, leadingZero, trailingZero} = this;

    const {hour, min, sec, ms} = this.millisecondsToTime();

    return (
        <div style={timeStyle}>{leadingZero(hour)} :{leadingZero(min)} : {leadingZero(sec)}.{trailingZero(ms)}</div>        
    )
}

millisecondsToTime (){
    const {elapsed} = this.props;
    const sec = elapsed / 1000;
    const min = sec/60;

    return {
        hour: Math.floor(min / 60),
        min: Math.floor(min % 60),
        sec: Math.floor(sec % 60),
        ms: Math.floor(elapsed % 100)
    }

}

leadingZero (number) {
    if (number < 10) {
      return number < 10 ? `0${number}`: number; 
    }     
      
}

trailingZero (number) {
    return number < 10 ? `${number}0` : number;
}


} 

export default FormatTime;
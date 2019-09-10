import React, {Component} from 'react';
// import { isMainThread } from 'worker_threads';
import Stopwatch from './stopwatch';

class FormatTime extends Component {
    constructor (props) {
        super(props);

    }    

render () {
    return (
        <div>{this.props.elapsed}</div>
// which props is it, form FormatTime or Stopwatch?
    )
}

millisecondsToTime (){
    const {elapsed} = this.props;
    const sec = elapsed / 1000;
    constmin = sec/60;

}

} 

export default FormatTime;
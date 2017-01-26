import * as React from 'react';
import * as ReactDom from 'react-dom';
//import SampleButton from "../../src/ts/SampleButton/SampleButton";
import {SampleButton , AlertButton} from "naoto243-react-kit";
//import SampleButton from "../../lib/SampleButton"
//import AlertButton from "../../lib/AlertButton"

class SampleApp extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    componentWillMount() : void {
    }
    componentDidMount() : void {
    }

    componentWillUpdate() : void {
    }

    componentDidUpdate() : void {
    }

    componentWillUnmount() : void {
        //viewのデストラクタ
    }

    render() {
        return (
            <div >
                <SampleButton hoge={true} />
                <AlertButton />
            </div>
        );
    }
}

ReactDom.render(<SampleApp /> , document.getElementById("app"));



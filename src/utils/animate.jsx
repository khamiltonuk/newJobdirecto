import React, {Component} from 'react';

export default class Animate{
    constructor(kf,opts){
        this.element = null;
        this.kf = kf || [];
        this.opts = opts || {};
    }

    setOptions(opts){
        this.opts = {...this.opts,...opts};
    }

    setFrames(kf){
        this.kf = [...kf];
    }

    addFrame(kf){
        this.kf = [...this.kf,kf];
    }

    setItemAnimate(el){
        this.element = el;
    }

    run(){
        if(this.ann){
            this.ann.play()
            return;
        }
        this.ann = this.element.animate(this.kf,this.opts)
    }
    pause(){
        this.ann.pause()
    }
}

export class Div extends Component{
    constructor(props){
        super(props);
        const {children, animate, ...attrs} = props;
        this.state = {
            attrs,
            children,
            animate:props.animate,
        }
        this.ref = React.createRef();
    }

    componentDidMount(){
        if(this.state.animate){
            this.state.animate.setItemAnimate(this.ref.current)
        }
    }

    render(){
        const {children, attrs} = this.state;
        return <div ref={this.ref} {...attrs}>{children}</div>
    }
}
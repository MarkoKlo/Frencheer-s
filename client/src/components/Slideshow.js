import React, {Component, Children} from 'react';

class SlideShow extends Component{
    state = {
        total: 0,
        current: 0,
    }

    componentDidMount(){
        const{children} = this.props;
        this.setState({total: Children.count(children)});
        this.interval = setInterval(this.showNext, 2000);
    }

componentWillUnmount(){
    clearInterval(this.interval);
}

showNext = () => {
    const { total, current } = this.state;
    this.setState({
        current: current +1 === total? 0 : current +1
    });
};

    render(){
        const {children}=this.props;
        const bullets = Array(this.state.total).fill("°");
        bullets[this.state.current] = "O";
        return(
            <div className="slideshow" >
                <div>{bullets}</div>
                {Children.toArray(children)[this.state.current]}
            </div>
      )
    }
}

export default SlideShow;
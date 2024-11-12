import React from "react";
import image1 from "assets/world-s-hardware-tracker-for-laptops-gps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey project.jpg";
import image2 from "assets/real-time-live-tracking-gps-app-solar-spy--custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop.jpg";
import image3 from "assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-project.jpg";
import "./style.css";

class Carousel extends React.Component {
  // current position(in the array) of the slider in view
  current = 1;
  //indicates which button is pressed(next or previous)
  button = "";
  //elements that will be sliding
  sliders;
  intervalId;

  constructor(props) {
    super(props);
    this.state = {
      class_name: "slider-container-transition",
      X_axis_transform: "",

      //the css orders of the sliders(3 sliders) initially
      cssOrder: [1, 2, 3],
    };

    this.sliderContainer = React.createRef();
    this.moveSliders = this.moveSliders.bind(this);
  }
  componentDidMount() {
    //get sliders
    this.sliders = Array.from(
      this.sliderContainer.current.getElementsByClassName("slider-item")
    );
    //slide the images every one second
    this.intervalId = setInterval(() => {
      this.goToNext();
    }, 10000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  moveSliders() {
    switch (this.button) {
      case "next":
        //point the next slider to be in view
        if (this.current === this.sliders.length) this.current = 1;
        else this.current++;

        this.changeOrder();
        //this one will make 'react mutate' the slider-container

        this.setState({
          class_name: "",
          X_axis_transform: "translate(0%)",
        });
        break;

      case "previous":
        if (this.current === 1) this.current = 3;
        else this.current--;

        this.changeOrder();

        this.setState({
          class_name: "slider-container-transition",
          X_axis_transform: "translate(0%)",
          onTransitionend: null,
        });
        break;
      default:
    }
  }

  changeOrder() {
    let order = 1;

    //nb:this call will be batch with the one of the two in moveSliders above into one single update(one re-render will occur)
    this.setState((state) => {
      //change order from current position till last.
      for (let i = this.current; i <= this.sliders.length; i++) {
        state.cssOrder[i - 1] = order;
        order++;
      }
      //change order from 1st position till current
      for (let i = 1; i < this.current; i++) {
        state.cssOrder[i - 1] = order;
        order++;
      }
    });
  }

  goToNext() {
    this.button = "next";
    this.setState({
      //add a diff class name to the slider container{transition:transform 0.7s }
      class_name: "slider-container-transition",
      //add a transformation to the slider container
      X_axis_transform: "translate(-100%)",
      onTransitionend: this.moveSliders,
    });
  }

  goToPrevious() {
    this.button = "previous";
    this.setState({
      //add a diff class name to the slider container{transition:transform 0.01s ease-in-out}
      class_name: "slider-container-transition-instant",
      X_axis_transform: "translate(-100%)",
      onTransitionend: this.moveSliders,
    });
  }

  render() {
    return (
      <div id="slider-container-outer">
        <div
          ref={this.sliderContainer}
          id="slider-container"
          className={this.state.class_name}
          onTransitionEnd={this.state.onTransitionend}
          style={{ transform: this.state.X_axis_transform }}
        >
          <div
            className="slider-item"
            style={{ order: this.state.cssOrder[0] }}
          >
            <img className="image" src={image1} alt="" />
          </div>
          <div
            className="slider-item"
            style={{ order: this.state.cssOrder[1] }}
          >
            <img className="image" src={image2} alt="" />
          </div>
          <div
            className="slider-item"
            style={{ order: this.state.cssOrder[2] }}
          >
            <img className="image" src={image3} alt="" />
          </div>
        </div>
        <div className="buttons">
          <button
            className="button"
            id="move-previous"
            onClick={() => {
              this.goToPrevious();
            }}
          >
            &lt;
          </button>
          <button
            className="button"
            id="move-next"
            onClick={() => {
              this.goToNext();
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;

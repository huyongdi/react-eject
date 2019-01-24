import React, {Component} from 'react';
import './home.less'
import $ from 'jquery'
import Vara from 'vara'

export default class Home extends Component {
  drawBook = () => {
    let winWidth = $(window).width();
    let ratio = winWidth / 1920;
    let fontSize = {small: 12, medium: 14};
    let played = [0, 0, 0];
    let vara = [];
//    let bodyFontSize = Math.max(16 * ratio, 10);
    let posX = Math.max(80 * ratio, 30);
//    $("#container").css("font-size", bodyFontSize + "px");
    fontSize.small = Math.max(fontSize.small * ratio, 7);
    fontSize.medium = Math.max(fontSize.medium * ratio, 10);
    vara[0] = new Vara(
        "#vara-container",
        `${process.env.PUBLIC_URL}/plugins/SatisfySL.json`,
        [
          {
            text: "maoyi:",
            textAlign: "left",
            y: 20,
            x: 30,
            delay: 500,
            duration: 1500,
            fontSize: fontSize.small
          },
          {
            text: "wo mei you xihuan de ren",
            x: posX,
            duration: 4000
          },
        ],
        {
          strokeWidth: 2,
          fontSize: fontSize.medium,
          autoAnimation: false
        }
    );
    vara[1] = new Vara(
        "#vara-container2",
        `${process.env.PUBLIC_URL}/plugins/SatisfySL.json`,
        [
          {
            text: "zhenren:",
            textAlign: "left",
            y: 20,
            x: 30,
            delay: 500,
            duration: 1500,
            fontSize: fontSize.small
          },
          {
            text: "wo xia shou wanle",
            x: posX,
            duration: 4000
          },
        ],
        {
          strokeWidth: 2,
          fontSize: fontSize.medium,
          autoAnimation: false
        }
    );
    vara[2] = new Vara(
        "#vara-container3",
        `${process.env.PUBLIC_URL}/plugins/SatisfySL.json`,
        [
          {
            text: "sjj:",
            textAlign: "left",
            delay: 500,
            y: 20,
            x: 30,
            duration: 1500,
            fontSize: fontSize.small
          },
          {
            text: "dajiahao woshi jj suojunjie",
            y: 40,
            x: posX,
            duration: 4000
          },
//          {
//            text: "Github.",
//            y: 10,
//            color: "#3f51b5",
//            id: "link",
//            x: posX,
//            duration: 1500
//          }
        ],
        {
          strokeWidth: 2,
          fontSize: fontSize.medium,
          autoAnimation: false
        }
    );
    vara[2].ready(function () {
      $(".front:not(.last)").click(function () {
        let ix = $(this).parent(".paper").index();
        console.log(ix);
        $(".book").addClass("open");
        $(this).parent(".paper").addClass("open");
        if (!played[ix]) {
          vara[ix].playAll();
          vara[ix].animationEnd(function (i, o) {
            played[ix] = 1;
            if (i == "link") {
              let group = o.container;
              let rect = vara[2].createNode("rect", {
                x: 0,
                y: 0,
                width: o.container.getBoundingClientRect().width,
                height: o.container.getBoundingClientRect().height,
                fill: "transparent"
              });
              group.appendChild(rect);
              $(rect).css("cursor", "pointer");
              $(rect).click(function () {
                document.querySelector("#link").click();
              });
            }
          });
        }
      });
      $(".back").click(function () {
        if ($(this).parent(".paper").index() == 0) $(".book").removeClass("open");
        $(this).parent(".paper").removeClass("open");
      });
    });
  }

  componentDidMount() {
    this.drawBook()
  }

  render() {
    return (
        <div className=''>
          <div className="bookContent">
            <div className="v-center"/>
            <div className="book">
              <div className="first paper">
                <div className="page front contents">
                  <div className="intro">
                    <h2>葵花宝典</h2>
                    <h1>2019</h1>
                  </div>
                </div>
                <div className="page back"/>
              </div>
              <div className="second paper">
                <div className="page front contents">
                  <div id="vara-container"/>
                </div>
                <div className="page back"/>
              </div>
              <div className="third paper">
                <div className="page front contents">
                  <div id="vara-container2"/>
                </div>
                <div className="page back"/>
              </div>
              <div className="fourth paper">
                <div className="page last front contents">
                  <div id="vara-container3"/>
                </div>
                <div className="page back"/>
              </div>
              <div className="side"/>
              <div className="bottom"/>
              <div className="shadow"/>
            </div>
          </div>
        </div>
    );
  }
}



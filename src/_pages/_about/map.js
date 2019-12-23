import React, { Component } from 'react';
import styles from './index.module.less'
import BMap from 'BMap'
export default class Map extends Component {
    state = {

    };

    componentDidMount() {
        this.initMap()
        
    }

    initMap() {
        var map = new BMap.Map("container");          // 创建地图实例  
        var point = new BMap.Point(114.405733, 30.511933);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }

    render() {
        return (
            <div id="container" className={styles.mapContent}>

            </div>
        );
    }
}

import React, { Component } from 'react';
import styles from './index.module.less'
import BMap from 'BMap'
export default class Map extends Component {
    state = {

    };

    componentDidMount() {

        var map = new BMap.Map("container");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
    }

    render() {
        return (
            <div id="container" className={styles.mapContent}>

            </div>
        );
    }
}

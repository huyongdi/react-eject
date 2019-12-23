import React, { Component } from 'react';
import { Drawer, List, Avatar, Timeline } from 'antd';
import styles from './index.module.less'
import qq from '@img/qq.jpg'
import Map from './map.js'

export default class About extends Component {
  state = {
    visible: false, // 隐藏抽屉是否显示
    drawerData: [], // 隐藏抽屉的内容
    dataSource: [
      {
        id: 1,
        title: '程序猿',
        description: '努力奋斗，为实现中华民族的伟大复兴贡献自己的一份力',
        data: [
          '2011-2015 本科四年',
          '2015-至今 毕业后一直从事前端工作' 
        ]
      },
      {
        id: 2,
        title: 'DOTA2云玩家',
        description: '指点江山，口若悬河：首先我很久没打了，但是我看直播挺简单的，你打不过就是你太菜了',
        data: [
          '建筑',
          '澄海3C',
          'DOTA1',
          'DOTA2',
          '云玩家'
        ]
      }
    ]
  };

  showDrawer = (data) => {
    this.setState({
      visible: true,
      drawerData: data
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { dataSource, visible, drawerData } = this.state

    return (
      <div className={styles.aboutContent}>
        {/* 顶部显示的list */}
        <List
          dataSource={dataSource}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <span className={styles.detailBtn} onClick={() => this.showDrawer(item.data)} key={`a-${item.id}`}>
                  详细
                </span>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={qq} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />

        {/* 隐藏的抽屉 */}
        <Drawer
          width={400}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <Timeline>
            {drawerData.map((item,index) => {
              return <Timeline.Item key={index}>{item}</Timeline.Item>
            })}
          </Timeline>
        </Drawer>

        {/* 在线百度地图 */}
        <Map></Map>
      </div>
    );
  }
}

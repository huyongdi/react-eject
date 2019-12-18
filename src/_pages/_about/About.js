import React, { Component } from 'react';
import { Drawer, List, Avatar } from 'antd';
import styles from './index.module.less'
import qq from '@img/qq.jpg'

export default class About extends Component {
  state = {
    visible: false, // 隐藏抽屉是否显示
    drawerData: '', // 隐藏抽屉的内容
    dataSource: [
      {
        id: 1,
        title: '程序猿',
        description: '努力奋斗，为实现中华民族的伟大复兴贡献自己的一份力',
        data: '1234556'
      },
      {
        id: 2,
        title: 'DOTA2云玩家',
        description: '指点江山，口若悬河：首先我很久没打了，但是我看直播挺简单的，你打不过就是你太菜了',
        data: '88888888'
      }
    ]
  };

  showDrawer = (data) => {
    console.log(
      data
    );
    
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
        <List
          dataSource={dataSource}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <span className={styles.detailBtn} onClick={()=>this.showDrawer(item.data)} key={`a-${item.id}`}>
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
        <Drawer
          width={400}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          {drawerData}
        </Drawer>

      </div>
    );
  }
}

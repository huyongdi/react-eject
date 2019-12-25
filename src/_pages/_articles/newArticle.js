import React, { Component } from 'react';
import { Card, Drawer } from 'antd';
import style from './article.module.less'
import './article.less'
// const { Meta } = Card;
export default class NewArticle extends Component {
    state = {
        articleArr: [ //文档数组 和public/doc 对应
            {
                id: 1,
                title: '从零搭建类似antd的组件化项目',
                description: 'https://github.com/huyongdi/hyd-ui'
            }
        ],
    }

    componentDidMount() {

    }

    // 查看文章详情
    showDetail = (item) => () => {
        window.open(encodeURI(`https://view.officeapps.live.com/op/view.aspx?src=http://www.huyongdi.com/doc/${item.title}.docx?${Math.random()}`))
    }

    render() {
        const { articleArr } = this.state
        return (
            <div className={style.articleNew}>
                <div className={style.cardContent}>
                    {
                        articleArr.map(item => {
                            return <Card
                                key={item.id}
                                onClick={this.showDetail(item)}
                                hoverable
                                cover={<img alt="example" src="https://www.webpackjs.com/6bc5d8cf78d442a984e70195db059b69.svg" />}
                            >
                                {/* <Meta title={item.title} description={item.description} /> */}
                                <div className="ant-card-meta-detail">
                                    <div className="ant-card-meta-title" title={item.title}>{item.title}</div>
                                    <a   className="ant-card-meta-description" href={item.description} title={item.description}>{item.description}</a>
                                </div>
                            </Card>
                        })
                    }
                </div>
            </div>
        );
    }
}



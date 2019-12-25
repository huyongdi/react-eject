import React, { Component } from 'react';
import { Card } from 'antd';
import style from './article.module.less'
import './article.less'

import webpackImg from '@img/webpack.svg'
import nginxImg from '@img/nginx.png'

// const { Meta } = Card;
export default class NewArticle extends Component {
    state = {
        showLabel: [webpackImg, nginxImg], // 要显示的label
        labelArr: [  // 标签数组
            {
                title: 'webpack',
                img: webpackImg
            },
            {
                title: 'nginx',
                img: nginxImg
            }
        ],
        showArr: [], //要显示card
        articleArr: [ //文档数组 和public/doc 对应
            {
                title: '从零搭建类似antd的组件化项目',
                description: 'https://github.com/huyongdi/hyd-ui',
                type: webpackImg
            },
            {
                title: 'nginx的简单使用',
                description: '',
                type: nginxImg
            }
        ],
    }

    componentDidMount() {
        this.setState(state => ({
            showArr: state.articleArr
        }))
    }

    // 点击标签进行显示隐藏
    labelClick = item => () => {
        this.setState((state) => {
            if (state.showLabel.join(",").includes(item.title)) {  // 如果之前存在
                return {
                    showLabel: state.showLabel.filter((val) => {
                        if (val !== item.img) return val
                    })
                }
            } else {
                return { showLabel: [...state.showLabel, item.img] }
            }
        }, () => { // 标签设置之后，修改文章数组
            this.setState(state => ({
                showArr: state.articleArr.filter(val => {
                    if (state.showLabel.join(',').includes(val.type)) {
                        return val
                    }
                })
            }))
        })
    }

    // 点击查看文章详情
    showDetail = item => () => {
        window.open(encodeURI(`https://view.officeapps.live.com/op/view.aspx?src=http://www.huyongdi.com/doc/${item.title}.docx?${Math.random()}`))
    }

    render() {
        const { showArr, labelArr, showLabel } = this.state
        console.log(showLabel);

        return (
            <div className={style.articleNew}>

                {/* 顶部标签类型展示 */}
                <div className={style.labelContent}>
                    <span className={style.title}>标签：</span>
                    {
                        labelArr.map((item) => {
                            return <div key={item.title} className={`${style.labelOne} ${showLabel.join(',').includes(item.title) ? style.in : ""}`} onClick={this.labelClick(item)}>
                                <img src={item.img} alt="图片"></img>
                                <span>{item.title}</span>
                            </div>
                        })
                    }
                </div>

                {/* 一个一个的card展示 */}
                <div className={style.cardContent}>
                    {
                        showArr.map(item => {
                            return <Card
                                key={item.title}
                                onClick={this.showDetail(item)}
                                hoverable
                                cover={<img alt="example" src={item.type} />}
                            >
                                {/* <Meta title={item.title} description={item.description} /> */}
                                <div className="ant-card-meta-detail">
                                    <div className="ant-card-meta-title" title={item.title}>{item.title}</div>
                                    <a className={style.cardD} href={item.description} title={item.description}>{item.description}</a>
                                </div>
                            </Card>
                        })
                    }
                </div>
            </div>
        );
    }
}



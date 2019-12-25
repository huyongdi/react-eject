import React, { Component } from 'react';
import { Card, Drawer, Spin } from 'antd';
import style from './article.module.less'
import './article.less'
import axios from 'axios'

var mammoth = require("mammoth");
// const { Meta } = Card;
var options = {
    styleMap: [
        // "p => span.a",
        // "r => span.b",
        "i => p.code",
        "u => p.codeInline",
    
        // "p[style-name='Subsection Title'] => h2:fresh"
    ]
};
export default class NewArticle extends Component {

    state = {
        visible: false, // 是否显示draw
        loading: false, // 是否显示spin
        articleArr: [ //文档数组 和public/doc 对应
            {
                id: 1,
                title: '从零搭建类似antd的组件化项目',
                description: '123'
            }
        ],
        docDetail: '', // 当前文档内容
        currentDoc: '' //当前显示的文档
    }

    componentDidMount() {

    }

    // 查看文章详情
    showDetail = (item) => () => {
        const that = this
        this.setState({
            visible: true,
            loading: true,
            currentDoc: item
        }, async () => {
            let respDoc = await axios.get(`${process.env.PUBLIC_URL}/doc/${item.id}.docx`, { responseType: 'arraybuffer' })
                mammoth.convertToHtml({ arrayBuffer: respDoc.data }, options)
                .then(function (result) {
                    that.setState({
                        loading: false,
                        docDetail: result.value
                    })
                    // var html = result.value; // The generated HTML
                    // var messages = result.messages; // Any messages, such as warnings during conversion
                })
        });
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible, docDetail, loading, articleArr, currentDoc } = this.state
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
                                    <div className="ant-card-meta-description" title={item.description}>{item.description}</div>
                                </div>
                            </Card>
                        })
                    }

                </div>

                {/* 文章详情抽屉 */}
                <Drawer
                    title={currentDoc.title}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    width='50vw'
                    bodyStyle={{
                        width: '50vw'
                    }}
                >
                    <Spin className={style.spin} size="large" spinning={loading}></Spin>
                    <div className={style.docDetailContent} dangerouslySetInnerHTML={{ __html: docDetail }}></div>
                </Drawer>
            </div>
        );
    }
}



import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import './news.css';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "/images/cryptonews.jpeg";

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })
    
    if (!cryptoNews?.value) return 'Loading...';
    
    return (
        <div>
            <Row gutter={[ 24, 24 ]}>
                {!simplified && (
                    <Col span={24}>
                        <Select showSearch 
                            className="select-news" 
                            placeholder="Select a Crypto" 
                            optionFilterProp='children' 
                            onChange={(value) => console.log(value)}
                            filterOption={(input, option) => option.children.toLowerCase()}>

                        </Select>
                    </Col>
                )}
                {cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{news.name}</Title>
                                    <img style={{ maxWidth: '200px', maxHeight: '100px'}} src={ news?.image?.thumbnail?.contentUrl || demoImage } alt=""/>
                                </div>
                                <p>
                                    {news.description > 50 ? `${news.description.substring(0, 50)}...` : news.description }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } />
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News

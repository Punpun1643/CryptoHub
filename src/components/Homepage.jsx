import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { Cryptocurrencies, News } from '../components';

//API
import { useGetCryptosQuery } from '../services/cryptoApi'; 

const { Title } = Typography;

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

//Fetch data from API using Redux Toolkit



const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...';

    return (
        <div>
            <Title level={2} className="heading"><Emoji symbol="📈"/> Global Crypto Statistics</Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={globalStats.total}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic>
                </Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title"><Emoji symbol="🏆"/> Top 10 Cryptocurrencies Globally</Title>
                <Title level={4} className="show-more">
                    <Link to="/cryptocurrencies"><Emoji symbol="👀"/> Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified={true} header={true}/>
            <div className="home-heading-container">
                <Title level={2} className="home-title"><Emoji symbol="🗞️"/> Latest Crypto News</Title>
                <Title level={4} className="show-more">
                    <Link to="/news"><Emoji symbol="🧠"/> Read More</Link>
                </Title>
            </div>
            <News simplified={true}/>
        </div>
    )
}

export default Homepage

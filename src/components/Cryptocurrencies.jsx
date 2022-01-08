import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Typography } from 'antd';

import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import "./cryptocurrencies.css";

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

const Cryptocurrencies = ({simplified, header}) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [ cryptos, setCryptos ] = useState([]);
    const [ searchTerm , setSearchTerm ] = useState(''); 

    //for searching of cryptocurrencies
    useEffect(() => {    
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return 'Loading...';

    return (
        <div>
            {!simplified && (<div className="search-crypto">
                <Input className="searchBar" placeholder="Search Cryptocurrency..." onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>)}
            {!header ? <Title level={2} className="heading"><Emoji symbol="🚀"/> Cryptocurrencies Info</Title> : <></>}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card className="cryptoCard" title={`${currency.rank}.${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} alt=""/>} hoverable>
                                <p><span style={{color: "#0071BD"}}>Price:</span> {millify(currency.price)}</p>
                                <p><span style={{color: "#0071BD"}}>Market Cap:</span> {millify(currency.marketCap)}</p>
                                <p>Daily Change: <span style={millify(currency.change) > 0 ? {color: "#05CE91"} : {color: "red"}}>{millify(currency.change)}% </span></p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
// #0071bd
export default Cryptocurrencies

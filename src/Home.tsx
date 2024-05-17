import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './index.css'
import './home.scss';

interface Crypto {
    id: number;
    name: string;
    symbol: string;
    cmc_rank: number;
    quote: {
        USD: {
            price: number;
            market_cap: number;
            volume_24h: number;
            percent_change_24h: number;
        };
    };
    circulating_supply: number;
    total_supply?: number;
}

const Home = () => {
    const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            // Verwende den lokalen Proxy-Server
            const response = await fetch('http://localhost:5001');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

            setCryptoData(result.data);
        } catch (error) {
            console.log('Error fetching data from CoinMarketCap API:', error);
        }

    };

    const formatCurrency = (value: number, maximumFractionDigits: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: maximumFractionDigits,
        }).format(value);

    };

    const getChangeColor = (percentChange: number) => {
        if (percentChange > 0) {
            return '#64ed76';
        } else if (percentChange < 0) {
            return 'red';
        } else {
            return 'white';
        }
    };

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <div className='marketHeader'>
                    <h1>Market Update</h1>
                    <button className='toggleCryptos' onClick={handleToggleShowMore}>
                        {showMore ? 'Show less' : 'Show more'}
                    </button>
                </div>

                <table className='cryptos'>
                    <tr className='tableHead'>
                        <th className='name'>Coin</th>
                        <th className='price'>Price</th>
                        <th className='change'>24h Change</th>
                        <th className='marketCap'>Market Cap</th>
                    </tr>
                    {cryptoData.slice(0, showMore ? cryptoData.length : 10).map((crypto: any) => (
                        <tr>
                            <td className='name'>{crypto.name}</td>
                            <td className='price'>{formatCurrency(crypto.quote.USD.price.toFixed(2), 2)}</td>
                            <td className='change' style={{ color: getChangeColor(crypto.quote.USD.percent_change_24h) }}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</td>
                            <td className='marketCap'>{formatCurrency(crypto.quote.USD.market_cap, 0)}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
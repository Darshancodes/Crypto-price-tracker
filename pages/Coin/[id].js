import Layout from '../../components/Layout';
import syles from './Coin.module.css';

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={StyleSheet.coin_page}>
        <div className={styles.coin_container}>
          <img 
          src={coin.image.large}
          alt={coin.name}
          className={styles.coin.image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>
            {coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;
        
  const res = await fetch(`{https://api.coingecko.com/api/v3/coins/${bitcoin}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true}`)

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
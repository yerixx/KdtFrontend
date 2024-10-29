import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Header = styled.header`
  font-size: 32px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.accentColor};
`;
const Overview = styled.div`
  width: 600px;
  color: ${(props) => props.theme.bgColor};
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 10px;

  background: ${(props) => props.theme.textColor};
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;
const Description = styled.div`
  width: 600px;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 10px;
  background: ${(props) => props.theme.accentColor};
`;

interface RouterParams {
  [key: string]: string | undefined;
  coinId: string;
}

interface LocationState {
  state: string;
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  const params = useParams();
  const coinId = params.coinId;

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : info?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${priceInfo?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            <b>[Information of {info?.type}]</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            consequatur fuga dignissimos voluptates quibusdam distinctio
            perferendis, suscipit explicabo repellendus. Debitis ab molestias
            voluptatibus quos laboriosam, nobis nemo odit sapiente impedit.
            Vero, accusamus odit! Inventore eos ipsam maiores atque tenetur
            consectetur? Ipsam hic magni consequuntur quas dolores deleniti enim
            fugiat qui at ab ad iusto ipsum tenetur impedit, minus laudantium
            laborum. Perspiciatis fuga nihil facilis explicabo aspernatur autem.
            Ad repellat autem vel consequuntur asperiores nam voluptates quos
            hic perspiciatis quas corrupti sapiente nihil mollitia earum, est
            nostrum, ipsam, porro reiciendis debitis!
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply :</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply :</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
};

export default Coin;

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
const Container = styled.div`
  margin-top: 20px;
`;

interface CoinHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  // console.log(coinId);
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinsHistory(coinId),
    refetchInterval: 5000,
  });
  console.log(data);
  // console.log(isLoading, data);
  return (
    <Container>
      {isLoading ? (
        "Loading Chart"
      ) : (
        <ReactApexChart
          width={600}
          type="line"
          series={[
            {
              name: "Hello",
              data: data?.map((price) => Number(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: "linear-gradient(to top,#5ee7df 0%,#b490ca 100%",
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            colors: ["#b490ca"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#5ee7df"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </Container>
  );
};

export default Chart;

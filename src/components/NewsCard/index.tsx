import { FunctionComponent, useEffect, useState } from 'react';
import { Card, Skeleton } from 'antd';
import DataService from 'services/DataService';
import { TNews } from 'types/TNews';

type TProps = {
  id: number;
}

const NewsCard: FunctionComponent<TProps> = ({ id }: TProps) => {
  const [news, setNews] = useState<TNews>();

  const normalizeDate = (incomeDate: number): string => {
    const date = new Date(incomeDate * 1000);
    return `${date.toUTCString()}`;
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await DataService.getNewsById(id);
      setNews(result);
    };
    loadData();
  }, [])

  return news ? (
    <Card title={news.title} style={{
      borderBottom: '1px solid #C0C0C0',
      marginBottom: '10px'
    }}>
      <div style={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems: 'center'
      }}>
        <p style={{flex: 1}}>Author: {news.by}</p>
        <p style={{flex: 1}}>Rating: {news.score}★</p>
        <p style={{flex: 1}}>Posted on {normalizeDate(news.time)}</p>
      </div>
  </Card>) : <Skeleton />;
};

export default NewsCard;

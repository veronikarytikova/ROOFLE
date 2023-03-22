import { useNavigate, useParams } from "react-router-dom";
import { FunctionComponent, useEffect } from 'react';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Button, Typography, Spin } from 'antd';

const { Title } = Typography;

const NewsDetailPage: FunctionComponent = () => {
  const { id } = useParams();
  const { loadNews } = useActions();
  const { news, loading, error } = useTypedSelector(state => state.news);
  const navigate = useNavigate();

  const normalizeDate = (incomeDate: number): string => {
    const date = new Date(incomeDate * 1000);
    return `${date.toUTCString()}`;
  };

  const loadData = async () => {
    loadNews(Number(id));
  };

  useEffect(() => { 
    loadData();
  }, [])

  return <>
  {!loading && news 
  ? <div style={{width:'60%', margin: '20px auto'}}>
      <Title level={2}>{news.title}</Title>
      <a href={news.url}>{news?.url}</a>
      <p>Posted on {normalizeDate(news.time)}</p>
      <p style={{flex: 1}}>Author: {news.by}</p>
      <p>Comments: {news.kids ? news.kids.length : 'No comments'}</p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button type='primary' onClick={() => navigate(-1)} style={{width: '30%'}}>Return to the list</Button>
        <Button type='primary' onClick={() => loadData()} style={{width: '30%'}}>Reload</Button>
      </div>
    </div>
  : <Spin tip="Loading" size="large"></Spin>
  }
  </>
};

export default NewsDetailPage;
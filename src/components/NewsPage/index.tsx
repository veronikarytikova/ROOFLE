import React, { FunctionComponent, useEffect } from "react";
import { Button, Typography, Spin } from 'antd';
import NewsCard from "components/NewsCard";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Link } from "react-router-dom";

const { Title } = Typography;
const RELOAD_IN_ONE_MINUT = 60000;

const NewsPage: FunctionComponent = () => {
  const { loadIDs } = useActions();
  const { newsIDs, loading } = useTypedSelector(state => state.ids);

  const loadData = async () => {
    loadIDs()
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadData();
    }, RELOAD_IN_ONE_MINUT);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Title level={2}>Hacker News</Title>
      <Button type="primary" style={{marginBottom: 15}} onClick={loadData}>
        Refresh news
      </Button>
      {!loading ?
        newsIDs.map(newsID => <Link to={newsID.toString()}><NewsCard id={newsID} key={newsID} /></Link>) 
        : <div>
          <Spin tip="Loading" size="large"></Spin>
          </div>
      }
    </>
  );
}

export default NewsPage;
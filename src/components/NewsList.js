import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "@emotion/styled";
import axios from "axios";
import { getData } from "../api/newsApi";
import { BounceLoader } from "react-spinners";

const NewsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 0 auto;
  width: 768px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 초기 데이터 객체
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
  publishedAt: "2024-04-26",
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null); // 초기값은 null
  const [loading, setLoading] = useState(false); // 로딩될 때 뭐 하는거임

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const getData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_API_KEY}`,
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getData();
  }, [category]);

  if (loading) {
    return (
      <NewsListStyle>
        <h2>
          <BounceLoader
            color="#36d7b7"
            size={100}
            cssOverride={{ position: "absolute", left: "50%", top: "50%" }}
          />
        </h2>
      </NewsListStyle>
    );
  }

  // 아직 articles 값이 설정되지 않았을 때
  // map 함수를 사용하기 전에 해당 값이 null인지 검사
  if (!articles) {
    return null;
  }

  return (
    <NewsListStyle>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListStyle>
  );
};

export default NewsList;

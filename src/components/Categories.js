import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesStyle = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  gap: 15px;
  /* justify-content: center; */

  @media screen and (max-width: 768px) {
    width: auto;
    /* overflow-x: auto; // 스크롤바가 생김 */
    display: flex;
    flex-wrap: wrap;
  }
`;

// NavLink를 확장한다
const NavLinkStyle = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  padding-bottom: 0.25rem;

  &:hover {
    // #22b8cf , 블루
    // #ababab , 회색
    color: #b8b8b8;
  }
  /* 
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #ff0000;
    color: #ff0000;
  } */
  /* ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #ff0000;
      color: #ff0000;
    `}, 이거 오류 뜸 */
`;

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <CategoriesStyle>
      {categories.map(category => (
        <NavLinkStyle
          key={category.name}
          to={category.name === "all" ? "/" : `/${category.name}`}
          // className={({ isActive }) => (isActive ? "active" : undefined)}, 이거 오류 뜸
        >
          {category.text}
        </NavLinkStyle>
      ))}
    </CategoriesStyle>
  );
};

export default Categories;

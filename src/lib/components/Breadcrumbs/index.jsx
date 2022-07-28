import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

export const Breadcrumb = (props) => {
  const linksSize = props.links?.length - 1;

  return (
    <S.Wrapper>
      {props.links &&
        props.links.map((link, index) =>
          index === linksSize ? 
          <span key={index}> {link}</span>
          : 
          <span key={index}> {link} /</span>
        )}
    </S.Wrapper>
  );
};

Breadcrumb.propTypes = {
  links: PropTypes.oneOf(["History", "Create", "Settings"]),
};

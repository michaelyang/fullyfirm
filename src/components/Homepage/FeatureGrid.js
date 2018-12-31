import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

const FeaturedSectionContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'main side1' 'main side2';
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'main main' 'side1 side2';
  }
`;
const FeaturedPost = styled.div`
  position: relative;
  grid-area: ${props => {
    switch (props.index) {
      case 0:
        return 'main';
      case 1:
        return 'side1';
      case 2:
        return 'side2';
    }
  }};
`;
const PostText = styled.div`
  position: absolute;
  top: 50%;
  bottom: auto;
  left: auto;
  margin: 0 5%;
  padding: 10% 0;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);
  color: var(--ff-beige);
  font-size: 2.4rem;
`;
const ImageLink = styled(Link)`
  height: 100%;
`;

const FeatureGrid = ({ featuredPosts }) => (
  <FeaturedSectionContainer>
    {featuredPosts.map(({ node: post }, index) => (
      <FeaturedPost key={post.id} index={index}>
        <ImageLink to={post.fields.slug}>
          <PreviewCompatibleImage
            imageInfo={{
              alt: post.frontmatter.title,
              image: post.frontmatter.cover_image,
              style: { height: '100%' }
            }}
          />
        </ImageLink>
        <PostText>{post.frontmatter.title}</PostText>
      </FeaturedPost>
    ))}
  </FeaturedSectionContainer>
);

FeatureGrid.propTypes = {
  featuredPosts: PropTypes.array
};

export default FeatureGrid;

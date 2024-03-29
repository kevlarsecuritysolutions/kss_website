import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({title, description, image, slug, children}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
            favicon: file(name: {eq: "favicon"}){
                publicURL
            }
            social: file(name: {eq: "prius"}){
                publicURL
            }
        }
    
    `);
    return (
        <Helmet 
        htmlAttributes= {{lang: `en`}}
        titleTemplate= {`${data.site.siteMetadata.title} | %s`}
        >
            <title>{title}</title>
            <meta 
                name= "description" 
                content= {description || data.site.siteMetadata.description}/>
            <link rel= 'canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`}/>
            <link rel= "shortcut icon" href={data.favicon.publicURL}/>
            <meta name='og:description' content= {description || data.site.siteMetadata.description}/>
            {/* <meta name= 'og:image' content= {`${data.site.siteMetadata.siteUrl}${image || data.social.publicURL}`}/> */}
            <meta name= 'og:type' content="website"/>
            <meta name= "og:url" content= {`${data.site.siteMetadata.siteUrl}/${slug}`}/>
            <meta name="og:site_name" content= {data.site.siteMetadata.title}/>
            {children}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    children: PropTypes.node,
};

export default SEO
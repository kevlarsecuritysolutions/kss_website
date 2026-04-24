import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({title, description, image, slug, schema, children}) => {

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

    const siteUrl = data.site.siteMetadata.siteUrl;
    const metaDescription = description || data.site.siteMetadata.description;
    const ogImage = `${siteUrl}${image || data.social.publicURL}`;

    // Always use a trailing slash so the canonical matches Gatsby's default served URL
    const canonicalSlug = slug ? (slug.endsWith('/') ? slug : `${slug}/`) : '/';
    const canonicalUrl = `${siteUrl}${canonicalSlug}`;

    const pageTitle = title;

    const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kevlar Security Solutions",
        "url": siteUrl,
        "telephone": "+61362082777",
        "email": "info@kevlarsecuritysolutions.com.au",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "GPO Box 550",
            "addressLocality": "Hobart",
            "addressRegion": "TAS",
            "postalCode": "7001",
            "addressCountry": "AU"
        },
        "description": data.site.siteMetadata.description,
        "areaServed": "Tasmania, Australia",
        "sameAs": [
            "https://www.facebook.com/ksshobart/"
        ]
    };

    // Service schema: pages pass minimal fields; Seo.js injects url, provider, areaServed
    const serviceData = schema ? {
        "@context": "https://schema.org",
        ...schema,
        "url": canonicalUrl,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Kevlar Security Solutions",
            "url": siteUrl,
        },
        "areaServed": {
            "@type": "State",
            "name": "Tasmania",
            "addressCountry": "AU"
        }
    } : null;

    return (
        <Helmet
        htmlAttributes= {{lang: `en`}}
        titleTemplate="%s"
        >
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="shortcut icon" href={data.favicon.publicURL} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={data.site.siteMetadata.title} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* LocalBusiness Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessData)}
            </script>

            {/* Service Structured Data */}
            {serviceData && (
                <script type="application/ld+json">
                    {JSON.stringify(serviceData)}
                </script>
            )}

            {children}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    schema: PropTypes.object,
    children: PropTypes.node,
};

export default SEO
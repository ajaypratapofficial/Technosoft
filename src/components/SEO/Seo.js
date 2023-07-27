import React from 'react'
import { Helmet } from 'react-helmet'


const Seo = ({
    children,
    title="technosoft hunter",
    description="description",
    keyboards="description",
    author="author"
    //these are default parameters
}) => {
  return (
    <div>
        <Helmet>
        <meta name="description" content={description} />
        <meta name="keyboards" content={keyboards} />
        <meta name="author" content={author} />
        <title>{title}</title>
        </Helmet>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Seo
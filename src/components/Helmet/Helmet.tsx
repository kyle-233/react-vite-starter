import { Helmet as RHelmet } from 'react-helmet'

export const Helmet = () => {
  return (
    <RHelmet defaultTitle="Home | Vessel" titleTemplate="%s | Vessel">
      {/* title attributes and value */}
      <title>Home</title>

      {/* multiple meta elements */}
      <meta name="description" content="Vessel" />
      <meta property="og:type" content="article" />
    </RHelmet>
  )
}

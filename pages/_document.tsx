import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
        </Head>
        <body className="class-body-sue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
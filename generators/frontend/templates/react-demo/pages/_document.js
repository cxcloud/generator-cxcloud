import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" defer></script>
          <script src="https://cdn.timekit.io/booking-js/v2/booking.min.js" defer></script>
          <script src='http://fullcalendar.io/js/fullcalendar-2.1.1/lib/jquery.min.js'></script>
          <script src='http://fullcalendar.io/js/fullcalendar-2.1.1/lib/moment.min.js'></script>
          <script src="http://fullcalendar.io/js/fullcalendar-2.1.1/lib/jquery-ui.custom.min.js"></script>
          <script src='http://fullcalendar.io/js/fullcalendar-2.1.1/fullcalendar.min.js'></script>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

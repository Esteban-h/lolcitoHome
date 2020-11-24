import Document, { Head, Html, Main, NextScript } from 'next/document'

 class MyDocument extends Document {
    render() {
        return (
            <Html>
                 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                <Head>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>


        )
    }
}

export default MyDocument
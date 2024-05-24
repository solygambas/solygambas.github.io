import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import i18nextConfig from "../next-i18next.config";

interface DocumentProps extends DocumentInitialProps {
  currentLocale: string;
}

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const currentLocale = ctx.query.locale || i18nextConfig.i18n.defaultLocale;
    return { ...initialProps, currentLocale };
  }

  render() {
    const { currentLocale } = this.props;
    return (
      <Html lang={currentLocale as string}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

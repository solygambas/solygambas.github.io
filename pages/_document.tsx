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
  static override async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const rawLocale = Array.isArray(ctx.query.locale)
      ? ctx.query.locale[0]
      : ctx.query.locale;
    const currentLocale = rawLocale ?? i18nextConfig.i18n.defaultLocale;
    return { ...initialProps, currentLocale };
  }

  override render() {
    const { currentLocale } = this.props;
    return (
      <Html lang={currentLocale}>
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

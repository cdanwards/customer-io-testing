// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            id="SomeIDfortheScript"
            src="https://assets.customer.io/assets/track.js"
            onLoad={() => console.log("script has loaded")}
          >
            {`var a, b, c;
              a = function (f) {
                return function () {
                  _cio.push(
                    [f].concat(Array.prototype.slice.call(arguments, 0))
                  );
                };
              };
              b = [
                "load",
                "identify",
                "sidentify",
                "track",
                "page",
                "on",
                "off",
              ];
              for (c = 0; c < b.length; c++) {
                _cio[b[c]] = a(b[c]);
              }
              var t = document.createElement("script"),
                s = document.getElementsByTagName("script")[0];
              t.async = true;
              t.id = "cio-tracker";
              t.setAttribute("data-site-id", "f21a9e32dd81293dd17f");
              t.setAttribute("data-use-array-params", "true");
              t.setAttribute("data-use-in-app", "true");
              t.src = 'https://assets.customer.io/assets/track.js';
              s.parentNode.insertBefore(t, s);
              s`}
          </Script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(){var e=window.cio=window.cio||[];if(!e.initialize)if(e.invoked)e.invoked&&console.error("Customer.io snippet included twice.");else{e.invoked=!0,
                e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"],
                e.factory=function(t){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(t),e.push(n),e}};for(var t=0;t<e.methods.length;t++){var n=e.methods[t];e[n]=e.factory(n)}
                e.load=function(t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://assets.customer.io/assets/track.js",
                n.onload=function(){e.load(),e.page()},document.getElementsByTagName("head")[0].appendChild(n)}}();
                cio.load("f21a9e32dd81293dd17f");
                // Call cio.identify here if you have user info at this point
              `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

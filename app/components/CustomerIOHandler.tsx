"use client";
import { useEffect, useState } from "react";

const CUSTOMERIO_SITE_ID = "f21a9e32dd81293dd17f";

export default function CustomerIOInit() {
  const [customerIO, setCustomerIO] = useState();

  useEffect(() => {
    var _cio = _cio || [];
    (function () {
      let a, b, c;
      a = function (f) {
        return function () {
          _cio.push([f].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      b = ["load", "identify", "sidentify", "track", "page"];
      for (c = 0; c < b.length; c++) {
        _cio[b[c]] = a(b[c]);
      }

      var t = document.createElement("script"),
        s = document.getElementsByTagName("script")[0];
      t.async = true;
      t.id = "cio-tracker";
      t.setAttribute("data-site-id", CUSTOMERIO_SITE_ID);
      t.setAttribute("data-base-url", "https://customerioforms.com");
      t.setAttribute("data-use-array-params", "true");

      // To disable in-app messages, remove the two lines below
      t.setAttribute("data-in-app-org-id", "undefined");
      t.setAttribute("data-use-in-app", "true");
      // If data-in-app-org-id was not filled above, go to
      // the following link to find it: https://fly.customer.io/env/Last/settings/actions/in_app

      t.src = "https://assets.customer.io/assets/track.js";

      s?.parentNode?.insertBefore(t, s);
    })();

    setCustomerIO(_cio);
  }, []);
}

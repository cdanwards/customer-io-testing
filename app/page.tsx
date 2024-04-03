"use client";
import { useState } from "react";
import { customerIoIdentify, customerIoTrack } from "./utils/customerIoUtils";
import InputComponent from "./components/InputComponent";
import Script from "next/script";

export default function Home() {
  const [siteID, setSiteID] = useState<string>("");
  const [siteIDhasBeenSet, setIDhasBeenSet] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {siteIDhasBeenSet ? (
        <Script
          id="idForNext"
          dangerouslySetInnerHTML={{
            __html: `
          var _cio = _cio || [];
          (function() {
              var a,b,c;a=function(f){return function(){_cio.push([f].
              concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
              "sidentify","track","page","on","off"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
              var t = document.createElement('script'),
                  s = document.getElementsByTagName('script')[0];
              t.async = true;
              t.id    = 'cio-tracker';
              t.setAttribute('data-site-id', "${siteID}");
              t.setAttribute('data-use-array-params', 'true');
              t.setAttribute('data-use-in-app', 'true');
              t.setAttribute('data-cross-site-support', true);
              t.src = 'https://assets.customer.io/assets/track.js';
              s.parentNode.insertBefore(t, s);
          })()`,
          }}
        ></Script>
      ) : null}
      {!siteIDhasBeenSet ? (
        <>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Customer IO Testing
            </p>
          </div>
          <InputComponent
            name="siteID"
            label="siteID"
            placeholder="Id Here"
            value={siteID}
            setValue={setSiteID}
            type="text"
          />
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {siteID}
          </p>

          <button
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              setIDhasBeenSet(true);
            }}
          >
            Click me to set id
          </button>
        </>
      ) : (
        <>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {`Site ID has been set: ${siteID}`}
            </p>
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              customerIoTrack({
                name: "pressingTheButtonOnDevSite",
                data: { extraDataObject: "TestingThisOut" },
              });
            }}
          >
            Click me to send event
          </button>
        </>
      )}
    </main>
  );
}

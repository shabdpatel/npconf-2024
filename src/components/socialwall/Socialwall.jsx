import React, { useEffect, useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Socialwall = () => {
    const [twitterError, setTwitterError] = useState(false);

    useEffect(() => {
        // Load Twitter widgets script
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => setTwitterError(false);
        script.onerror = () => setTwitterError(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 md:mb-5 text-center">Our Social Wall</h2>
            <p className="text-center text-gray-300 text-2xl mb-8">Get updated on our latest events and workshops</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* <div className="bg-white shadow-md rounded-lg p-4">
                   
                    {twitterError ? (
                        <p className="text-center text-red-500">Failed to load Twitter content.</p>
                    ) : (
                        <TwitterTweetEmbed tweetId="1806178714134176000" />
                    )}
                </div> */}
                {/* <div className="bg-white shadow-md rounded-lg p-4">
                   
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7211943110178684928"
                        height="1047"
                        width="504"
                        frameBorder="0"
                        allowFullScreen=""
                        title="Embedded LinkedIn post">
                    </iframe>
                </div> */}
            </div>
        </div>
    );
}

export default Socialwall;

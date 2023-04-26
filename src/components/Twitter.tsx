import type { IContentItem } from "@kontent-ai/delivery-sdk";


export const Twitter = ({ linkedItem }: { linkedItem: IContentItem }) => {
    debugger;
    let tweetLink = linkedItem?.elements.tweet_link.value;
    let tweetID = tweetLink.match('^.*twitter.com/.*/(\\d+)/?.*$')[1];

    let selectedTheme = linkedItem?.elements.theme.value[0].codename;
    selectedTheme = selectedTheme ? selectedTheme : 'light';

    return (
        <>
            <iframe 
            id="twitter-widget-0" 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen="true" 
            className="" 
            style={{position: "static", visibility: "visible", width: "550px", height: "604px", display: "block", flexGrow: 1}} title="Twitter Tweet" 
            src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=879265763978358784&amp;lang=en&amp;origin=https%3A%2F%2Fkontent-sample-app-react.netlify.app%2F&amp;sessionId=0ee137e08ff8ca87d7138b1149ed8c67e6eb91a6&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px"
            data-tweet-id={tweetID}>
             </iframe>
        </>
    );
}
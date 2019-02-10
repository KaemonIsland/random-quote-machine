import React from 'react';

const TwitterLink = props => {
  return (
    <button>
      <a
        href={`https://twitter.com/intent/tweet?text=${props.quote.text}%0A-${props.quote.author}`}
        target="_blank"
        rel="noopener noreferrer"
        id="tweet-quote" >
      Share on Twitter
      </a>
    </button >
  )
}

export default TwitterLink;
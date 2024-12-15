export interface EmbedConfig {
  type: 'twitter' | 'instagram' | 'facebook';
  url: string;
  embedCode: string;
}

// Regex patterns for social media URLs
const SOCIAL_PATTERNS = {
  twitter: /https?:\/\/(www\.)?twitter\.com\/\w+\/status\/\d+/g,
  instagram: /https?:\/\/(www\.)?instagram\.com\/p\/[\w-]+\/?/g,
  facebook: /https?:\/\/(www\.)?facebook\.com\/([\w.]+\/)?posts\/\d+/g
};

export function detectSocialLinks(text: string): string[] {
  const links: string[] = [];
  
  Object.values(SOCIAL_PATTERNS).forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      links.push(...matches);
    }
  });

  return links;
}

export function getSocialEmbedCode(url: string): EmbedConfig | null {
  // Twitter
  if (SOCIAL_PATTERNS.twitter.test(url)) {
    const tweetId = url.split('/').pop();
    return {
      type: 'twitter',
      url,
      embedCode: `<div class="twitter-embed flex justify-center" data-tweet-id="${tweetId}" data-conversation="none"></div>`
    };
  }
  
  // Instagram
  if (SOCIAL_PATTERNS.instagram.test(url)) {
    const postId = url.split('/p/')[1]?.split('/')[0];
    return {
      type: 'instagram',
      url,
      embedCode: `<div class="instagram-embed flex justify-center" data-post-id="${postId}" data-caption="false"></div>`
    };
  }

  // Facebook
  if (SOCIAL_PATTERNS.facebook.test(url)) {
    return {
      type: 'facebook',
      url,
      embedCode: `<div class="facebook-embed flex justify-center" data-href="${url}" data-show-text="false"></div>`
    };
  }

  return null;
}
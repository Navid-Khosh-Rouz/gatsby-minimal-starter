module.exports = {
  tHome: ' deHome',
  tRelativePosts: ' deRelative Posts',
  tFollowTwitterDescription: ' deYou should follow him on Twitter',
  tTags: ' deTags',
  tIndTitle: ' deAll posts',
  taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: ({ count, from, to }) => `${count} Posts (${from} - ${to})`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} post${totalCount === 1 ? '' : ' des'} tagged with "${tag}"`,
  t404Title: ' deNot Found',
  t404Content: ' deYou just hit a route that doesn&#39;t exist... the sadness.',
};

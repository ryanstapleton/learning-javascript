const blog = {
  title: 'My great post',
  // summary: 'Summary of my post'
}

                                    // default value
const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);
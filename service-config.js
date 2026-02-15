// Script to generate service page content
const services = [
    {
        filename: 'paid-advertising.html',
        title: 'Paid Advertising',
        breadcrumb: 'Paid Advertising',
        tagline: 'Maximize ROI with targeted paid advertising campaigns that convert clicks into customers.',
        ctaText: 'Get Free Ad Audit',
        description: 'Paid Advertising (PPC) is a powerful way to reach your target audience instantly. From Google Ads to Facebook Ads, we create data-driven campaigns that maximize your return on ad spend (ROAS) and drive qualified leads to your business.',
        processTitle: 'Our Paid Advertising Process',
        processSubtitle: 'A proven 6-step methodology for profitable ad campaigns',
        steps: [
            { title: 'Campaign Strategy', desc: 'Define goals, target audience, budget allocation, and KPIs for success.' },
            { title: 'Platform Selection', desc: 'Choose the right platforms (Google, Facebook, LinkedIn, Instagram) for your audience.' },
            { title: 'Ad Creation', desc: 'Design compelling ad copy and creatives that grab attention and drive action.' },
            { title: 'Targeting Setup', desc: 'Configure precise audience targeting based on demographics, interests, and behavior.' },
            { title: 'Campaign Launch', desc: 'Launch campaigns with proper tracking, conversion pixels, and analytics setup.' },
            { title: 'Optimization', desc: 'Continuously test, analyze, and optimize for better performance and lower costs.' }
        ],
        benefits: [
            { emoji: '🎯', title: 'Instant Visibility', desc: 'Appear at the top of search results and social feeds immediately.' },
            { emoji: '💰', title: 'High ROI', desc: 'Pay only for results with optimized campaigns that deliver measurable returns.' },
            { emoji: '📊', title: 'Precise Targeting', desc: 'Reach exactly the right audience with advanced targeting options.' },
            { emoji: '⚡', title: 'Fast Results', desc: 'Start generating leads and sales within days, not months.' },
            { emoji: '📈', title: 'Scalable Growth', desc: 'Easily scale successful campaigns to drive exponential growth.' },
            { emoji: '🔍', title: 'Full Transparency', desc: 'Track every click, conversion, and rupee spent with detailed reporting.' }
        ]
    },
    {
        filename: 'social-media-marketing.html',
        title: 'Social Media Marketing',
        breadcrumb: 'Social Media Marketing',
        tagline: 'Build brand awareness and engage your audience with strategic social media marketing.',
        ctaText: 'Get Free Social Audit',
        description: 'Social Media Marketing is about building relationships, not just followers. We create engaging content, manage your social presence, and run targeted campaigns across Facebook, Instagram, LinkedIn, and Twitter to help you connect with your audience and drive business results.',
        processTitle: 'Our Social Media Process',
        processSubtitle: 'A proven 6-step approach to social media success',
        steps: [
            { title: 'Strategy Development', desc: 'Define brand voice, content pillars, and platform-specific strategies.' },
            { title: 'Content Planning', desc: 'Create a content calendar with engaging posts, stories, and campaigns.' },
            { title: 'Content Creation', desc: 'Design eye-catching graphics, videos, and copy that resonates with your audience.' },
            { title: 'Community Management', desc: 'Engage with followers, respond to comments, and build relationships.' },
            { title: 'Paid Social Campaigns', desc: 'Run targeted ad campaigns to amplify reach and drive conversions.' },
            { title: 'Analytics & Reporting', desc: 'Track engagement, growth, and ROI with comprehensive analytics.' }
        ],
        benefits: [
            { emoji: '👥', title: 'Audience Growth', desc: 'Build a loyal following of engaged customers and brand advocates.' },
            { emoji: '💬', title: 'Brand Engagement', desc: 'Foster meaningful conversations and build strong customer relationships.' },
            { emoji: '🎨', title: 'Creative Content', desc: 'Stand out with visually stunning and engaging social content.' },
            { emoji: '📱', title: 'Multi-Platform', desc: 'Maintain consistent presence across all major social platforms.' },
            { emoji: '🚀', title: 'Viral Potential', desc: 'Create shareable content that amplifies your brand organically.' },
            { emoji: '📊', title: 'Data-Driven', desc: 'Make informed decisions based on social media analytics and insights.' }
        ]
    },
    {
        filename: 'content-marketing.html',
        title: 'Content Marketing',
        breadcrumb: 'Content Marketing',
        tagline: 'Attract, engage, and convert your audience with high-quality content that drives results.',
        ctaText: 'Get Free Content Strategy',
        description: 'Content Marketing is the art of creating valuable, relevant content that attracts and retains your target audience. From blog posts to infographics, we create content that educates, entertains, and converts—helping you build authority and drive organic growth.',
        processTitle: 'Our Content Marketing Process',
        processSubtitle: 'A proven 6-step content creation methodology',
        steps: [
            { title: 'Content Audit', desc: 'Analyze existing content and identify gaps and opportunities.' },
            { title: 'Strategy Development', desc: 'Define content goals, topics, formats, and distribution channels.' },
            { title: 'Content Creation', desc: 'Produce high-quality blog posts, articles, videos, and infographics.' },
            { title: 'SEO Optimization', desc: 'Optimize content for search engines with keywords and best practices.' },
            { title: 'Distribution', desc: 'Publish and promote content across multiple channels for maximum reach.' },
            { title: 'Performance Tracking', desc: 'Monitor engagement, traffic, and conversions to refine strategy.' }
        ],
        benefits: [
            { emoji: '📝', title: 'Quality Content', desc: 'Well-researched, engaging content that provides real value to your audience.' },
            { emoji: '🔍', title: 'SEO Benefits', desc: 'Improve search rankings with optimized, keyword-rich content.' },
            { emoji: '🎓', title: 'Thought Leadership', desc: 'Establish your brand as an industry authority and expert.' },
            { emoji: '💡', title: 'Lead Generation', desc: 'Attract qualified leads with content that addresses their pain points.' },
            { emoji: '♻️', title: 'Evergreen Value', desc: 'Create content that continues to drive traffic and leads over time.' },
            { emoji: '📈', title: 'Measurable ROI', desc: 'Track content performance and demonstrate clear business impact.' }
        ]
    },
    {
        filename: 'email-marketing.html',
        title: 'Email Marketing',
        breadcrumb: 'Email Marketing',
        tagline: 'Nurture leads and drive conversions with personalized email marketing campaigns.',
        ctaText: 'Get Free Email Strategy',
        description: 'Email Marketing remains one of the highest-ROI digital marketing channels. We create personalized email campaigns that nurture leads, build customer loyalty, and drive repeat sales—all while maintaining high deliverability and engagement rates.',
        processTitle: 'Our Email Marketing Process',
        processSubtitle: 'A proven 6-step email campaign methodology',
        steps: [
            { title: 'List Building', desc: 'Grow your email list with opt-in forms, lead magnets, and landing pages.' },
            { title: 'Segmentation', desc: 'Segment subscribers based on behavior, interests, and demographics.' },
            { title: 'Campaign Design', desc: 'Create beautiful, mobile-responsive email templates that convert.' },
            { title: 'Automation Setup', desc: 'Build automated workflows for welcome series, nurture, and re-engagement.' },
            { title: 'A/B Testing', desc: 'Test subject lines, content, and CTAs to optimize performance.' },
            { title: 'Analytics', desc: 'Track open rates, click rates, and conversions to improve results.' }
        ],
        benefits: [
            { emoji: '💌', title: 'High ROI', desc: 'Email marketing delivers $42 for every $1 spent on average.' },
            { emoji: '🎯', title: 'Personalization', desc: 'Send targeted messages based on subscriber behavior and preferences.' },
            { emoji: '🤖', title: 'Automation', desc: 'Set up automated campaigns that work 24/7 to nurture leads.' },
            { emoji: '📧', title: 'Direct Access', desc: 'Reach customers directly in their inbox without algorithm interference.' },
            { emoji: '📊', title: 'Trackable Results', desc: 'Monitor every open, click, and conversion with detailed analytics.' },
            { emoji: '🔄', title: 'Customer Retention', desc: 'Build loyalty and drive repeat purchases with targeted campaigns.' }
        ]
    },
    {
        filename: 'youtube-marketing.html',
        title: 'YouTube Marketing',
        breadcrumb: 'YouTube Marketing',
        tagline: 'Grow your brand and reach millions with strategic YouTube marketing and video content.',
        ctaText: 'Get Free YouTube Strategy',
        description: 'YouTube Marketing leverages the power of video to reach and engage your audience. As the second-largest search engine, YouTube offers massive potential for brand awareness, lead generation, and customer education. We create compelling video content and optimize your channel for maximum visibility and growth.',
        processTitle: 'Our YouTube Marketing Process',
        processSubtitle: 'A proven 6-step YouTube growth methodology',
        steps: [
            { title: 'Channel Audit', desc: 'Analyze your channel performance, content, and optimization opportunities.' },
            { title: 'Content Strategy', desc: 'Define video topics, formats, and publishing schedule for your audience.' },
            { title: 'Video Production', desc: 'Create high-quality videos with professional editing and storytelling.' },
            { title: 'SEO Optimization', desc: 'Optimize titles, descriptions, tags, and thumbnails for discoverability.' },
            { title: 'Promotion', desc: 'Promote videos across social media, email, and paid advertising.' },
            { title: 'Analytics', desc: 'Track views, watch time, subscribers, and engagement to refine strategy.' }
        ],
        benefits: [
            { emoji: '📹', title: 'Video Dominance', desc: 'Tap into the fastest-growing content format with massive reach potential.' },
            { emoji: '🔍', title: 'Search Visibility', desc: 'Rank on both YouTube and Google search results for maximum exposure.' },
            { emoji: '👥', title: 'Audience Building', desc: 'Build a loyal subscriber base that grows your brand organically.' },
            { emoji: '💰', title: 'Monetization', desc: 'Generate revenue through ads, sponsorships, and affiliate marketing.' },
            { emoji: '🎓', title: 'Education', desc: 'Educate customers with tutorials, demos, and thought leadership content.' },
            { emoji: '📈', title: 'Long-Term Growth', desc: 'Videos continue to drive views and leads long after publishing.' }
        ]
    },
    {
        filename: 'ai-automation.html',
        title: 'AI & Automation',
        breadcrumb: 'AI & Automation',
        tagline: 'Scale your marketing with AI-powered automation and intelligent workflows.',
        ctaText: 'Get Free Automation Audit',
        description: 'AI & Automation transforms how you market your business. From chatbots to predictive analytics, we implement cutting-edge AI tools and automated workflows that save time, reduce costs, and deliver personalized experiences at scale—giving you a competitive edge in the digital landscape.',
        processTitle: 'Our AI & Automation Process',
        processSubtitle: 'A proven 6-step automation implementation methodology',
        steps: [
            { title: 'Process Audit', desc: 'Identify repetitive tasks and processes that can be automated.' },
            { title: 'Tool Selection', desc: 'Choose the right AI and automation tools for your specific needs.' },
            { title: 'Workflow Design', desc: 'Map out automated workflows for lead nurturing, customer service, and more.' },
            { title: 'Implementation', desc: 'Set up and configure automation tools, integrations, and triggers.' },
            { title: 'Training', desc: 'Train AI models and refine automation rules for optimal performance.' },
            { title: 'Optimization', desc: 'Monitor performance and continuously improve automation efficiency.' }
        ],
        benefits: [
            { emoji: '🤖', title: 'AI-Powered Insights', desc: 'Leverage machine learning for predictive analytics and smarter decisions.' },
            { emoji: '⚡', title: 'Time Savings', desc: 'Automate repetitive tasks and free up time for strategic work.' },
            { emoji: '💬', title: 'Chatbots', desc: 'Provide 24/7 customer support with AI-powered chatbots.' },
            { emoji: '🎯', title: 'Personalization', desc: 'Deliver personalized experiences at scale with AI recommendations.' },
            { emoji: '📊', title: 'Data Analysis', desc: 'Process massive datasets to uncover hidden patterns and opportunities.' },
            { emoji: '💰', title: 'Cost Reduction', desc: 'Reduce operational costs while improving efficiency and output.' }
        ]
    },
    {
        filename: 'web-development.html',
        title: 'Web Development',
        breadcrumb: 'Web Development',
        tagline: 'Build fast, beautiful, and conversion-optimized websites that drive business growth.',
        ctaText: 'Get Free Website Audit',
        description: 'Web Development is the foundation of your digital presence. We build modern, responsive websites that not only look stunning but also deliver exceptional user experiences and drive conversions. From landing pages to full e-commerce platforms, we create websites that work as hard as you do.',
        processTitle: 'Our Web Development Process',
        processSubtitle: 'A proven 6-step website development methodology',
        steps: [
            { title: 'Discovery', desc: 'Understand your business goals, target audience, and technical requirements.' },
            { title: 'Design', desc: 'Create wireframes and mockups that prioritize user experience and conversions.' },
            { title: 'Development', desc: 'Build your website with clean code, modern frameworks, and best practices.' },
            { title: 'Optimization', desc: 'Optimize for speed, SEO, mobile responsiveness, and accessibility.' },
            { title: 'Testing', desc: 'Thoroughly test across devices, browsers, and user scenarios.' },
            { title: 'Launch & Support', desc: 'Deploy your website and provide ongoing maintenance and updates.' }
        ],
        benefits: [
            { emoji: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed with fast loading times that improve conversions.' },
            { emoji: '📱', title: 'Mobile-First', desc: 'Fully responsive design that works flawlessly on all devices.' },
            { emoji: '🎨', title: 'Modern Design', desc: 'Beautiful, on-brand design that makes a lasting impression.' },
            { emoji: '🔍', title: 'SEO-Ready', desc: 'Built with SEO best practices for better search engine visibility.' },
            { emoji: '🔒', title: 'Secure', desc: 'Enterprise-grade security to protect your website and customer data.' },
            { emoji: '📈', title: 'Conversion-Focused', desc: 'Designed to turn visitors into customers with strategic CTAs.' }
        ]
    }
];

console.log('Service pages configuration ready');
console.log(`Total services: ${services.length}`);

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Web Scraping Tool Technologies Used:

Axios: For HTTP requests.
Cheerio: HTML parsing.
UUID: Generating unique IDs.
MongoDB: Storage via Mongoose ORM.
How it Works
Scrapes data from book categories through specific URLs.
Utilizes Axios for fetching HTML and Cheerio for parsing.
Extracts book details, creates objects with unique IDs and genres, and stores in MongoDB.

## Technology Selection

Axios: Simplicity in HTTP requests.
Cheerio: Fast, flexible, and suited for HTML parsing.
MongoDB: Known for flexibility and scalability in NoSQL databases.
Data Matching Tool
Technologies Used
Mongoose: MongoDB querying.
String Similarity JS: Calculating title similarity.
Next.js: Handling API requests and for frontend part .
tailwind: For styling

## How it Works

Accepts genre and book title requests.
Queries MongoDB, calculates title similarity, sorts, and returns matched titles with genres and image links.
Technology Choice
Mongoose: Efficient MongoDB interaction and data retrieval.
String Similarity JS: Essential for finding title similarity

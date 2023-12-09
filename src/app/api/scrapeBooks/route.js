import connectDB from '@/dbConfig/dbConfig';
import axios from 'axios';
import cheerio from 'cheerio';
import book from '@/models/booksModal';
import { NextResponse } from 'next/server';
import { randomUUID } from "crypto"

connectDB();

export async function GET(req, res) {
    try {
        // Scrape data from website
        const mysteryUrl = 'https://books.toscrape.com/catalogue/category/books/mystery_3/index.html';
        const mysteryResponse = await axios.get(mysteryUrl);
        const mystery$ = cheerio.load(mysteryResponse.data);

        const travelUrl = 'https://books.toscrape.com/catalogue/category/books/travel_2/index.html';
        const travelResponse = await axios.get(travelUrl);
        const travel$ = cheerio.load(travelResponse.data)

        const scienceUrl = 'https://books.toscrape.com/catalogue/category/books/science_22/index.html';
        const scienceResponse = await axios.get(scienceUrl);
        const science$ = cheerio.load(scienceResponse.data)

        const books = [];

        mystery$('.product_pod').each((index, element) => {
            const title = mystery$(element).find('h3 > a').attr('title');
            const relativeImageLink = mystery$(element).find('img').attr('src');
            const absoluteImageLink = new URL(relativeImageLink, mysteryUrl).href;

            const bookData = new book({
                id: randomUUID(),
                title,
                imageLink: absoluteImageLink,
                genre: 'Mystery'
            });

            books.push(bookData);
        });

        travel$('.product_pod').each((index, element) => {
            const title = travel$(element).find('h3 > a').attr('title');
            const relativeImageLink = travel$(element).find('img').attr('src');
            const absoluteImageLink = new URL(relativeImageLink, travelUrl).href;

            const bookData = new book({
                id: randomUUID(),
                title,
                imageLink: absoluteImageLink,
                genre: 'Travel'
            });

            books.push(bookData);
        });

        science$('.product_pod').each((index, element) => {
            const title = science$(element).find('h3 > a').attr('title');
            const relativeImageLink = science$(element).find('img').attr('src');
            const absoluteImageLink = new URL(relativeImageLink, scienceUrl).href;

            const bookData = new book({
                id: randomUUID(),
                title,
                imageLink: absoluteImageLink,
                genre: 'Science'
            });

            books.push(bookData);
        });

        // Save scraped data to MongoDB
        await book.insertMany(books);
        return NextResponse.json({ message: 'Book saved successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error during scraping:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export default function handler(req, res) {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

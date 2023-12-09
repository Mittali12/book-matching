import { connect } from "@/dbConfig/dbConfig"
import book from "@/models/booksModal"
import { stringSimilarity } from "string-similarity-js";
import { NextResponse } from "next/server"

connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { genre, title } = reqBody;

        const booksData = await book.find({ genre }, { title: 1, genre: 1, imageLink: 1 })

        if (!title) {
            throw Error('Title missing')
        }

        const result = [];

        booksData?.forEach((data) => {
            const rank = stringSimilarity(title, data?.title);
            const temp = {
                title: data?.title,
                genre: data?.genre,
                imageLink: data?.imageLink,
                rank
            }
            if (rank > 0) {
                result.push(temp)
            }
        })

        result.sort((a, b) => b.rank - a.rank);


        return NextResponse.json({
            message: "Message saved successfully",
            success: true,
            data: { result }
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
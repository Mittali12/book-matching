'use client'
import axios from 'axios';
import React, { useState } from 'react'
import Result from './Result';

const HeroSection = () => {
    const [bookName, setBookName] = useState('');
    const [genre, setGenre] = useState('Mystery');
    const [searchData, setSearchData] = useState([])
    const [result, setResult] = useState(false)
    const handleBookNameChange = (e) => {
        setBookName(e.target.value)
    }
    const handleGenre = (e) => {
        setGenre(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bookData = {
                genre: genre,
                title: bookName,
            }
            const resp = await axios.post("http://localhost:3000/api/match-book", bookData)
            setSearchData(resp?.data?.data?.result)
            setResult(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col w-full gap-10 px-10 md:px-20'>
            <div className='bg-gradient-to-r from-[#cde4f4] to-[#e5edf2] py-10 px-10 rounded-lg shadow-lg flex flex-col justify-center items-center gap-10'>
                <h1 className='text-center text-2xl md:text-4xl font-semibold text-[#1a2656]'>
                    Find Matches
                </h1>
                <form className='flex flex-col gap-5 items-center w-full' onSubmit={handleSubmit}>
                    <div className='flex flex-col sm:flex-row gap-4 justify-between items-center w-full'>
                        <label htmlFor="genre" className='text-[#1a2656] text-xl font-semibold'>
                            What genre of books do you enjoy?
                        </label>
                        <select
                            id="genre"
                            name="genre"
                            className='w-full sm:w-1/3 rounded px-2 py-2'
                            onChange={(e) => handleGenre(e)}
                            value={genre}>
                            <option value="Mystery">Mystery</option>
                            <option value="Travel">Travel</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 justify-between items-center w-full'>
                        <label htmlFor="favoriteBook" className='text-[#1a2656] text-xl font-semibold'>Your favorite book? </label>
                        <input
                            type="text"
                            id="favoriteBook"
                            name="favoriteBook"
                            placeholder='write favorite book'
                            required
                            value={bookName}
                            className='w-full sm:w-1/3 rounded px-2 py-2 text-sm'
                            onChange={(e) => handleBookNameChange(e)}
                        />
                    </div>
                    <div className='flex justify-end w-full'>
                        <button
                            className='text-white px-3 py-2 rounded-lg cursor-pointer bg-[#1a2656]'
                            type='submit'
                        >
                            Match data
                        </button>
                    </div>
                </form>
            </div>

            {result && <Result data={searchData} />}



        </div>
    )
}

export default HeroSection
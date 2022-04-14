import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <section className='questionAns mb-5'>
                <h2>Question-1:- <small>What is Context API?</small></h2>
                <p> <small className='text-primary fs-5'> Answer: </small>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                </p>
            </section>
            <section className='questionAns'>
                <h2>Question-2:- <small>Inline And Inline block এর মাঝে পাথ্যর্ক কি?</small></h2>
                <p>
                    <small className='text-primary fs-5'> Answer: </small>
                    Inline element এর height, width set করার আনুমতি দেয় না ।
                    Inline এ Top Bottom margin/padding দেওয়া যাই না ।
                    <br />
                    কিন্তু অপর দিকে,
                    <br />
                    Inline-Block এ element এর height, width set করার আনুমতি দেয়।
                    এবং Top Bottom margin/padding দেওয়া যাই ।

                </p>
            </section>
        </div>
    );
};

export default Blogs;
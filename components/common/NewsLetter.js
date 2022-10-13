import React from "react";

const NewsLetter = () => {
  return (
    <section className="news-letter-container">
      <div className="wrapper">
        <div className="text-center">
          <h2 className=" font-semibold font-balloVai mb-2 text-5xl">
            Newsletter
          </h2>
          <p>Stay up to date with our latest news and products.</p>
          <div className="md:flex justify-center items-center gap-11">
            <input
              type="text"
              className="input"
              placeholder="Enter your Email...."
            />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

-- Create Users table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture_url VARCHAR(255)
);

-- Create Posts table
CREATE TABLE Posts (
    tweet_id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    which_user VARCHAR(20) NOT NULL,
    post_image_url VARCHAR(255)
);

-- Create Bookmark_list table
CREATE TABLE Bookmark_list (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    tweet_id INTEGER REFERENCES Posts(tweet_id),
    datetime_added TIMESTAMP NOT NULL,
    tags VARCHAR(255)
);

import {
    serial,
    text,
    varchar,
    timestamp,
    integer,
    pgTable,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    userId: serial('user_id').primaryKey(),
    username: varchar('username', { length: 20 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    profilePictureUrl: varchar('profile_picture_url', { length: 255 }),
});

export const posts = pgTable('posts', {
    tweetId: serial('tweet_id').primaryKey(),
    content: text('content').notNull(),
    whichUser: varchar('which_user', { length: 20 }).notNull(),
    postImageUrl: varchar('post_image_url', { length: 255 }),
});

export const bookmarkList = pgTable('bookmark_list', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.userId),
    tweetId: integer('tweet_id').references(() => posts.tweetId),
    datetimeAdded: timestamp('datetime_added').notNull().defaultNow(),
    tags: varchar('tags', { length: 255 }),
});

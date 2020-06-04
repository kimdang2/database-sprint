DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int AUTO_INCREMENT,
  roomname varchar(30),
  username varchar(30),
  message varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int AUTO_INCREMENT,
  username varchar(30),
  PRIMARY KEY(id)
);

/*CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT not null,
  username VARCHAR,
  message_here VARCHAR,
  roomname VARCHAR,
  PRIMARY KEY (id),
);*/

/* Create other tables and define schemas for them here! */

/*CREATE TABLE users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  username VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
--
-- ---

/*DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `message` VARCHAR NULL DEFAULT NULL,
  `roomname` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)

);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (username) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`username`,`message`,`roomname`) VALUES
-- ('','','','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');*/
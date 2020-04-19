-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jun 27, 2019 at 01:14 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.19

/*
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
*/

--
-- Database: `companydb`
--

-- --------------------------------------------------------
--
-- Table: `users`
--

/*

CREATE TABLE IF NOT EXISTS `users` (
  `id` VARCHAR(6) UNIQUE NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `role` ENUM('Admin','Auditor','Manager','Employee','User') DEFAULT 'User',
  `department` ENUM('Marketing','IT','HR','Finance','Operations') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB;

*/

--
-- Dumping data for table `users`
--

/*


INSERT INTO `users` (`id`,`email`,`password`,`first_name`,`last_name`,`role`,`department`) VALUES
('jsm123','john@gmail.com','john','John','Smith','Employee','Marketing'),
('rsm463','rob@outlook.com','rob','Rob','Stirling','Manager','Marketing'),
('lcm237','lydia@outlook.com','lydia','Lydia','Camilla','Employee','Marketing'),
('spm571','sarah@gmail.com','sarah','Sarah','Parker','Employee','Marketing'),
('cem711','clint@outlook.com','clint','Clint','Eastwood','Manager','HR'),
('mle920','matthew@gmail.com','matthew','Matthew','Lowry','Employee','HR'),
('rke163','ronnie@outlook.com','ronnie','Ronnie','King','Employee','HR'),
('ann425','anne@gmail.com','anne','Anne','James','Employee','HR'),
('jsa223','jane@gmail.com','jane','Jane','Smith','Auditor','Finance'),
('cmf980','caris@gmail.com','caris','Caris','Mendoza','Auditor','Finance'),
('mla188','morgan@outlook.com','morgan','Morgan','Lee','Auditor','Finance'),
('aja142','alex@gmail.com','alex','Alex','Jones','Admin','IT'),
('cfe556','chris@outlook.com','chris','Chris','Pratt','Employee','IT'),
('jme198','jocelyn@gmail.com','jocelyn','Jocely','Macauley','Employee','IT'),
('zmm121','zachary@outlook.com','zachary','Zachary','Michael','Manager','IT'),
('hje921','hannah@outlook.com','hannah','Hannah','James','Employee','IT'),
('pjt112','peter@gmail.com','peter','Peter','Jones','Admin','IT'),
('jho813','jillian@outlook.com','jillian','Jillian','Harris','Manager','Operations'),
('aog210','andrew@gmail.com','andrew','Andrew','Garcia','Employee','Operations'),
('hwu011','helena@yahoo.com','helena','Helena','Wu','Employee','Operations'),

*/

-- --------------------------------------------------------
--
-- Table: `expenses`
--

/*

CREATE TABLE IF NOT EXISTS `expenses` (
  `expense_id` INTEGER AUTO_INCREMENT NOT NULL,
  `id` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `purpose` VARCHAR(255) NOT NULL,
  `amount` DECIMAL(5,2) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `category` ENUM('Accommodation', 'Transport', 'Travel', 'Meals/Entertainment') NOT NULL,
  `status` ENUM('Ongoing','Accepted','Denied','Flagged','Flagged - Accepted','Flagged - Denied','Successful','Unsuccessful') DEFAULT 'Ongoing',
  `image` BLOB,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(`expense_id`),
  FOREIGN KEY (`id`) REFERENCES `users`(`id`)
) ENGINE=INNODB;

*/

--
-- Dumping data for table `expenses`
--

/*

INSERT INTO `expenses` (`expense_id`,`id`,`date`,`purpose`,`amount`,`description`, `category`,`status`,`created_at`,`image`) VALUES
('1','jsm123','2020-01-14','Business meeting','23.00','Uber','Transport','Ongoing','2020-01-14 15:29:59.917',''),
('2','cfe556','2020-02-25','Business conference','120.00','Dukes Hotel','Accommodation','Ongoing','2020-02-25 19:32:11.841',''),
('3','ann425','2020-02-28','Client meeting','159.00','Dean Street Townhouse','Accommodation','Ongoing','2020-03-01 09:11:02.331',''),
('4','hje921','2020-03-02','Client meeting','52.00','A Wong','Meals/Entertainment','Ongoing','2020-03-02 18:19:22.309',''),
('5','jme198','2020-03-11','Business conference','334.00','British Airways','Travel','Ongoing','2020-03-14 13:25:11.121',''),
('6','mle920','2020-03-17','Business conference','62.00','Virgin Trains','Travel','Ongoing','2020-03-18 15:54:58.112',''),
('7','hwu011','2020-03-19','Business meeting','19.00','Uber','Transport','Ongoing','2020-03-19 17:14:29.029',''),
('8','hje921','2020-03-19','Business conference','75.00','Premier Inn','Accommodation','Ongoing','2020-03-20 19:05:28.001',''),
('9','aog210','2020-04-01','Business meeting','15.00','TFL Rail','Transport','Ongoing','2020-04-01 14:49:31.528',''),
('10','rke163','2020-04-02','Client meeting','475.00','Etihad Airways','Travel','Ongoing','2020-04-05 09:11:02.067',''),
('11','lcm237','2020-04-10','Business conference','386.00','British Airways','Travel','Ongoing',CURRENT_TIMESTAMP,'');

*/

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
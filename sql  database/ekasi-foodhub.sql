-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2020 at 03:38 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ekasi-foodhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

CREATE TABLE `card` (
  `card_number` int(30) NOT NULL,
  `date` date NOT NULL,
  `amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `card`
--

INSERT INTO `card` (`card_number`, `date`, `amount`) VALUES
(14725836, '2020-02-12', 70),
(45454545, '2020-02-12', 80),
(60606060, '2020-02-12', 45);

-- --------------------------------------------------------

--
-- Table structure for table `cash`
--

CREATE TABLE `cash` (
  `id` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  `payment_amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cash`
--

INSERT INTO `cash` (`id`, `payment_date`, `payment_amount`) VALUES
(969696, '2020-02-13', 65),
(70707070, '2020-02-11', 80);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(255) NOT NULL,
  `Breakfast` text NOT NULL,
  `lunch` varchar(255) NOT NULL,
  `dinner` varchar(255) NOT NULL,
  `dessert` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `Breakfast`, `lunch`, `dinner`, `dessert`) VALUES
(98, 'eggs and bacon', 'pap and vlies', 'greek salad ', 'cake'),
(987, 'eggs and bacon', 'pap and vlies', 'greek salad ', 'cake');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_ID` int(255) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `address` text NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `cell_no` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `streetname` varchar(255) NOT NULL,
  `house_number` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_ID`, `name`, `surname`, `address`, `email_address`, `cell_no`, `password`, `streetname`, `house_number`) VALUES
(147258369, 'amanda', 'thambo', '136 Soshanguve', 'amanda@gmail.com', '082360360', 'andazi1234', '', ''),
(963852741, 'athandwa', 'zeni', '1490 Soshanguve', 'tutu2@yahoo.com', '072360360', 'idont9876', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `driver_id` int(255) NOT NULL,
  `restaurant_id` int(255) NOT NULL,
  `cell_no` varchar(255) NOT NULL,
  `driver_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`driver_id`, `restaurant_id`, `cell_no`, `driver_name`) VALUES
(123456789, 654321987, '065360360', 'Zuma'),
(789456123, 753421594, '079360360', 'Themba');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_number` int(11) NOT NULL,
  `qauntity` int(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_number`, `qauntity`, `price`) VALUES
(543216, 1, 45),
(741852, 3, 147);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(30) NOT NULL,
  `order_number` int(11) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `payment_date` date NOT NULL,
  `payment_amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `order_number`, `payment_method`, `payment_date`, `payment_amount`) VALUES
(147258369, 98765, 'cash', '2020-02-11', 65),
(987654321, 5632147, 'card', '2020-02-10', 80);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `product_description`) VALUES
(1, 'fried fish', 22, 'kentucky');

-- --------------------------------------------------------

--
-- Table structure for table `restuarant_admin`
--

CREATE TABLE `restuarant_admin` (
  `restuarant_id` int(255) NOT NULL,
  `system_id` int(255) NOT NULL,
  `restuarant_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restuarant_admin`
--

INSERT INTO `restuarant_admin` (`restuarant_id`, `system_id`, `restuarant_name`, `address`, `password`, `email`) VALUES
(123456789, 987654321, 'kentucky', 'shop 19 Soshanguve', 'admin123', 'rest@gmail.com'),
(963852741, 147258369, 'chicken now', 'shop 3 soshanguve', 'admin1234', 'resst@yahoo.com\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `system_admin`
--

CREATE TABLE `system_admin` (
  `system_Id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `system_name` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `system_admin`
--

INSERT INTO `system_admin` (`system_Id`, `restaurant_id`, `system_name`, `password`, `email`) VALUES
(147258369, 963852741, 'ekasi foods', 'syst123', 'admin@yahoo.com'),
(987654321, 147258369, 'ekasi foods', 'admin234', 'syst@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`card_number`);

--
-- Indexes for table `cash`
--
ALTER TABLE `cash`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_ID`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`driver_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_number`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `restuarant_admin`
--
ALTER TABLE `restuarant_admin`
  ADD PRIMARY KEY (`restuarant_id`);

--
-- Indexes for table `system_admin`
--
ALTER TABLE `system_admin`
  ADD PRIMARY KEY (`system_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `card`
--
ALTER TABLE `card`
  MODIFY `card_number` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147258370;

--
-- AUTO_INCREMENT for table `cash`
--
ALTER TABLE `cash`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70707071;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=963852742;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `driver_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=789456124;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=741853;

--
-- AUTO_INCREMENT for table `restuarant_admin`
--
ALTER TABLE `restuarant_admin`
  MODIFY `restuarant_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=963852742;

--
-- AUTO_INCREMENT for table `system_admin`
--
ALTER TABLE `system_admin`
  MODIFY `system_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=987654322;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

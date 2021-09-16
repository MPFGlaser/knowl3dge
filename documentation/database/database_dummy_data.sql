-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Sep 16, 2021 at 12:13 PM
-- Server version: 8.0.26
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knowl3dge_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `author_id` int DEFAULT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `creation_date` datetime(6) DEFAULT NULL,
  `edit_date` datetime(6) DEFAULT NULL,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `author_id`, `title`, `content`, `creation_date`, `edit_date`, `visible`) VALUES
(1, 1, 'Document title 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex urna, iaculis sed odio in, feugiat convallis ex. Vestibulum ut dui enim. Phasellus posuere felis at nunc pulvinar aliquam. Nam id neque feugiat, finibus est eu, facilisis nisl. Vestibulum interdum, risus vitae commodo vehicula, arcu purus laoreet leo, tincidunt lacinia nisl arcu ac ligula. Donec dignissim efficitur semper. Vestibulum tincidunt nibh sodales sapien efficitur, vel fermentum eros pretium. Etiam in ipsum nisl. Nunc convallis commodo risus accumsan fermentum. Pellentesque dictum turpis est, non condimentum magna dignissim quis. Aliquam pharetra molestie massa, quis aliquet ipsum pulvinar non. Nunc ultrices sodales mauris, vel fermentum leo congue ac.\n\nDonec ut volutpat lacus, quis semper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus accumsan luctus sagittis. Praesent pretium nulla at nunc rhoncus, a posuere dolor eleifend. Curabitur eget elit pharetra, feugiat tortor at, vehicula lacus. Mauris eleifend enim nec tincidunt dignissim. Duis fermentum auctor ullamcorper. Proin lacus nulla, laoreet non dapibus commodo, varius non nisl. Vivamus suscipit ex eget mi mollis, vitae iaculis magna feugiat. Nam sit amet tincidunt erat, nec convallis nunc. Mauris viverra erat vitae vestibulum finibus. Integer vitae nisl sed mauris dignissim suscipit. Curabitur consequat, metus sit amet luctus molestie, arcu urna ullamcorper orci, quis pellentesque odio mauris eu ligula.\n\nAenean elementum erat at nunc faucibus, ac mollis nulla scelerisque. Suspendisse molestie purus mi, sit amet ullamcorper lectus sodales at. Etiam lorem sem, tincidunt ac quam sed, gravida rhoncus felis. Aenean pretium tortor vel bibendum hendrerit. Proin quis erat eu lectus cursus malesuada. Maecenas a malesuada nunc. Suspendisse potenti. Morbi placerat eros sed purus sollicitudin, ac semper purus scelerisque. Vestibulum feugiat purus non enim gravida, at ullamcorper lacus suscipit. Aenean lectus quam, vestibulum vitae nisl ac, elementum tempor enim. Sed tristique blandit efficitur. Fusce ut nunc at ex aliquet mollis. Nam in libero sit amet urna porttitor dictum. Cras varius nisl porttitor, consectetur enim sed, imperdiet nisi. Fusce sagittis convallis orci eu pulvinar.\n\nAliquam id malesuada odio. Cras quis venenatis orci, at consectetur felis. Vestibulum elementum blandit lectus sed eleifend. Phasellus accumsan sagittis volutpat. Aliquam pellentesque egestas tempus. Nunc sollicitudin, nunc nec congue aliquam, purus lacus ultricies magna, a feugiat lectus velit nec diam. Praesent vulputate malesuada quam.\n\nMaecenas ut nunc imperdiet, rhoncus purus vitae, scelerisque erat. Suspendisse malesuada, dolor et posuere mattis, ex arcu venenatis lorem, sit amet pulvinar mi lorem a lacus. Quisque ac enim metus. Aliquam tincidunt orci ligula, et vulputate libero posuere nec. Praesent suscipit pellentesque molestie. Nunc vulputate augue non justo aliquam maximus. Phasellus id ipsum ac tellus ultrices blandit sed in nisl. Integer ut commodo eros.', '2021-09-13 13:42:03.000000', '2021-09-13 13:42:03.000000', 0),
(2, 1, 'Document title 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex urna, iaculis sed odio in, feugiat convallis ex. Vestibulum ut dui enim. Phasellus posuere felis at nunc pulvinar aliquam. Nam id neque feugiat, finibus est eu, facilisis nisl. Vestibulum interdum, risus vitae commodo vehicula, arcu purus laoreet leo, tincidunt lacinia nisl arcu ac ligula. Donec dignissim efficitur semper. Vestibulum tincidunt nibh sodales sapien efficitur, vel fermentum eros pretium. Etiam in ipsum nisl. Nunc convallis commodo risus accumsan fermentum. Pellentesque dictum turpis est, non condimentum magna dignissim quis. Aliquam pharetra molestie massa, quis aliquet ipsum pulvinar non. Nunc ultrices sodales mauris, vel fermentum leo congue ac.\n\nDonec ut volutpat lacus, quis semper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus accumsan luctus sagittis. Praesent pretium nulla at nunc rhoncus, a posuere dolor eleifend. Curabitur eget elit pharetra, feugiat tortor at, vehicula lacus. Mauris eleifend enim nec tincidunt dignissim. Duis fermentum auctor ullamcorper. Proin lacus nulla, laoreet non dapibus commodo, varius non nisl. Vivamus suscipit ex eget mi mollis, vitae iaculis magna feugiat. Nam sit amet tincidunt erat, nec convallis nunc. Mauris viverra erat vitae vestibulum finibus. Integer vitae nisl sed mauris dignissim suscipit. Curabitur consequat, metus sit amet luctus molestie, arcu urna ullamcorper orci, quis pellentesque odio mauris eu ligula.\n\nAenean elementum erat at nunc faucibus, ac mollis nulla scelerisque. Suspendisse molestie purus mi, sit amet ullamcorper lectus sodales at. Etiam lorem sem, tincidunt ac quam sed, gravida rhoncus felis. Aenean pretium tortor vel bibendum hendrerit. Proin quis erat eu lectus cursus malesuada. Maecenas a malesuada nunc. Suspendisse potenti. Morbi placerat eros sed purus sollicitudin, ac semper purus scelerisque. Vestibulum feugiat purus non enim gravida, at ullamcorper lacus suscipit. Aenean lectus quam, vestibulum vitae nisl ac, elementum tempor enim. Sed tristique blandit efficitur. Fusce ut nunc at ex aliquet mollis. Nam in libero sit amet urna porttitor dictum. Cras varius nisl porttitor, consectetur enim sed, imperdiet nisi. Fusce sagittis convallis orci eu pulvinar.\n\nAliquam id malesuada odio. Cras quis venenatis orci, at consectetur felis. Vestibulum elementum blandit lectus sed eleifend. Phasellus accumsan sagittis volutpat. Aliquam pellentesque egestas tempus. Nunc sollicitudin, nunc nec congue aliquam, purus lacus ultricies magna, a feugiat lectus velit nec diam. Praesent vulputate malesuada quam.\n\nMaecenas ut nunc imperdiet, rhoncus purus vitae, scelerisque erat. Suspendisse malesuada, dolor et posuere mattis, ex arcu venenatis lorem, sit amet pulvinar mi lorem a lacus. Quisque ac enim metus. Aliquam tincidunt orci ligula, et vulputate libero posuere nec. Praesent suscipit pellentesque molestie. Nunc vulputate augue non justo aliquam maximus. Phasellus id ipsum ac tellus ultrices blandit sed in nisl. Integer ut commodo eros.', '2021-09-13 13:45:03.000000', '2021-09-13 13:45:03.000000', 0),
(4, 2, 'Document title 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex urna, iaculis sed odio in, feugiat convallis ex. Vestibulum ut dui enim. Phasellus posuere felis at nunc pulvinar aliquam. Nam id neque feugiat, finibus est eu, facilisis nisl. Vestibulum interdum, risus vitae commodo vehicula, arcu purus laoreet leo, tincidunt lacinia nisl arcu ac ligula. Donec dignissim efficitur semper. Vestibulum tincidunt nibh sodales sapien efficitur, vel fermentum eros pretium. Etiam in ipsum nisl. Nunc convallis commodo risus accumsan fermentum. Pellentesque dictum turpis est, non condimentum magna dignissim quis. Aliquam pharetra molestie massa, quis aliquet ipsum pulvinar non. Nunc ultrices sodales mauris, vel fermentum leo congue ac.\n\nDonec ut volutpat lacus, quis semper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus accumsan luctus sagittis. Praesent pretium nulla at nunc rhoncus, a posuere dolor eleifend. Curabitur eget elit pharetra, feugiat tortor at, vehicula lacus. Mauris eleifend enim nec tincidunt dignissim. Duis fermentum auctor ullamcorper. Proin lacus nulla, laoreet non dapibus commodo, varius non nisl. Vivamus suscipit ex eget mi mollis, vitae iaculis magna feugiat. Nam sit amet tincidunt erat, nec convallis nunc. Mauris viverra erat vitae vestibulum finibus. Integer vitae nisl sed mauris dignissim suscipit. Curabitur consequat, metus sit amet luctus molestie, arcu urna ullamcorper orci, quis pellentesque odio mauris eu ligula.\n\nAenean elementum erat at nunc faucibus, ac mollis nulla scelerisque. Suspendisse molestie purus mi, sit amet ullamcorper lectus sodales at. Etiam lorem sem, tincidunt ac quam sed, gravida rhoncus felis. Aenean pretium tortor vel bibendum hendrerit. Proin quis erat eu lectus cursus malesuada. Maecenas a malesuada nunc. Suspendisse potenti. Morbi placerat eros sed purus sollicitudin, ac semper purus scelerisque. Vestibulum feugiat purus non enim gravida, at ullamcorper lacus suscipit. Aenean lectus quam, vestibulum vitae nisl ac, elementum tempor enim. Sed tristique blandit efficitur. Fusce ut nunc at ex aliquet mollis. Nam in libero sit amet urna porttitor dictum. Cras varius nisl porttitor, consectetur enim sed, imperdiet nisi. Fusce sagittis convallis orci eu pulvinar.\n\nAliquam id malesuada odio. Cras quis venenatis orci, at consectetur felis. Vestibulum elementum blandit lectus sed eleifend. Phasellus accumsan sagittis volutpat. Aliquam pellentesque egestas tempus. Nunc sollicitudin, nunc nec congue aliquam, purus lacus ultricies magna, a feugiat lectus velit nec diam. Praesent vulputate malesuada quam.\n\nMaecenas ut nunc imperdiet, rhoncus purus vitae, scelerisque erat. Suspendisse malesuada, dolor et posuere mattis, ex arcu venenatis lorem, sit amet pulvinar mi lorem a lacus. Quisque ac enim metus. Aliquam tincidunt orci ligula, et vulputate libero posuere nec. Praesent suscipit pellentesque molestie. Nunc vulputate augue non justo aliquam maximus. Phasellus id ipsum ac tellus ultrices blandit sed in nisl. Integer ut commodo eros.', '2021-09-13 13:42:03.000000', '2021-09-13 13:42:03.000000', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

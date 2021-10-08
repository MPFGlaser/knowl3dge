-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Oct 08, 2021 at 03:45 PM
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
  `creation_date` bigint DEFAULT NULL,
  `edit_date` bigint DEFAULT NULL,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `author_id`, `title`, `content`, `creation_date`, `edit_date`, `visible`) VALUES
(1, 1, '3D Printing Issue 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex urna, iaculis sed odio in, feugiat convallis ex. Vestibulum ut dui enim. Phasellus posuere felis at nunc pulvinar aliquam. Nam id neque feugiat, finibus est eu, facilisis nisl. Vestibulum interdum, risus vitae commodo vehicula, arcu purus laoreet leo, tincidunt lacinia nisl arcu ac ligula. Donec dignissim efficitur semper. Vestibulum tincidunt nibh sodales sapien efficitur, vel fermentum eros pretium. Etiam in ipsum nisl. Nunc convallis commodo risus accumsan fermentum. Pellentesque dictum turpis est, non condimentum magna dignissim quis. Aliquam pharetra molestie massa, quis aliquet ipsum pulvinar non. Nunc ultrices sodales mauris, vel fermentum leo congue ac.\n\nDonec ut volutpat lacus, quis semper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus accumsan luctus sagittis. Praesent pretium nulla at nunc rhoncus, a posuere dolor eleifend. Curabitur eget elit pharetra, feugiat tortor at, vehicula lacus. Mauris eleifend enim nec tincidunt dignissim. Duis fermentum auctor ullamcorper. Proin lacus nulla, laoreet non dapibus commodo, varius non nisl. Vivamus suscipit ex eget mi mollis, vitae iaculis magna feugiat. Nam sit amet tincidunt erat, nec convallis nunc. Mauris viverra erat vitae vestibulum finibus. Integer vitae nisl sed mauris dignissim suscipit. Curabitur consequat, metus sit amet luctus molestie, arcu urna ullamcorper orci, quis pellentesque odio mauris eu ligula.\n\nAenean elementum erat at nunc faucibus, ac mollis nulla scelerisque. Suspendisse molestie purus mi, sit amet ullamcorper lectus sodales at. Etiam lorem sem, tincidunt ac quam sed, gravida rhoncus felis. Aenean pretium tortor vel bibendum hendrerit. Proin quis erat eu lectus cursus malesuada. Maecenas a malesuada nunc. Suspendisse potenti. Morbi placerat eros sed purus sollicitudin, ac semper purus scelerisque. Vestibulum feugiat purus non enim gravida, at ullamcorper lacus suscipit. Aenean lectus quam, vestibulum vitae nisl ac, elementum tempor enim. Sed tristique blandit efficitur. Fusce ut nunc at ex aliquet mollis. Nam in libero sit amet urna porttitor dictum. Cras varius nisl porttitor, consectetur enim sed, imperdiet nisi. Fusce sagittis convallis orci eu pulvinar.\n\nAliquam id malesuada odio. Cras quis venenatis orci, at consectetur felis. Vestibulum elementum blandit lectus sed eleifend. Phasellus accumsan sagittis volutpat. Aliquam pellentesque egestas tempus. Nunc sollicitudin, nunc nec congue aliquam, purus lacus ultricies magna, a feugiat lectus velit nec diam. Praesent vulputate malesuada quam.\n\nMaecenas ut nunc imperdiet, rhoncus purus vitae, scelerisque erat. Suspendisse malesuada, dolor et posuere mattis, ex arcu venenatis lorem, sit amet pulvinar mi lorem a lacus. Quisque ac enim metus. Aliquam tincidunt orci ligula, et vulputate libero posuere nec. Praesent suscipit pellentesque molestie. Nunc vulputate augue non justo aliquam maximus. Phasellus id ipsum ac tellus ultrices blandit sed in nisl. Integer ut commodo eros.', 1, NULL, 0),
(2, 1, 'Issue 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex urna, iaculis sed odio in, feugiat convallis ex. Vestibulum ut dui enim. Phasellus posuere felis at nunc pulvinar aliquam. Nam id neque feugiat, finibus est eu, facilisis nisl. Vestibulum interdum, risus vitae commodo vehicula, arcu purus laoreet leo, tincidunt lacinia nisl arcu ac ligula. Donec dignissim efficitur semper. Vestibulum tincidunt nibh sodales sapien efficitur, vel fermentum eros pretium. Etiam in ipsum nisl. Nunc convallis commodo risus accumsan fermentum. Pellentesque dictum turpis est, non condimentum magna dignissim quis. Aliquam pharetra molestie massa, quis aliquet ipsum pulvinar non. Nunc ultrices sodales mauris, vel fermentum leo congue ac.\n\nDonec ut volutpat lacus, quis semper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus accumsan luctus sagittis. Praesent pretium nulla at nunc rhoncus, a posuere dolor eleifend. Curabitur eget elit pharetra, feugiat tortor at, vehicula lacus. Mauris eleifend enim nec tincidunt dignissim. Duis fermentum auctor ullamcorper. Proin lacus nulla, laoreet non dapibus commodo, varius non nisl. Vivamus suscipit ex eget mi mollis, vitae iaculis magna feugiat. Nam sit amet tincidunt erat, nec convallis nunc. Mauris viverra erat vitae vestibulum finibus. Integer vitae nisl sed mauris dignissim suscipit. Curabitur consequat, metus sit amet luctus molestie, arcu urna ullamcorper orci, quis pellentesque odio mauris eu ligula.\n\nAenean elementum erat at nunc faucibus, ac mollis nulla scelerisque. Suspendisse molestie purus mi, sit amet ullamcorper lectus sodales at. Etiam lorem sem, tincidunt ac quam sed, gravida rhoncus felis. Aenean pretium tortor vel bibendum hendrerit. Proin quis erat eu lectus cursus malesuada. Maecenas a malesuada nunc. Suspendisse potenti. Morbi placerat eros sed purus sollicitudin, ac semper purus scelerisque. Vestibulum feugiat purus non enim gravida, at ullamcorper lacus suscipit. Aenean lectus quam, vestibulum vitae nisl ac, elementum tempor enim. Sed tristique blandit efficitur. Fusce ut nunc at ex aliquet mollis. Nam in libero sit amet urna porttitor dictum. Cras varius nisl porttitor, consectetur enim sed, imperdiet nisi. Fusce sagittis convallis orci eu pulvinar.\n\nAliquam id malesuada odio. Cras quis venenatis orci, at consectetur felis. Vestibulum elementum blandit lectus sed eleifend. Phasellus accumsan sagittis volutpat. Aliquam pellentesque egestas tempus. Nunc sollicitudin, nunc nec congue aliquam, purus lacus ultricies magna, a feugiat lectus velit nec diam. Praesent vulputate malesuada quam.\n\nMaecenas ut nunc imperdiet, rhoncus purus vitae, scelerisque erat. Suspendisse malesuada, dolor et posuere mattis, ex arcu venenatis lorem, sit amet pulvinar mi lorem a lacus. Quisque ac enim metus. Aliquam tincidunt orci ligula, et vulputate libero posuere nec. Praesent suscipit pellentesque molestie. Nunc vulputate augue non justo aliquam maximus. Phasellus id ipsum ac tellus ultrices blandit sed in nisl. Integer ut commodo eros.', 1, 1633628894243, 1),
(4, 2, 'Document title 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex urna, iaculis sed odio in, feugiat convallis ex. Vestibulum ut dui enim. Phasellus posuere felis at nunc pulvinar aliquam. Nam id neque feugiat, finibus est eu, facilisis nisl. Vestibulum interdum, risus vitae commodo vehicula, arcu purus laoreet leo, tincidunt lacinia nisl arcu ac ligula. Donec dignissim efficitur semper. Vestibulum tincidunt nibh sodales sapien efficitur, vel fermentum eros pretium. Etiam in ipsum nisl. Nunc convallis commodo risus accumsan fermentum. Pellentesque dictum turpis est, non condimentum magna dignissim quis. Aliquam pharetra molestie massa, quis aliquet ipsum pulvinar non. Nunc ultrices sodales mauris, vel fermentum leo congue ac.\n\nDonec ut volutpat lacus, quis semper sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus accumsan luctus sagittis. Praesent pretium nulla at nunc rhoncus, a posuere dolor eleifend. Curabitur eget elit pharetra, feugiat tortor at, vehicula lacus. Mauris eleifend enim nec tincidunt dignissim. Duis fermentum auctor ullamcorper. Proin lacus nulla, laoreet non dapibus commodo, varius non nisl. Vivamus suscipit ex eget mi mollis, vitae iaculis magna feugiat. Nam sit amet tincidunt erat, nec convallis nunc. Mauris viverra erat vitae vestibulum finibus. Integer vitae nisl sed mauris dignissim suscipit. Curabitur consequat, metus sit amet luctus molestie, arcu urna ullamcorper orci, quis pellentesque odio mauris eu ligula.\n\nAenean elementum erat at nunc faucibus, ac mollis nulla scelerisque. Suspendisse molestie purus mi, sit amet ullamcorper lectus sodales at. Etiam lorem sem, tincidunt ac quam sed, gravida rhoncus felis. Aenean pretium tortor vel bibendum hendrerit. Proin quis erat eu lectus cursus malesuada. Maecenas a malesuada nunc. Suspendisse potenti. Morbi placerat eros sed purus sollicitudin, ac semper purus scelerisque. Vestibulum feugiat purus non enim gravida, at ullamcorper lacus suscipit. Aenean lectus quam, vestibulum vitae nisl ac, elementum tempor enim. Sed tristique blandit efficitur. Fusce ut nunc at ex aliquet mollis. Nam in libero sit amet urna porttitor dictum. Cras varius nisl porttitor, consectetur enim sed, imperdiet nisi. Fusce sagittis convallis orci eu pulvinar.\n\nAliquam id malesuada odio. Cras quis venenatis orci, at consectetur felis. Vestibulum elementum blandit lectus sed eleifend. Phasellus accumsan sagittis volutpat. Aliquam pellentesque egestas tempus. Nunc sollicitudin, nunc nec congue aliquam, purus lacus ultricies magna, a feugiat lectus velit nec diam. Praesent vulputate malesuada quam.\n\nMaecenas ut nunc imperdiet, rhoncus purus vitae, scelerisque erat. Suspendisse malesuada, dolor et posuere mattis, ex arcu venenatis lorem, sit amet pulvinar mi lorem a lacus. Quisque ac enim metus. Aliquam tincidunt orci ligula, et vulputate libero posuere nec. Praesent suscipit pellentesque molestie. Nunc vulputate augue non justo aliquam maximus. Phasellus id ipsum ac tellus ultrices blandit sed in nisl. Integer ut commodo eros.', 1, NULL, 0),
(5, 6, 'ytghjghjghj', 'ghkjghjhj', 1633627221387, NULL, 1),
(6, NULL, 'Test title', '', 1633627221387, 1633627455146, 1),
(7, 7, 'Test title 2', 'gfhjghjghj test content', 1633627221387, 1633628164840, 1),
(8, 5, 'Test 3', 'Blablabla222', 1633628349833, 1633693028612, 1),
(9, 6, 'Test article feedback meeting', 'uykgyfi;fyflf', 1633693052857, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `type` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `type`) VALUES
(1, 'PLA', NULL),
(4, 'PETG', NULL),
(5, 'Adhesion', NULL),
(8, 'Bridging', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tags_assigned`
--

CREATE TABLE `tags_assigned` (
  `id` int NOT NULL,
  `tag_id` int DEFAULT NULL,
  `article_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tags_assigned`
--

INSERT INTO `tags_assigned` (`id`, `tag_id`, `article_id`) VALUES
(1, 1, 1),
(2, 8, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_id_uindex` (`id`);

--
-- Indexes for table `tags_assigned`
--
ALTER TABLE `tags_assigned`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tags_assigned_articles_id_fk` (`article_id`),
  ADD KEY `tags_assigned_tags_id_fk` (`tag_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tags_assigned`
--
ALTER TABLE `tags_assigned`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tags_assigned`
--
ALTER TABLE `tags_assigned`
  ADD CONSTRAINT `tags_assigned_articles_id_fk` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`),
  ADD CONSTRAINT `tags_assigned_tags_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

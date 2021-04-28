-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: vacationsProject
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `followedVacations`
--

DROP TABLE IF EXISTS `followedVacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followedVacations` (
  `Vacation_Id` int NOT NULL,
  `User_Id` int NOT NULL,
  PRIMARY KEY (`Vacation_Id`,`User_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followedVacations`
--

LOCK TABLES `followedVacations` WRITE;
/*!40000 ALTER TABLE `followedVacations` DISABLE KEYS */;
INSERT INTO `followedVacations` VALUES (13,55),(16,20),(21,5),(21,7),(21,13),(21,14),(21,20),(21,21),(21,22),(98,19),(99,19),(99,30),(100,19),(100,20),(100,30),(119,19),(119,20),(120,19),(120,20),(123,30),(124,19),(126,20),(126,30),(127,19);
/*!40000 ALTER TABLE `followedVacations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(30) DEFAULT NULL,
  `Last_Name` varchar(30) DEFAULT NULL,
  `User_Name` varchar(20) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `User_Type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nirel','Kapah','nirel123','165a1b5007fd238947be3fb4267fcb68','Admin'),(10,'Mike','dash','mikey','ed9ebdd14671e1538f79455ca733ee5f','Client'),(19,'John','Hi','admin','165a1b5007fd238947be3fb4267fcb68','Client'),(20,'Client','Hi','client','165a1b5007fd238947be3fb4267fcb68','Client'),(30,'David','Cohen','David','519bcb31543cc887724f459258a53507','Client');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Description` varchar(80) DEFAULT NULL,
  `Destination` varchar(20) DEFAULT NULL,
  `Image_URL` varchar(240) DEFAULT NULL,
  `Departure_Date` date DEFAULT NULL,
  `Return_Date` date DEFAULT NULL,
  `Price` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (21,'Come discover Switzerland\'s centre of economic life and education.','Zurich','zurich.jpg','2020-11-03','2020-11-04','759$'),(96,'Take A Breath, You can already feel the cool wind and fresh air of the high alps','Swiss Alps','swissAlps.jpg','2020-11-02','2020-11-03','899$'),(98,'Come see the light\'s City of Europe, get ready to be amazed!','Budapest','hungary.jpg','2020-11-02','2020-11-06','479$'),(99,'Do you like fashion? PARIS , city of fashion is waiting for you!','Paris','paris.jpeg','2020-11-04','2020-11-06','599$'),(100,'Discover the beauty and adventures waiting for you on the Hawaiian Islands','Hawaii','blueView.jpg','2020-11-02','2020-11-03','2199$'),(119,'What is the northest city you have been in? Iceland , State of ice and fire','Iceland','iceland2.jpeg','2020-11-16','2020-11-25','1199$'),(120,'Explore the world\'s largest island, located between the Arctic and Atlantic','Greenland','hotAirBaloon2.jpg','2020-11-11','2020-11-20','990$'),(121,'The islands of the Caribbean for their beauty. Now know them by yourself','Carribean','carrebean.jpg','2020-11-18','2020-11-25','2199$'),(122,'Seychelles, republic comprising about 115 islands in the western Indian Ocean','Sayshells','sayshells.jpg','2021-01-11','2021-02-02','3100$'),(123,'Come see great America , at its beauty in party city - miami , Florida','Miami','miami.jpg','2020-12-29','2021-01-27','2999$'),(124,'Experience The Big Apple of the world, feel at the top of the world','New York','newYork.jpg','2020-12-16','2020-12-30','1750$'),(125,'Bustling city or chilling out on a beach, prepare for your trip to the Thailand','Thailand','thailand.jpg','2020-11-25','2020-12-23','1799$'),(126,'Get ready to be amazed , of the Wonders of the South American Continent ','South America','southAmerica.jpg','2020-11-11','2020-12-30','2099$'),(127,'Portugal draws travellers with a mix of natural beauty and World Heritage sites','Portugal','portugal.jpg','2021-02-16','2021-02-24','890$');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-03 19:07:25

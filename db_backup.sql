-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: blood
-- ------------------------------------------------------
-- Server version	8.0.32-0buntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `DonorPersonalInfo`
--

DROP TABLE IF EXISTS `DonorPersonalInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DonorPersonalInfo` (
  `did` int NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Gender` varchar(20) DEFAULT NULL,
  `DOB` varchar(20) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `State` varchar(20) DEFAULT NULL,
  `Pincode` varchar(15) DEFAULT NULL,
  `Occupation` varchar(20) DEFAULT NULL,
  `Bloodgroup` varchar(15) DEFAULT NULL,
  `Contactno` varchar(20) DEFAULT NULL,
  `DiseaseCheck` varchar(10) DEFAULT NULL,
  `AllergyCheck` varchar(10) DEFAULT NULL,
  `OtherAllergies` varchar(50) DEFAULT NULL,
  `STD` varchar(10) DEFAULT NULL,
  `Bleeding` varchar(10) DEFAULT NULL,
  `Medication` varchar(10) DEFAULT NULL,
  `LastDonatingDate` varchar(20) DEFAULT NULL,
  `NextDonatingDate` varchar(20) DEFAULT NULL,
  `HowOftenDonateBlood` varchar(20) DEFAULT NULL,
  `blood` varchar(20) DEFAULT NULL,
  `organ` varchar(20) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`did`),
  KEY `rid` (`rid`),
  CONSTRAINT `DonorPersonalInfo_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DonorPersonalInfo`
--

LOCK TABLES `DonorPersonalInfo` WRITE;
/*!40000 ALTER TABLE `DonorPersonalInfo` DISABLE KEYS */;
INSERT INTO `DonorPersonalInfo` VALUES (1,'','','','','','','','','','','','','','','','','','','','','',1);
/*!40000 ALTER TABLE `DonorPersonalInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Recepient`
--

DROP TABLE IF EXISTS `Recepient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Recepient` (
  `recid` int NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `DOB` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `PatientID` varchar(50) DEFAULT NULL,
  `Contactno` varchar(20) DEFAULT NULL,
  `Doctorname` varchar(30) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  `did` int DEFAULT NULL,
  PRIMARY KEY (`recid`),
  KEY `rid` (`rid`),
  KEY `did` (`did`),
  CONSTRAINT `Recepient_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`),
  CONSTRAINT `Recepient_ibfk_2` FOREIGN KEY (`did`) REFERENCES `DonorPersonalInfo` (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recepient`
--

LOCK TABLES `Recepient` WRITE;
/*!40000 ALTER TABLE `Recepient` DISABLE KEYS */;
/*!40000 ALTER TABLE `Recepient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aboutus`
--

DROP TABLE IF EXISTS `aboutus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aboutus` (
  `id` int NOT NULL,
  `about` varchar(1000) DEFAULT NULL,
  `about2` varchar(1000) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aboutus`
--

LOCK TABLES `aboutus` WRITE;
/*!40000 ALTER TABLE `aboutus` DISABLE KEYS */;
/*!40000 ALTER TABLE `aboutus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloodstatus`
--

DROP TABLE IF EXISTS `bloodstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodstatus` (
  `statusid` int NOT NULL,
  `bloodgroup` varchar(20) DEFAULT NULL,
  `bloodlevel` varchar(10) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`statusid`),
  KEY `rid` (`rid`),
  CONSTRAINT `bloodstatus_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodstatus`
--

LOCK TABLES `bloodstatus` WRITE;
/*!40000 ALTER TABLE `bloodstatus` DISABLE KEYS */;
INSERT INTO `bloodstatus` VALUES (1,'Apve','0','',1),(2,'Anve','0','',1),(3,'Aunk','0','',1),(4,'Bpve','0','',1),(5,'Bnve','0','',1),(6,'Bunk','0','',1),(7,'ABpve','0','',1),(8,'ABnve','0','',1),(9,'ABunk','0','',1),(10,'Opve','0','',1),(11,'Onve','0','',1),(12,'Ounk','0','',1),(13,'Unk','0','',1);
/*!40000 ALTER TABLE `bloodstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complaint`
--

DROP TABLE IF EXISTS `complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complaint` (
  `cid` int DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL,
  `complaint` varchar(100) DEFAULT NULL,
  `dateofreply` varchar(10) DEFAULT NULL,
  `reply` varchar(100) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  KEY `rid` (`rid`),
  CONSTRAINT `complaint_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
/*!40000 ALTER TABLE `complaint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactus`
--

DROP TABLE IF EXISTS `contactus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactus` (
  `id` int NOT NULL,
  `number1` varchar(20) DEFAULT NULL,
  `number2` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactus`
--

LOCK TABLES `contactus` WRITE;
/*!40000 ALTER TABLE `contactus` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donation`
--

DROP TABLE IF EXISTS `donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donation` (
  `id` int NOT NULL,
  `organs` varchar(30) DEFAULT NULL,
  `did` int DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `rid` (`rid`),
  CONSTRAINT `donation_ibfk_1` FOREIGN KEY (`did`) REFERENCES `DonorPersonalInfo` (`did`),
  CONSTRAINT `donation_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donation`
--

LOCK TABLES `donation` WRITE;
/*!40000 ALTER TABLE `donation` DISABLE KEYS */;
/*!40000 ALTER TABLE `donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `fid` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `feedback` varchar(100) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`fid`),
  KEY `rid` (`rid`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery` (
  `gid` int NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `lid` int NOT NULL,
  `Username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`lid`),
  KEY `rid` (`rid`),
  CONSTRAINT `login_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'admin','admin','admin','aproved',1),(2,'t','kldwASydK1is','head','aproved',2),(3,'te@e.com','tJ72T4pFKm3E','head','aproved',3),(4,'te@e.com','HKWNwdl7zWEk','head','blocked',4),(5,'te@e.com','CUA19bnLFc7u','head','aproved',5),(6,'te@e.com','R9cMI9MLbc2N','head','pending',6),(7,'te@e.com','0cdFWZnpN7CW','head','pending',7),(8,'te@e.com','d1Kbh8quYU40','head','pending',8),(9,'te@e.com','ywrN2pjcmx0q','head','pending',9),(10,'est@12.com','m0gLbbIowcYo','head','pending',10),(11,'aq@re.com','gGCEqlr1MndY','head','pending',11),(12,'sdsds@sd.com','tWB7IFKz9lwO','head','pending',12),(13,'dsds@test.com','L3dT2sgYhJqB','head','pending',13),(14,'dd@d.com','NY3eCaRuDawF','head','pending',14),(15,'test@testt.com','fJYpZSgooKoY','staff','aproved',15);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` int NOT NULL,
  `date` varchar(10) DEFAULT NULL,
  `notification` varchar(100) DEFAULT NULL,
  `rid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rid` (`rid`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `registration` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `rid` int NOT NULL,
  `About` varchar(5000) DEFAULT NULL,
  `Heademail` varchar(50) DEFAULT NULL,
  `HospAddrs` varchar(50) DEFAULT NULL,
  `HospCat` varchar(50) DEFAULT NULL,
  `HospHead` varchar(50) DEFAULT NULL,
  `HospLicNum` varchar(50) DEFAULT NULL,
  `HospName` varchar(100) DEFAULT NULL,
  `HospOwn` varchar(50) DEFAULT NULL,
  `HospPhNum` varchar(50) DEFAULT NULL,
  `HospTel` varchar(50) DEFAULT NULL,
  `YOE` varchar(50) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `EmpName` varchar(50) DEFAULT NULL,
  `Designation` varchar(50) DEFAULT NULL,
  `Empemail` varchar(50) DEFAULT NULL,
  `EmpId` varchar(50) DEFAULT NULL,
  `EmpPhn` varchar(50) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'','','','','','','','avafoundation','','','','12-11-1999','','admin','admin','','','',''),(2,'9876543210','t','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1002.jpg','','','','','','Hospital','aproved'),(3,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1003.jpg','','','','','','Hospital','aproved'),(4,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1004.jpg','','','','','','Hospital','blocked'),(5,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1005.jpg','','','','','','Hospital','aproved'),(6,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1006.jpg','','','','','','Hospital','pending'),(7,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1007.jpg','','','','','','Hospital','pending'),(8,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1008.jpg','','','','','','Hospital','pending'),(9,'9876543210','te@e.com','t','Level 1(A)','t','t','t','Government','9876543210','9876543210','2020-03-12','./assets/Uploads/1009.jpg','','','','','','Hospital','pending'),(10,'9876543210','est@12.com','sa','Level 1(B)','sa','ds','sa','Government','9876543210','9876543210','2020-02-29','./assets/Uploads/1010.jpg','','','','','','Hospital','pending'),(11,'987654123','aq@re.com','p','Level 1(A)','aa','ds','a','Government','987654123','987654123','2020-02-28','./assets/Uploads/1011.jpg','','','','','','Hospital','pending'),(12,'9876543210','sdsds@sd.com','dsds','Level 1(B)','dsds','dsds','dsds','Government','9876543210','9876543210','2020-02-27','./assets/Uploads/1012.jpg','','','','','','Hospital','pending'),(13,'9632587410','dsds@test.com','dsds','Level 1(A)','dsds','dsds','ds','Private','9632587410','9632587410','2020-03-06','./assets/Uploads/1013.jpg','','','','','','Hospital','pending'),(14,'9876543210','dd@d.com','d','Level 1(A)','d','dsds','d','Government','9876543210','9876543210','2020-03-08','./assets/Uploads/1014.jpg','','','','','','Hospital','pending'),(15,'','','','','','','','','','','','','fd','fd','test@testt.com','987654','9876543210','Employee','aproved');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-04 16:16:53

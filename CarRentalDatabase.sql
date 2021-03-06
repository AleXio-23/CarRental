USE [master]
GO
/****** Object:  Database [CarRental]    Script Date: 12.12.2021 06:15:49 ******/
CREATE DATABASE [CarRental]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CarRental', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CarRental.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CarRental_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CarRental_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CarRental] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CarRental].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CarRental] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CarRental] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CarRental] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CarRental] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CarRental] SET ARITHABORT OFF 
GO
ALTER DATABASE [CarRental] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CarRental] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CarRental] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CarRental] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CarRental] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CarRental] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CarRental] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CarRental] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CarRental] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CarRental] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CarRental] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CarRental] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CarRental] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CarRental] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CarRental] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CarRental] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CarRental] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CarRental] SET RECOVERY FULL 
GO
ALTER DATABASE [CarRental] SET  MULTI_USER 
GO
ALTER DATABASE [CarRental] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CarRental] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CarRental] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CarRental] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CarRental] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CarRental] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'CarRental', N'ON'
GO
ALTER DATABASE [CarRental] SET QUERY_STORE = OFF
GO
USE [CarRental]
GO
/****** Object:  Schema [car]    Script Date: 12.12.2021 06:15:49 ******/
CREATE SCHEMA [car]
GO
/****** Object:  Schema [dictionary]    Script Date: 12.12.2021 06:15:49 ******/
CREATE SCHEMA [dictionary]
GO
/****** Object:  Schema [user]    Script Date: 12.12.2021 06:15:49 ******/
CREATE SCHEMA [user]
GO
/****** Object:  Table [car].[Car]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [car].[Car](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ManufacturerId] [int] NOT NULL,
	[CarModelId] [int] NOT NULL,
	[CarCategoryId] [int] NOT NULL,
	[ReleaseYear] [int] NULL,
	[Price] [decimal](18, 0) NOT NULL,
	[PriceTypeId] [int] NOT NULL,
	[PriceCourseId] [int] NOT NULL,
	[EngineCapacity] [decimal](18, 0) NOT NULL,
	[TransmisionId] [int] NOT NULL,
	[FuelTypeId] [int] NOT NULL,
	[WheelTypeId] [int] NOT NULL,
	[LocationCountryId] [int] NOT NULL,
	[LocationCityId] [int] NOT NULL,
	[VinNum] [varchar](1) NULL,
	[CarRegisterNumber] [varchar](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [car].[CarOwnership]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [car].[CarOwnership](
	[UserId] [int] NOT NULL,
	[CarId] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [car].[CarRentalHistory]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [car].[CarRentalHistory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LandLordId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[RentDateFrom] [datetime] NOT NULL,
	[RentDateTo] [datetime] NOT NULL,
	[CarRentalStatusId] [int] NOT NULL,
	[CarId] [int] NOT NULL,
	[Comment] [varchar](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [car].[CurrentCarRentalStatus]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [car].[CurrentCarRentalStatus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LandLordId] [int] NULL,
	[CustomerId] [int] NULL,
	[RentDateFrom] [datetime] NULL,
	[RentDateTo] [datetime] NULL,
	[CarRentalStatusId] [int] NULL,
	[CarId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[CarCategory]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[CarCategory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CarCategoryName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[CarModel]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[CarModel](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[ManufacturerId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[CarRentalStatus]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[CarRentalStatus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[City]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[City](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [nvarchar](255) NOT NULL,
	[CountryId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[Country]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[Country](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[FuelType]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[FuelType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FuelTypeName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[Manufacturer]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[Manufacturer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ManufacturerName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[PriceCourse]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[PriceCourse](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PriceCourseName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[PriceType]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[PriceType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PriceTypeName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[Roles]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[Roles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [varchar](1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[Transmision]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[Transmision](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TransmisionName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dictionary].[WheelType]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dictionary].[WheelType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[WheelTypeName] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [user].[User]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [user].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](255) NULL,
	[Mail] [varchar](255) NOT NULL,
	[Password] [varchar](255) NOT NULL,
	[IsActive] [bit] NULL,
	[IsBanned] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [user].[UserProfile]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [user].[UserProfile](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Firstname] [nvarchar](255) NULL,
	[Lastname] [nvarchar](255) NULL,
	[BirthDate] [date] NULL,
	[PersonalNumber] [varchar](11) NULL,
	[Phone1] [varchar](1) NULL,
	[Phone2] [varchar](1) NULL,
	[ProfileImage] [varchar](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [user].[UserRoles]    Script Date: 12.12.2021 06:15:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [user].[UserRoles](
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [user].[User] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [user].[User] ADD  DEFAULT ((0)) FOR [IsBanned]
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([CarCategoryId])
REFERENCES [dictionary].[CarCategory] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([CarModelId])
REFERENCES [dictionary].[CarModel] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([FuelTypeId])
REFERENCES [dictionary].[FuelType] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([LocationCityId])
REFERENCES [dictionary].[City] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([LocationCountryId])
REFERENCES [dictionary].[Country] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([ManufacturerId])
REFERENCES [dictionary].[Manufacturer] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([PriceCourseId])
REFERENCES [dictionary].[PriceCourse] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([PriceTypeId])
REFERENCES [dictionary].[PriceType] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([TransmisionId])
REFERENCES [dictionary].[Transmision] ([Id])
GO
ALTER TABLE [car].[Car]  WITH CHECK ADD FOREIGN KEY([WheelTypeId])
REFERENCES [dictionary].[WheelType] ([Id])
GO
ALTER TABLE [car].[CarOwnership]  WITH CHECK ADD FOREIGN KEY([CarId])
REFERENCES [car].[Car] ([Id])
GO
ALTER TABLE [car].[CarOwnership]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [user].[User] ([Id])
GO
ALTER TABLE [car].[CarRentalHistory]  WITH CHECK ADD FOREIGN KEY([CarId])
REFERENCES [car].[Car] ([Id])
GO
ALTER TABLE [car].[CarRentalHistory]  WITH CHECK ADD FOREIGN KEY([CarRentalStatusId])
REFERENCES [dictionary].[CarRentalStatus] ([Id])
GO
ALTER TABLE [car].[CarRentalHistory]  WITH CHECK ADD FOREIGN KEY([CustomerId])
REFERENCES [user].[User] ([Id])
GO
ALTER TABLE [car].[CarRentalHistory]  WITH CHECK ADD FOREIGN KEY([LandLordId])
REFERENCES [user].[User] ([Id])
GO
ALTER TABLE [car].[CurrentCarRentalStatus]  WITH CHECK ADD FOREIGN KEY([LandLordId])
REFERENCES [user].[User] ([Id])
GO
ALTER TABLE [car].[CurrentCarRentalStatus]  WITH CHECK ADD FOREIGN KEY([CarId])
REFERENCES [car].[Car] ([Id])
GO
ALTER TABLE [car].[CurrentCarRentalStatus]  WITH CHECK ADD FOREIGN KEY([CarRentalStatusId])
REFERENCES [dictionary].[CarRentalStatus] ([Id])
GO
ALTER TABLE [car].[CurrentCarRentalStatus]  WITH CHECK ADD FOREIGN KEY([CustomerId])
REFERENCES [user].[User] ([Id])
GO
ALTER TABLE [dictionary].[CarModel]  WITH CHECK ADD FOREIGN KEY([ManufacturerId])
REFERENCES [dictionary].[Manufacturer] ([Id])
GO
ALTER TABLE [dictionary].[City]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dictionary].[Country] ([Id])
GO
ALTER TABLE [user].[UserProfile]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [user].[User] ([Id])
GO
ALTER TABLE [user].[UserRoles]  WITH CHECK ADD FOREIGN KEY([RoleId])
REFERENCES [dictionary].[Roles] ([Id])
GO
ALTER TABLE [user].[UserRoles]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [user].[User] ([Id])
GO
USE [master]
GO
ALTER DATABASE [CarRental] SET  READ_WRITE 
GO

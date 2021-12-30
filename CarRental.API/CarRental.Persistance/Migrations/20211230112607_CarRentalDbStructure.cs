using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRental.Persistance.Migrations
{
    public partial class CarRentalDbStructure : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "car");

            migrationBuilder.EnsureSchema(
                name: "dictionary");

            migrationBuilder.EnsureSchema(
                name: "user");

            migrationBuilder.CreateTable(
                name: "CarCategory",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CarModel",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    ManufacturerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CarRentalStatus",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarRentalStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Country",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FuelType",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FuelTypeName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FuelType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Manufacturer",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ManufacturerName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manufacturer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PriceCourse",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PriceCourseName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PriceCourse", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PriceType",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PriceTypeName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PriceType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Transmision",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TransmisionName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transmision", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserProfile",
                schema: "user",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Firstname = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Lastname = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    BirthDate = table.Column<DateTime>(type: "date", nullable: true),
                    PersonalNumber = table.Column<string>(type: "varchar(11)", unicode: false, maxLength: 11, nullable: true),
                    Phone1 = table.Column<string>(type: "varchar(1)", unicode: false, maxLength: 1, nullable: true),
                    Phone2 = table.Column<string>(type: "varchar(1)", unicode: false, maxLength: 1, nullable: true),
                    ProfileImage = table.Column<string>(type: "varchar(1)", unicode: false, maxLength: 1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK__UserProfi__UserI__18EBB532",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WheelType",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WheelTypeName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WheelType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "City",
                schema: "dictionary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    CountryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.Id);
                    table.ForeignKey(
                        name: "FK__City__CountryId__245D67DE",
                        column: x => x.CountryId,
                        principalSchema: "dictionary",
                        principalTable: "Country",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Car",
                schema: "car",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ManufacturerId = table.Column<int>(type: "int", nullable: false),
                    CarModelId = table.Column<int>(type: "int", nullable: false),
                    CarCategoryId = table.Column<int>(type: "int", nullable: false),
                    ReleaseYear = table.Column<int>(type: "int", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,0)", nullable: false),
                    PriceTypeId = table.Column<int>(type: "int", nullable: false),
                    PriceCourseId = table.Column<int>(type: "int", nullable: false),
                    EngineCapacity = table.Column<decimal>(type: "decimal(18,0)", nullable: false),
                    TransmisionId = table.Column<int>(type: "int", nullable: false),
                    FuelTypeId = table.Column<int>(type: "int", nullable: false),
                    WheelTypeId = table.Column<int>(type: "int", nullable: false),
                    LocationCountryId = table.Column<int>(type: "int", nullable: false),
                    LocationCityId = table.Column<int>(type: "int", nullable: false),
                    VinNum = table.Column<string>(type: "varchar(1)", unicode: false, maxLength: 1, nullable: true),
                    CarRegisterNumber = table.Column<string>(type: "varchar(1)", unicode: false, maxLength: 1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.Id);
                    table.ForeignKey(
                        name: "FK__Car__CarCategory__498EEC8D",
                        column: x => x.CarCategoryId,
                        principalSchema: "dictionary",
                        principalTable: "CarCategory",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__CarModelId__489AC854",
                        column: x => x.CarModelId,
                        principalSchema: "dictionary",
                        principalTable: "CarModel",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__FuelTypeId__4D5F7D71",
                        column: x => x.FuelTypeId,
                        principalSchema: "dictionary",
                        principalTable: "FuelType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__LocationCit__503BEA1C",
                        column: x => x.LocationCityId,
                        principalSchema: "dictionary",
                        principalTable: "City",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__LocationCou__4F47C5E3",
                        column: x => x.LocationCountryId,
                        principalSchema: "dictionary",
                        principalTable: "Country",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__Manufacture__47A6A41B",
                        column: x => x.ManufacturerId,
                        principalSchema: "dictionary",
                        principalTable: "Manufacturer",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__PriceCourse__4B7734FF",
                        column: x => x.PriceCourseId,
                        principalSchema: "dictionary",
                        principalTable: "PriceCourse",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__PriceTypeId__4A8310C6",
                        column: x => x.PriceTypeId,
                        principalSchema: "dictionary",
                        principalTable: "PriceType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__Transmision__4C6B5938",
                        column: x => x.TransmisionId,
                        principalSchema: "dictionary",
                        principalTable: "Transmision",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__Car__WheelTypeId__4E53A1AA",
                        column: x => x.WheelTypeId,
                        principalSchema: "dictionary",
                        principalTable: "WheelType",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CarOwnerShip",
                schema: "car",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    CarId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarOwnerShip", x => x.Id);
                    table.ForeignKey(
                        name: "FK__CarOwnerS__CarId__5E8A0973",
                        column: x => x.CarId,
                        principalSchema: "car",
                        principalTable: "Car",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CarOwnerS__UserI__5D95E53A",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CarRentalHistory",
                schema: "car",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LandLordId = table.Column<int>(type: "int", nullable: false),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    RentDateFrom = table.Column<DateTime>(type: "datetime", nullable: false),
                    RentDateTo = table.Column<DateTime>(type: "datetime", nullable: false),
                    CarRentalStatusId = table.Column<int>(type: "int", nullable: false),
                    CarId = table.Column<int>(type: "int", nullable: false),
                    Comment = table.Column<string>(type: "varchar(1)", unicode: false, maxLength: 1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarRentalHistory", x => x.Id);
                    table.ForeignKey(
                        name: "FK__CarRental__CarId__55F4C372",
                        column: x => x.CarId,
                        principalSchema: "car",
                        principalTable: "Car",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CarRental__CarRe__55009F39",
                        column: x => x.CarRentalStatusId,
                        principalSchema: "dictionary",
                        principalTable: "CarRentalStatus",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CarRental__Custo__540C7B00",
                        column: x => x.CustomerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CarRental__LandL__531856C7",
                        column: x => x.LandLordId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CurrentCarRentalStatus",
                schema: "car",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LandLordId = table.Column<int>(type: "int", nullable: true),
                    CustomerId = table.Column<int>(type: "int", nullable: true),
                    RentDateFrom = table.Column<DateTime>(type: "datetime", nullable: true),
                    RentDateTo = table.Column<DateTime>(type: "datetime", nullable: true),
                    CarRentalStatusId = table.Column<int>(type: "int", nullable: true),
                    CarId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrentCarRentalStatus", x => x.Id);
                    table.ForeignKey(
                        name: "FK__CurrentCa__CarId__5BAD9CC8",
                        column: x => x.CarId,
                        principalSchema: "car",
                        principalTable: "Car",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CurrentCa__CarRe__5AB9788F",
                        column: x => x.CarRentalStatusId,
                        principalSchema: "dictionary",
                        principalTable: "CarRentalStatus",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CurrentCa__Custo__59C55456",
                        column: x => x.CustomerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK__CurrentCa__LandL__58D1301D",
                        column: x => x.LandLordId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarCategoryId",
                schema: "car",
                table: "Car",
                column: "CarCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarModelId",
                schema: "car",
                table: "Car",
                column: "CarModelId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_FuelTypeId",
                schema: "car",
                table: "Car",
                column: "FuelTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_LocationCityId",
                schema: "car",
                table: "Car",
                column: "LocationCityId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_LocationCountryId",
                schema: "car",
                table: "Car",
                column: "LocationCountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_ManufacturerId",
                schema: "car",
                table: "Car",
                column: "ManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_PriceCourseId",
                schema: "car",
                table: "Car",
                column: "PriceCourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_PriceTypeId",
                schema: "car",
                table: "Car",
                column: "PriceTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_TransmisionId",
                schema: "car",
                table: "Car",
                column: "TransmisionId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_WheelTypeId",
                schema: "car",
                table: "Car",
                column: "WheelTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CarOwnerShip_CarId",
                schema: "car",
                table: "CarOwnerShip",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_CarOwnerShip_UserId",
                schema: "car",
                table: "CarOwnerShip",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CarRentalHistory_CarId",
                schema: "car",
                table: "CarRentalHistory",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_CarRentalHistory_CarRentalStatusId",
                schema: "car",
                table: "CarRentalHistory",
                column: "CarRentalStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_CarRentalHistory_CustomerId",
                schema: "car",
                table: "CarRentalHistory",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CarRentalHistory_LandLordId",
                schema: "car",
                table: "CarRentalHistory",
                column: "LandLordId");

            migrationBuilder.CreateIndex(
                name: "IX_City_CountryId",
                schema: "dictionary",
                table: "City",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_CurrentCarRentalStatus_CarId",
                schema: "car",
                table: "CurrentCarRentalStatus",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_CurrentCarRentalStatus_CarRentalStatusId",
                schema: "car",
                table: "CurrentCarRentalStatus",
                column: "CarRentalStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_CurrentCarRentalStatus_CustomerId",
                schema: "car",
                table: "CurrentCarRentalStatus",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CurrentCarRentalStatus_LandLordId",
                schema: "car",
                table: "CurrentCarRentalStatus",
                column: "LandLordId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_UserId",
                schema: "user",
                table: "UserProfile",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarOwnerShip",
                schema: "car");

            migrationBuilder.DropTable(
                name: "CarRentalHistory",
                schema: "car");

            migrationBuilder.DropTable(
                name: "CurrentCarRentalStatus",
                schema: "car");

            migrationBuilder.DropTable(
                name: "UserProfile",
                schema: "user");

            migrationBuilder.DropTable(
                name: "Car",
                schema: "car");

            migrationBuilder.DropTable(
                name: "CarRentalStatus",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "CarCategory",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "CarModel",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "FuelType",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "City",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "Manufacturer",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "PriceCourse",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "PriceType",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "Transmision",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "WheelType",
                schema: "dictionary");

            migrationBuilder.DropTable(
                name: "Country",
                schema: "dictionary");
        }
    }
}

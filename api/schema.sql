DROP TABLE IF EXISTS Guests;
DROP TABLE IF EXISTS Bussinesses;
DROP TABLE IF EXISTS Branches;

CREATE TABLE Guests (
    GuestId INTEGER   NOT NULL
                          UNIQUE
                          PRIMARY KEY AUTOINCREMENT,
    Name        CHAR
(30) NOT NULL,
    PhoneNumber CHAR
(20) NOT NULL
);

CREATE TABLE Bussinesses (
    BussinessId INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    BussinessName CHAR
(30)    NOT NULL,
    Email         CHAR
(20)    NOT NULL,
    BusinessType  INT          NOT NULL,
    Password      VARCHAR
(50) UNIQUE
                               NOT NULL
);


CREATE TABLE Branches
(
	BussinessId INTEGER REFERENCES Bussinesses (BussinessId),
	Location CHAR (30) NOT NULL
);

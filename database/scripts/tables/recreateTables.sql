use DogWalking

drop table BookingTimeslots
drop table Bookings
drop table Timeslots
drop table SystemSettings
drop table Dogs
drop table Breeds

CREATE TABLE [dbo].[Bookings](
	[BookingId] [int] IDENTITY(1,1) NOT NULL,
	[Location] [int] NOT NULL,
 CONSTRAINT [PK_Bookings] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD  CONSTRAINT [FK_Bookings_Bookings] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Bookings] ([BookingId])
GO

ALTER TABLE [dbo].[Bookings] CHECK CONSTRAINT [FK_Bookings_Bookings]
GO

CREATE TABLE [dbo].[Timeslots](
	[TimeslotId] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NULL,
	[StartTime] [time](7) NULL,
	[EndTime] [time](7) NULL,
	[OverrideStatus] [int] NULL,
 CONSTRAINT [PK_Timeslots] UNIQUE NONCLUSTERED 
(
	[TimeslotId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


CREATE TABLE [dbo].[BookingTimeslots](
	[BookingId] [int] NOT NULL,
	[TimeslotId] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[BookingTimeslots]  WITH CHECK ADD  CONSTRAINT [FK_BookingTimeslots_Bookings] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Bookings] ([BookingId])
GO

ALTER TABLE [dbo].[BookingTimeslots] CHECK CONSTRAINT [FK_BookingTimeslots_Bookings]
GO

ALTER TABLE [dbo].[BookingTimeslots]  WITH CHECK ADD  CONSTRAINT [FK_BookingTimeslots_Timeslots] FOREIGN KEY([TimeslotId])
REFERENCES [dbo].[Timeslots] ([TimeslotId])
GO

ALTER TABLE [dbo].[BookingTimeslots] CHECK CONSTRAINT [FK_BookingTimeslots_Timeslots]
GO

CREATE TABLE [dbo].[SystemSettings](
	[SystemSettingsId] [int] NULL,
	[Value] [nchar](100) NULL
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Breeds](
	[BreedId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
 CONSTRAINT [PK_Breeds] PRIMARY KEY CLUSTERED 
(
	[BreedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [IX_Breeds] UNIQUE NONCLUSTERED 
(
	[BreedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Dogs](
	[DogId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nchar](10) NOT NULL,
	[BreedId] [int] NOT NULL,
	[Size] [int] NOT NULL,
	[OffLeadLevel] [int] NOT NULL,
	[Comments] [varchar](max) NULL,
 CONSTRAINT [PK_Dogs] PRIMARY KEY CLUSTERED 
(
	[DogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Dogs]  WITH CHECK ADD  CONSTRAINT [FK_Dogs_Breeds] FOREIGN KEY([BreedId])
REFERENCES [dbo].[Breeds] ([BreedId])
GO

ALTER TABLE [dbo].[Dogs] CHECK CONSTRAINT [FK_Dogs_Breeds]
GO



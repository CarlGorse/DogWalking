use DogWalking

drop table BookingTimeslots
drop table Bookings
drop table Timeslots
drop table SystemSettings

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


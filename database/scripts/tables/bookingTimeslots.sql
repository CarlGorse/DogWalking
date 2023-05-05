USE [DogWalking]
GO

/****** Object:  Table [dbo].[BookingTimeslots]    Script Date: 25/04/2023 22:14:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
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



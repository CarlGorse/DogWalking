USE [DogWalking]
GO

/****** Object:  Table [dbo].[BookingTimeslots]    Script Date: 24/04/2023 23:40:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BookingTimeslots](
	[BookingTimeslotId] [int] IDENTITY(1,1) NOT NULL,
	[BookingId] [int] NOT NULL,
	[TimeslotId] [int] NOT NULL,
 CONSTRAINT [PK_BookingTimeslots] PRIMARY KEY CLUSTERED 
(
	[BookingTimeslotId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
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



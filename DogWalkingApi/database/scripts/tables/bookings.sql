DROP TABLE IF EXISTS [dbo].[Bookings]
GO

CREATE TABLE [dbo].[Bookings](
	[BookingId] [int] IDENTITY(1,1) NOT NULL,
	[Location] int NOT NULL
) ON [PRIMARY]
GO
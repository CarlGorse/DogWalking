
drop table if exists [dbo].[BookingTimeslots]

CREATE TABLE [dbo].[BookingTimeslots](
	[BookingTimeslotId] [int] IDENTITY(1,1) NOT NULL,
	[BookingId] [int] NOT NULL,
	[TimeslotId] [int] NOT NULL,
) ON [PRIMARY]
GO
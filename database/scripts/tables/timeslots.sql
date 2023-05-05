USE [DogWalking]
GO

/****** Object:  Table [dbo].[Timeslots]    Script Date: 05/05/2023 08:57:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
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



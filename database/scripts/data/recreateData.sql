use DogWalking

declare @date datetime = '2023-04-23'

delete from BookingTimeslots
delete from Bookings
delete Timeslots

insert Bookings ([Location])
select 1
union select 2

insert Timeslots ([Date], StartTime, EndTime, OverrideStatus)
select @date, '08:00:00', '08:15:00', null
union select @date, '08:15:00', '08:30:00', 1
union select @date, '08:30:00', '08:45:00', 1
union select @date, '08:45:00', '09:00:00', null
union select @date, '09:00:00', '09:15:00', null
union select @date, '09:15:00', '09:30:00', null
union select @date, '09:30:00', '09:45:00', null
union select @date, '09:45:00', '10:00:00', null
union select @date, '10:00:00', '10:15:00', null
union select @date, '10:15:00', '10:30:00', null
union select @date, '10:30:00', '10:45:00', null
union select @date, '10:45:00', '11:00:00', null
union select @date, '11:00:00', '11:15:00', null
union select @date, '11:15:00', '11:30:00', null
union select @date, '11:30:00', '11:45:00', null
union select @date, '11:45:00', '12:00:00', null
union select @date, '12:00:00', '12:15:00', null
union select @date, '12:15:00', '12:30:00', null
union select @date, '12:30:00', '12:45:00', null
union select @date, '12:45:00', '13:00:00', null
union select @date, '13:00:00', '13:15:00', null
union select @date, '13:15:00', '13:30:00', null
union select @date, '13:30:00', '13:45:00', null
union select @date, '13:45:00', '14:00:00', null
union select @date, '14:00:00', '14:15:00', null
union select @date, '14:15:00', '14:30:00', null
union select @date, '14:30:00', '14:45:00', null
union select @date, '14:45:00', '15:00:00', null
union select @date, '15:00:00', '15:15:00', null
union select @date, '15:15:00', '15:30:00', null
union select @date, '15:30:00', '15:45:00', null
union select @date, '15:45:00', '16:00:00', null
union select @date, '16:00:00', '16:15:00', null
union select @date, '16:15:00', '16:30:00', null
union select @date, '16:30:00', '16:45:00', null
union select @date, '16:45:00', '17:00:00', null
union select @date, '17:00:00', '17:15:00', null
union select @date, '17:15:00', '17:30:00', null
union select @date, '17:30:00', '17:45:00', null
union select @date, '17:45:00', '18:00:00', null

insert BookingTimeslots (BookingId, TimeslotId)
select BookingId, TimeslotId
from Timeslots, (select top 1 BookingId from (select top 1 BookingId from Bookings Bookings order by BookingId) BookingIds) BookingIds
where StartTime = '08:00:00'

insert BookingTImeslots (BookingId, TimeslotId)
select BookingId, TimeslotId
from Timeslots, (select top 1 BookingId from (select top 2 BookingId from Bookings Bookings order by BookingId desc) BookingIds) BookingIds
where StartTime = '08:15:00'

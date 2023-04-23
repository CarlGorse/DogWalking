delete from BookingTimeslots

insert BookingTImeslots (BookingId, TimeslotId)
select BookingId, TimeslotId
from Timeslots, (select top 1 BookingId from (select top 1 BookingId from Bookings Bookings order by BookingId) BookingIds) BookingIds
where StartTime = '08:00:00'

insert BookingTImeslots (BookingId, TimeslotId)
select BookingId, TimeslotId
from Timeslots, (select top 1 BookingId from (select top 2 BookingId from Bookings Bookings order by BookingId desc) BookingIds) BookingIds
where StartTime = '08:15:00'

select * from BookingTimeslots
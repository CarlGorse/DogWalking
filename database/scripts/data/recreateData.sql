use DogWalking

declare @date datetime = '2023-04-23'

delete from BookingTimeslots
delete from Bookings
delete Timeslots
delete SystemSettings
delete Breeds
delete Dogs

insert Bookings ([Location])
select 1
union select 2

insert Timeslots ([Date], StartTime, EndTime, OverrideStatus)
select @date, '08:00:00', '08:15:00', null
union select @date, '08:15:00', '08:30:00', 1
union select @date, '08:30:00', '08:45:00', 1

insert BookingTimeslots (BookingId, TimeslotId)
select BookingId, TimeslotId
from Timeslots, (select top 1 BookingId from (select top 1 BookingId from Bookings Bookings order by BookingId) BookingIds) BookingIds
where StartTime = '08:00:00'

insert BookingTImeslots (BookingId, TimeslotId)
select BookingId, TimeslotId
from Timeslots, (select top 1 BookingId from (select top 2 BookingId from Bookings Bookings order by BookingId desc) BookingIds) BookingIds
where StartTime = '08:15:00'

insert SystemSettings (SystemSettingsId, Value)
values (1, 1)

insert Breeds([Name])
select 'Cockapoo'
union select 'King Charles'
union select 'Labrador'
union select 'Spaniel'

insert Dogs([Name], BreedId, [Size], OffLeadLevel)
select 'Alfie', (select BreedId from Breeds where [Name] = 'Cockapoo'), 3, 3
union select 'River', (select BreedId from Breeds where [Name] = 'King Charles'), 2, 1
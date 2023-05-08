using DogWalkingApi.Dto;
using Microsoft.Extensions.Options;
using Moq;
using NUnit.Framework;

namespace UnitTests.ServicesTests.TimeslotServiceTests
{

    [TestFixture]
    internal class TimeslotServiceTests
    {

        private DogWalkingDbContext _DbContext = null!;
        private ITimeslotService _TimeslotService = null!;
        private Timeslot _Timeslot = null!;
        private DateOnly _Date;

        [SetUp]
        public void SetUp()
        {
            _Date = DateOnly.FromDateTime(DateTime.Now);

            _DbContext = TestResources.CreateDbContext();
            _DbContext.Database.EnsureDeleted();

            _TimeslotService = new TimeslotService(
                new TimeslotRepository(_DbContext),
                new BookingTimeslotRepository(_DbContext),
                Options.Create(new TimeslotOptions()));

            _Timeslot = new Timeslot { Date = _Date };
            _DbContext.Timeslots.Add(_Timeslot);

            _DbContext.SaveChanges();
        }

        [Test]
        public void NoTimeslotBookingsExist_ReturnsNoBookings()
        {

            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            _DbContext.SaveChanges();

            var timeslot = _TimeslotService.Get(_Date).Single();

            Assert.IsNull(_Timeslot.BookingTimeslot);
        }

        [Test]
        public void TimeslotBookingsExistForOtherTimeslots_ReturnsNoBookings()
        {
            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            var bookingTimeslot = new BookingTimeslot { BookingId = booking.BookingId, TimeslotId = _Timeslot.TimeslotId + 1 };
            _DbContext.BookingTimeslots.Add(bookingTimeslot);

            _DbContext.SaveChanges();

            Assert.IsNull(_Timeslot.BookingTimeslot);
        }

        [Test]
        public void TimeslotHasMatchedBookingId_ReturnsBooking()
        {
            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            var bookingTimeslot = new BookingTimeslot { BookingId = booking.BookingId, TimeslotId = _Timeslot.TimeslotId };
            _DbContext.BookingTimeslots.Add(bookingTimeslot);

            _DbContext.SaveChanges();

            Assert.IsNotNull(_Timeslot.BookingTimeslot);
        }

        [Test]
        public void OptionsHasThreeTimeslots_NoDatabaseTimeslots_ReturnsThreeTimeslotsWithExpectedTimes()
        {
            var mockTimeslotRepository = new Mock<ITimeslotRepository>();
            var mockBookingTimeslotRepoisoty = new Mock<IBookingTimeslotRepository>();
            var timeslotOptions = Options.Create(new TimeslotOptions { StartTime = "08:00", EndTime = "08:45" });
            var timeslotService = new TimeslotService(mockTimeslotRepository.Object, mockBookingTimeslotRepoisoty.Object, timeslotOptions);
            var timeslots = timeslotService.Get(DateOnly.FromDateTime(DateTime.Now)).OrderBy(x => x.StartTime);

            Assert.AreEqual(timeslots.Count(), 3);
            Assert.IsNotNull(timeslots.SingleOrDefault(y => y.StartTime == new TimeOnly(8, 0) && y.EndTime == new TimeOnly(8, 15)));
            Assert.IsNotNull(timeslots.SingleOrDefault(y => y.StartTime == new TimeOnly(8, 15) && y.EndTime == new TimeOnly(8, 30)));
            Assert.IsNotNull(timeslots.SingleOrDefault(y => y.StartTime == new TimeOnly(8, 30) && y.EndTime == new TimeOnly(8, 45)));
        }

        [Test]
        public void OptionsHasSingleTimeslot_DatabaseHasSameTimelot_ReturnsSingleTimeslotWithExpectedTimes()
        {
            var mockTimeslotRepository = new Mock<ITimeslotRepository>();
            var mockBookingTimeslotRepoisoty = new Mock<IBookingTimeslotRepository>();

            mockTimeslotRepository.Setup(x => x.GetByDate(It.IsAny<DateOnly>())).Returns(new List<Timeslot> { new Timeslot { StartTime = new TimeOnly(8, 0), EndTime = new TimeOnly(8, 15) } });

            var timeslotOptions = Options.Create(new TimeslotOptions { StartTime = "08:00", EndTime = "08:15" });
            var timeslotService = new TimeslotService(mockTimeslotRepository.Object, mockBookingTimeslotRepoisoty.Object, timeslotOptions);
            var timeslots = timeslotService.Get(DateOnly.FromDateTime(DateTime.Now)).OrderBy(x => x.StartTime);

            Assert.AreEqual(timeslots.Count(), 1);
            Assert.IsNotNull(timeslots.SingleOrDefault(y => y.StartTime == new TimeOnly(8, 0) && y.EndTime == new TimeOnly(8, 15)));
        }

        [Test]
        public void OptionsHasSingleTimeslot_DatabaseHasDifferentTimelot_ReturnsTwoTimeslotsWithExpectedTimes()
        {
            var mockTimeslotRepository = new Mock<ITimeslotRepository>();
            var mockBookingTimeslotRepoisoty = new Mock<IBookingTimeslotRepository>();

            mockTimeslotRepository.Setup(x => x.GetByDate(It.IsAny<DateOnly>())).Returns(new List<Timeslot> { new Timeslot { StartTime = new TimeOnly(8, 0), EndTime = new TimeOnly(8, 15) } });

            var timeslotOptions = Options.Create(new TimeslotOptions { StartTime = "08:15", EndTime = "08:30" });
            var timeslotService = new TimeslotService(mockTimeslotRepository.Object, mockBookingTimeslotRepoisoty.Object, timeslotOptions);
            var timeslots = timeslotService.Get(DateOnly.FromDateTime(DateTime.Now)).OrderBy(x => x.StartTime);

            Assert.AreEqual(timeslots.Count(), 2);
            Assert.IsNotNull(timeslots.SingleOrDefault(y => y.StartTime == new TimeOnly(8, 0) && y.EndTime == new TimeOnly(8, 15)));
            Assert.IsNotNull(timeslots.SingleOrDefault(y => y.StartTime == new TimeOnly(8, 15) && y.EndTime == new TimeOnly(8, 30)));
        }
    }
}

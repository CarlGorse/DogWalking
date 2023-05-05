using NUnit.Framework;

namespace UnitTests.TimeslotServiceTests
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

            _TimeslotService = new TimeslotService(new TimeslotRepository(_DbContext), new BookingTimeslotRepository(_DbContext));

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
    }
}

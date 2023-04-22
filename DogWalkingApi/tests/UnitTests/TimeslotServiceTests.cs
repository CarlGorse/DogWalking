using NUnit.Framework;

namespace UnitTests
{

    [TestFixture]
    internal class TimeslotServiceTests
    {

        private TestDogWalkingDbContext _DbContext = null!;
        private ITimeslotService _TimeslotService = null!;

        [SetUp]
        public void SetUp()
        {
            _DbContext = TestResources.CreateTestDbContext();
            _DbContext.Database.EnsureDeleted();

            _TimeslotService = new TimeslotService(new TimeslotRepository(_DbContext));
        }

        [Test]
        public void TimeslotHasNoBookingId_ReturnsNoBooking()
        {

            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            var date = DateOnly.FromDateTime(DateTime.Now);
            _DbContext.Timeslots.Add(new Timeslot { Date = date, BookingId = null });

            _DbContext.SaveChanges();

            var timeslot = _TimeslotService.Get(date).Single();

            Assert.IsNull(timeslot.Booking);
        }

        [Test]
        public void TimeslotHasUnmatchedBookingId_ReturnsNoBooking()
        {

            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            var date = DateOnly.FromDateTime(DateTime.Now);
            _DbContext.Timeslots.Add(new Timeslot { Date = date, BookingId = booking.BookingId + 1 });

            _DbContext.SaveChanges();

            var timeslot = _TimeslotService.Get(date).Single();

            Assert.IsNull(timeslot.Booking);
        }

        [Test]
        public void TimeslotHasMatchedBookingId_ReturnsBooking()
        {

            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            var date = DateOnly.FromDateTime(DateTime.Now);
            _DbContext.Timeslots.Add(new Timeslot { Date = date, BookingId = booking.BookingId });

            _DbContext.SaveChanges();

            var timeslot = _TimeslotService.Get(date).Single();

            Assert.AreEqual(timeslot.Booking, booking);
        }
    }
}

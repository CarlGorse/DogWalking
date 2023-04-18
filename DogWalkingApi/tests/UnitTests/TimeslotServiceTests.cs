using NUnit.Framework;

namespace DogWalkingApiTests
{

    [TestFixture]
    internal class TimeslotServiceTests
    {

        private IDogWalkingDbContext _DbContext = null!;
        private ITimeslotService _TimeslotService = null!;

        [SetUp]
        public void SetUp()
        {
            _DbContext = TestResources.CreateDbContext();
            _TimeslotService = new TimeslotService(new TimeslotRepository(_DbContext));
        }

        [Test]
        public void TimeslothasBooking_ReturnsBooking()
        {

            var booking = new Booking();
            _DbContext.Bookings.Add(booking);

            var date = DateOnly.FromDateTime(DateTime.Now);
            _DbContext.Timeslots.Add(new Timeslot { Date = date, Booking = booking });

            _DbContext.SaveChanges();

            var timeslot = _TimeslotService.Get(date).Single();

            Assert.AreEqual(timeslot.Booking, booking);
        }
    }
}

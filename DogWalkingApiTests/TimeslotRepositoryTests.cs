using DogWalkingApi.Repositories;
using DogWalkingApi.Services;
using DogWalkingApi.Types;
using NUnit.Framework;

namespace DogWalkingApiTests {

    [TestFixture]
    internal class TimeslotRepositoryTests {

        [Test]
        public void TimeslothasBooking_ReturnsBooking() {

            var dbContext = TestResources.CreateDbContext();

            var booking = new Booking();
            var date = DateOnly.FromDateTime(DateTime.Now);

            dbContext.Timeslots.Add(new Timeslot { Date = date, Booking = booking });
            dbContext.Bookings.Add(booking);

            dbContext.SaveChanges();

            var timeslotService = new TimeslotService(new TimeslotRepository(dbContext));

            var timeslot = timeslotService.Get(date).Single();

            Assert.AreEqual(timeslot.Booking, booking);
        }
    }
}

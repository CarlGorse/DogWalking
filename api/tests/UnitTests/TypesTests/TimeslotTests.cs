using NUnit.Framework;

namespace UnitTests.TypesTests
{
    [TestFixture]
    internal class TimeslotTests
    {
        [Test]
        public void HasDateAndStartTime_ReturnsExpectedTimeslotId()
        {
            var timeslot = new Timeslot { Date = new DateOnly(2023, 5, 8), StartTime = new TimeOnly(8, 0) };
            Assert.AreEqual(202305080800, timeslot.TimeslotId);
        }
    }
}

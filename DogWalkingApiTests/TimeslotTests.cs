using DogWalkingApi.Types;
using NUnit.Framework;

namespace DogWalkingApiTests {

    [TestFixture]
    internal class TimeslotTests {

        [Test]
        public void Duration_EndTimeMatchesStartTime_RetunsZeroMins() {
            var currentDateTime = DateTime.Now;

            var durationMins = new Timeslot {
                StartTime = TimeOnly.FromDateTime(currentDateTime),
                EndTime = TimeOnly.FromDateTime(currentDateTime),
            }.DurationMins;

            Assert.Zero(durationMins);
        }

        [Test]
        [TestCase(0)]
        [TestCase(1)]
        public void Duration_EndTimeIsAfterStartTime_RetunsExpectedDuration(int minsAfterStartTime) {

            var startTime = TimeOnly.FromDateTime(DateTime.Now);

            var durationMins = new Timeslot {
                StartTime = startTime,
                EndTime = startTime.AddMinutes(minsAfterStartTime),
            }.DurationMins;

            Assert.AreEqual(durationMins, minsAfterStartTime);
        }
    }
}

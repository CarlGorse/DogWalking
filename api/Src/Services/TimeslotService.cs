using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace DogWalkingApi.Services
{

    public class TimeslotService : ITimeslotService
    {

        private readonly IBookingTimeslotRepository _BookingTimeslotRepository;
        private readonly TimeslotOptions _TimeslotOptions;
        private readonly ITimeslotRepository _TimeslotRepository;

        public TimeslotService(
            ITimeslotRepository timeslotRepository,
            IBookingTimeslotRepository bookingTimeslotRepository,
            IOptions<TimeslotOptions> timeslotOptions)
        {
            _TimeslotRepository = timeslotRepository;
            _BookingTimeslotRepository = bookingTimeslotRepository;
            _TimeslotOptions = timeslotOptions.Value;
        }

        public IReadOnlyCollection<Timeslot> Get(DateOnly date)
        {
            var bookedTimeslots = _TimeslotRepository
                .GetByDate(date)
                .OrderBy(x => x.Date)
                .ThenBy(x => x.StartTime)
                .ToList()
                .AsReadOnly();

            var startTicks = (_TimeslotOptions.StartTimeActual.Hour * 4) + (_TimeslotOptions.StartTimeActual.Minute / 15);
            var endtTicks = (_TimeslotOptions.EndTimeActual.Hour) * 4 + (_TimeslotOptions.EndTimeActual.Minute / 15);
            var allTicks = Enumerable.Range(startTicks, endtTicks - startTicks);
            var allTimeslots = allTicks.Select(x => new Timeslot
            {
                Date = date,
                StartTime = new TimeOnly(x / 4, (x - ((x / 4) * 4)) * 15),
                EndTime = new TimeOnly((x + 1) / 4, ((x + 1) - (((x + 1) / 4) * 4)) * 15),
            });
            var allRemainingTimeslots = allTimeslots.Where(x => !bookedTimeslots.Any(y => y.StartTime == x.StartTime));

            return bookedTimeslots.Union(allRemainingTimeslots).OrderBy(x => x.StartTime).ToList().AsReadOnly();
        }

        public void BookTimeslots(
            Booking booking,
            DateOnly date,
            IReadOnlyCollection<TimeslotTimes> timeslotTimes)
        {
            var timeslotsToCreate = timeslotTimes
                .Where(x => !_TimeslotRepository.GetByDate(date).Any(y => y.StartTime == x.StartTime));

            foreach (var timeslotTime in timeslotsToCreate)
            {
                _TimeslotRepository.Create(new Timeslot { Date = date, StartTime = timeslotTime.StartTime, EndTime = timeslotTime.EndTime });
            }
            _TimeslotRepository.SaveChanges();

            var timeslots = _TimeslotRepository.Timeslots()
                .Where(x => date == x.Date && timeslotTimes.Select(x => x.StartTime).Contains(x.StartTime));

            foreach (var timeslot in timeslots)
            {
                _BookingTimeslotRepository.Add(booking, timeslot.TimeslotId);
            }
        }
    }

    public class TimeslotTimes
    {
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
